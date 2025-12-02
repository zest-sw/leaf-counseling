import CounselorAvatar from "./CounselorAvatar";

interface CounselorMessageProps {
  message: string;
  isLoading?: boolean;
}

export default function CounselorMessage({ message, isLoading = false }: CounselorMessageProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-start w-full max-w-[345px]">
      <CounselorAvatar />
      <div className="bg-white box-border content-stretch flex items-center justify-between p-[16px] rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] max-w-[280px]">
        <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px]" />
        {isLoading ? (
          <div className="flex items-center justify-center gap-1.5">
            <span className="size-1.5 bg-[#A3D78A] rounded-full animate-bounce" />
            <span className="size-1.5 bg-[#A3D78A] rounded-full animate-bounce delay-75" />
            <span className="size-1.5 bg-[#A3D78A] rounded-full animate-bounce delay-150" />
          </div>
        ) : (
          <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] not-italic text-[#303437] text-[16px]">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
