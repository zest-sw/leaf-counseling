import React from 'react';

interface ChatInputProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  isConnecting: boolean;
  error: string | null;
}

export function ChatInput({
  inputValue,
  onInputChange,
  onSendMessage,
  isConnecting,
  error,
}: ChatInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSendMessage();
    }
  };

  return (
    <div className="p-4 bg-white/50 backdrop-blur-sm border-t border-gray-200/80">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Talk about your feelings..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#A3D78A] bg-white"
          disabled={isConnecting || !!error}
        />
        <button
          onClick={onSendMessage}
          className="px-4 py-2 rounded-full bg-[#A3D78A] text-white disabled:bg-gray-400 transition-colors"
          disabled={!inputValue.trim() || isConnecting || !!error}
        >
          전송
        </button>
      </div>
    </div>
  );
}
