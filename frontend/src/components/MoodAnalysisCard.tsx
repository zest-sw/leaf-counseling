interface MoodAnalysisCardProps {
  mood: string;
  icon: React.ReactNode;
  description: string;
}

export default function MoodAnalysisCard({ mood, icon, description }: MoodAnalysisCardProps) {
  return (
    <div className="absolute backdrop-blur-[10.253px] backdrop-filter box-border content-stretch flex flex-col gap-[16px] h-[223px] items-start justify-center left-[16px] px-[24px] py-[20px] rounded-[12px] top-[218px] w-[358px]">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_20px_0px_rgba(154,173,144,0.1),0px_0px_20px_0px_rgba(255,255,255,0.15)]" />
      
      <div className="relative flex items-center gap-[12px] w-full">
        <div className="flex items-center justify-center">
          {icon}
        </div>
        <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] not-italic text-[#303437] text-[16px]">
          {mood}
        </p>
      </div>

      <div className="relative w-full">
        <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] not-italic text-[#72777a] text-[14px]">
          {description}
        </p>
      </div>
    </div>
  );
}
