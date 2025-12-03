import React from 'react';
import Nav from '../components/common/Nav';
import svgPaths from "./svg-t4b7sjjr0o.ts";
import imgImage1 from "../assets/34ff20b38e9681b0b00e4579d5e277efb0b475ea.png";
import MoodAnalysisCard from "../components/MoodAnalysisCard";
import ActivityRecommendation from "../components/ActivityRecommendation";




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
  const moodIcon = (
    <div className="h-[21px] relative shrink-0 w-[22px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <path d={svgPaths.p787b580} fill="var(--fill-0, #A3D78A)" id="Vector" />
      </svg>
    </div>
  );

  const recommendedActivities = [
    {
      id: "1",
      title: "산책하기",
      description: "가벼운 산책으로 기분 전환을 해보세요",
      icon: "🚶",
    },
    {
      id: "2",
      title: "명상 및 호흡",
      description: "깊은 호흡과 명상으로 마음을 안정시켜보세요",
      icon: "🧘",
    },
    {
      id: "3",
      title: "음악 감상",
      description: "좋아하는 음악을 들으며 휴식을 취해보세요",
      icon: "🎵",
    },
    {
      id: "4",
      title: "일기 쓰기",
      description: "오늘의 감정을 글로 표현해보세요",
      icon: "📝",
    },
  ];

  return (
    <div className="chat-screen-background bg-gradient-to-r from-[#ffffff] overflow-clip relative rounded-[60px] size-full to-[#ffffff]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 393 852\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.5\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(1.2234e-13 20.85 -17.428 1.7549e-13 196.5 426)\\\'><stop stop-color=\\\'rgba(163,215,138,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(209,235,188,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,237,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <Nav onMenuClick={onMenuClick} />
      <div className="absolute flex h-[20.946px] items-center justify-center left-[calc(50%+35.24px)] top-[80.93px] translate-x-[-50%] w-[27.472px]" style={{ "--transform-inner-width": "24.28125", "--transform-inner-height": "14.109375" } as React.CSSProperties}>
        <div className="flex-none rotate-[341.977deg]">
          <div className="h-[14.122px] relative w-[24.295px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
      </div>
      
      <Frame6 />
      
      <MoodAnalysisCard
        mood="당신의 마음은 오늘 흐림입니다."
        icon={moodIcon}
        description="오늘은 기분이 조금 가라앉아 있네요. 괜찮아요, 누구에게나 이런 날은 있답니다. 천천히 마음을 돌보는 시간을 가져보세요."
      />
      
      <ActivityRecommendation activities={recommendedActivities} />
    </div>
  );
}
