import React from 'react';
import { ChatBackground } from '../components/chat/ChatBackground';
import StatusBars from '../components/common/StatusBars';
import Nav from '../components/common/Nav';

interface AnalysisResultScreenProps {
  report: string;
  onMenuClick: () => void;
}

const AnalysisResultScreen: React.FC<AnalysisResultScreenProps> = ({ report, onMenuClick }) => {
  const formattedReport = report ? report.replace(/\n/g, '<br />') : 'No report generated.';

  return (
    <ChatBackground>
      <StatusBars />
      <Nav onMenuClick={onMenuClick} />
      <div className="absolute flex flex-col gap-[16px] left-[24px] top-[135px] w-[calc(100%-48px)] h-[calc(100%-150px)] overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">상담 분석 리포트</h1>
        <div 
          className="bg-white/10 p-6 rounded-lg shadow-lg text-white"
          dangerouslySetInnerHTML={{ __html: formattedReport }}
        />
      </div>
    </ChatBackground>
  );
};

export default AnalysisResultScreen;