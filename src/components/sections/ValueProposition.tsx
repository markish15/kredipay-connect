import { Card } from '@/components/ui/card';
import { Check, MapPin, Zap, Shield, Code, HeadphonesIcon } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Métodos Locales',
      description: 'Pix, SPEI, OXXO, PSE, M-Pesa y más de 50 métodos de pago locales.',
      highlight: 'Aceptación superior'
    },
    {
      icon: Zap,
      title: 'Payouts Rápidos',
      description: 'Liquidaciones masivas en 24h en moneda local o USD/EUR.',
      highlight: 'Tiempo récord'
    },
    {
      icon: Shield,
      title: 'Compliance Robusto',
      description: 'KYC/KYB, AML, PCI DSS y cumplimiento regulatorio completo.',
      highlight: 'Máxima seguridad'
    },
    {
      icon: Code,
      title: 'Una Sola API',
      description: 'Integración única con plugins para Shopify, WooCommerce, Magento.',
      highlight: 'Integración simple'
    },
    {
      icon: HeadphonesIcon,
      title: 'Soporte 24/7',
      description: 'Atención humana especializada y panel de control avanzado.',
      highlight: 'Siempre disponible'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            La propuesta de valor que{' '}
            <span className="text-primary">marca la diferencia</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Eliminamos barreras financieras con tecnología local que permite competir globalmente.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                    {feature.highlight}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <Card className="p-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20 rounded-3xl">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Check className="h-8 w-8 text-primary" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Nuestra Misión
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              En KredibilityPay, nuestra misión es <strong className="text-foreground">empoderar a empresas de todos los tamaños</strong> con pagos eficientes, seguros y rentables. Eliminamos barreras financieras y brindamos herramientas tecnológicas locales que permiten competir globalmente.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-background/60 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Eficiencia</span>
              </div>
              <div className="flex items-center space-x-2 bg-background/60 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Seguridad</span>
              </div>
              <div className="flex items-center space-x-2 bg-background/60 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Rentabilidad</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ValueProposition;