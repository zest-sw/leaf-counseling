import { Router } from 'express';
import { openai } from '../openai-client';

export const apiRouter = Router();

// Endpoint for WebRTC Token Generation
apiRouter.post('/generate-token', async (req, res) => {
    console.log("Request received for /api/generate-token");
    try {
        const sessionConfig = {
            session: {
                // type: "realtime",
                // model: "gpt-realtime-mini",
                // audio: { output: { voice: "marin" } },
                type: "realtime",
                audio:{
                    input:{
                        transcription:{
                            language: "ko",
                            model: "whisper-1"
                        }
                    }
                },
                model: "gpt-realtime-mini", // 모델명 명시 권장

            },
        };

        const response = await fetch("https://api.openai.com/v1/realtime/client_secrets", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sessionConfig),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`OpenAI API Error: ${response.status} ${response.statusText} - ${errorBody}`);
        }

        const data = (await response.json()) as { value: string };
        console.log("Successfully generated client_secret.");
        res.json({ client_secret: data.value });

    } catch (error) {
        console.error("Error generating client secret:", error);
        res.status(500).json({ error: 'Failed to generate token' });
    }
});

// Endpoint for Report Generation
apiRouter.post('/generate-report', async (req, res) => {
    console.log("Request received for /api/generate-report");
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Conversation history is required.' });
    }

    try {
        const conversationText = messages.join('\n');
        const systemPrompt = `
        You are a professional clinical psychologist tasked with analyzing a therapy session transcript.
        Below is the transcript of a conversation between an AI counselor and a user.
        Your task is to generate a report with two distinct sections:
        1.  **상담 내용 요약 (Conversation Summary):** Summarize the key topics and the flow of the conversation objectively.
        2.  **심리 분석 레포트 (Psychological Analysis Report):** Based on the user's statements, analyze their potential emotional state, key themes or concerns, and patterns of thought. Use cautious and professional language. Do not make definitive diagnoses. Offer general insights or areas for further reflection.
        Structure your response clearly with these two headings in Korean. Add a brief disclaimer at the end that this is an AI-generated analysis and not a substitute for professional help.
        `;

        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { "role": "system", "content": systemPrompt },
                { "role": "user", "content": conversationText }
            ],
        });

        const report = chatCompletion.choices[0].message.content;
        res.json({ report });

    } catch (error) {
        console.error("Error generating report:", error);
        res.status(500).json({ error: 'Failed to generate report' });
    }
});

