import React from "react";
import type { CopyLine, TYPE } from "../config";
import { EASE, mix, progress } from "../lib/motion";
import { textStyle, toneColor } from "../lib/text";

type Props = {
  lines: readonly CopyLine[];
  frame: number;
  token: keyof typeof TYPE;
  /** Global frame the first line starts rising into view. */
  enterAt: number;
  /** Global frame the first line starts leaving (omit to hold). */
  exitAt?: number;
  enterDuration?: number;
  exitDuration?: number;
  stagger?: number;
  align?: "left" | "center";
  style?: React.CSSProperties;
};

/**
 * Editorial line reveal: each line rises out of its own mask, staggered.
 * Exits continue the same upward direction so text never "fades away".
 */
export const AnimatedText: React.FC<Props> = ({
  lines,
  frame,
  token,
  enterAt,
  exitAt,
  enterDuration = 30,
  exitDuration = 20,
  stagger = 5,
  align = "left",
  style,
}) => {
  return (
    <div style={{ position: "absolute", textAlign: align, ...style }}>
      {lines.map((line, i) => {
        const enter = progress(frame, enterAt + i * stagger, enterDuration, EASE.out);
        const exit =
          exitAt === undefined ? 0 : progress(frame, exitAt + i * Math.round(stagger * 0.6), exitDuration, EASE.in);
        const y = mix(130, 0, enter) + mix(0, -130, exit);
        return (
          <div
            key={line.text}
            style={{
              overflow: "hidden",
              // Room for ascenders/descenders inside the mask without changing rhythm.
              padding: "0.08em 0 0.14em",
              margin: "-0.08em 0 -0.14em",
            }}
          >
            <div
              style={{
                ...textStyle(token, toneColor(line.tone)),
                transform: `translateY(${y}%)`,
              }}
            >
              {line.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};
