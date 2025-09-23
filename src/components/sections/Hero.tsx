import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Globe, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Pagos locales,{' '}
                <span className="text-primary">alcance global</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Conecta tu negocio a los métodos de pago de Latinoamérica y África con una sola integración. 
                Aumenta tu tasa de aprobación, reduce fricción y liquida en tiempo récord.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Solicitar Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-2xl border-2 hover:bg-muted"
              >
                Ver Documentación
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Tasa Aprobación</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Liquidación</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Países</div>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 rounded-3xl shadow-2xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b">
                  <h3 className="font-semibold text-foreground">Dashboard KredibilityPay</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* KPIs Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-primary/5 border border-primary/20 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-8 w-8 text-primary" />
                      <div>
                        <div className="text-2xl font-bold text-primary">98.4%</div>
                        <div className="text-xs text-muted-foreground">Aprobación</div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-secondary/10 border border-secondary/20 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <Globe className="h-8 w-8 text-secondary" />
                      <div>
                        <div className="text-2xl font-bold text-secondary">$2.4M</div>
                        <div className="text-xs text-muted-foreground">Procesado</div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-accent/5 border border-accent/20 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-8 w-8 text-accent" />
                      <div>
                        <div className="text-2xl font-bold text-accent">0.2%</div>
                        <div className="text-xs text-muted-foreground">Chargebacks</div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-green-500/5 border border-green-500/20 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">24h</div>
                        <div className="text-xs text-muted-foreground">Settlement</div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Mini Chart Placeholder */}
                <div className="h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <div className="text-sm text-muted-foreground">Gráfico de Transacciones</div>
                </div>
              </div>
            </Card>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 w-24 h-16 bg-primary/20 rounded-2xl blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-20 bg-secondary/20 rounded-2xl blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;