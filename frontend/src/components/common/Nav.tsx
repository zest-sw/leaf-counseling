
interface MenuIconProps {
  onClick: () => void;
}

function MenuIcon({ onClick }: MenuIconProps) {
  return (
    <button 
      onClick={onClick}
      className="absolute left-[25px] size-[24px] top-1/2 translate-y-[-50%] cursor-pointer"
      data-name="menuIcon"
    >
      <div className="absolute bottom-0 left-[-4.17%] right-[-4.17%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <g filter="url(#filter0_d_nav)" id="menuIcon">
            <path d="M4 4H22V6H4V4ZM4 11H22V13H4V11ZM4 18H22V20H4V18Z" fill="var(--fill-0, black)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_nav" width="32" x="-3" y="-4">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_nav" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_nav" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </button>
  );
}

interface NavProps {
  onMenuClick: () => void;
}

export default function Nav({ onMenuClick }: NavProps) {
  return (
    <div className="absolute h-[60px] left-0 overflow-clip top-0 w-full py-4" data-name="nav">
      <div className="absolute content-stretch flex gap-[2px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="[text-shadow:rgba(255,255,255,0.25)_0px_0px_4px] font-['LINE_Seed_Sans_KR:Bold',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">리프</p>
      </div>
      <MenuIcon onClick={onMenuClick} />
    </div>
  );
}
