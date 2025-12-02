interface UserMessageProps {
  message: string;
}

export default function UserMessage({ message }: UserMessageProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end w-full max-w-[345px]">
      <div className="flex items-center justify-center">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#a3d78a] box-border content-stretch flex items-center justify-between p-[16px] rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] max-w-[280px]">
            <div className="flex items-center justify-center w-full">
              <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
                <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-center text-white w-full">
                  {message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
