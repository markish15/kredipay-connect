import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CoverageMap = () => {
  const { t } = useTranslation();
  const countries = [
    { name: 'México', code: 'mx' },
    { name: 'Chile', code: 'cl' },
    { name: 'Colombia', code: 'co' },
    { name: 'Argentina', code: 'ar' },
    { name: 'Brasil', code: 'br' },
    { name: 'Uruguay', code: 'uy' },
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            {t('coverageMap.title1')}{' '}
            <span className="text-primary">{t('coverageMap.title2')}</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('coverageMap.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {countries.map((country) => (
            <Card
              key={country.code}
              className="p-4 flex flex-col items-center gap-2 bg-card/60 backdrop-blur-sm border-2 border-border/50 rounded-2xl hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <img
                src={`https://flagcdn.com/w80/${country.code}.png`}
                alt={country.name}
                className="w-10 h-7 object-cover rounded shadow-sm"
              />
              <span className="text-xs font-medium text-foreground text-center leading-tight">
                {country.name}
              </span>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/mercados">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <MapPin className="mr-2 h-5 w-5" />
              {t('coverageMap.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
