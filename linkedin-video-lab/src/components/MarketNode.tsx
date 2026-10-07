import React from "react";
import { interpolateColors } from "remotion";
import { COLORS, NETWORK, PANEL, SHADOWS, type Market } from "../config";
import { mix, segment } from "../lib/motion";
import { textStyle } from "../lib/text";

type Props = {
  market: Market;
  /** Centre of the object in frame coordinates. */
  x: number;
  y: number;
  /** 0 = bare currency marker (opening), 1 = market chip (network). */
  unfold: number;
  /** 0 = idle, 1 = connected to the network (status dot turns accent). */
  connected: number;
  /** 0 = market chip, 1 = transaction row inside the dashboard. */
  morph?: number;
  /** Visibility of the opening currency marker. */
  markerOpacity?: number;
  children?: React.ReactNode;
};

const { dot, chip } = NETWORK;

/** Size of the object for a given unfold/morph state (shared with scenes that position it). */
export const nodeBox = (unfold: number, morph: number) => {
  const chipW = mix(dot, chip.width, unfold);
  const chipH = mix(dot, chip.height, unfold);
  return {
    width: mix(chipW, PANEL.row.width, morph),
    height: mix(chipH, PANEL.row.height, morph),
    radius: mix(mix(dot / 2, chip.radius, unfold), 0, morph),
  };
};

/**
 * One continuous object per market: it begins as a currency marker, unfolds
 * into a network node, and later stretches into a dashboard transaction row.
 */
export const MarketNode: React.FC<Props> = ({
  market,
  x,
  y,
  unfold,
  connected,
  morph = 0,
  markerOpacity = 1,
  children,
}) => {
  const { width: w, height: h, radius } = nodeBox(unfold, morph);
  const surface = unfold * (1 - segment(morph, 0, 0.6));

  const chipDotX = mix(dot / 2, chip.padX + dot / 2, unfold);
  const dotX = mix(chipDotX, PANEL.row.dotX, morph);

  const dotColor = interpolateColors(connected, [0, 1], [COLORS.muted, COLORS.accent]);
  const markerAlpha = markerOpacity * (1 - segment(unfold, 0, 0.35));
  const labelAlpha = segment(unfold, 0.45, 1) * (1 - segment(morph, 0, 0.3));

  return (
    <div
      style={{
        position: "absolute",
        left: x - w / 2,
        top: y - h / 2,
        width: w,
        height: h,
        borderRadius: radius,
      }}
    >
      {/* Surface: drawn as its own layer so it can dissolve independently of content. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: radius,
          background: COLORS.surface,
          boxShadow: `${SHADOWS.chip}, inset 0 0 0 1px ${COLORS.hairline}`,
          opacity: surface,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: dotX - dot / 2,
          top: h / 2 - dot / 2,
          width: dot,
          height: dot,
          borderRadius: dot / 2,
          background: dotColor,
          opacity: Math.max(markerOpacity, unfold),
        }}
      />

      {markerAlpha > 0.001 ? (
        <div
          style={{
            ...textStyle("uiMeta", COLORS.inkSoft),
            position: "absolute",
            left: dotX + dot / 2 + 10,
            top: h / 2,
            transform: "translateY(-50%)",
            opacity: markerAlpha,
          }}
        >
          {market.currency}
        </div>
      ) : null}

      {labelAlpha > 0.001 ? (
        <div
          style={{
            ...textStyle("uiBody"),
            position: "absolute",
            left: chip.padX + dot + chip.gap,
            top: h / 2,
            transform: `translate(${mix(-6, 0, segment(unfold, 0.45, 1))}px, -50%)`,
            opacity: labelAlpha,
          }}
        >
          {market.country}
          <span style={{ color: COLORS.muted, fontWeight: 400, marginLeft: 10 }}>{market.currency}</span>
        </div>
      ) : null}

      {children}
    </div>
  );
};
