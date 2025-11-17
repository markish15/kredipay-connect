import Header from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, History, Users, MapPin, Award, TrendingUp } from 'lucide-react';

const Nosotros = () => {
  const values = [
    {
      icon: Target,
      title: 'Transparencia',
      description: 'Precios claros, sin costos ocultos. Reportes en tiempo real.'
    },
    {
      icon: Users,
      title: 'Soporte Humano',
      description: 'Equipo disponible 24/7. Respuesta en minutos, no en días.'
    },
    {
      icon: TrendingUp,
      title: 'Innovación',
      description: 'Tecnología de punta para maximizar aprobación y reducir costos.'
    },
    {
      icon: Award,
      title: 'Compliance',
      description: 'Certificaciones PCI DSS, KYC/AML. Seguridad sin concesiones.'
    }
  ];

  const milestones = [
    { year: '2018', event: 'Fundación en São Paulo', description: 'Inicio de operaciones en Brasil con Pix y Boleto' },
    { year: '2019', event: 'Expansión LatAm', description: 'Lanzamiento en México, Colombia, Chile y Perú' },
    { year: '2021', event: '10K+ Merchants', description: 'Alcanzamos 10,000 comercios activos en la región' },
    { year: '2023', event: 'Entrada a África', description: 'Operaciones en Kenia, Sudáfrica y Nigeria' },
    { year: '2024', event: 'Series B', description: 'US$50M en financiamiento para expansión global' },
    { year: '2025', event: 'Presente', description: '30+ países, 50K+ merchants, $2B+ procesados/año' }
  ];

  const offices = [
    { city: 'São Paulo', country: 'Brasil', type: 'HQ' },
    { city: 'Ciudad de México', country: 'México', type: 'Regional' },
    { city: 'Nairobi', country: 'Kenia', type: 'Regional' },
    { city: 'Miami', country: 'USA', type: 'Sales' }
  ];

  const stats = [
    { value: '50K+', label: 'Merchants Activos' },
    { value: '$2B+', label: 'Procesado Anualmente' },
    { value: '30+', label: 'Países' },
    { value: '150+', label: 'Empleados' }
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
              Sobre <span className="text-primary">KredibilityPay</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Somos el puente entre negocios globales y mercados locales.
              Desde 2018, democratizamos el acceso a pagos en mercados emergentes.
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

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Nuestra Misión</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empoderar a empresas de todos los tamaños con pagos eficientes, seguros y rentables.
                Eliminamos barreras financieras y brindamos herramientas tecnológicas locales que permiten competir globalmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Nuestros Valores</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-2 rounded-2xl text-center hover:scale-105 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Nuestra Historia</h2>
            <p className="text-lg text-muted-foreground">
              Desde nuestro origen en LATAM, evolucionamos hasta convertirnos en un referente en pagos para sectores high-risk.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex gap-8">
                    {/* Year badge */}
                    <div className="flex-shrink-0 w-16 md:w-20">
                      <Badge className="bg-primary text-primary-foreground w-full justify-center">
                        {milestone.year}
                      </Badge>
                    </div>

                    {/* Content */}
                    <Card className="flex-grow p-6 bg-card/50 backdrop-blur-sm border-2 rounded-2xl">
                      <h3 className="text-lg font-bold text-foreground mb-2">{milestone.event}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Presencia Global
            </h2>
            <p className="text-lg text-muted-foreground">
              Oficinas estratégicamente ubicadas para servir mejor a nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-2 rounded-2xl text-center hover:scale-105 transition-transform">
                <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-1">{office.city}</h3>
                <p className="text-sm text-muted-foreground mb-2">{office.country}</p>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {office.type}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Únete a miles de empresas que confían en KredibilityPay para sus pagos.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Solicitar Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
