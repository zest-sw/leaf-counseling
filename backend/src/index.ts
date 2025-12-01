process.on('uncaughtException', (error, origin) => {
    console.error('!!!!!!!!!! UNCAUGHT EXCEPTION !!!!!!!!!!');
    console.error('Origin:', origin);
    console.error('Error:', error);
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    process.exit(1);
});

import express from 'express';
import cors from 'cors';
import http from 'http';
import { WebSocketServer } from 'ws';
import { apiRouter } from './routes/apiRoutes';
import { handlePipelineConnection } from './websockets/pipelineHandler';

const app = express();
const port = process.env.PORT || 3001;

// --- Middlewares ---
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// --- REST API Routes ---
app.use('/api', apiRouter);

// --- HTTP and WebSocket Server Setup ---
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws, req) => {
    const requestUrl = new URL(req.url!, `http://${req.headers.host}`);
    const mode = requestUrl.searchParams.get('mode');

    // The WebSocket server now ONLY handles the 'pipeline' mode.
    // 'realtime' mode connections are initiated via REST API and then use WebRTC.
    if (mode === 'pipeline') {
        handlePipelineConnection(ws, req);
    } else {
        console.warn(`WebSocket connection attempt with unsupported mode: '${mode}'. Closing connection.`);
        ws.terminate();
    }
});

// --- Start Server ---
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
