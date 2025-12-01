import svgPaths from "./svg-t4b7sjjr0o";
import imgImage1 from "../assets/34ff20b38e9681b0b00e4579d5e277efb0b475ea.png";

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

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]">
      <p className="[text-shadow:rgba(255,255,255,0.25)_0px_0px_4px] font-['LINE_Seed_Sans_KR:Bold',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">리프</p>
    </div>
  );
}

function MenuIcon({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-[25px] size-[24px] top-1/2 translate-y-[-50%] cursor-pointer"
      data-name="menuIcon"
    >
      <div className="absolute bottom-0 left-[-4.17%] right-[-4.17%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <g filter="url(#filter0_d_1_297)" id="menuIcon">
            <path d={svgPaths.p3372cb80} fill="var(--fill-0, black)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_1_297" width="32" x="-3" y="-4">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_297" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_297" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </button>
  );
}

function Nav() {
  return (
    <div className="absolute h-[60px] left-0 overflow-clip top-[61px] w-[390px]" data-name="nav">
      <Frame2 />
      <MenuIcon />
    </div>
  );
}

function Cp() {
  return (
    <div className="absolute backdrop-blur-[10.253px] backdrop-filter box-border content-stretch flex gap-[10px] h-[223px] items-center justify-center left-[16px] px-[153px] py-[16px] rounded-[12px] top-[218px] w-[358px]" data-name="cp">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_20px_0px_rgba(154,173,144,0.1),0px_0px_20px_0px_rgba(255,255,255,0.15)]" />
    </div>
  );
}

function Cp1() {
  return (
    <div className="absolute backdrop-blur-[10.253px] backdrop-filter box-border content-stretch flex gap-[10px] h-[285px] items-center justify-center left-[16px] px-[153px] py-[16px] rounded-[12px] top-[461px] w-[358px]" data-name="cp">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_20px_0px_rgba(154,173,144,0.1),0px_0px_20px_0px_rgba(255,255,255,0.15)]" />
    </div>
  );
}

function Frame() {
  return <div className="shrink-0 size-[24px]" data-name="Frame" />;
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[60px] top-[245px] w-[274px]">
      <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
          <path d={svgPaths.p787b580} fill="var(--fill-0, #A3D78A)" id="Vector" />
        </svg>
      </div>
      <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#303437] text-[16px] w-[209px]">당신의 마음은 오늘 흐림입니다.</p>
      <Frame />
    </div>
  );
}

function Cp2() {
  return (
    <div className="absolute backdrop-blur-[10.253px] backdrop-filter box-border content-stretch flex gap-[10px] h-[60px] items-center justify-center left-0 px-[153px] py-[16px] rounded-[12px] top-0 w-[358px]" data-name="cp">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_20px_0px_rgba(154,173,144,0.1),0px_0px_20px_0px_rgba(255,255,255,0.15)]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#303437] text-[16px] w-full">당신의 마음 분석 완료!</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[60px] items-start left-[16px] px-[24px] py-[18px] top-[140px] w-[358px]">
      <Cp2 />
      <Frame5 />
    </div>
  );
}



export default function AnalysisResultScreen({ onMenuClick }: { onMenuClick: () => void }) {

  return (

    <div className="bg-gradient-to-r from-[#ffffff] overflow-clip relative rounded-[60px] size-full to-[#ffffff]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 393 852\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.5\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(1.2234e-13 20.85 -17.428 1.7549e-13 196.5 426)\\\'><stop stop-color=\\\'rgba(163,215,138,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(209,235,188,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,237,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>

      <StatusBars />

      <Nav />

      <Nav onMenuClick={onMenuClick} />

      <div className="absolute flex h-[20.946px] items-center justify-center left-[calc(50%+35.24px)] top-[80.93px] translate-x-[-50%] w-[27.472px]" style={{ "--transform-inner-width": "24.28125", "--transform-inner-height": "14.109375" } as React.CSSProperties}>

        <div className="flex-none rotate-[341.977deg]">

          <div className="h-[14.122px] relative w-[24.295px]" data-name="image 1">

            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />

          </div>

        </div>

      </div>

      <Cp />

      <Cp1 />

      <Frame3 />

      <p className="absolute blur-[5.45px] filter font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] left-[51px] not-italic text-[16px] text-[rgba(48,52,55,0.5)] top-[294px] w-[303px]">당신은 아래 추천 활동을 선택해 다양한 활동을 해보세요!아래 추천 활동을 선택해 다양한 활동을 해보세요!아래 추천 아래 추천 활동을 선택해 다양한 활동을 해보세요!활동을 선택해 다양한 활동을 해보세요!!!</p>

      <p className="absolute blur-[5.45px] filter font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] left-[53px] not-italic text-[16px] text-[rgba(48,52,55,0.5)] top-[483px] w-[303px]">당신은 아래 추천 활동을 선택해 다양한 활동을 해보세요!아래 추천 활동을 선택해 다양한 활동을 해보세요!아래 추천 아래 추천 활동을 선택해 다양한 활동을 해보세요!활래 추천 활동을 선택해 다양한 활동을 해보세요!아래 추천 아래 추천 활동을 선택해 다양한 활동을 해보세요!활동을 선택해 래 추천 활동을 선택해 다양한 활동을 해보세요!아래 추천 아래 추천 활동을 선택해 다양한 활동을 해보세요!활동을 선택해 동을 선택해 다양한 활동을 해보세요!!!</p>

      <Frame6 />

    </div>

  );

}
