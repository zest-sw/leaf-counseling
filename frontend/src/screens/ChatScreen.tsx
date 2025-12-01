import React, { useState, useEffect, useRef } from 'react';
import Nav from "../components/common/Nav";
import StatusBars from "../components/common/StatusBars";
import { useRealtimeChat } from '../hooks/useRealtimeChat';
import type { Message } from '../hooks/useRealtimeChat';

// A component to render a single chat message
const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
  const isUser = message.role === 'user';
  // Do not render empty messages from the assistant, which are used to indicate typing
  if (message.role === 'assistant' && !message.content) {
    return null;
  }
  return (
    <div className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="size-8 rounded-full bg-[#A3D78A] flex-shrink-0" />
      )}
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
          isUser
            ? 'bg-[#A3D78A] text-white rounded-br-none'
            : 'bg-white text-gray-800 rounded-bl-none'
        }`}
      >
        <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] text-[16px] leading-[24px]">{message.content}</p>
      </div>
    </div>
  );
};

// The main ChatScreen component
export default function ChatScreen({ onMenuClick }: { onMenuClick: () => void }) {
  const {
    connect,
    sendText,
    messages,
    isConnecting,
    isSpeaking,
    error,
  } = useRealtimeChat();

  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Connect on component mount
  useEffect(() => {
    connect();
  }, [connect]);

  // Scroll to the bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const handleSend = () => {
    if (inputValue.trim()) {
      sendText(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-b from-[#f0f4f8] to-[#d9e8c3] overflow-hidden rounded-[60px] relative">
      <StatusBars />
      <Nav onMenuClick={onMenuClick} />
      
      <div className="flex-1 flex flex-col p-4 overflow-y-auto pb-4">
        <div className="flex-1 space-y-4">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
          {isConnecting && (
            <div className="text-center text-gray-500 p-4">Connecting to the assistant...</div>
          )}
          {isSpeaking && (
             <div className="flex items-end gap-2 justify-start">
                <div className="size-8 rounded-full bg-[#A3D78A] flex-shrink-0" />
                <div className="max-w-[70%] rounded-2xl px-4 py-2 bg-white text-gray-400 rounded-bl-none">
                    <div className="flex items-center justify-center gap-1.5">
                        <span className="size-1.5 bg-gray-300 rounded-full animate-pulse "/>
                        <span className="size-1.5 bg-gray-300 rounded-full animate-pulse delay-75"/>
                        <span className="size-1.5 bg-gray-300 rounded-full animate-pulse delay-150"/>
                    </div>
                </div>
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative m-4 text-center">
              <strong>Error:</strong>
              <span className="block sm:inline ml-2">{error}</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="p-4 bg-white/50 backdrop-blur-sm border-t border-gray-200/80">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Talk about your feelings..."
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#A3D78A] bg-white"
            disabled={isConnecting || !!error}
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 rounded-full bg-[#A3D78A] text-white disabled:bg-gray-400 transition-colors"
            disabled={!inputValue.trim() || isConnecting || !!error}
          >
            전송
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-600 transition-colors">
            음성
          </button>
        </div>
      </div>
    </div>
  );
}
