import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';

const GeographicCoverage = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const regions = [
    {
      name: 'Latinoamérica',
      countries: [
        { name: 'Brasil', methods: ['Pix', 'Boleto'] },
        { name: 'México', methods: ['SPEI', 'OXXO'] },
        { name: 'Colombia', methods: ['PSE'] },
        { name: 'Perú', methods: ['PagoEfectivo'] },
        { name: 'Chile', methods: ['WebPay'] },
      ]
    },
    {
      name: 'África',
      countries: [
        { name: 'Kenia', methods: ['M-Pesa'] },
        { name: 'Sudáfrica', methods: ['EFT'] },
        { name: 'Nigeria', methods: ['Mobile Money'] },
        { name: 'Ghana', methods: ['Mobile Money'] },
        { name: 'Egipto', methods: ['Fawry'] },
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Cobertura Geográfica</span> Global
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Métodos de pago locales en los mercados más dinámicos de Latinoamérica y África.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {regions.map((region, regionIndex) => (
            <Card key={regionIndex} className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-3xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{region.name}</h3>
                </div>

                <div className="grid gap-4">
                  {region.countries.map((country, countryIndex) => (
                    <div 
                      key={countryIndex} 
                      className={`flex items-center justify-between p-4 bg-background/60 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-background/80 hover:scale-102 ${
                        hoveredCountry === country.name ? 'ring-2 ring-primary shadow-lg' : ''
                      }`}
                      onMouseEnter={() => setHoveredCountry(country.name)}
                      onMouseLeave={() => setHoveredCountry(null)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center transition-transform duration-300 ${
                          hoveredCountry === country.name ? 'scale-110' : ''
                        }`}>
                          <div className="w-4 h-4 bg-primary rounded-full"></div>
                        </div>
                        <span className="font-semibold text-foreground">{country.name}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {country.methods.map((method, methodIndex) => (
                          <Badge 
                            key={methodIndex} 
                            variant="secondary" 
                            className="bg-primary/10 text-primary hover:bg-primary/20 text-xs transition-colors"
                          >
                            {method}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA to detailed page */}
        <div className="text-center mt-12">
          <Link to="/cobertura">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Ver Cobertura Completa <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GeographicCoverage;