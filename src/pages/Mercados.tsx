import Header from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Wifi, Smartphone, ShoppingCart, Users, TrendingUp,
  DollarSign, ArrowRight, Banknote, CreditCard, Globe
} from 'lucide-react';
import mercadosHero from '@/assets/mercados-hero.png';
import mobilePayment from '@/assets/latam-mobile-payment.jpg';

const Mercados = () => {
  const marketInsights = [
    {
      icon: Wifi,
      stat: '~80%',
      label: 'Penetración de Internet',
      description: '500M+ usuarios conectados en LatAm, creciendo un 5% anual.'
    },
    {
      icon: Smartphone,
      stat: '+80%',
      label: 'Compras vía Móvil',
      description: '8 de cada 10 transacciones de eCommerce se realizan desde un smartphone.'
    },
    {
      icon: ShoppingCart,
      stat: '+250M',
      label: 'Compradores Online',
      description: 'LatAm es el mercado de eCommerce con mayor crecimiento global.'
    },
    {
      icon: DollarSign,
      stat: '+250B USD',
      label: 'Volumen eCommerce',
      description: 'Volumen anual de comercio electrónico en la región.'
    },
    {
      icon: TrendingUp,
      stat: '+18%',
      label: 'Crecimiento Anual',
      description: 'Tasa de crecimiento interanual del comercio digital en LatAm.'
    },
    {
      icon: Users,
      stat: '+50%',
      label: 'Sub-bancarizados',
      description: 'Más del 50% de la población utiliza métodos de pago alternativos.'
    }
  ];

  const countries = [
    {
      name: 'Brasil',
      flag: '🇧🇷',
      population: '215M',
      ecommerce: '$49B',
      cashMethods: ['Pix', 'Boleto'],
      onlineMethods: ['Tarjetas locales', 'Transferencia bancaria'],
      highlight: 'Pix procesa +$250B/mes. Mercado #1 en LatAm.'
    },
    {
      name: 'México',
      flag: '🇲🇽',
      population: '130M',
      ecommerce: '$37B',
      cashMethods: ['OXXO', 'SPEI'],
      onlineMethods: ['Tarjetas locales', 'Transferencia'],
      highlight: 'OXXO tiene 22K+ sucursales. SPEI crece 40% anual.'
    },
    {
      name: 'Colombia',
      flag: '🇨🇴',
      population: '52M',
      ecommerce: '$14B',
      cashMethods: ['Efecty', 'Baloto'],
      onlineMethods: ['PSE', 'Tarjetas locales'],
      highlight: 'PSE domina pagos online con 85% de penetración bancaria digital.'
    },
    {
      name: 'Chile',
      flag: '🇨🇱',
      population: '19M',
      ecommerce: '$12B',
      cashMethods: ['Sencillito', 'ServiPag'],
      onlineMethods: ['Webpay', 'Khipu'],
      highlight: 'Mayor penetración bancaria de LatAm (87%).'
    },
    {
      name: 'Perú',
      flag: '🇵🇪',
      population: '34M',
      ecommerce: '$8B',
      cashMethods: ['PagoEfectivo', 'Agentes'],
      onlineMethods: ['Yape', 'Transferencia'],
      highlight: 'Yape: +15M de usuarios activos. Billetera #1.'
    },
    {
      name: 'Argentina',
      flag: '🇦🇷',
      population: '46M',
      ecommerce: '$15B',
      cashMethods: ['Rapipago', 'PagoFácil'],
      onlineMethods: ['MercadoPago', 'Transferencia'],
      highlight: 'MercadoPago lidera fintech con +40M de wallets.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-28 lg:py-36 overflow-hidden min-h-[500px]">
        <div className="absolute inset-0">
          <img src={mercadosHero} alt="Mercados LatAm" className="w-full h-full object-cover object-[center_30%]" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-card/80 mb-4">
              Mercados LatAm
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-6 leading-normal">
              La <span className="text-primary">oportunidad</span> más grande del comercio digital
            </h1>
            <p className="text-xl text-card/80 max-w-2xl mx-auto leading-relaxed">
              500 millones de consumidores conectados, un mercado de $160B en eCommerce, 
              y la tasa de crecimiento más alta del mundo. LatAm no espera.
            </p>
          </div>
        </div>
      </section>

      {/* Market Insights Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              El pulso del mercado
            </h2>
            <p className="text-lg text-muted-foreground">
              Datos clave que explican por qué LatAm es el mercado que no puedes ignorar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketInsights.map((insight, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-2xl hover:border-primary/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <insight.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-1">{insight.stat}</div>
                    <div className="text-sm font-semibold text-primary mb-2">{insight.label}</div>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-first visual section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Mobile-first,{' '}
                <span className="text-primary">cash-heavy</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                En LATAM, más de la mitad de la población utiliza métodos de pago alternativos.
                Transferencias instantáneas, pagos en efectivo en tiendas y billeteras digitales dominan el comercio.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Si no operas con estos métodos, estás perdiendo acceso a millones de clientes.
                KredibilityPay te conecta con todos ellos.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2 text-sm">Pix</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">OXXO</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">Boleto</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">PSE</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">SPEI</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">Yape</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">Efecty</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">MercadoPago</Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src={mobilePayment}
                alt="Pago móvil en LatAm"
                className="rounded-3xl shadow-card w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-2xl shadow-card border-2">
                <div className="text-2xl font-bold text-primary">72%</div>
                <div className="text-xs text-muted-foreground">Compras móviles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Zoom */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Zoom por mercado
            </h2>
            <p className="text-lg text-muted-foreground">
              Lo que ofrecemos en cada país: métodos cash y online, todo integrado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-2 rounded-2xl hover:shadow-card transition-all">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{country.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{country.name}</h3>
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span>{country.population} hab.</span>
                      <span>•</span>
                      <span>eComm: {country.ecommerce}</span>
                    </div>
                  </div>
                </div>

                {/* Highlight */}
                <p className="text-sm text-muted-foreground mb-4 italic">
                  {country.highlight}
                </p>

                {/* Methods */}
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Banknote className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Cash / Voucher</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {country.cashMethods.map((m) => (
                        <Badge key={m} variant="outline" className="text-xs border-primary/30 text-primary">
                          {m}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard className="h-4 w-4 text-secondary" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Online / Digital</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {country.onlineMethods.map((m) => (
                        <Badge key={m} variant="outline" className="text-xs border-secondary/30 text-secondary">
                          {m}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Listo para conquistar <span className="text-primary">LatAm</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Habla con nuestro equipo y descubre cómo activar pagos locales 
            en los mercados que más importan para tu negocio.
          </p>
          <Link to="/contacto">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              Contáctanos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Mercados;
