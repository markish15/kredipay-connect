import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';
import { MapPin, CreditCard, Globe } from 'lucide-react';
import PaymentMethodLogo from '@/components/PaymentMethodLogo';

const Cobertura = () => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const regions = [
    {
      name: t('cobertura.latinoamerica'),
      color: 'text-primary',
      countries: [
        { name: 'Brasil', code: 'BR', methods: ['Pix', 'Boleto Bancário', 'Tarjetas Locales'] },
        { name: 'México', code: 'MX', methods: ['SPEI', 'OXXO', 'Tarjetas Locales'] },
        { name: 'Colombia', code: 'CO', methods: ['PSE', 'Efecty', 'Tarjetas Locales'] },
        { name: 'Perú', code: 'PE', methods: ['PagoEfectivo', 'Yape', 'Tarjetas Locales'] },
        { name: 'Chile', code: 'CL', methods: ['WebPay', 'Khipu', 'Tarjetas Locales'] },
        { name: 'Argentina', code: 'AR', methods: ['MercadoPago', 'Rapipago', 'Tarjetas Locales'] },
        { name: 'Ecuador', code: 'EC', methods: ['Kushki', 'Transferencias', 'Tarjetas Locales'] },
        { name: 'Uruguay', code: 'UY', methods: ['RedPagos', 'Abitab', 'Tarjetas Locales'] }
      ]
    },
    {
      name: t('cobertura.africa'),
      color: 'text-secondary',
      countries: [
        { name: 'Kenia', code: 'KE', methods: ['M-Pesa', 'Airtel Money', 'Mobile Money'] },
        { name: 'Sudáfrica', code: 'ZA', methods: ['EFT', 'SnapScan', 'Tarjetas Locales'] },
        { name: 'Nigeria', code: 'NG', methods: ['Mobile Money', 'Paystack', 'USSD'] },
        { name: 'Ghana', code: 'GH', methods: ['Mobile Money', 'MTN Money', 'Vodafone Cash'] },
        { name: 'Egipto', code: 'EG', methods: ['Fawry', 'Mobile Wallets', 'Tarjetas Locales'] },
        { name: 'Tanzania', code: 'TZ', methods: ['M-Pesa', 'Tigo Pesa', 'Airtel Money'] },
        { name: 'Uganda', code: 'UG', methods: ['MTN Mobile Money', 'Airtel Money'] },
        { name: 'Marruecos', code: 'MA', methods: ['CMI', 'Tarjetas Locales', 'Cash+'] }
      ]
    }
  ];

  const statsLabels = t('cobertura.statsLabels', { returnObjects: true }) as string[];
  const globalStats = [
    { label: statsLabels[0], value: '30+', icon: Globe },
    { label: statsLabels[1], value: '50+', icon: CreditCard },
    { label: statsLabels[2], value: '98%', icon: MapPin },
    { label: statsLabels[3], value: '24h', icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('cobertura.heroTitle1')} <span className="text-primary">{t('cobertura.heroTitle2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{t('cobertura.heroDesc')}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {regions.map((region, regionIndex) => (
              <div key={regionIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{region.name}</h2>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {region.countries.length} {t('cobertura.paises')}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {region.countries.map((country, countryIndex) => {
                    const countryDetails = t(`cobertura.countries.${country.name}.details`, { defaultValue: '' });
                    return (
                      <Card
                        key={countryIndex}
                        className={`p-6 bg-card/50 backdrop-blur-sm border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/50 ${
                          selectedCountry === country.code ? 'border-primary shadow-lg scale-105' : ''
                        }`}
                        onMouseEnter={() => setSelectedCountry(country.code)}
                        onMouseLeave={() => setSelectedCountry(null)}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <img
                              src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                              alt={country.name}
                              className="w-12 h-9 object-cover rounded shadow-md"
                            />
                            <h3 className="text-lg font-bold text-foreground">{country.name}</h3>
                          </div>
                          <Badge variant="outline" className="text-xs">{country.code}</Badge>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{countryDetails}</p>

                        <div className="space-y-2">
                          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                            {t('cobertura.metodosPago')}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {country.methods.map((method, methodIndex) => (
                              <div key={methodIndex} className="bg-background/80 px-3 py-2 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                                <PaymentMethodLogo method={method} className="h-6" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">{t('cobertura.ctaTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('cobertura.ctaDesc')}</p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              {t('cobertura.ctaBtn')}
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cobertura;
