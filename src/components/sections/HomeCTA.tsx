import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionEyebrow from '@/components/sections/SectionEyebrow';

const HomeCTA = () => {
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

  return (
    <section className="bg-card px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="container relative mx-auto overflow-hidden rounded-2xl bg-turquoise px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
        <div
          className="absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full bg-turquoise-dark/50 blur-[110px]"
          aria-hidden
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <SectionEyebrow index="03">{t('home.ctaEyebrow')}</SectionEyebrow>
            <h2 className="text-balance mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-neutral-dark sm:text-5xl lg:text-7xl">
              {t('homeCTA.title1')} {t('homeCTA.title2')}?
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-lg leading-relaxed text-neutral-dark/80">{t('homeCTA.description')}</p>
            <a
              href="/contacto#demo-form"
              onClick={handleDemoClick}
              className="group mt-8 inline-flex items-center gap-2 rounded-md bg-neutral-dark px-6 py-3.5 text-[15px] font-medium text-neutral-light transition-colors hover:bg-neutral-dark/90"
            >
              {t('homeCTA.cta')}
              <ArrowRight className="h-4 w-4 text-turquoise transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
