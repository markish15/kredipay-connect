import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { COLORS, EDGES, HANDOFF, MARKETS, NETWORK, TIMING, VIDEO } from "../config";
import { ConnectionLine, Particle, pointOnPath, straightPath } from "../components/ConnectionLine";
import { MarketNode } from "../components/MarketNode";
import { EASE, mix, progress, settle } from "../lib/motion";
import { marketIndex, networkCamera, useGlobalFrame } from "../lib/timeline";

/**
 * Scenes 1–2 — five currency markers unfold into market nodes, connect into a
 * regional mesh, then re-route to a single hub: the point the dashboard grows from.
 */
export const NetworkScene: React.FC<{ from: number }> = ({ from }) => {
  const frame = useGlobalFrame(from);
  const { fps } = useVideoConfig();
  const t = TIMING.network;
  const cam = networkCamera(frame);
  const hub = NETWORK.hub;
  const pos = MARKETS.map((m) => cam(m.node));

  // Mesh between markets.
  const meshFade = 1 - 0.7 * progress(frame, t.meshFadeStart, 20, EASE.inOut);
  const meshOut = 1 - progress(frame, t.retractStart, t.retractDuration, EASE.inOut);
  const edges = EDGES.map(([a, b], e) => {
    const d = straightPath(pos[marketIndex(a)], pos[marketIndex(b)]);
    const to = progress(frame, t.edgesStart + e * t.edgeStagger, t.edgeDuration, EASE.inOut);
    return { d, to, e };
  });

  // Transactions moving across the mesh.
  const meshParticles = edges.flatMap(({ d, e }) => {
    const out: { x: number; y: number; o: number; key: string }[] = [];
    for (let k = 0; k < 4; k++) {
      const start = t.particlesStart + e * 4 + k * 13;
      if (start + 28 > t.particlesEnd + 20) break;
      const p = progress(frame, start, 28, EASE.inOut);
      if (p <= 0 || p >= 1) continue;
      const along = e % 2 === 0 ? p : 1 - p;
      const pt = pointOnPath(d, along);
      out.push({ ...pt, o: Math.sin(Math.PI * p) * meshFade, key: `m${e}-${k}` });
    }
    return out;
  });

  // Spokes re-route every market to one hub.
  const hubIn = settle(frame, t.hubIn, fps);
  const hubVisible = frame < HANDOFF.nodesToRows + 30;
  const spokes = pos.map((p, i) => ({
    d: straightPath(p, hub),
    to: progress(frame, t.spokesStart + i * t.spokeStagger, t.spokeDuration, EASE.inOut),
    from: progress(frame, t.retractStart + i * 2, t.retractDuration, EASE.inOut),
  }));
  const spokeParticles = spokes.flatMap(({ d }, i) =>
    [0, 1].map((k) => {
      const start = t.spokesStart + 12 + i * 2 + k * 12;
      const p = progress(frame, start, 18, EASE.in);
      const pt = pointOnPath(d, p);
      return { ...pt, o: p > 0 && p < 1 ? Math.sin(Math.PI * Math.min(1, p * 1.4)) : 0, key: `s${i}-${k}` };
    }),
  );

  return (
    <AbsoluteFill>
      <svg width={VIDEO.width} height={VIDEO.height} style={{ position: "absolute", inset: 0 }}>
        {edges.map(({ d, to, e }) => (
          <ConnectionLine key={e} d={d} to={to} width={NETWORK.edgeWidth} opacity={meshFade * meshOut} />
        ))}
        {spokes.map(({ d, to, from: f }, i) => (
          <ConnectionLine
            key={i}
            d={d}
            from={f}
            to={to}
            stroke={COLORS.accent}
            width={NETWORK.spokeWidth}
            opacity={0.75}
          />
        ))}
        {meshParticles.map((p) => (
          <Particle key={p.key} x={p.x} y={p.y} r={NETWORK.particleRadius} opacity={p.o} />
        ))}
        {spokeParticles.map((p) => (
          <Particle key={p.key} x={p.x} y={p.y} r={NETWORK.particleRadius} opacity={p.o} ring />
        ))}
        {hubVisible && hubIn > 0 ? (
          <g transform={`translate(${hub.x} ${hub.y}) scale(${hubIn})`}>
            <circle r={20} fill={COLORS.background} stroke={COLORS.accentSoft} strokeWidth={1.5} />
            <circle r={7} fill={COLORS.accent} />
          </g>
        ) : null}
      </svg>

      {frame < HANDOFF.nodesToRows
        ? MARKETS.map((m, i) => {
            const intro = TIMING.intro;
            const marker = mix(
              intro.markerStartOpacity,
              1,
              progress(frame, intro.markersIn + i * intro.markerStagger, 24, EASE.out),
            );
            const unfold = progress(frame, t.unfoldStart + i * t.unfoldStagger, t.unfoldDuration, EASE.out);
            const connected = progress(frame, t.edgesStart + 12 + i * 5, 14, EASE.out);
            return (
              <div key={m.id} style={{ position: "absolute", inset: 0, opacity: marker }}>
                <MarketNode
                  market={m}
                  x={pos[i].x}
                  y={pos[i].y}
                  unfold={unfold}
                  connected={connected}
                />
              </div>
            );
          })
        : null}
    </AbsoluteFill>
  );
};
