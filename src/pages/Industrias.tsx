import Header from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Gamepad2, TrendingUp, Users, Pill } from 'lucide-react';

const Industrias = () => {
  const industries = [
    {
      icon: Gamepad2,
      title: 'iGaming & Betting',
      description: 'Soluciones especializadas para casinos online, apuestas deportivas y gaming.',
      challenges: [
        'Altas tasas de rechazo bancario',
        'Necesidad de payouts rápidos',
        'Cumplimiento regulatorio complejo',
        'Alto riesgo de fraude'
      ],
      solutions: [
        'Métodos de pago locales optimizados',
        'Payouts en menos de 24h',
        'Motor de antifraude especializado',
        'KYC/AML automatizado',
        'Soporte para multiple currencies'
      ],
      stats: [
        { label: 'Aprobación', value: '96%' },
        { label: 'Payout Speed', value: '12h' },
        { label: 'Uptime', value: '99.9%' }
      ],
      tags: ['Casinos Online', 'Apuestas Deportivas', 'Poker', 'eSports']
    },
    {
      icon: TrendingUp,
      title: 'iFX & CFD Trading',
      description: 'Infraestructura de pagos para brokers de forex, CFDs y criptomonedas.',
      challenges: [
        'Depósitos instantáneos requeridos',
        'Retiros frecuentes y rápidos',
        'Regulación estricta',
        'Conversión de múltiples divisas'
      ],
      solutions: [
        'Depósitos en tiempo real',
        'Retiros automatizados 24/7',
        'Cumplimiento con reguladores globales',
        'FX competitivo',
        'API de alta disponibilidad'
      ],
      stats: [
        { label: 'Depósitos', value: '<1min' },
        { label: 'Retiros', value: '24h' },
        { label: 'Divisas', value: '30+' }
      ],
      tags: ['Forex', 'CFDs', 'Crypto Trading', 'Binary Options']
    },
    {
      icon: Users,
      title: 'Adulto & Creadores',
      description: 'Pagos discretos y seguros para contenido adulto y plataformas de creadores.',
      challenges: [
        'Rechazo de procesadores tradicionales',
        'Necesidad de discreción',
        'Pagos recurrentes complejos',
        'Chargebacks elevados'
      ],
      solutions: [
        'Procesamiento high-risk especializado',
        'Billing descriptor discreto',
        'Suscripciones y pagos recurrentes',
        'Prevención de chargebacks',
        'Payouts a creadores automatizados'
      ],
      stats: [
        { label: 'Retención', value: '92%' },
        { label: 'Chargeback', value: '<1%' },
        { label: 'Discretion', value: '100%' }
      ],
      tags: ['Content Platforms', 'Subscriptions', 'Live Streaming', 'Fan Sites']
    },
    {
      icon: Pill,
      title: 'Nutra & Suscripciones',
      description: 'Pagos optimizados para suplementos, wellness y modelos de suscripción.',
      challenges: [
        'Alto volumen de transacciones',
        'Suscripciones y rebilling',
        'Tasas de chargeback',
        'Cumplimiento con salud'
      ],
      solutions: [
        'Rebilling inteligente',
        'Reducción de chargebacks',
        'Múltiples métodos de pago',
        'Dunning management',
        'Analytics avanzados'
      ],
      stats: [
        { label: 'Retención', value: '89%' },
        { label: 'Recovery', value: '65%' },
        { label: 'MRR Growth', value: '+45%' }
      ],
      tags: ['Supplements', 'Health Products', 'Subscription Boxes', 'Wellness']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Industrias <span className="text-primary">Especializadas</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Soluciones de pago diseñadas específicamente para industrias high-risk.
              Experiencia comprobada en sectores donde otros procesadores rechazan operar.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <div key={index}>
                <Card className="p-12 bg-card/50 backdrop-blur-sm border-2 rounded-3xl overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-12">
                    {/* Left: Info */}
                    <div className="lg:col-span-3">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                        <industry.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-4xl font-bold text-foreground mb-4">{industry.title}</h2>
                      <p className="text-lg text-muted-foreground mb-8">{industry.description}</p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {industry.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Desafíos</h3>
                          <ul className="space-y-2">
                            {industry.challenges.map((challenge, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <span className="mr-2">•</span>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Soluciones</h3>
                          <ul className="space-y-2">
                            {industry.solutions.map((solution, idx) => (
                              <li key={idx} className="text-sm text-foreground flex items-start">
                                <span className="mr-2 text-primary">✓</span>
                                <span>{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Hablar con Experto <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    {/* Right: Stats */}
                    <div className="lg:col-span-2">
                      <div className="space-y-6">
                        {industry.stats.map((stat, idx) => (
                          <div key={idx} className="p-6 bg-background/80 rounded-2xl border border-border/50">
                            <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              ¿Tu industria no está listada?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Trabajamos con docenas de verticales high-risk. Contáctanos para una solución personalizada.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Consultar Ahora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industrias;
