import React from 'react';
import { Avatar } from './Avatar';
import { ChatBubble } from './ChatBubble';

interface ChatMessageProps {
  text: string;
  isUser: boolean;
  showAvatar: boolean;
}

export function ChatMessage({ text, isUser, showAvatar }: ChatMessageProps) {
  const alignment = isUser ? "justify-end" : "justify-start";

  return (
    <div className={`flex gap-[8px] items-start ${alignment} w-full`}>
      {showAvatar && !isUser && <Avatar />}
      <ChatBubble text={text} isUser={isUser} />
      {showAvatar && isUser && <Avatar />}
    </div>
  );
}
