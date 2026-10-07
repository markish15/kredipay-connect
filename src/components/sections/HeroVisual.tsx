import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PaymentMethodLogo from '@/components/PaymentMethodLogo';
import fullLogo from '@/assets/kredibilitypay-logo-full.svg';

// The visual is drawn on a 560×540 canvas. Everything is sized in container-query
// units so the whole composition scales as one piece on any screen width.
const W = 560;
const H = 540;
const u = (n: number) => `${((n * 100) / W).toFixed(3)}cqw`;

const HUB = { x: 280, y: 270, w: 184, h: 100 };
const CHIP = { w: 104, h: 52 };
const CARD_W = 232;
const ROWS = [72, 196, 344, 468];

const leftMethods = ['Pix', 'SPEI', 'OXXO', 'Boleto'];
const rightMethods = ['Khipu', 'Rapipago', 'Servipag', '7-Eleven'];
const currencies = ['BRL', 'MXN', 'COP', 'CLP', 'PEN', 'ARS', 'USD'];

const chips = [
  ...leftMethods.map((method, i) => ({ method, side: 'left' as const, x: 72, y: ROWS[i] })),
  ...rightMethods.map((method, i) => ({ method, side: 'right' as const, x: W - 72, y: ROWS[i] })),
];

const pathFor = (side: 'left' | 'right', y: number) => {
  if (side === 'left') {
    const x0 = 72 + CHIP.w / 2;
    const x1 = HUB.x - HUB.w / 2;
    return `M${x0},${y} C${x0 + 52},${y} ${x1 - 46},${HUB.y} ${x1},${HUB.y}`;
  }
  const x0 = W - 72 - CHIP.w / 2;
  const x1 = HUB.x + HUB.w / 2;
  return `M${x0},${y} C${x0 - 52},${y} ${x1 + 46},${HUB.y} ${x1},${HUB.y}`;
};

