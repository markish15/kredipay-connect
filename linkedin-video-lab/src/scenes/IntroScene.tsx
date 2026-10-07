import React from "react";
import { AbsoluteFill } from "remotion";
import { COPY, GRID, TIMING } from "../config";
import { AnimatedText } from "../components/AnimatedText";
import { useGlobalFrame } from "../lib/timeline";

/** Scene 1 — the statement. The currency markers beneath it belong to the network layer. */
export const IntroScene: React.FC<{ from: number }> = ({ from }) => {
  const frame = useGlobalFrame(from);
  const t = TIMING.intro;
  return (
    <AbsoluteFill>
      <AnimatedText
        lines={COPY.intro}
        frame={frame}
        token="display"
        enterAt={t.headlineIn}
        exitAt={t.headlineExit}
        enterDuration={32}
        exitDuration={20}
        stagger={6}
        style={{ left: GRID.left, top: GRID.displayTop }}
      />
    </AbsoluteFill>
  );
};
