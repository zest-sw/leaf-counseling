import React from 'react';
import svgPaths from "./svg-paths";

export function Avatar() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute left-0 size-[32px] top-0" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #A3D78A)" id="Background" r="16" />
        </svg>
      </div>
      <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]" data-name="Frame">
        <div className="absolute left-0 size-[24px] top-0" data-name="Frame">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Frame">
              <path d={svgPaths.p88e6380} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
