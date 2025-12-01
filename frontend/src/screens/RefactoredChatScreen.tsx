import React, { useState, useEffect, useRef } from 'react';
import { useRealtimeChat } from '../hooks/useRealtimeChat';
import StatusBars from '../components/common/StatusBars';
import Nav from '../components/common/Nav';
import { ChatMessage } from '../components/chat/ChatMessage';
import { MessageGroup } from '../components/chat/MessageGroup';
import { ChatBackground } from '../components/chat/ChatBackground';
import { ChatInput } from '../components/chat/ChatInput';

interface RefactoredChatScreenProps {
  onMenuClick: () => void;
  onNavigateToAnalysis: () => void;
}

export function RefactoredChatScreen({ onMenuClick, onNavigateToAnalysis }: RefactoredChatScreenProps) {
  const {
    connect,
    sendText,
    messages,
    isConnecting,
    isSpeaking,
    error,
    session
  } = useRealtimeChat();

  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    connect();
  }, [connect]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      sendText(inputValue);
      setInputValue('');
    }
  };

  const getGroupedMessages = () => {
    const groups: { [key: string]: typeof messages } = {};
    messages.forEach(msg => {
      const timestamp = "Today";
      if (!groups[timestamp]) {
        groups[timestamp] = [];
      }
      groups[timestamp].push(msg);
    });
    return groups;
  };

  const groupedMessages = getGroupedMessages();

  return (
    <ChatBackground>
      <StatusBars />
      <Nav onMenuClick={onMenuClick} />
      <div className="absolute flex flex-col gap-[16px] left-[24px] top-[135px] w-[calc(100%-48px)] h-[calc(100%-230px)] overflow-y-auto">
        {Object.entries(groupedMessages).map(([timestamp, msgs]) => (
          <MessageGroup key={timestamp} timestamp={timestamp}>
            {msgs.map((msg, index) => (
              <ChatMessage key={index} text={msg.content} isUser={msg.role === 'user'} showAvatar={msg.role !== 'user'} />
            ))}
          </MessageGroup>
        ))}
        {isConnecting && (
          <div className="text-center text-gray-500 p-4">Connecting...</div>
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
      <div className="absolute bottom-0 left-0 w-full">
        <ChatInput 
          inputValue={inputValue}
          onInputChange={setInputValue}
          onSendMessage={handleSend}
          isConnecting={isConnecting}
          error={error}
          onAnalysisClick={onNavigateToAnalysis}
        />
      </div>
    </ChatBackground>
  );
}
