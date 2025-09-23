import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Users, TrendingUp, Zap } from 'lucide-react';

const BusinessModel = () => {
  const flowSteps = [
    { title: 'Cliente', description: 'Realiza compra', icon: Users },
    { title: 'Checkout Local', description: 'Métodos de pago locales', icon: Check },
    { title: 'Motor de Ruteo', description: 'Optimización inteligente', icon: Zap },
    { title: 'Bancos Locales', description: 'Procesamiento seguro', icon: TrendingUp },
    { title: 'Settlement', description: 'Conciliación automática', icon: Check },
    { title: 'Payouts', description: 'Liquidación al merchant', icon: ArrowRight },
  ];

  const plans = [
    {
      name: 'Growth',
      description: 'Para startups y empresas en crecimiento',
      features: ['API básica', 'Soporte por email', 'Dashboard estándar', 'Reportes básicos'],
      highlight: false
    },
    {
      name: 'Scale',
      description: 'Para empresas establecidas',
      features: ['API completa', 'Soporte 24/7', 'Dashboard avanzado', 'Reportes personalizados', 'Manager dedicado'],
      highlight: true
    },
    {
      name: 'Enterprise',
      description: 'Para corporaciones y high-volume',
      features: ['API personalizada', 'Soporte premium', 'Dashboard white-label', 'BI avanzado', 'Integración dedicada'],
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Modelo de Negocio{' '}
            <span className="text-primary">Transparente</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Flujo optimizado desde el checkout hasta la liquidación, con precios claros y competitivos.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Flujo de Transacciones</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {flowSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-2 rounded-3xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
                
                {/* Arrow */}
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Estructura de Precios</h3>
          
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20 rounded-3xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">MDR</h4>
                <p className="text-sm text-muted-foreground">Porcentaje competitivo sobre transacciones exitosas</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Tarifa Fija</h4>
                <p className="text-sm text-muted-foreground">Costo fijo por transacción procesada</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Spread FX</h4>
                <p className="text-sm text-muted-foreground">Solo si aplica conversión de moneda</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Plans */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Planes de Servicio</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-lg ${
                  plan.highlight 
                    ? 'bg-gradient-to-b from-primary/5 to-secondary/5 border-primary/30 transform -translate-y-2' 
                    : 'bg-card/50 backdrop-blur-sm border-border/50'
                }`}
              >
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h4>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 rounded-2xl ${
                    plan.highlight 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                  }`}
                >
                  Contactar Ventas
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;