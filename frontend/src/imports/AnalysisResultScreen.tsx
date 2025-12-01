import Nav from "../components/common/Nav";
import StatusBars from "../components/common/StatusBars";
import imgImage1 from "../assets/34ff20b38e9681b0b00e4579d5e277efb0b475ea.png";

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
          <path d="M11 0C17.0751 0 22 4.70101 22 10.5C22 16.299 17.0751 21 11 21C4.92487 21 0 16.299 0 10.5C0 4.70101 4.92487 0 11 0ZM11 1.82609C5.95254 1.82609 1.91304 5.66953 1.91304 10.5C1.91304 15.3305 5.95254 19.1739 11 19.1739C16.0475 19.1739 20.087 15.3305 20.087 10.5C20.087 5.66953 16.0475 1.82609 11 1.82609ZM11 5.21739C11.5059 5.21739 11.913 5.60832 11.913 6.09783V11.413C11.913 11.9026 11.5059 12.2935 11 12.2935C10.4941 12.2935 10.087 11.9026 10.087 11.413V6.09783C10.087 5.60832 10.4941 5.21739 11 5.21739ZM11 14.7826C11.5976 14.7826 12.087 15.2536 12.087 15.8261C12.087 16.3986 11.5976 16.8696 11 16.8696C10.4024 16.8696 9.91304 16.3986 9.91304 15.8261C9.91304 15.2536 10.4024 14.7826 11 14.7826Z" fill="var(--fill-0, #A3D78A)" id="Vector" />
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
