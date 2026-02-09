import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

const CoverageMap = () => {
  const countries = [
    { name: 'Brasil', code: 'br' },
    { name: 'México', code: 'mx' },
    { name: 'Colombia', code: 'co' },
    { name: 'Argentina', code: 'ar' },
    { name: 'Chile', code: 'cl' },
    { name: 'Perú', code: 'pe' },
    { name: 'Ecuador', code: 'ec' },
    { name: 'Uruguay', code: 'uy' },
    { name: 'Paraguay', code: 'py' },
    { name: 'Bolivia', code: 'bo' },
    { name: 'Costa Rica', code: 'cr' },
    { name: 'Panamá', code: 'pa' },
    { name: 'Guatemala', code: 'gt' },
    { name: 'Rep. Dominicana', code: 'do' },
    { name: 'El Salvador', code: 'sv' },
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Cobertura en toda{' '}
            <span className="text-primary">Latinoamérica</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Presencia activa en los mercados más dinámicos de la región.
          </p>
        </div>

        {/* Countries grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
          {countries.map((country) => (
            <Card
              key={country.code}
              className="p-4 flex flex-col items-center gap-2 bg-card/60 backdrop-blur-sm border-2 border-border/50 rounded-2xl hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <img
                src={`https://flagcdn.com/w80/${country.code}.png`}
                alt={`Bandera de ${country.name}`}
                className="w-10 h-7 object-cover rounded shadow-sm"
              />
              <span className="text-xs font-medium text-foreground text-center leading-tight">
                {country.name}
              </span>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/mercados">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl">
              <MapPin className="mr-2 h-5 w-5" />
              Explorar Mercados
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
