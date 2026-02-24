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
          <div className="flex justify-center">
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-primary border border-primary/25 bg-primary/15 backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.04),0_8px_32px_-8px_hsl(var(--primary)/0.2)] px-7 py-3 rounded-full">
              Building Kredibility, one payment at a time
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            De lo local a lo global,{' '}
            <span className="text-primary">sin fricción</span>
          </h1>

          {/* Body */}
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-foreground/70 max-w-5xl mx-auto">
            Simplifica los pagos globales y llega a millones de clientes con una sola integración, múltiples métodos de pago locales en LatAm, y una amplia variedad de divisas. Todo sin esfuerzo.
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
