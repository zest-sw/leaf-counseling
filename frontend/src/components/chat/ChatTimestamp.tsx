interface ChatTimestampProps {
  timestamp: string;
}

export default function ChatTimestamp({ timestamp }: ChatTimestampProps) {
  return (
    <p 
      className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] text-[#72777a] text-[12px] text-nowrap whitespace-pre" 
      style={{ fontVariationSettings: "'opsz' 14" }}
    >
      {timestamp}
    </p>
  );
}
