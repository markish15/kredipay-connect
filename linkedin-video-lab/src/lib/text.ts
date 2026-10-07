import type { CSSProperties } from "react";
import { COLORS, FONT, TYPE, type Tone } from "../config";

export const textStyle = (token: keyof typeof TYPE, color: string = COLORS.ink): CSSProperties => {
  const t = TYPE[token];
  return {
    fontFamily: FONT.family,
    fontSize: t.size,
    lineHeight: t.lineHeight,
    letterSpacing: t.tracking,
    fontWeight: t.weight,
    color,
    whiteSpace: "nowrap",
  };
};

export const toneColor = (tone: Tone) => (tone === "ink" ? COLORS.ink : COLORS.muted);
