import React from 'react';

interface MessageGroupProps {
  timestamp: string;
  children: React.ReactNode;
}

export function MessageGroup({ timestamp, children }: MessageGroupProps) {
  return (
    <div className="flex flex-col gap-[8px] items-center justify-center w-full">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] text-[#72777a] text-[12px] text-nowrap whitespace-pre">
        {timestamp}
      </p>
      <div className="flex flex-col gap-[8px] w-full">
        {children}
      </div>
    </div>
  );
}
