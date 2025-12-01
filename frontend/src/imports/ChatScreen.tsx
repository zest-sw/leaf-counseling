import svgPaths from "./svg-q12y9eg68c";
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

function Frame16() {
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
          <g filter="url(#filter0_d_1_268)" id="menuIcon">
            <path d={svgPaths.p3372cb80} fill="var(--fill-0, black)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_1_268" width="32" x="-3" y="-4">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_268" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_268" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </button>
  );
}

function Nav({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="absolute h-[60px] left-0 overflow-clip top-[61px] w-[390px]" data-name="nav">
      <Frame16 />
      <MenuIcon onClick={onMenuClick} />
    </div>
  );
}

function TextBox() {
  return (
    <div className="bg-[#a3d78a] h-[49px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] w-full" data-name="Text Box">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[49px] items-center justify-between p-[16px] relative w-full">
          <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
              <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative text-[16px] text-center text-white w-full">나 오늘 우울해서 빵샀어</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[145px] top-0 w-[200px]" data-name="Message">
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <TextBox />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[49px] relative shrink-0 w-full">
      <Message />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p88e6380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]" data-name="Frame">
      <Frame />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute left-0 size-[32px] top-0" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #A3D78A)" id="Background" r="16" />
        </svg>
      </div>
      <Frame1 />
    </div>
  );
}

function TextBox1() {
  return (
    <div className="bg-white box-border content-stretch flex h-[49px] items-center justify-between p-[16px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-[134px]" data-name="Text Box">
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px]" />
      <p className="basis-0 font-['LINE_Seed_Sans_KR:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#303437] text-[16px] text-center">무슨 일 있었어?</p>
    </div>
  );
}

function Message1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-0 w-[249px]" data-name="Message">
      <Frame9 />
      <TextBox1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[49px] relative shrink-0 w-full">
      <Message1 />
    </div>
  );
}

function MessageFromBot() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[345px]" data-name="Message from Bot">
      <Frame17 />
    </div>
  );
}

function TextBox2() {
  return (
    <div className="bg-[#a3d78a] box-border content-stretch flex h-[49px] items-center justify-between p-[16px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] w-[121px]" data-name="Text Box">
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative text-[16px] text-center text-white w-full">말하기 싫어</p>
        </div>
      </div>
    </div>
  );
}

function Message2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-end left-[145px] top-0 w-[200px]" data-name="Message">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <TextBox2 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[49px] relative shrink-0 w-full">
      <Message2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p88e6380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]" data-name="Frame">
      <Frame2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute left-0 size-[32px] top-0" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #A3D78A)" id="Background" r="16" />
        </svg>
      </div>
      <Frame3 />
    </div>
  );
}

function TextBox3() {
  return (
    <div className="bg-white box-border content-stretch flex h-[49px] items-center justify-between p-[16px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-[193px]" data-name="Text Box">
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px]" />
      <p className="basis-0 font-['LINE_Seed_Sans_KR:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#303437] text-[16px] text-center">나한텐 편하게 말해도 돼</p>
    </div>
  );
}

function Message3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-0 w-[249px]" data-name="Message">
      <Frame10 />
      <TextBox3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[49px] relative shrink-0 w-full">
      <Message3 />
    </div>
  );
}

function MessageFromBot1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[345px]" data-name="Message from Bot">
      <Frame18 />
    </div>
  );
}

function TextBox4() {
  return (
    <div className="bg-[#a3d78a] box-border content-stretch flex h-[49px] items-center justify-between p-[16px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] w-[145px]" data-name="Text Box">
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative text-[16px] text-center text-white w-full">시험을 망쳤는데</p>
        </div>
      </div>
    </div>
  );
}

function Message4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-end left-[145px] top-0 w-[200px]" data-name="Message">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <TextBox4 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[49px] relative shrink-0 w-full">
      <Message4 />
    </div>
  );
}

function TextBox5() {
  return (
    <div className="bg-[#a3d78a] box-border content-stretch flex h-[49px] items-center justify-between p-[16px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] w-[188px]" data-name="Text Box">
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <p className="font-['LINE_Seed_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative text-[16px] text-center text-white w-full">털어놓을 친구가 없네...</p>
        </div>
      </div>
    </div>
  );
}

function Message5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-end left-[145px] top-0 w-[200px]" data-name="Message">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <TextBox5 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[49px] relative shrink-0 w-full">
      <Message5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p88e6380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]" data-name="Frame">
      <Frame4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute left-0 size-[32px] top-0" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #A3D78A)" id="Background" r="16" />
        </svg>
      </div>
      <Frame5 />
    </div>
  );
}

function TextBox6() {
  return (
    <div className="bg-white box-border content-stretch flex h-[49px] items-center justify-between p-[16px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-[209px]" data-name="Text Box">
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px]" />
      <p className="basis-0 font-['LINE_Seed_Sans_KR:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#303437] text-[16px] text-center">그래도 열심히 했잖아 ㅎㅎ</p>
    </div>
  );
}

function Message6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-0 w-[249px]" data-name="Message">
      <Frame11 />
      <TextBox6 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[49px] relative shrink-0 w-full">
      <Message6 />
    </div>
  );
}

function MessageFromBot2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[345px]" data-name="Message from Bot">
      <Frame20 />
    </div>
  );
}

function MessageFromBot3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[345px]" data-name="Message from Bot">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#72777a] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Wed 2:19 AM
      </p>
      <Frame13 />
      <MessageFromBot />
      <Frame14 />
      <MessageFromBot1 />
      <Frame15 />
      <Frame19 />
      <MessageFromBot2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p88e6380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]" data-name="Frame">
      <Frame6 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute left-0 size-[32px] top-0" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #A3D78A)" id="Background" r="16" />
        </svg>
      </div>
      <Frame7 />
    </div>
  );
}

function TextBox7() {
  return (
    <div className="bg-white box-border content-stretch flex h-[49px] items-center justify-between p-[16px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-[239px]" data-name="Text Box">
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px]" />
      <p className="basis-0 font-['LINE_Seed_Sans_KR:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#303437] text-[16px] text-center">{`오늘의 전화로 얘기를 들려줘 👋 `}</p>
    </div>
  );
}

function Message7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-0 w-[285px]" data-name="Message">
      <Frame12 />
      <TextBox7 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[49px] relative shrink-0 w-full">
      <Message7 />
    </div>
  );
}

function MessageFromBot4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[345px]" data-name="Message from Bot">
      <Frame21 />
    </div>
  );
}

function MessageFromBot5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[345px]" data-name="Message from Bot">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#72777a] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Thu 10:00 PM
      </p>
      <MessageFromBot4 />
    </div>
  );
}

function BotMessage() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center justify-center left-[24px] top-[135px]" data-name="Bot Message">
      <MessageFromBot3 />
      <MessageFromBot5 />
    </div>
  );
}

export default function ChatScreen({ onMenuClick }: { onMenuClick: () => void }) {
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
      <BotMessage />
    </div>
  );
}
