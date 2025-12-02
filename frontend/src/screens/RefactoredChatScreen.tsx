import React, { useState, useEffect, useRef } from 'react';
import { useRealtimeChat } from '../hooks/useRealtimeChat';
import StatusBars from '../components/common/StatusBars';
import Nav from '../components/common/Nav';
import { ChatMessage } from '../components/chat/ChatMessage';
import { MessageGroup } from '../components/chat/MessageGroup';
import { ChatBackground } from '../components/chat/ChatBackground';

interface RefactoredChatScreenProps {
  onMenuClick: () => void;
  onNavigateToAnalysis: (report: string) => void;
}

export function RefactoredChatScreen({ onMenuClick, onNavigateToAnalysis }: RefactoredChatScreenProps) {
  const {
    connect,
    messages,
    isConnecting,
    isSpeaking,
    error,
    generateReport,
    setError,
    disconnect,
  } = useRealtimeChat();

  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    connect();
    // Ensure disconnection on component unmount if connect was called
    return () => {
      disconnect();
    }
  }, [connect, disconnect]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleGenerateReport = async () => {
    console.log('[CHAT_SCREEN] handleGenerateReport called.');
    console.log('[CHAT_SCREEN] Current messages count:', messages.length);
    if (messages.length === 0) {
      console.log('[CHAT_SCREEN] No messages to analyze, aborting.');
      return;
    }
    
    // First, disconnect the live session
    console.log('[CHAT_SCREEN] Disconnecting session...');
    disconnect();

    setIsGeneratingReport(true);
    try {
      // Then, generate the report
      console.log('[CHAT_SCREEN] Calling generateReport...');
      const report = await generateReport();
      console.log('[CHAT_SCREEN] generateReport returned. Report content:', report ? `${report.substring(0, 50)}...` : 'null or empty');

      if (report) {
        console.log('[CHAT_SCREEN] Report is truthy, calling onNavigateToAnalysis.');
        onNavigateToAnalysis(report);
      } else {
        console.log('[CHAT_SCREEN] Report is falsy, setting error message.');
        setError('분석 리포트 생성에 실패했습니다. 잠시 후 다시 시도해주세요.');
      }
    } finally {
      console.log('[CHAT_SCREEN] Resetting isGeneratingReport state.');
      setIsGeneratingReport(false);
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

      {/* Message List Area */}
      <div className="absolute top-[121px] bottom-24 left-0 right-0 px-6 overflow-y-auto space-y-4">
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
        {isGeneratingReport && (
          <div className="text-center text-gray-500 p-4">Generating Report...</div>
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

      {/* Floating Action Button Area */}
      <div className="absolute bottom-0 left-0 right-0 h-24 flex justify-center items-center">
        <button
          onClick={handleGenerateReport}
          disabled={isGeneratingReport}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-gray-900 font-semibold text-base bg-white/70 backdrop-blur-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-all duration-300 ease-in-out disabled:bg-gray-400/50 disabled:text-gray-100 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-1 h-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V5.75A2.25 2.25 0 0 0 18 3.5H6A2.25 2.25 0 0 0 3.75 5.75v12.5A2.25 2.25 0 0 0 6 20.25Z" />
          </svg>
          <span>{isGeneratingReport ? '분석 중...' : '상담 종료 및 분석'}</span>
        </button>
      </div>
    </ChatBackground>
  );
}
