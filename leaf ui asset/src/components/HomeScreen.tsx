import imgImage1 from "figma:asset/34ff20b38e9681b0b00e4579d5e277efb0b475ea.png";

interface HomeScreenProps {
  onMenuClick: () => void;
  onStartCall: () => void;
}

function StatusBars() {
  return (
    <div className="absolute h-[48px] left-[calc(50%+0.5px)] top-[13px] translate-x-[-50%] w-[390px]" data-name="Status Bars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 48">
        <g id="Status Bars">
          <g id="Battery">
            <rect fill="var(--fill-0, black)" height="13" id="Border" opacity="0.35" rx="3.5" width="25" x="336.333" y="19.3333" />
            <path d="M362.333 24V28C363.138 27.6612 363.661 26.8731 363.661 26C363.661 25.1269 363.138 24.3388 362.333 24" fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="1.33333" width="21" x="338.333" y="21.3333" />
          </g>
          <path d="M318.112 28.959C319.491 27.6804 321.51 27.6802 322.889 28.959C322.958 29.0277 322.998 29.1251 323 29.2275C323.002 29.3301 322.965 29.4291 322.898 29.501L320.739 31.8906C320.676 31.9606 320.59 32 320.5 32C320.41 32 320.324 31.9606 320.261 31.8906L318.102 29.501C318.035 29.4291 317.998 29.3301 318 29.2275C318.002 29.125 318.043 29.0277 318.112 28.959ZM315.108 26.1104C318.147 23.2965 322.853 23.2965 325.892 26.1104C325.96 26.1763 325.999 26.2674 326 26.3623C326.001 26.457 325.963 26.548 325.896 26.6152L324.62 27.8994C324.489 28.0305 324.276 28.0338 324.141 27.9062C323.143 27.0068 321.845 26.5088 320.499 26.5088C319.154 26.5093 317.857 27.0073 316.859 27.9062C316.724 28.0338 316.511 28.0305 316.38 27.8994L315.104 26.6152C315.036 26.5481 314.999 26.457 315 26.3623C315.001 26.2674 315.04 26.1763 315.108 26.1104ZM312.107 23.1934C316.799 18.9355 324.201 18.9356 328.893 23.1934C328.96 23.2566 328.999 23.3434 329 23.4336C329.001 23.5237 328.964 23.6108 328.896 23.6748L327.609 24.9043C327.477 25.0305 327.262 25.0315 327.127 24.9072C325.339 23.2979 322.966 22.4005 320.5 22.4004C318.033 22.4005 315.661 23.2978 313.873 24.9072C313.739 25.0317 313.523 25.0307 313.391 24.9043L312.104 23.6748C312.036 23.6108 311.999 23.5237 312 23.4336C312.001 23.3434 312.039 23.2566 312.107 23.1934Z" fill="var(--fill-0, black)" id="Wifi" />
          <path d="M287.534 27.4004C288.123 27.4007 288.6 27.9149 288.6 28.5498V30.8496C288.6 31.4846 288.123 31.9997 287.534 32H286.466C285.877 31.9998 285.4 31.4846 285.4 30.8496V28.5498C285.4 27.9149 285.877 27.4005 286.466 27.4004H287.534ZM292.834 25C293.423 25.0002 293.9 25.5228 293.9 26.167V30.833C293.9 31.4772 293.423 31.9998 292.834 32H291.766C291.177 31.9997 290.7 31.4772 290.7 30.833V26.167C290.7 25.5228 291.177 25.0003 291.766 25H292.834ZM298.233 22.4004C298.822 22.4004 299.3 22.9156 299.3 23.5518V30.8477C299.3 31.4839 298.822 32 298.233 32H297.167C296.578 32 296.1 31.4839 296.1 30.8477V23.5518C296.1 22.9157 296.578 22.4004 297.167 22.4004H298.233ZM303.534 20C304.123 20.0003 304.6 20.5038 304.6 21.125V30.875C304.6 31.4962 304.123 31.9997 303.534 32H302.466C301.877 31.9999 301.4 31.4962 301.4 30.875V21.125C301.4 20.5038 301.877 20.0001 302.466 20H303.534Z" fill="var(--fill-0, black)" id="Cellular Connection" />
          <g id="Time">
            <path d="M41.2666 19.7231C41.9085 19.7231 42.5173 19.8421 43.0928 20.0801C43.6683 20.3125 44.1774 20.6777 44.6201 21.1758C45.0684 21.6683 45.4198 22.3019 45.6743 23.0767C45.9289 23.8459 46.0562 24.7728 46.0562 25.8574V25.874C46.0562 27.2188 45.8625 28.3698 45.4751 29.3271C45.0877 30.2845 44.5316 31.0205 43.8066 31.5352C43.0872 32.0443 42.2267 32.2988 41.2251 32.2988C40.4891 32.2988 39.825 32.166 39.2329 31.9004C38.6463 31.6292 38.1593 31.2585 37.772 30.7881C37.3901 30.3122 37.1328 29.7699 37 29.1611L36.9834 29.0698H39.0835L39.1167 29.1528C39.2218 29.4295 39.3713 29.673 39.5649 29.8833C39.7642 30.0936 40.0021 30.2568 40.2788 30.373C40.561 30.4837 40.8765 30.5391 41.2251 30.5391C41.856 30.5391 42.3706 30.3537 42.769 29.9829C43.173 29.6066 43.4746 29.1058 43.6738 28.4805C43.8786 27.8496 43.9948 27.1523 44.0225 26.3887C44.028 26.3057 44.0308 26.2254 44.0308 26.1479C44.0308 26.0649 44.0308 25.9847 44.0308 25.9072L43.6572 23.9067C43.6572 23.453 43.5521 23.0407 43.3418 22.6699C43.1315 22.2992 42.8465 22.0059 42.4868 21.79C42.1326 21.5742 41.7314 21.4663 41.2832 21.4663C40.8516 21.4663 40.4559 21.5715 40.0962 21.7817C39.7365 21.992 39.4487 22.2798 39.2329 22.645C39.0171 23.0047 38.9092 23.4087 38.9092 23.8569V23.8735C38.9092 24.3384 39.0116 24.7507 39.2163 25.1104C39.4211 25.4645 39.7005 25.744 40.0547 25.9487C40.4089 26.1535 40.8128 26.2559 41.2666 26.2559C41.7204 26.2559 42.1271 26.1562 42.4868 25.957C42.8465 25.7578 43.1315 25.4811 43.3418 25.127C43.5521 24.7728 43.6572 24.3716 43.6572 23.9233V23.9067H44.1553V26.1147H43.8647C43.7209 26.4302 43.5078 26.7235 43.2256 26.9946C42.9434 27.2658 42.5947 27.4844 42.1797 27.6504C41.7702 27.8164 41.2887 27.8994 40.7354 27.8994C39.9717 27.8994 39.2965 27.7279 38.71 27.3848C38.1234 27.0417 37.6613 26.5713 37.3237 25.9736C36.9917 25.376 36.8257 24.7008 36.8257 23.9482V23.9316C36.8257 23.1182 37.0138 22.396 37.3901 21.7651C37.772 21.1287 38.2977 20.6307 38.9673 20.271C39.6424 19.9058 40.4089 19.7231 41.2666 19.7231Z" fill="var(--fill-0, black)" />
            <path d="M49.8247 30.3896C49.4484 30.3896 49.133 30.2651 48.8784 30.0161C48.6294 29.7616 48.5049 29.4517 48.5049 29.0864C48.5049 28.7157 48.6294 28.4058 48.8784 28.1567C49.133 27.9022 49.4484 27.7749 49.8247 27.7749C50.2065 27.7749 50.522 27.9022 50.771 28.1567C51.02 28.4058 51.1445 28.7157 51.1445 29.0864C51.1445 29.4517 51.02 29.7616 50.771 30.0161C50.522 30.2651 50.2065 30.3896 49.8247 30.3896ZM49.8247 24.2305C49.4484 24.2305 49.133 24.106 48.8784 23.8569C48.6294 23.6024 48.5049 23.2925 48.5049 22.9272C48.5049 22.5565 48.6294 22.2466 48.8784 21.9976C49.133 21.743 49.4484 21.6157 49.8247 21.6157C50.2065 21.6157 50.522 21.743 50.771 21.9976C51.02 22.2466 51.1445 22.5565 51.1445 22.9272C51.1445 23.2925 51.02 23.6024 50.771 23.8569C50.522 24.106 50.2065 24.2305 49.8247 24.2305Z" fill="var(--fill-0, black)" />
            <path d="M59.4038 32V29.7007H53.5435V27.9492C53.8589 27.4124 54.1743 26.8729 54.4897 26.3306C54.8107 25.7882 55.1344 25.2487 55.4609 24.7119C55.793 24.1696 56.1222 23.6356 56.4487 23.1099C56.7808 22.5786 57.11 22.0557 57.4365 21.541C57.7686 21.0208 58.1006 20.5145 58.4326 20.022H61.4458V27.9326H63.0645V29.7007H61.4458V32H59.4038ZM55.5356 27.9824H59.437V21.7319H59.3125C59.069 22.1082 58.8172 22.4956 58.5571 22.894C58.3026 23.2925 58.0452 23.6992 57.7852 24.1143C57.5251 24.5293 57.2677 24.9471 57.0132 25.3677C56.7586 25.7827 56.5068 26.2005 56.2578 26.6211C56.0088 27.0361 55.7681 27.4484 55.5356 27.8579V27.9824Z" fill="var(--fill-0, black)" />
            <path d="M68.02 32V22.1304H67.8706L64.8906 24.2305V22.2217L68.02 20.022H70.1533V32H68.02Z" fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
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
          <g filter="url(#filter0_d_home)" id="menuIcon">
            <path d="M4 4H22V6H4V4ZM4 11H22V13H4V11ZM4 18H22V20H4V18Z" fill="var(--fill-0, black)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_home" width="32" x="-3" y="-4">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_home" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_home" mode="normal" result="shape" />
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
      <div className="absolute content-stretch flex gap-[2px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="[text-shadow:rgba(255,255,255,0.25)_0px_0px_4px] font-['LINE_Seed_Sans_KR:Bold',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">리프</p>
      </div>
      <MenuIcon onClick={onMenuClick} />
    </div>
  );
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
