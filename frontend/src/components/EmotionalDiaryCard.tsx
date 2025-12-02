interface EmotionalDiaryCardProps {
  riskLevel: "low" | "medium" | "high";
  riskScore: number;
  description: string;
  recommendations: string[];
}

export default function EmotionalDiaryCard({ riskLevel, riskScore, description, recommendations }: EmotionalDiaryCardProps) {
  const getRiskColor = () => {
    switch (riskLevel) {
      case "high":
        return { bg: "bg-red-50", border: "border-red-200", text: "text-red-600", dot: "#FF5558" };
      case "medium":
        return { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-600", dot: "#FFA500" };
      case "low":
        return { bg: "bg-green-50", border: "border-green-200", text: "text-green-600", dot: "#A3D78A" };
    }
  };

  const getRiskLabel = () => {
    switch (riskLevel) {
      case "high":
        return "RED";
      case "medium":
        return "YELLOW";
      case "low":
        return "GREEN";
    }
  };

  const colors = getRiskColor();

  return (
    <div className="absolute backdrop-blur-[10.253px] backdrop-filter box-border flex flex-col gap-[20px] h-[283px] items-start justify-start left-[16px] overflow-y-auto px-[24px] py-[20px] rounded-[12px] top-[218px] w-[358px]">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_20px_0px_rgba(154,173,144,0.1),0px_0px_20px_0px_rgba(255,255,255,0.15)]" />
      
      {/* Risk Score Badge */}
      <div className="relative w-full">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${colors.bg} border ${colors.border}`}>
          <div className="size-2 rounded-full" style={{ backgroundColor: colors.dot }} />
          <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[20px] not-italic text-[14px]">
            <span className={colors.text}>[{getRiskLabel()}]</span>{" "}
            <span className="font-['LINE_Seed_Sans_KR:Bold',sans-serif] text-[#303437]">
              위험도 스코어 {riskScore}
            </span>
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="relative w-full">
        <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] not-italic text-[#303437] text-[16px]">
          {description}
        </p>
      </div>

      {/* Recommendations */}
      <div className="relative w-full flex flex-col gap-2">
        <p className="font-['LINE_Seed_Sans_KR:Bold',sans-serif] leading-[20px] not-italic text-[#303437] text-[14px]">
          권장 조치사항
        </p>
        <div className="flex flex-col gap-2">
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-[#a3d78a] mt-1">•</span>
              <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[20px] not-italic text-[#72777a] text-[13px] flex-1">
                {rec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
