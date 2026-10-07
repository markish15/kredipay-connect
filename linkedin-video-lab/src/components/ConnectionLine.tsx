import { getLength, getPointAtLength } from "@remotion/paths";
import React from "react";
import { COLORS } from "../config";

type Pt = { x: number; y: number };

export const straightPath = (a: Pt, b: Pt) => `M ${a.x} ${a.y} L ${b.x} ${b.y}`;

/** Horizontal-tangent S-curve: leaves `a` flat, arrives at `b` flat. */
export const streamPath = (a: Pt, b: Pt, pull = 0.55) => {
  const dx = (b.x - a.x) * pull;
  return `M ${a.x} ${a.y} C ${a.x + dx} ${a.y}, ${b.x - dx} ${b.y}, ${b.x} ${b.y}`;
};

export const pointOnPath = (d: string, t: number): Pt => {
  const length = getLength(d);
  const p = getPointAtLength(d, Math.min(length, Math.max(0, t * length)));
  return { x: p?.x ?? 0, y: p?.y ?? 0 };
};

type Props = {
  d: string;
  /** Visible window along the path, 0–1. Animate `to` to draw, `from` to retract. */
  from?: number;
  to: number;
  stroke?: string;
  width?: number;
  opacity?: number;
};

/** A thin network path that draws on and retracts along its own length. */
export const ConnectionLine: React.FC<Props> = ({
  d,
  from = 0,
  to,
  stroke = COLORS.line,
  width = 1.5,
  opacity = 1,
}) => {
  const length = getLength(d);
  const visible = (to - from) * length;
  if (visible <= width || opacity <= 0) {
    return null;
  }
  return (
    <path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      strokeDasharray={`${visible} ${length * 2}`}
      strokeDashoffset={-from * length}
      opacity={opacity}
    />
  );
};

/** A transaction travelling along a path. */
export const Particle: React.FC<{ x: number; y: number; r: number; opacity: number; ring?: boolean }> = ({
  x,
  y,
  r,
  opacity,
  ring = false,
}) =>
  opacity <= 0.001 ? null : (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={COLORS.accent}
      stroke={ring ? COLORS.background : "none"}
      strokeWidth={ring ? 2 : 0}
      opacity={opacity}
    />
  );
