interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: "home" | "chat" | "analysis" | "diary") => void;
  currentScreen: string;
}

export default function SideMenu({ isOpen, onClose, onNavigate, currentScreen }: SideMenuProps) {
  const menuItems = [
    { id: "home" as const, label: "홈", icon: "home" },
    { id: "chat" as const, label: "채팅", icon: "chat" },
    { id: "analysis" as const, label: "마음 분석", icon: "analysis" },
    { id: "diary" as const, label: "감정 일기", icon: "diary" },
  ];

  const handleNavigate = (screen: "home" | "chat" | "analysis" | "diary") => {
    onNavigate(screen);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Side Menu */}
      <div
        className={`absolute left-0 top-0 h-full w-[280px] bg-white shadow-2xl z-50 transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "linear-gradient(180deg, rgba(163,215,138,0.1) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        {/* Header */}
        <div className="px-6 py-8 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-['LINE_Seed_Sans_KR:Bold',sans-serif] text-[24px] text-[#303437]">리프</p>
              <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] text-[14px] text-[#72777a] mt-1">
                당신의 마음 친구
              </p>
            </div>
            <button
              onClick={onClose}
              className="size-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="px-4 py-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl mb-2 transition-all ${
                currentScreen === item.id
                  ? "bg-[#a3d78a] text-white shadow-md"
                  : "text-[#303437] hover:bg-gray-100"
              }`}
            >
              {item.icon === "home" && (
                <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {item.icon === "chat" && (
                <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {item.icon === "analysis" && (
                <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {item.icon === "diary" && (
                <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] text-[16px]">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-gray-200">
          <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] text-[12px] text-[#72777a] text-center">
            언제든 편하게 이야기하세요
          </p>
        </div>
      </div>
    </>
  );
}
