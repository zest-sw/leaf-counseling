import { WebSocketServer, WebSocket } from 'ws';
import { IncomingMessage } from 'http';
import { openai } from '../openai-client';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const clientAudioChunks = new Map<WebSocket, Buffer[]>();

async function processAudio(ws: WebSocket) {
    const audioChunks = clientAudioChunks.get(ws);
    if (!audioChunks || audioChunks.length === 0) {
        return ws.send(JSON.stringify({ type: 'error', message: 'No audio data received for processing.' }));
    }
    const audioBuffer = Buffer.concat(audioChunks);
    const tempFilePath = path.join(os.tmpdir(), `${uuidv4()}.webm`);
    try {
        await fs.promises.writeFile(tempFilePath, audioBuffer);
        const transcription = await openai.audio.transcriptions.create({
            file: fs.createReadStream(tempFilePath),
            model: 'whisper-1',
        });
        ws.send(JSON.stringify({ type: 'text', content: `You said: "${transcription.text}"` }));

        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "user", "content": transcription.text }],
        });
        const aiResponseText = chatCompletion.choices[0].message.content;
        if (!aiResponseText) throw new Error("AI did not return a response.");
        ws.send(JSON.stringify({ type: 'text', content: `AI: "${aiResponseText}"` }));

        const speechStream = await openai.audio.speech.create({
            model: "tts-1", voice: "alloy", input: aiResponseText, response_format: "mp3",
        });
        ws.send(JSON.stringify({ type: 'audio_start' }));
        if (!speechStream.body) throw new Error("Speech stream body is null.");
        for await (const chunk of speechStream.body) {
            ws.send(chunk);
        }
        ws.send(JSON.stringify({ type: 'audio_end' }));
    } catch (error) {
        console.error('Pipeline Error:', error);
        ws.send(JSON.stringify({ type: 'error', message: 'An error occurred in the pipeline.' }));
    } finally {
        if (fs.existsSync(tempFilePath)) await fs.promises.unlink(tempFilePath);
        clientAudioChunks.set(ws, []);
    }
}

export const handlePipelineConnection = (ws: WebSocket, req: IncomingMessage) => {
    console.log("Client connected in 'pipeline' mode.");
    clientAudioChunks.set(ws, []);

    ws.on('message', async (message: Buffer | string) => {
        let messageAsString: string | null = null;
        if (Buffer.isBuffer(message)) {
            try {
                if (message.toString('utf-8').includes('endOfStream')) {
                    messageAsString = message.toString('utf-8');
                }
            } catch (e) { /* Not a string, ignore */ }
        } else {
            messageAsString = message;
        }

        if (messageAsString) {
            try {
                const data = JSON.parse(messageAsString);
                if (data.type === 'endOfStream') {
                    await processAudio(ws);
                }
            } catch (e) { console.error('Pipeline: JSON parse error', e); }
        } else {
            const chunks = clientAudioChunks.get(ws);
            if (chunks) chunks.push(message as Buffer);
        }
    });

    ws.on('close', () => {
        console.log('Pipeline: Client disconnected.');
        clientAudioChunks.delete(ws);
    });
    ws.on('error', (e) => {
        console.error('Pipeline: WebSocket error:', e);
        clientAudioChunks.delete(ws);
    });
};
