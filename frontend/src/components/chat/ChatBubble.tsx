import React from 'react';

interface ChatBubbleProps {
  text: string;
  isUser: boolean;
}

export function ChatBubble({ text, isUser }: ChatBubbleProps) {
  const userBubbleStyle = "bg-[#a3d78a] text-white";
  const botBubbleStyle = "bg-white text-[#303437]";

  return (
    <div
      className={`h-auto relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] p-[16px] w-auto max-w-[250px] ${isUser ? userBubbleStyle : botBubbleStyle}`}
      data-name="Text Box"
    >
      <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-center">
        {text}
      </p>
    </div>
  );
}
