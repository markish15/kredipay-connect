import React from "react";
import { Img, staticFile } from "remotion";
import { LOGO } from "../config";
import { EASE, mix, progress } from "../lib/motion";

export const logoHeight = (width: number) => (width * LOGO.viewBox.height) / LOGO.viewBox.width;

/** Divider rule of the lockup, in pixels relative to the logo's top-left corner. */
export const logoDivider = (width: number) => {
  const s = width / LOGO.viewBox.width;
  return {
    x: (LOGO.divider.x - LOGO.viewBox.x) * s,
    top: (LOGO.divider.top - LOGO.viewBox.y) * s,
    bottom: (LOGO.divider.bottom - LOGO.viewBox.y) * s,
    stroke: LOGO.divider.stroke * s,
  };
};

type Props = {
  left: number;
  top: number;
  width: number;
  /** 0 → 1: mark and wordmark slide out from behind the divider. 1 = untouched logo. */
  reveal?: number;
};

/**
 * The official KredibilityPay lockup, never redrawn or recoloured. During the
 * reveal two clipped copies emerge from either side of the divider rule; once
 * complete the single, unclipped file is shown.
 */
export const Logo: React.FC<Props> = ({ left, top, width, reveal = 1 }) => {
  const height = logoHeight(width);
  const src = staticFile(LOGO.src);
  const img = (offset: number) => (
    <Img
      src={src}
      style={{ position: "absolute", left: offset, top: 0, width, height, display: "block" }}
    />
  );

  if (reveal >= 1) {
    return <div style={{ position: "absolute", left, top, width, height }}>{img(0)}</div>;
  }

  const div = logoDivider(width);
  const splitL = div.x - div.stroke / 2;
  const splitR = div.x + div.stroke / 2;
  const fade = progress(reveal, 0, 0.45, EASE.soft);
  const markShift = mix(splitL * 0.42, 0, reveal);
  const wordShift = mix(-(width - splitR) * 0.28, 0, reveal);

  return (
    <div style={{ position: "absolute", left, top, width, height }}>
      <div style={{ position: "absolute", left: 0, top: 0, width: splitL, height, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, transform: `translateX(${markShift}px)`, opacity: fade }}>
          {img(0)}
        </div>
      </div>
      <div
        style={{ position: "absolute", left: splitR, top: 0, width: width - splitR, height, overflow: "hidden" }}
      >
        <div style={{ position: "absolute", inset: 0, transform: `translateX(${wordShift}px)`, opacity: fade }}>
          {img(-splitR)}
        </div>
      </div>
    </div>
  );
};
