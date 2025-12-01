import React from 'react';
import StatusBars from '../components/common/StatusBars';
import Nav from '../components/common/Nav';
import { ChatMessage } from '../components/chat/ChatMessage';
import { MessageGroup } from '../components/chat/MessageGroup';
import { ChatBackground } from '../components/chat/ChatBackground';

export function RefactoredChatScreen() {
  const onMenuClick = () => {
    console.log('Menu clicked');
  };

  const messages1 = [
    { text: "나 오늘 우울해서 빵샀어", isUser: true, showAvatar: false },
    { text: "무슨 일 있었어?", isUser: false, showAvatar: true },
    { text: "말하기 싫어", isUser: true, showAvatar: false },
    { text: "나한텐 편하게 말해도 돼", isUser: false, showAvatar: true },
    { text: "시험을 망쳤는데", isUser: true, showAvatar: false },
    { text: "털어놓을 친구가 없네...", isUser: true, showAvatar: false },
    { text: "그래도 열심히 했잖아 ㅎㅎ", isUser: false, showAvatar: true },
  ];

  const messages2 = [
    { text: "오늘의 전화로 얘기를 들려줘 👋", isUser: false, showAvatar: true },
  ];

  return (
    <ChatBackground>
      <StatusBars />
      <Nav onMenuClick={onMenuClick} />
      <div className="absolute flex flex-col gap-[16px] left-[24px] top-[135px] w-[calc(100%-48px)]">
        <MessageGroup timestamp="Wed 2:19 AM">
          {messages1.map((msg, index) => (
            <ChatMessage key={index} text={msg.text} isUser={msg.isUser} showAvatar={msg.showAvatar} />
          ))}
        </MessageGroup>
        <MessageGroup timestamp="Thu 10:00 PM">
          {messages2.map((msg, index) => (
            <ChatMessage key={index} text={msg.text} isUser={msg.isUser} showAvatar={msg.showAvatar} />
          ))}
        </MessageGroup>
      </div>
    </ChatBackground>
  );
}
