import React from 'react';

export function ChatBackground({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="overflow-clip relative rounded-[60px] size-full"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 393 852' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.5'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(1.2234e-13 20.85 -17.428 1.7549e-13 196.5 426)'><stop stop-color='rgba(163,215,138,1)' offset='0'/><stop stop-color='rgba(209,235,188,1)' offset='0.5'/><stop stop-color='rgba(255,255,237,1)' offset='1'/></radialGradient></defs></svg>\")",
      }}
    >
      {children}
    </div>
  );
}
