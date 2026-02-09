import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Slogan */}
          <p className="text-sm font-semibold tracking-widest uppercase text-primary">
            Building Kredibility, one payment at a time
          </p>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            Pagos sin fronteras,{' '}
            <span className="text-primary">sin complicaciones</span>
          </h1>

          {/* Body */}
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Rompe el molde, simplifica los pagos globales y llega a millones de clientes 
            con nuestra solución integral de pagos. Expándete en LatAm sin esfuerzo con una 
            sola integración, 300+ métodos de pago locales, y una amplia variedad de divisas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/contacto">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Empieza Hoy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/soluciones">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-6 rounded-2xl border-2 hover:bg-muted"
              >
                Ver Soluciones
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary">300+</div>
              <div className="text-sm text-muted-foreground mt-1">Métodos de Pago</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground mt-1">Países LatAm</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Divisas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
