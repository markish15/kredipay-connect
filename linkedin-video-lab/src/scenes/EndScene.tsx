import React from "react";
import { AbsoluteFill, interpolateColors } from "remotion";
import { COLORS, CONSOLIDATION, COPY, END, LOGO, TIMING, VIDEO } from "../config";
import { AnimatedText } from "../components/AnimatedText";
import { Logo, logoDivider, logoHeight } from "../components/Logo";
import { EASE, mix, progress } from "../lib/motion";
import { textStyle } from "../lib/text";
import { useGlobalFrame } from "../lib/timeline";

const C = CONSOLIDATION.convergence;
const E = CONSOLIDATION.endpoint;

/**
 * Scene 5 — the integration line contracts into its endpoint, which travels
 * to the lockup and becomes the divider rule the logo opens from.
 */
export const EndScene: React.FC<{ from: number }> = ({ from }) => {
  const frame = useGlobalFrame(from);
  const t = TIMING.end;

  // Gentle settle of the whole lockup while it resolves.
  const scale = mix(1.03, 1, progress(frame, t.settleStart, VIDEO.durationInFrames - t.settleStart, EASE.out));
  const width = LOGO.width * scale;
  const height = logoHeight(width);
  const baseHeight = logoHeight(LOGO.width);
  const centerY = LOGO.top + baseHeight / 2;
  const left = LOGO.centerX - width / 2;
  const top = centerY - height / 2;
  const div = logoDivider(width);
  const D = { x: left + div.x, y: top + (div.top + div.bottom) / 2 };

  // 1. Line contracts into the endpoint.
  const contract = progress(frame, t.contractStart, t.contractDuration, EASE.inOut);
  // 2. Endpoint travels to the divider and stretches into it.
  const travel = progress(frame, t.travelStart, t.travelDuration, EASE.inOut);
  const stretch = progress(frame, t.travelStart + 8, t.travelDuration - 4, EASE.inOut);
  // 3. Mark and wordmark open out from the divider.
  const reveal = progress(frame, t.revealStart, t.revealDuration, EASE.out);

  const r = CONSOLIDATION.endpointRadius;
  const barW = mix(r * 2, div.stroke, stretch);
  const barH = mix(r * 2, div.bottom - div.top, stretch);
  const barX = mix(E.x, D.x, travel);
  const barY = mix(E.y, D.y, travel);
  const barColor = interpolateColors(stretch, [0, 1], [COLORS.accent, COLORS.logoDivider]);

  const urlIn = progress(frame, t.urlIn, 22, EASE.out);

  return (
    <AbsoluteFill>
      {reveal > 0 ? <Logo left={left} top={top} width={width} reveal={reveal} /> : null}

      <svg width={VIDEO.width} height={VIDEO.height} style={{ position: "absolute", inset: 0 }}>
        {contract < 1 ? (
          <line
            x1={mix(C.x, E.x, contract)}
            y1={C.y}
            x2={E.x}
            y2={E.y}
            stroke={COLORS.accent}
            strokeWidth={CONSOLIDATION.integrationWidth}
            strokeLinecap="round"
          />
        ) : null}
        {reveal < 1 ? (
          <rect
            x={barX - barW / 2}
            y={barY - barH / 2}
            width={barW}
            height={barH}
            rx={Math.min(barW / 2, mix(r, 0, stretch))}
            fill={barColor}
          />
        ) : null}
      </svg>

      <AnimatedText
        lines={[{ text: COPY.tagline, tone: "ink" }]}
        frame={frame}
        token="tagline"
        enterAt={t.taglineIn}
        enterDuration={30}
        align="center"
        style={{ left: 0, width: VIDEO.width, top: LOGO.top + baseHeight + END.taglineGap }}
      />

      <div
        style={{
          ...textStyle("url", COLORS.inkSoft),
          position: "absolute",
          left: 0,
          width: VIDEO.width,
          textAlign: "center",
          bottom: END.urlBottom,
          opacity: urlIn,
          transform: `translateY(${mix(10, 0, urlIn)}px)`,
        }}
      >
        {COPY.url}
      </div>
    </AbsoluteFill>
  );
};
