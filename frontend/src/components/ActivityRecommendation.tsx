interface Activity {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ActivityRecommendationProps {
  activities: Activity[];
}

export default function ActivityRecommendation({ activities }: ActivityRecommendationProps) {
  return (
    <div className="absolute backdrop-blur-[10.253px] backdrop-filter box-border flex flex-col gap-[16px] h-[285px] items-start justify-start left-[16px] overflow-y-auto px-[24px] py-[20px] rounded-[12px] top-[461px] w-[358px]">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_20px_0px_rgba(154,173,144,0.1),0px_0px_20px_0px_rgba(255,255,255,0.15)]" />
      
      <div className="relative w-full">
        <p className="font-['LINE_Seed_Sans_KR:Bold',sans-serif] leading-[24px] not-italic text-[#303437] text-[16px] mb-2">
          추천 활동
        </p>
        <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[20px] not-italic text-[#72777a] text-[13px]">
          아래 활동을 통해 마음을 편안하게 해보세요
        </p>
      </div>

      <div className="relative flex flex-col gap-[12px] w-full">
        {activities.map((activity) => (
          <button
            key={activity.id}
            className="flex items-start gap-[12px] p-[12px] rounded-[8px] bg-white/50 hover:bg-white/80 transition-all border border-white/60 hover:shadow-md group"
          >
            <div className="flex items-center justify-center min-w-[36px] h-[36px] rounded-full bg-[#a3d78a]/20 text-[20px] group-hover:bg-[#a3d78a]/30 transition-colors">
              {activity.icon}
            </div>
            <div className="flex-1 text-left">
              <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[20px] not-italic text-[#303437] text-[14px] mb-1">
                {activity.title}
              </p>
              <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[18px] not-italic text-[#72777a] text-[12px]">
                {activity.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
