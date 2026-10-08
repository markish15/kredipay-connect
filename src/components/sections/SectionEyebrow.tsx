import type { ReactNode } from 'react';

interface SectionEyebrowProps {
  index: string;
  children: ReactNode;
  tone?: 'light' | 'dark';
}

/** Mono section label, e.g. "01 — Métodos de pago". */
const SectionEyebrow = ({ index, children, tone = 'light' }: SectionEyebrowProps) => (
  <div
    className={`flex items-center gap-3 font-mono text-xs uppercase tracking-wider ${
      tone === 'dark' ? 'text-neutral-light/60' : 'text-neutral-dark/55'
    }`}
  >
    <span className={tone === 'dark' ? 'text-turquoise' : 'text-turquoise-dark'}>{index}</span>
    <span className={`h-px w-8 ${tone === 'dark' ? 'bg-neutral-light/20' : 'bg-neutral-dark/20'}`} />
    {children}
  </div>
);

export default SectionEyebrow;
