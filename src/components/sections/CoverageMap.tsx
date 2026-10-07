import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionEyebrow from '@/components/sections/SectionEyebrow';
import { MAP_HEIGHT, MAP_MARKERS, MAP_ROWS, MAP_STEP, MAP_WIDTH } from '@/content/latamDots';

const countries = [
  { name: 'México', code: 'MX' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'El Salvador', code: 'SV' },
  { name: 'Costa Rica', code: 'CR' },
  { name: 'Panamá', code: 'PA' },
  { name: 'Rep. Dominicana', code: 'DO' },
  { name: 'Colombia', code: 'CO' },
  { name: 'Ecuador', code: 'EC' },
  { name: 'Perú', code: 'PE' },
  { name: 'Bolivia', code: 'BO' },
  { name: 'Brasil', code: 'BR' },
  { name: 'Paraguay', code: 'PY' },
  { name: 'Chile', code: 'CL' },
  { name: 'Argentina', code: 'AR' },
  { name: 'Uruguay', code: 'UY' },
];

// Network links between market hubs, drawn as gentle arcs on the map
const links: [string, string][] = [
  ['MX', 'GT'], ['GT', 'SV'], ['SV', 'CR'], ['CR', 'PA'], ['PA', 'DO'], ['PA', 'CO'],
  ['CO', 'EC'], ['EC', 'PE'], ['PE', 'BO'], ['CO', 'BR'], ['BO', 'PY'], ['PY', 'BR'],
  ['PY', 'AR'], ['AR', 'UY'], ['AR', 'CL'], ['PE', 'CL'],
];

// Labels sit left of the hub where neighbours would collide or the coast leaves room
const labelsLeft = new Set(['GT', 'CR', 'EC', 'PE', 'CL', 'AR']);

const markerByCode = Object.fromEntries(MAP_MARKERS.map((m) => [m.code, m]));

const dots = MAP_ROWS.flatMap((row, r) =>
  [...row].flatMap((cell, c) =>
    cell === '.' ? [] : [{ x: c * MAP_STEP + MAP_STEP / 2, y: r * MAP_STEP + MAP_STEP / 2, covered: cell === 'c' }],
  ),
);

const arc = (a: { x: number; y: number }, b: { x: number; y: number }) => {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const bend = 0.22;
  return `M${a.x},${a.y} Q${mx - dy * bend},${my + dx * bend} ${b.x},${b.y}`;
};

const CoverageMap = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-neutral-dark py-24 text-neutral-light lg:py-32">
      <div className="bg-grid-light absolute inset-0" aria-hidden />
      <div
        className="absolute right-0 top-1/3 h-[560px] w-[560px] rounded-full bg-turquoise/15 blur-[140px]"
        aria-hidden
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionEyebrow index="02" tone="dark">
              {t('home.coverageEyebrow')}
            </SectionEyebrow>
            <h2 className="text-balance mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] lg:text-6xl">
              {t('coverageMap.title1')} <span className="text-turquoise">{t('coverageMap.title2')}</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-light/70">
              {t('coverageMap.description')}
            </p>

            <div className="mt-10 flex items-baseline gap-3 border-b border-neutral-light/10 pb-4">
              <span className="text-5xl font-semibold tracking-tight">{countries.length}</span>
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-light/55">
                {t('home.activeMarkets')}
              </span>
            </div>

            <ul className="mt-2 grid grid-cols-2 sm:grid-cols-3">
              {countries.map((country) => (
                <li key={country.code}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(country.code)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(country.code)}
                    onBlur={() => setActive(null)}
                    className={`flex w-full items-center gap-3 border-b border-neutral-light/10 py-3 text-left text-sm transition-colors ${
                      active === country.code ? 'text-turquoise' : 'text-neutral-light/85 hover:text-neutral-light'
                    }`}
                  >
                    <span className="w-6 font-mono text-[11px] text-neutral-light/45">{country.code}</span>
                    {country.name}
                  </button>
                </li>
              ))}
            </ul>

            <Link
              to="/mercados"
              className="group mt-10 inline-flex items-center gap-2 rounded-md bg-turquoise px-6 py-3.5 text-[15px] font-medium text-neutral-dark transition-colors hover:bg-turquoise/90"
            >
              {t('coverageMap.cta')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <svg viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} className="h-auto w-full" role="img" aria-label={t('coverageMap.title2')}>
              {dots.map((d) => (
                <circle
                  key={`${d.x}-${d.y}`}
                  cx={d.x}
                  cy={d.y}
                  r={1.7}
                  fill={d.covered ? 'hsl(var(--turquoise) / 0.55)' : 'hsl(var(--neutral-light) / 0.18)'}
                />
              ))}

              {links.map(([a, b]) => (
                <path
                  key={`${a}-${b}`}
                  d={arc(markerByCode[a], markerByCode[b])}
                  fill="none"
                  stroke="hsl(var(--turquoise) / 0.55)"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                  className="animate-dash-flow"
                />
              ))}

              {MAP_MARKERS.map((m) => {
                const isActive = active === m.code;
                return (
                  <g key={m.code} transform={`translate(${m.x} ${m.y})`}>
                    <circle
                      r="4"
                      fill="hsl(var(--turquoise))"
                      className="origin-center animate-ping-slow [transform-box:fill-box]"
                      style={{ animationDelay: `${(m.x % 7) * 0.3}s` }}
                    />
                    <circle r={isActive ? 7 : 4.5} fill="hsl(var(--neutral-dark))" stroke="hsl(var(--turquoise))" strokeWidth="2" className="transition-all" />
                    <circle r={isActive ? 3 : 1.8} fill="hsl(var(--turquoise))" className="transition-all" />
                    <text
                      x={labelsLeft.has(m.code) ? -9 : 9}
                      y="3.5"
                      textAnchor={labelsLeft.has(m.code) ? 'end' : 'start'}
                      className="font-mono"
                      fontSize={isActive ? 13 : 10}
                      fill={isActive ? 'hsl(var(--turquoise))' : 'hsl(var(--neutral-light) / 0.75)'}
                    >
                      {m.code}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
