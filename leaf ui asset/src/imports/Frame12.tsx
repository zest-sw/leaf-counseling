import svgPaths from "./svg-c6biohqn9x";
import imgImage1 from "figma:asset/34ff20b38e9681b0b00e4579d5e277efb0b475ea.png";

function StatusBars() {
  return (
    <div className="absolute h-[48px] left-[calc(50%+0.5px)] top-[13px] translate-x-[-50%] w-[390px]" data-name="Status Bars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 48">
        <g id="Status Bars">
          <g id="Battery">
            <rect fill="var(--fill-0, black)" height="13" id="Border" opacity="0.35" rx="3.5" width="25" x="336.333" y="19.3333" />
            <path d={svgPaths.p247f1a00} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="1.33333" width="21" x="338.333" y="21.3333" />
          </g>
          <path d={svgPaths.p1dcee800} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p247df000} fill="var(--fill-0, black)" id="Cellular Connection" />
          <g id="Time">
            <path d={svgPaths.p25f61500} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2db11580} fill="var(--fill-0, black)" />
            <path d={svgPaths.p11e79280} fill="var(--fill-0, black)" />
            <path d={svgPaths.pc88ec80} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]">
      <p className="[text-shadow:rgba(255,255,255,0.25)_0px_0px_4px] font-['LINE_Seed_Sans_KR:Bold',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">리프</p>
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="absolute left-[25px] size-[24px] top-1/2 translate-y-[-50%]" data-name="menuIcon">
      <div className="absolute bottom-0 left-[-4.17%] right-[-4.17%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <g filter="url(#filter0_d_1_326)" id="menuIcon">
            <path d={svgPaths.p3372cb80} fill="var(--fill-0, black)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_1_326" width="32" x="-3" y="-4">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_326" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_326" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute h-[60px] left-0 overflow-clip top-[61px] w-[390px]" data-name="nav">
      <Frame1 />
      <MenuIcon />
    </div>
  );
}

function Cp() {
  return (
    <div className="absolute backdrop-blur-[10.253px] backdrop-filter box-border content-stretch flex gap-[10px] h-[57px] items-center justify-center left-[16px] px-[153px] py-[16px] rounded-[12px] top-[141px] w-[358px]" data-name="cp">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_20px_0px_rgba(154,173,144,0.1),0px_0px_20px_0px_rgba(255,255,255,0.15)]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[43px] top-[158px] w-[303px]">
      <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#303437] text-[16px] w-[156px]">오늘의 감정 일기</p>
      <div className="h-[12.728px] relative shrink-0 w-[7.778px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 13">
          <path d={svgPaths.p4034e00} fill="var(--fill-0, black)" fillOpacity="0.8" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Cp1() {
  return (
    <div className="absolute backdrop-blur-[10.253px] backdrop-filter box-border content-stretch flex gap-[10px] h-[283px] items-center justify-center left-[16px] px-[153px] py-[16px] rounded-[12px] top-[218px] w-[358px]" data-name="cp">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_20px_0px_rgba(154,173,144,0.1),0px_0px_20px_0px_rgba(255,255,255,0.15)]" />
    </div>
  );
}

function Cp2() {
  return (
    <div className="absolute backdrop-blur-[10.253px] backdrop-filter box-border content-stretch flex gap-[10px] h-[45px] items-center justify-center left-1/2 px-[153px] py-[16px] rounded-[12px] top-0 translate-x-[-50%] w-[314px]" data-name="cp">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_20px_0px_rgba(154,173,144,0.1),0px_0px_20px_0px_rgba(255,255,255,0.15)]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[10px] h-[24px] items-center ml-[42.58px] mt-0 px-px py-[9px] relative w-[112.418px]">
      <p className="absolute font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] left-[calc(50%-0.21px)] not-italic text-[#303437] text-[16px] text-center top-0 translate-x-[-50%] w-[190px] whitespace-pre-wrap">
        <span className="text-[#ff5558]">[RED]</span> <span className="font-['LINE_Seed_Sans_KR:Bold',sans-serif]">위험도 스코어 98</span>
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame3 />
      <div className="[grid-area:1_/_1] h-[6px] ml-0 mt-[9px] relative w-[5.036px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <ellipse cx="2.51792" cy="3" fill="var(--fill-0, #FF5558)" id="Ellipse 2781" rx="2.51792" ry="3" />
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[45px] items-start justify-center left-[40px] px-[67px] py-[10px] top-[243px] w-[314px]">
      <Cp2 />
      <Group />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-gradient-to-r from-[#ffffff] overflow-clip relative rounded-[60px] size-full to-[#ffffff]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 393 852\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.5\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(1.2234e-13 20.85 -17.428 1.7549e-13 196.5 426)\\\'><stop stop-color=\\\'rgba(163,215,138,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(209,235,188,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,237,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <StatusBars />
      <Nav />
      <div className="absolute flex h-[20.946px] items-center justify-center left-[calc(50%+35.24px)] top-[80.93px] translate-x-[-50%] w-[27.472px]" style={{ "--transform-inner-width": "24.28125", "--transform-inner-height": "14.109375" } as React.CSSProperties}>
        <div className="flex-none rotate-[341.977deg]">
          <div className="h-[14.122px] relative w-[24.295px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
      </div>
      <Cp />
      <Frame2 />
      <Cp1 />
      <p className="absolute font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] left-[195px] not-italic text-[#303437] text-[16px] text-center top-[316px] translate-x-[-50%] w-[156px]">매우 위험한 수치입니다.</p>
      <Frame4 />
      <p className="absolute blur-[5.45px] filter font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] left-[43px] not-italic text-[16px] text-[rgba(48,52,55,0.5)] top-[360px] w-[303px]">당신은 아래 추천 활동을 선택해 다양한 활동을 해보세요!아래 추천 활동을 선택해 다양한 활동을 해보세요!아래 추천 아래 추천 활동을 선택해 다양한 활동을 해보세요!활동을 선택해 다양한 활동을 !!</p>
    </div>
  );
}
