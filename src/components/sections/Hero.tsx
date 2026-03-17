import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-primary border border-primary/30 bg-primary/5 backdrop-blur-sm px-6 py-2.5 rounded-full hover:border-primary/60 hover:bg-primary/10 hover:shadow-md transition-all duration-300 cursor-default">
              {t('hero.slogan')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            {t('hero.title1')}{' '}
            <span className="text-primary">{t('hero.title2')}</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-foreground/70 max-w-5xl mx-auto">
            {t('hero.body')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/contacto">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {t('hero.ctaPrimary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/soluciones">
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 rounded-2xl border-2 hover:bg-muted hover:shadow-md transition-all duration-300">
                {t('hero.ctaSecondary')}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary">{t('hero.stat1Value')}</div>
              <div className="text-sm text-muted-foreground mt-1">{t('hero.stat1Label')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary">{t('hero.stat2Value')}</div>
              <div className="text-sm text-muted-foreground mt-1">{t('hero.stat2Label')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary">{t('hero.stat3Value')}</div>
              <div className="text-sm text-muted-foreground mt-1">{t('hero.stat3Label')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
