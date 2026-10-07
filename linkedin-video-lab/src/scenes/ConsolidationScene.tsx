import React from "react";
import { AbsoluteFill, interpolateColors, useVideoConfig } from "remotion";
import { COLORS, CONSOLIDATION, COPY, GRID, HANDOFF, MARKETS, PANEL, TIMING, VIDEO, rowCenterY } from "../config";
import { AnimatedText } from "../components/AnimatedText";
import { ConnectionLine, Particle, pointOnPath, straightPath, streamPath } from "../components/ConnectionLine";
import { MarketNode } from "../components/MarketNode";
import { PaymentRow } from "../components/PaymentRow";
import { getLength } from "@remotion/paths";
import { EASE, mix, progress, settle } from "../lib/motion";
import { useGlobalFrame } from "../lib/timeline";

const C = CONSOLIDATION.convergence;
const E = CONSOLIDATION.endpoint;
const ROW_CENTER_X = PANEL.row.x + PANEL.row.width / 2;
export const INTEGRATION_PATH = straightPath(C, E);

/**
 * Scene 4 — the transaction rows shed their detail and become sources; five
 * streams converge into one integration line.
 */
export const ConsolidationScene: React.FC<{ from: number }> = ({ from }) => {
  const frame = useGlobalFrame(from);
  const { fps } = useVideoConfig();
  const t = TIMING.consolidation;

  const streams = MARKETS.map((_, i) => {
    const d = streamPath({ x: CONSOLIDATION.streamStartX, y: rowCenterY(i) }, C);
    const charge = progress(frame, t.chargeStart + i * t.chargeStagger, t.chargeDuration, EASE.inOut);
    return {
      d,
      charge,
      to: progress(frame, t.streamsStart + i * t.streamStagger, t.streamDuration, EASE.inOut),
      from: progress(frame, t.exitStart + 2 + (MARKETS.length - 1 - i) * 2, 20, EASE.inOut),
    };
  });
  const integrationTo = progress(frame, t.integrationStart, t.integrationDuration, EASE.inOut);
  const nodeIn = settle(frame, t.nodeIn, fps);
  const pulse = progress(frame, t.nodeIn + 4, 34, EASE.out);
  const integrationLen = getLength(INTEGRATION_PATH);

  // Transactions flowing from every source, through the junction, into the endpoint.
  const particles = streams.flatMap(({ d }, i) => {
    const streamLen = getLength(d);
    const total = streamLen + integrationLen;
    const out: { x: number; y: number; o: number; key: string }[] = [];
    for (let k = 0; k < t.particleWaves; k++) {
      const start = t.particleStart + i * 2 + k * t.particleInterval;
      const p = progress(frame, start, t.particleTravel + t.particleIntegrationTravel, EASE.inOut);
      if (p <= 0 || p >= 1) continue;
      const dist = p * total;
      const pt =
        dist <= streamLen ? pointOnPath(d, dist / streamLen) : pointOnPath(INTEGRATION_PATH, (dist - streamLen) / integrationLen);
      out.push({ ...pt, o: Math.min(1, p * 8, (1 - p) * 10), key: `${i}-${k}` });
    }
    return out;
  });

  return (
    <AbsoluteFill>
      <AnimatedText
        lines={COPY.consolidation}
        frame={frame}
        token="headline"
        enterAt={t.headlineIn}
        exitAt={t.exitStart}
        style={{ left: GRID.left, top: GRID.headlineTop }}
      />

      <svg width={VIDEO.width} height={VIDEO.height} style={{ position: "absolute", inset: 0 }}>
        {streams.map(({ d, to, from: f, charge }, i) => (
          <ConnectionLine
            key={i}
            d={d}
            from={f}
            to={to}
            width={CONSOLIDATION.streamWidth}
            stroke={interpolateColors(charge, [0, 1], [COLORS.line, COLORS.lineCharged])}
          />
        ))}
        {streams.map(({ charge }, i) => {
          const o = progress(frame, t.streamsStart + i * t.streamStagger, 10) * (1 - progress(frame, t.exitStart, 12));
          return o > 0 ? (
            <circle
              key={i}
              cx={CONSOLIDATION.streamStartX}
              cy={rowCenterY(i)}
              r={4}
              fill={interpolateColors(charge, [0, 1], [COLORS.line, COLORS.accent])}
              opacity={o}
            />
          ) : null;
        })}
        {frame < HANDOFF.integrationToLogo ? (
          <>
            <ConnectionLine
              d={INTEGRATION_PATH}
              to={integrationTo}
              stroke={COLORS.accent}
              width={CONSOLIDATION.integrationWidth}
            />
            {pulse > 0 && pulse < 1 ? (
              <circle
                cx={E.x}
                cy={E.y}
                r={mix(CONSOLIDATION.endpointRadius, 56, pulse)}
                fill="none"
                stroke={COLORS.accent}
                strokeWidth={1.5}
                opacity={0.6 * (1 - pulse)}
              />
            ) : null}
            {nodeIn > 0 ? (
              <circle cx={E.x} cy={E.y} r={CONSOLIDATION.endpointRadius * nodeIn} fill={COLORS.accent} />
            ) : null}
          </>
        ) : null}
        {particles.map((p) => (
          <Particle key={p.key} x={p.x} y={p.y} r={5} opacity={p.o} ring />
        ))}
      </svg>

      <AnimatedText
        lines={[{ text: COPY.integrationLabel, tone: "soft" }]}
        frame={frame}
        token="uiMeta"
        enterAt={t.labelIn}
        exitAt={t.exitStart - 4}
        enterDuration={22}
        exitDuration={14}
        align="center"
        style={{ left: (C.x + E.x) / 2, top: C.y - 58, transform: "translateX(-50%)" }}
      />

      {frame >= HANDOFF.rowsToSources
        ? MARKETS.map((m, i) => {
            const exit = progress(frame, t.exitStart + i * 2, 18, EASE.in);
            return (
              <div
                key={m.id}
                style={{ position: "absolute", inset: 0, opacity: 1 - exit, transform: `translateX(${-16 * exit}px)` }}
              >
                <MarketNode market={m} x={ROW_CENTER_X} y={rowCenterY(i)} unfold={1} connected={1} morph={1}>
                  <PaymentRow market={m} label={1} detail={0} status={1} />
                </MarketNode>
              </div>
            );
          })
        : null}
    </AbsoluteFill>
  );
};
