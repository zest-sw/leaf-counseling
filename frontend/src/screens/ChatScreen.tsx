import React, { useState, useEffect, useRef } from 'react';
import svgPaths from "./svg-q12y9eg68c.ts"; // 경로 확인 필요
import imgImage1 from "../assets/34ff20b38e9681b0b00e4579d5e277efb0b475ea.png"; // 경로 확인 필요
import { useRealtimeChat } from '../hooks/useRealtimeChat.ts'; // 훅 경로 확인 필요
import ChatConversation from "../components/chat/ChatConversation.tsx";
import EndCallButton from "../components/chat/EndCallButton.tsx"; // 컴포넌트 경로 확인 필요
import Nav from '../components/common/Nav.tsx';

import CounselorMessage from '../components/chat/CounselorMessage.tsx';

// --- 기존 UI 컴포넌트 유지 ---

function Frame16() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]">
      <p className="[text-shadow:rgba(255,255,255,0.25)_0px_0px_4px] font-['LINE_Seed_Sans_KR:Bold',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">리프</p>
    </div>
  );
}

function MenuIcon({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-[25px] size-[24px] top-1/2 translate-y-[-50%] cursor-pointer z-10"
      data-name="menuIcon"
    >
      <div className="absolute bottom-0 left-[-4.17%] right-[-4.17%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <g filter="url(#filter0_d_1_268)" id="menuIcon">
            <path d={svgPaths.p3372cb80} fill="var(--fill-0, black)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_1_268" width="32" x="-3" y="-4">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_268" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_268" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </button>
  );
}


// --- 말풍선 컴포넌트 (내부 사용용) ---
const Bubble = ({ text, isUser }: { text: string; isUser: boolean }) => (
  <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
    <div
      className={`max-w-[70%] px-4 py-2 rounded-2xl text-[15px] leading-relaxed shadow-sm
        ${isUser 
          ? 'bg-[#A3D78A] text-black rounded-br-none' // 사용자: 연두색
          : 'bg-white text-black rounded-bl-none' // 상담사: 흰색
        }`}
    >
      {text}
    </div>
  </div>
);

interface Frame8Props {
  onMenuClick: () => void;
  onNavigateToAnalysis: (report: string) => void; // 분석 결과 페이지 이동 콜백
}

export default function FigmeChatScreen({ onMenuClick, onNavigateToAnalysis }: Frame8Props) {
  // 1. Hook 연결
  const {
    connect,
    messages,
    isConnected,
    isSpeaking,
    error,
    generateReport,
    disconnect,
  } = useRealtimeChat();

  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 2. Lifecycle 관리
  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  // 3. 자동 스크롤
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isSpeaking]);

  // 4. 상담 종료 및 리포트 생성 로직
  const handleEndCall = async () => {
    if (isGeneratingReport) return;
    
    if (messages.length === 0) {
      console.log('No messages to analyze.');
      disconnect(); // 메시지 없어도 연결은 종료
      return;
    }

    console.log('Ending call and generating report...');
    disconnect(); // 연결 먼저 종료
    setIsGeneratingReport(true);

    try {
      const report = await generateReport();
      if (report) {
        onNavigateToAnalysis(report);
      } else {
        console.log('분석 리포트 생성에 실패했습니다. 다시 시도해주세요.');
        setIsGeneratingReport(false);
      }
    } catch (e) {
      console.error(e);
      console.log('리포트 생성 중 오류가 발생했습니다.');
      setIsGeneratingReport(false);
    }
  };

  // 5. 데이터 형식 변환 (role -> type)
  const formattedMessages = messages.map(msg => ({
    id: msg.id,
    type: msg.role === 'assistant' ? 'counselor' : 'user',
    content: msg.content,
  }));

  return (
  <div className="chat-screen-background overflow-clip relative rounded-[60px] size-full"> 
      <Nav onMenuClick={onMenuClick} />
      <div className="absolute flex h-[20.946px] items-center justify-center left-[calc(50%+35.24px)] top-[80.93px] translate-x-[-50%] w-[27.472px]" style={{ "--transform-inner-width": "24.28125", "--transform-inner-height": "14.109375" } as React.CSSProperties}>
        <div className="flex-none rotate-[341.977deg]">
          <div className="h-[14.122px] relative w-[24.295px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
      </div>
      
      {/* Chat Messages Container */}
      <div ref={scrollContainerRef} className="absolute content-stretch flex flex-col gap-[16px] items-center justify-start left-0 right-0 px-6 top-[135px] bottom-[120px] overflow-y-auto">
        {formattedMessages.length > 0 && (
          <ChatConversation 
            timestamp={"Today"}
            messages={formattedMessages}
          />
        )}

        {/* 연결 중 상태 */}
        {!isConnected && (
          <div className="text-gray-400 text-sm animate-pulse">연결 중...</div>
        )}

        {/* AI 답변 생성/발화 중 애니메이션 (ChatConversation에 포함되지 않으므로 별도 처리) */}
        {isSpeaking && (
            <div className="w-full flex justify-start">
                 <CounselorMessage message="..." isLoading={true} />
            </div>
        )}

        {/* 리포트 생성 중 상태 */}
        {isGeneratingReport && (
          <div className="flex flex-col items-center justify-center gap-2 mt-4 text-gray-600">
             <div className="size-6 border-2 border-[#A3D78A] border-t-transparent rounded-full animate-spin" />
             <span className="text-sm font-medium">상담 내용을 분석하고 있습니다...</span>
          </div>
        )}

        {/* 에러 메시지 */}
        {error && (
            <div className="bg-red-50 text-red-500 text-sm px-4 py-2 rounded-lg text-center w-full">
                {error}
            </div>
        )}
      </div>

      {/* End Call Button */}
      <div className="absolute bottom-0 w-full flex justify-center pb-8 z-10">
        <div className={`${isGeneratingReport ? 'opacity-50 pointer-events-none' : ''}`}>
             <EndCallButton onEndCall={handleEndCall} />
        </div>
      </div>
    </div>
  );
}

