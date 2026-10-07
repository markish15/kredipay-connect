import React from "react";
import { COLORS, COPY, PANEL, type Market } from "../config";
import { mix } from "../lib/motion";
import { textStyle } from "../lib/text";

type Props = {
  market: Market;
  /** Reveal of the method + market label (left). */
  label: number;
  /** Visibility of amount + status (right). */
  detail: number;
  /** Horizontal drift applied to the right-hand detail as it enters/leaves. */
  detailShift?: number;
  /** 0 → 1 completion of the status check. */
  status: number;
};

/** Content of a transaction row; lives inside a MarketNode that has morphed into a row. */
export const PaymentRow: React.FC<Props> = ({ market, label, detail, detailShift = 0, status }) => {
  const { row } = PANEL;
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: row.textX,
          top: "50%",
          transform: `translateY(calc(-50% + ${mix(6, 0, label)}px))`,
          opacity: label,
        }}
      >
        <div style={textStyle("uiTitle")}>{market.method}</div>
        <div style={{ ...textStyle("uiMeta", COLORS.inkSoft), marginTop: 6 }}>
          {market.country} · {market.currency}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: row.rightPad,
          top: "50%",
          transform: `translate(${detailShift}px, -50%)`,
          opacity: detail,
          textAlign: "right",
        }}
      >
        <div style={{ ...textStyle("uiTitle"), fontFeatureSettings: '"tnum" 1' }}>
          <span style={{ color: COLORS.muted, fontWeight: 400, marginRight: 10 }}>{market.currency}</span>
          {market.amount}
        </div>
        <div
          style={{
            ...textStyle("uiMeta", COLORS.accentDeep),
            marginTop: 6,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 10,
            opacity: Math.min(1, status * 1.6),
          }}
        >
          <StatusCheck progress={status} />
          {COPY.status}
        </div>
      </div>
    </>
  );
};

const StatusCheck: React.FC<{ progress: number }> = ({ progress }) => {
  const size = 20;
  const checkLength = 12;
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={{ display: "block" }}>
      <circle cx={10} cy={10} r={10 * Math.min(1, progress * 1.5)} fill={COLORS.accent} />
      <path
        d="M6 10.4 L8.8 13 L14 7.4"
        fill="none"
        stroke={COLORS.surface}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={checkLength}
        strokeDashoffset={checkLength * (1 - Math.max(0, (progress - 0.35) / 0.65))}
      />
    </svg>
  );
};
