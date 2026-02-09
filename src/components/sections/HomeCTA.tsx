import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
          ¿Listo para expandirte en{' '}
          <span className="text-primary">LatAm</span>?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Contáctanos hoy y descubre cómo KredibilityPay puede simplificar tus pagos 
          en Latinoamérica con una sola integración.
        </p>
        <Link to="/contacto">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contáctanos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HomeCTA;
