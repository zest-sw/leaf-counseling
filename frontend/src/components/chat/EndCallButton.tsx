interface EndCallButtonProps {
  onEndCall: () => void;
}

export default function EndCallButton({ onEndCall }: EndCallButtonProps) {
  return (
    <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={onEndCall}
        className="flex items-center gap-3 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all group"
      >
        <svg
          className="size-5 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3h4.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V14m-6 6H5a2 2 0 01-2-2v-4.586a1 1 0 01.293-.707l5.414-5.414A1 1 0 019.414 7H14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h2.25m0-18H5.25A2.25 2.25 0 003 5.25v2.25m18 0V5.25A2.25 2.25 0 0018.75 3H16.5m0 18h2.25A2.25 2.25 0 0021 18.75V16.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] text-[16px]">대화 종료</span>
      </button>
    </div>
  );
}
