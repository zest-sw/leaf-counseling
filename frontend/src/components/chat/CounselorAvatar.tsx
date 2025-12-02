export default function CounselorAvatar() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute left-0 size-[32px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #A3D78A)" r="16" />
        </svg>
      </div>
      <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]">
        <div className="absolute left-0 size-[24px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g>
              <path d="M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20ZM8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12H14.4C14.4 13.3255 13.3255 14.4 12 14.4C10.6745 14.4 9.6 13.3255 9.6 12H8Z" fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
