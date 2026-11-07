"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        anchors: true,
        autoRaf: true,
        smoothWheel: true,
        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
