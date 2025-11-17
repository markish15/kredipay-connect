import Header from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Globe, Code, CheckCircle2 } from 'lucide-react';

const Soluciones = () => {
  const solutions = [
    {
      icon: Globe,
      title: 'Pagos Locales',
      description: 'Acepta pagos con métodos locales en más de 30 países de Latinoamérica y África.',
      features: [
        'Integración con Pix, SPEI, OXXO, PSE, M-Pesa y más',
        'Optimización de tasas de aprobación por región',
        'Conversión automática de divisas',
        'Checkout adaptado a cada mercado'
      ],
      metrics: [
        { label: 'Tasa de Aprobación', value: '98%' },
        { label: 'Métodos de Pago', value: '50+' },
        { label: 'Países', value: '30+' }
      ]
    },
    {
      icon: Zap,
      title: 'Payouts Globales',
      description: 'Envía pagos masivos a proveedores, empleados o afiliados en tiempo récord.',
      features: [
        'Desembolsos en moneda local o USD/EUR',
        'API de payouts masivos',
        'Conciliación automática',
        'Reportes en tiempo real'
      ],
      metrics: [
        { label: 'Tiempo de Liquidación', value: '24h' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Transacciones/día', value: '100K+' }
      ]
    },
    {
      icon: Shield,
      title: 'Antifraude & Compliance',
      description: 'Protege tu negocio con nuestro motor de antifraude y cumplimiento regulatorio.',
      features: [
        'KYC/KYB automatizado',
        'Motor de riesgo con machine learning',
        'Cumplimiento PCI DSS Level 1',
        'AML y monitoreo de transacciones'
      ],
      metrics: [
        { label: 'Reducción de Fraude', value: '95%' },
        { label: 'Falsos Positivos', value: '<2%' },
        { label: 'Certificaciones', value: '5+' }
      ]
    },
    {
      icon: Code,
      title: 'API & Plugins',
      description: 'Integración rápida con documentación clara y SDKs en múltiples lenguajes.',
      features: [
        'RESTful API con webhooks',
        'SDKs en Node.js, PHP, Python',
        'Plugins para Shopify, WooCommerce, Magento',
        'Sandbox completo para testing'
      ],
      metrics: [
        { label: 'Tiempo de Integración', value: '2 días' },
        { label: 'API Uptime', value: '99.99%' },
        { label: 'Endpoints', value: '50+' }
      ]
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
              Soluciones de Pago <span className="text-primary">Completas</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Tecnología de pagos diseñada para empresas que operan en mercados emergentes.
              Todo lo que necesitas para aceptar pagos, enviar desembolsos y proteger tu negocio.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Solicitar Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground mb-4">{solution.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{solution.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" size="lg">
                    Conocer Más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-3xl">
                    <div className="grid grid-cols-1 gap-6">
                      {solution.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-6 bg-background/60 rounded-2xl">
                          <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                          <div className="text-sm text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
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
              ¿Listo para optimizar tus pagos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Agenda una demo personalizada y descubre cómo KredibilityPay puede transformar tu operación de pagos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Solicitar Demo
              </Button>
              <Button size="lg" variant="outline">
                Ver Documentación
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Soluciones;
