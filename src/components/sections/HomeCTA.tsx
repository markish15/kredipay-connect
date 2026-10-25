import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
    <section className="py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
          {t('homeCTA.title1')}{' '}
          <span className="text-primary">{t('homeCTA.title2')}</span>?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('homeCTA.description')}
        </p>
        <a href="/contacto#demo-form" onClick={handleDemoClick}>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            {t('homeCTA.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default HomeCTA;
