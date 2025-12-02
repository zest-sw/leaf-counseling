import CounselorMessage from "./CounselorMessage";
import UserMessage from "./UserMessage";
import ChatTimestamp from "./ChatTimestamp";

interface Message {
  id: string;
  type: "user" | "counselor";
  content: string;
}

interface ChatConversationProps {
  timestamp: string;
  messages: Message[];
}

export default function ChatConversation({ timestamp, messages }: ChatConversationProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center w-[345px]">
      <ChatTimestamp timestamp={timestamp} />
      {messages.map((message) => (
        <div key={message.id} className="w-full flex" style={{ justifyContent: message.type === "user" ? "flex-end" : "flex-start" }}>
          {message.type === "counselor" ? (
            <CounselorMessage message={message.content} />
          ) : (
            <UserMessage message={message.content} />
          )}
        </div>
      ))}
    </div>
  );
}
