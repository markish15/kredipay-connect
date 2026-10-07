import React from "react";
import { AbsoluteFill } from "remotion";
import { COLORS, COPY, GRID, HANDOFF, MARKETS, NETWORK, PANEL, SHADOWS, TIMING, rowCenterY } from "../config";
import { AnimatedText } from "../components/AnimatedText";
import { MarketNode, nodeBox } from "../components/MarketNode";
import { PaymentRow } from "../components/PaymentRow";
import { EASE, mix, progress } from "../lib/motion";
import { textStyle } from "../lib/text";
import { networkCamera, useGlobalFrame } from "../lib/timeline";

const T = TIMING.dashboard;
const tokenStart = (i: number) => T.tokenStart + i * T.tokenStagger;
const morphStart = (i: number) => tokenStart(i) + T.flightDuration - 6;
/** Frame each transaction finishes becoming a row. */
export const tokenLanding = (i: number) => morphStart(i) + T.morphDuration;

/**
 * Scene 3 — the hub opens into a payments surface and each market node travels
 * in to become a live transaction row.
 */
export const DashboardScene: React.FC<{ from: number }> = ({ from }) => {
  const frame = useGlobalFrame(from);
  const t = T;
  const hub = NETWORK.hub;
  const origin = networkCamera(HANDOFF.nodesToRows);

  // Panel grows out of the hub.
  const grow = progress(frame, t.panelGrow, t.panelGrowDuration, EASE.inOut);
  const chrome = 1 - progress(frame, t.chromeFadeStart, t.chromeFadeDuration, EASE.inOut);
  const seed = 20;
  const panel = {
    left: mix(hub.x - seed / 2, PANEL.x, grow),
    top: mix(hub.y - seed / 2, PANEL.y, grow),
    width: mix(seed, PANEL.width, grow),
    height: mix(seed, PANEL.height, grow),
    radius: mix(seed / 2, PANEL.radius, grow),
  };
  // Header settles in once the first row has docked, so arriving chips never cross live text.
  const header = progress(frame, tokenLanding(0) - 4, 18, EASE.out) * chrome;
  const headerRule = progress(frame, t.panelGrow + 16, 26, EASE.inOut);
  const detailOut = progress(frame, t.detailFadeStart, t.detailFadeDuration, EASE.in);

  return (
    <AbsoluteFill>
      <AnimatedText
        lines={COPY.dashboard}
        frame={frame}
        token="headline"
        enterAt={t.headlineIn}
        exitAt={t.headlineExit}
        stagger={6}
        style={{ left: GRID.left, top: GRID.headlineTop }}
      />

      {chrome > 0 ? (
        <div
          style={{
            position: "absolute",
            left: panel.left,
            top: panel.top,
            width: panel.width,
            height: panel.height,
            borderRadius: panel.radius,
            background: COLORS.surface,
            boxShadow: `${SHADOWS.panel}, inset 0 0 0 1px ${COLORS.hairline}`,
            opacity: chrome,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: PANEL.textX,
              right: PANEL.padRight,
              top: 0,
              height: PANEL.header,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: header,
              transform: `translateY(${mix(8, 0, header)}px)`,
            }}
          >
            <div style={textStyle("uiTitle")}>{COPY.panelTitle}</div>
            <div style={{ ...textStyle("uiMeta", COLORS.inkSoft), display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: COLORS.accent }} />
              {COPY.panelLive}
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: PANEL.header - 1,
              height: 1,
              background: COLORS.hairline,
              transform: `scaleX(${headerRule})`,
              transformOrigin: "left center",
            }}
          />
          {MARKETS.slice(0, -1).map((m, i) => (
            <div
              key={m.id}
              style={{
                position: "absolute",
                left: PANEL.textX,
                right: PANEL.padRight,
                top: PANEL.header + PANEL.row.height * (i + 1),
                height: 1,
                background: COLORS.hairline,
                transform: `scaleX(${progress(frame, tokenLanding(i) - 2, 22, EASE.inOut)})`,
                transformOrigin: "left center",
              }}
            />
          ))}
        </div>
      ) : null}

      {frame < HANDOFF.rowsToSources
        ? MARKETS.map((m, i) => {
            // Fly to the row's left edge as a chip, then stretch rightward into the row.
            const flight = progress(frame, tokenStart(i), t.flightDuration, EASE.inOut);
            const morph = progress(frame, morphStart(i), t.morphDuration, EASE.inOut);
            const land = tokenLanding(i);
            // Sequential, not overlapping: the chip label clears before the row label rises.
            const label = progress(frame, morphStart(i) + Math.round(t.morphDuration * 0.4), 14, EASE.out);
            const detailIn = progress(frame, land - 2, 20, EASE.out);
            const status = progress(frame, land + t.statusDelay + i * 3, 16, EASE.out);
            const a = origin(m.node);
            const leftEdge = mix(a.x - NETWORK.chip.width / 2, PANEL.row.x, flight);
            return (
              <MarketNode
                key={m.id}
                market={m}
                x={leftEdge + nodeBox(1, morph).width / 2}
                y={mix(a.y, rowCenterY(i), flight)}
                unfold={1}
                connected={1}
                morph={morph}
              >
                <PaymentRow
                  market={m}
                  label={label}
                  detail={detailIn * (1 - detailOut)}
                  detailShift={mix(14, 0, detailIn) + mix(0, 18, detailOut)}
                  status={status}
                />
              </MarketNode>
            );
          })
        : null}
    </AbsoluteFill>
  );
};
