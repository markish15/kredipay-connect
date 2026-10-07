import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HeroVisual from '@/components/sections/HeroVisual';

const Hero = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/contacto') {
      document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contacto#demo-form');
    }
  };

  const stats = [
    { value: t('hero.stat1Value'), label: t('hero.stat1Label') },
    { value: t('hero.stat2Value'), label: t('hero.stat2Label') },
    { value: t('hero.stat3Value'), label: t('hero.stat3Label') },
  ];

  return (
    <section className="relative overflow-hidden border-b border-neutral-dark/10">
      <div className="bg-grid mask-radial absolute inset-0" aria-hidden />
      <div
        className="absolute -right-40 top-10 h-[640px] w-[640px] rounded-full bg-turquoise/25 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-turquoise-dark/10 blur-[120px]"
        aria-hidden
      />

      <div className="container relative mx-auto px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-dark/10 bg-card/70 py-1 pl-1 pr-3 font-mono text-[11px] uppercase tracking-wider text-neutral-dark/70 backdrop-blur">
              <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-turquoise/15">
                <span className="h-1.5 w-1.5 rounded-full bg-turquoise-dark" />
              </span>
              {t('hero.slogan')}
            </div>

            <h1 className="text-balance mt-7 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-neutral-dark sm:text-6xl lg:text-[5.25rem]">
              {t('hero.title1')}{' '}
              <span className="bg-gradient-to-r from-turquoise-dark to-turquoise bg-clip-text text-transparent">
                {t('hero.title2')}
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-dark/70">{t('hero.body')}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contacto#demo-form"
                onClick={handleDemoClick}
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-neutral-dark px-6 py-3.5 text-[15px] font-medium text-neutral-light shadow-[0_8px_24px_-8px_hsl(var(--neutral-dark)/0.5)] transition-colors hover:bg-neutral-dark/90"
              >
                {t('hero.ctaPrimary')}
                <ArrowRight className="h-4 w-4 text-turquoise transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/soluciones"
                className="inline-flex items-center justify-center rounded-md border border-neutral-dark/15 bg-card/70 px-6 py-3.5 text-[15px] font-medium text-neutral-dark backdrop-blur transition-colors hover:border-neutral-dark/30"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </div>

            <dl className="mt-14 grid max-w-xl grid-cols-3 divide-x divide-neutral-dark/10 border-y border-neutral-dark/10">
              {stats.map((stat) => (
                <div key={stat.label} className="px-4 py-5 first:pl-0">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-neutral-dark/55 sm:text-[11px]">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-semibold tracking-tight text-neutral-dark sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-fade-up [animation-delay:150ms]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
