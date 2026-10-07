import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import { COLORS, GRID, MOUNT, TIMING, VIDEO } from "./config";
import { EASE, progress } from "./lib/motion";
import { loadBrandFonts } from "./lib/fonts";
import { IntroScene } from "./scenes/IntroScene";
import { NetworkScene } from "./scenes/NetworkScene";
import { DashboardScene } from "./scenes/DashboardScene";
import { ConsolidationScene } from "./scenes/ConsolidationScene";
import { EndScene } from "./scenes/EndScene";

loadBrandFonts();

/** Quiet column guides: the grid every scene aligns to. They step back for the end card. */
const Guides: React.FC = () => {
  const frame = useCurrentFrame();
  const t = TIMING.guides;
  const out = 1 - progress(frame, t.fadeOutStart, t.fadeOutDuration, EASE.inOut);
  return (
    <svg width={VIDEO.width} height={VIDEO.height} style={{ position: "absolute", inset: 0, opacity: out }}>
      {GRID.guides.map((x) => (
        <line key={x} x1={x} x2={x} y1={0} y2={VIDEO.height} stroke={COLORS.guide} strokeWidth={1} strokeDasharray="3 7" />
      ))}
    </svg>
  );
};

const mount = (key: keyof typeof MOUNT) => ({
  from: MOUNT[key].from,
  durationInFrames: MOUNT[key].to - MOUNT[key].from,
});

export const LinkedInDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, overflow: "hidden" }}>
      <Guides />
      <Sequence {...mount("network")} name="1–2 · Markets → network">
        <NetworkScene from={MOUNT.network.from} />
      </Sequence>
      <Sequence {...mount("intro")} name="1 · Opening statement">
        <IntroScene from={MOUNT.intro.from} />
      </Sequence>
      <Sequence {...mount("dashboard")} name="3 · Dashboard">
        <DashboardScene from={MOUNT.dashboard.from} />
      </Sequence>
      <Sequence {...mount("consolidation")} name="4 · Consolidation">
        <ConsolidationScene from={MOUNT.consolidation.from} />
      </Sequence>
      <Sequence {...mount("end")} name="5 · End card">
        <EndScene from={MOUNT.end.from} />
      </Sequence>
    </AbsoluteFill>
  );
};
