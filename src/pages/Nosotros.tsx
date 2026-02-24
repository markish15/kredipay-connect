import Header from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Target, Users, TrendingUp, Award,
  Shield, Heart, Zap, ArrowRight
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';


const Nosotros = () => {
  const stats = [
    { value: '50K+', label: 'Merchants Activos' },
    { value: '$2B+', label: 'Procesado Anualmente' },
    { value: '30+', label: 'Países' },
    { value: '150+', label: 'Empleados' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Transparencia',
      description: 'Precios claros, sin costos ocultos. Reportes en tiempo real para que siempre sepas dónde estás.'
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Certificaciones PCI DSS Level 1, KYC/AML. La seguridad de tus fondos es nuestra prioridad #1.'
    },
    {
      icon: Heart,
      title: 'Soporte Humano',
      description: 'Equipo disponible 24/7. Respuesta en minutos, no en días. Cada merchant importa.'
    },
    {
      icon: Zap,
      title: 'Innovación',
      description: 'Tecnología de punta para maximizar aprobación, reducir fraude y optimizar costos.'
    },
    {
      icon: Users,
      title: 'Inclusión',
      description: 'Democratizamos el acceso a pagos digitales para poblaciones sub-bancarizadas en mercados emergentes.'
    },
    {
      icon: Award,
      title: 'Ética',
      description: 'Compliance primero. Operamos bajo los estándares regulatorios más estrictos de cada mercado.'
    }
  ];


  const faqs = [
    {
      question: '¿Qué es KredibilityPay?',
      answer: 'KredibilityPay es una pasarela de pagos especializada en mercados emergentes. Ofrecemos una sola API para integrar 300+ métodos de pago locales en LatAm y África, permitiendo a empresas globales cobrar y pagar de forma simple y segura.'
    },
    {
      question: '¿En qué países operan?',
      answer: 'Operamos en más de 30 países, con presencia fuerte en Brasil, México, Colombia, Chile, Perú, Argentina, y mercados clave de África como Kenia, Sudáfrica y Nigeria.'
    },
    {
      question: '¿Cuánto tarda la integración?',
      answer: 'La integración básica puede completarse en 1-2 días con nuestros SDKs y documentación. Para integraciones enterprise más complejas, nuestro equipo técnico te acompaña en cada paso.'
    },
    {
      question: '¿Qué métodos de pago soportan?',
      answer: 'Soportamos más de 300 métodos incluyendo Pix, OXXO, PSE, SPEI, Boleto, Yape, MercadoPago, transferencias bancarias locales, tarjetas locales e internacionales, billeteras digitales y pagos en efectivo.'
    },
    {
      question: '¿Cómo manejan el compliance y regulación?',
      answer: 'Estamos certificados PCI DSS Level 1, cumplimos con KYC/AML en cada jurisdicción, y tenemos licencias locales donde se requiere. Nuestro equipo de compliance monitorea regulaciones continuamente.'
    },
    {
      question: '¿Ofrecen pay-outs además de pay-ins?',
      answer: 'Sí. Nuestra plataforma soporta pay-ins (cobros) y pay-outs (desembolsos) con la misma API. Puedes pagar a proveedores, afiliados o realizar reembolsos en moneda local.'
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              Sobre Nosotros
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              El puente entre tu negocio y{' '}
              <span className="text-primary">mercados emergentes</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Nacimos con una misión clara: eliminar la fricción de los pagos 
              en las economías con mayor potencial de crecimiento del mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why a payment gateway */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">
                Nuestra razón de ser
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                ¿Por qué una pasarela de pagos para mercados emergentes?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Los mercados emergentes representan el 85% del crecimiento global en eCommerce, 
                  pero sus sistemas de pago son fragmentados, locales y complejos.
                </p>
                <p>
                  Las empresas globales pierden hasta el 60% de sus conversiones al no ofrecer 
                  métodos de pago locales. Nosotros eliminamos esa barrera.
                </p>
                <p>
                  <strong className="text-foreground">Una sola integración. Todos los métodos. Todos los mercados.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground">
              Los principios que guían cada decisión y cada línea de código.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-2xl hover:border-primary/30 transition-all group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Preguntas Frecuentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-2 rounded-2xl px-6 bg-card/50">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Listo para trabajar <span className="text-primary">juntos</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Únete a miles de empresas que confían en KredibilityPay para sus pagos en mercados emergentes.
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

export default Nosotros;
