import { useState, useEffect, useCallback, useRef } from 'react';
import { RealtimeAgent, RealtimeSession } from '@openai/agents/realtime';

// Define the structure of a message object
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const useRealtimeChat = () => {
  const [session, setSession] = useState<RealtimeSession | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Use a ref to hold the session to prevent re-renders from recreating listeners
  const sessionRef = useRef<RealtimeSession | null>(null);

  const connect = useCallback(async () => {
    if (sessionRef.current) {
        console.log("Session already exists, skipping connection.");
        return;
    }
    setIsConnecting(true);
    setError(null);
    console.log("Attempting to connect...");

    try {
      // 1. Fetch the client secret from our backend
      const response = await fetch('/api/generate-token', { method: 'POST' });
      if (!response.ok) {
        throw new Error(`Failed to fetch client token. Status: ${response.status}`);
      }
      const data = await response.json();
      const clientSecret = data.client_secret;

      if (!clientSecret) {
        throw new Error('Client secret is missing in the server response.');
      }
      console.log("Client secret received.");

      // 2. Create the agent and session
      const agent = new RealtimeAgent({
        name: "Assistant",
        instructions: "You are a helpful assistant.",
      });
      const newSession = new RealtimeSession(agent);
      sessionRef.current = newSession;
      setSession(newSession);
      console.log("RealtimeSession created.");
      
      // 3. Setup event listeners
      newSession.on('text', (text: string) => {
        console.log("Received text:", text);
        setMessages(prev => {
            // OpenAI might send text in chunks, so we append to the last message if it's from the assistant
            const lastMessage = prev[prev.length - 1];
            if (lastMessage && lastMessage.role === 'assistant') {
                const updatedLastMessage = { ...lastMessage, content: lastMessage.content + text };
                return [...prev.slice(0, -1), updatedLastMessage];
            } else {
                return [...prev, { role: 'assistant', content: text }];
            }
        });
      });

      newSession.on('transcript', (transcript: { text: string, final: boolean }) => {
        console.log("Received transcript:", transcript.text, "final:", transcript.final);
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage && lastMessage.role === 'user' && !transcript.final) {
            const updatedLastMessage = { ...lastMessage, content: transcript.text };
            return [...prev.slice(0, -1), updatedLastMessage];
          } else {
            return [...prev, { role: 'user', content: transcript.text }];
          }
        });
      });

      newSession.on('audio:assistant:start', () => {
        console.log("Assistant started speaking.");
        setIsSpeaking(true);
        // Start a new message bubble when assistant starts speaking
        setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      });

      newSession.on('audio:assistant:end', () => {
        console.log("Assistant finished speaking.");
        setIsSpeaking(false);
      });
      
      newSession.on('error', (err: any) => {
        console.error("Session error:", err);
        setError(err.message || 'An unknown error occurred.');
      });

      newSession.on('close', () => {
        console.log("Session closed.");
        setSession(null);
        sessionRef.current = null;
      });

      // 4. Connect to OpenAI
      await newSession.connect({ clientSecret });
      console.log("Session connected successfully.");

    } catch (err: any) {
      console.error("Connection failed:", err);
      setError(err.message || 'Failed to connect.');
    } finally {
      setIsConnecting(false);
    }
  }, []); // Empty dependency array ensures this function is created only once

  const sendText = useCallback((text: string) => {
    if (sessionRef.current && sessionRef.current.isConnected) {
      sessionRef.current.sendText(text);
      setMessages(prev => [...prev, { role: 'user', content: text }]);
    } else {
      console.error("Cannot send text, session is not connected.");
      setError("Cannot send text, session is not connected.");
    }
  }, []);

  // Cleanup effect to close the session on unmount
  useEffect(() => {
    return () => {
      if (sessionRef.current) {
        console.log("Closing session on component unmount.");
        sessionRef.current.close();
        sessionRef.current = null;
      }
    };
  }, []);

  return {
    session,
    messages,
    isConnecting,
    isSpeaking,
    error,
    connect,
    sendText,
  };
};