const HeroVisual = () => {
  const { t } = useTranslation();

  return (
    <div className="relative mx-auto w-full max-w-[600px] [container-type:inline-size]" aria-hidden>
      <div className="relative" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible">
          {/* Vertical spine: currencies → hub → settled payment */}
          <line x1={HUB.x} y1={126} x2={HUB.x} y2={HUB.y - HUB.h / 2} stroke="hsl(var(--neutral-dark) / 0.18)" strokeDasharray="3 4" />
          <line
            x1={HUB.x}
            y1={HUB.y + HUB.h / 2}
            x2={HUB.x}
            y2={398}
            stroke="hsl(var(--turquoise-dark) / 0.6)"
            strokeDasharray="3 4"
            className="animate-dash-flow"
          />

          {chips.map((chip, i) => {
            const d = pathFor(chip.side, chip.y);
            return (
              <g key={chip.method}>
                <path d={d} fill="none" stroke="hsl(var(--turquoise-dark) / 0.3)" strokeWidth="1" />
                <circle r="3" fill="hsl(var(--turquoise-dark))" className="motion-safe-only">
                  <animateMotion dur="2.8s" begin={`-${(i * 0.35).toFixed(2)}s`} repeatCount="indefinite" path={d} />
                </circle>
                <circle r="7" fill="hsl(var(--turquoise) / 0.25)" className="motion-safe-only">
                  <animateMotion dur="2.8s" begin={`-${(i * 0.35).toFixed(2)}s`} repeatCount="indefinite" path={d} />
                </circle>
              </g>
            );
          })}

          {/* Hub halo */}
          <circle cx={HUB.x} cy={HUB.y} r="120" fill="none" stroke="hsl(var(--turquoise) / 0.25)" />
          <circle cx={HUB.x} cy={HUB.y} r="160" fill="none" stroke="hsl(var(--turquoise) / 0.12)" strokeDasharray="2 6" />
        </svg>

        {/* Payment method chips */}
        {chips.map((chip) => (
          <div
            key={chip.method}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-neutral-dark/10 bg-card shadow-[0_6px_20px_-10px_hsl(var(--neutral-dark)/0.35)]"
            style={{
              left: u(chip.x),
              top: u(chip.y),
              width: u(CHIP.w),
              height: u(CHIP.h),
              borderRadius: u(10),
              padding: u(8),
            }}
          >
            <PaymentMethodLogo method={chip.method} className="h-full w-full object-contain" />
          </div>
        ))}

        {/* Hub */}
        <div
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border border-turquoise/50 bg-card shadow-[0_0_0_6px_hsl(var(--turquoise)/0.12),0_20px_50px_-20px_hsl(var(--turquoise-dark)/0.6)]"
          style={{ left: u(HUB.x), top: u(HUB.y), width: u(HUB.w), height: u(HUB.h), borderRadius: u(14), gap: u(4) }}
        >
          <img src={fullLogo} alt="" style={{ width: u(150), height: u(42) }} />
          <span
            className="flex items-center font-mono uppercase tracking-wider text-neutral-dark/60"
            style={{ fontSize: u(9.5), gap: u(6) }}
          >
            <span className="relative flex" style={{ width: u(6), height: u(6) }}>
              <span className="absolute inset-0 animate-ping-slow rounded-full bg-turquoise" />
              <span className="relative h-full w-full rounded-full bg-turquoise-dark" />
            </span>
            {t('home.visualHub')}
          </span>
        </div>

        {/* Currencies card */}
        <div
          className="absolute animate-float border border-neutral-dark/10 bg-card/90 backdrop-blur"
          style={{ left: u(HUB.x - CARD_W / 2), top: u(30), width: u(CARD_W), borderRadius: u(12), padding: u(12) }}
        >
          <div className="font-mono uppercase tracking-wider text-neutral-dark/50" style={{ fontSize: u(9.5) }}>
            {t('home.visualCurrencies')}
          </div>
          <div className="flex flex-wrap" style={{ gap: u(4), marginTop: u(8) }}>
            {currencies.map((code) => (
              <span
                key={code}
                className="border border-neutral-dark/10 bg-neutral-light font-mono text-neutral-dark"
                style={{ fontSize: u(10), padding: `${u(2)} ${u(5)}`, borderRadius: u(4) }}
              >
                {code}
              </span>
            ))}
            <span
              className="bg-turquoise/20 font-mono font-medium text-turquoise-dark"
              style={{ fontSize: u(10), padding: `${u(2)} ${u(5)}`, borderRadius: u(4) }}
            >
              {t('hero.stat3Value')}
            </span>
          </div>
        </div>

        {/* Settled payment card */}
        <div
          className="absolute animate-float border border-neutral-dark/10 bg-card shadow-[0_24px_50px_-24px_hsl(var(--neutral-dark)/0.45)] [animation-delay:-3s]"
          style={{ left: u(HUB.x - CARD_W / 2), top: u(398), width: u(CARD_W), borderRadius: u(12), padding: u(12) }}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono uppercase tracking-wider text-neutral-dark/50" style={{ fontSize: u(9.5) }}>
              {t('home.visualPayment')}
            </span>
            <span
              className="inline-flex items-center bg-turquoise/20 font-medium text-turquoise-dark"
              style={{ fontSize: u(10), gap: u(3), padding: `${u(2)} ${u(6)}`, borderRadius: u(999) }}
            >
              <Check style={{ width: u(10), height: u(10) }} strokeWidth={3} />
              {t('home.visualApproved')}
            </span>
          </div>
          <div className="flex items-end justify-between" style={{ marginTop: u(8) }}>
            <span className="font-semibold tracking-tight text-neutral-dark" style={{ fontSize: u(22) }}>
              R$ 1.250,00
            </span>
            <span className="font-mono text-neutral-dark/50" style={{ fontSize: u(10), marginBottom: u(4) }}>
              PIX · BRL
            </span>
          </div>
          <div className="flex overflow-hidden bg-neutral-light" style={{ marginTop: u(10), height: u(4), borderRadius: u(4) }}>
            <div className="w-full bg-gradient-to-r from-turquoise-dark to-turquoise" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
