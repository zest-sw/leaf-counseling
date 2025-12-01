import Nav from "./common/Nav";
import StatusBars from "./common/StatusBars";
import imgImage1 from "../assets/34ff20b38e9681b0b00e4579d5e277efb0b475ea.png";

interface HomeScreenProps {
  onMenuClick: () => void;
  onStartCall: () => void;
}

export default function HomeScreen({ onMenuClick, onStartCall }: HomeScreenProps) {
  return (
    <div className="bg-gradient-to-r from-[#ffffff] overflow-clip relative rounded-[60px] size-full to-[#ffffff]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 393 852\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.5\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(1.2234e-13 20.85 -17.428 1.7549e-13 196.5 426)\\\'><stop stop-color=\\\'rgba(163,215,138,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(209,235,188,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,237,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <StatusBars />
      <Nav onMenuClick={onMenuClick} />
      <div className="absolute flex h-[20.946px] items-center justify-center left-[calc(50%+35.24px)] top-[80.93px] translate-x-[-50%] w-[27.472px]" style={{ "--transform-inner-width": "24.28125", "--transform-inner-height": "14.109375" } as React.CSSProperties}>
        <div className="flex-none rotate-[341.977deg]">
          <div className="h-[14.122px] relative w-[24.295px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute flex flex-col items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8">
        <div className="text-center">
          <p className="font-['LINE_Seed_Sans_KR:Bold',sans-serif] text-[#303437] text-[24px] mb-2">리프와 함께</p>
          <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] text-[#72777a] text-[16px]">마음 편히 이야기해보세요</p>
        </div>

        {/* Call Button */}
        <button
          onClick={onStartCall}
          className="relative group"
        >
          <div className="absolute inset-0 bg-[#a3d78a] rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="relative size-[120px] bg-[#a3d78a] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-active:scale-95">
            <svg
              className="size-[60px] text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] text-[#a3d78a] text-[14px] animate-pulse">
          버튼을 눌러 통화를 시작하세요
        </p>
      </div>
    </div>
  );
}
