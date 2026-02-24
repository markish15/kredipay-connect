import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

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
            De lo local a lo global,{' '}
            <span className="text-primary">sin fricción</span>
          </h1>

          {/* Body */}
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-5xl mx-auto">
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

        </div>
      </div>

      {/* Banner separador */}
      <div className="w-full mt-16 overflow-hidden">
        <img
          src={heroBanner}
          alt="KredibilityPay - edificios corporativos"
          className="w-full h-[200px] md:h-[280px] lg:h-[350px] object-cover object-center"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
