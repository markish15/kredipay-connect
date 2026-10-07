import { Easing, interpolate, spring } from "remotion";

/** House easing curves. Every move in the film uses one of these. */
export const EASE = {
  /** Expo-style deceleration for reveals and arrivals. */
  out: Easing.bezier(0.16, 1, 0.3, 1),
  /** Symmetric, weighty move between two resting states. */
  inOut: Easing.bezier(0.65, 0, 0.35, 1),
  /** Acceleration for exits. */
  in: Easing.bezier(0.6, 0, 0.9, 0.4),
  /** Gentle drift. */
  soft: Easing.bezier(0.37, 0, 0.63, 1),
} as const;

/** 0→1 progress of a beat that starts at `start` and lasts `duration` frames. */
export const progress = (
  frame: number,
  start: number,
  duration: number,
  easing: (t: number) => number = EASE.out,
) =>
  interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });

/** Critically-damped spring — settles without overshoot. */
export const settle = (frame: number, start: number, fps: number, durationInFrames?: number) =>
  spring({
    frame: frame - start,
    fps,
    config: { damping: 200, stiffness: 110, mass: 0.9 },
    durationInFrames,
  });

export const mix = (a: number, b: number, t: number) => a + (b - a) * t;

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/** Remap t from [a, b] to [0, 1], clamped. */
export const segment = (t: number, a: number, b: number) => clamp01((t - a) / (b - a));
