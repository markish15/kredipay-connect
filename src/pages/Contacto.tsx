import Header from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Code2, FileJson, TestTube, Rocket,
  ArrowRight, CheckCircle2, Mail, Building2, User, MessageSquare
} from 'lucide-react';

const Contacto = () => {
  const integrationSteps = [
    {
      phase: '01',
      icon: Code2,
      title: 'Conecta tu API',
      description: 'Integra nuestra REST API en minutos con SDKs para Python, Node.js, PHP, Java y más.',
      detail: 'Una sola API key. Documentación clara. Sandbox incluido.'
    },
    {
      phase: '02',
      icon: FileJson,
      title: 'Configura tus métodos',
      description: 'Selecciona los países y métodos de pago que necesitas desde tu dashboard.',
      detail: 'Activa Pix, OXXO, PSE, SPEI y 300+ métodos con un clic.'
    },
    {
      phase: '03',
      icon: TestTube,
      title: 'Prueba en Sandbox',
      description: 'Valida cada flujo de pago en nuestro entorno de pruebas antes de ir a producción.',
      detail: 'Simula aprobaciones, rechazos y callbacks en tiempo real.'
    },
    {
      phase: '04',
      icon: Rocket,
      title: 'Go Live',
      description: 'Activa producción y empieza a recibir pagos. Nuestro equipo te acompaña en el lanzamiento.',
      detail: 'Soporte dedicado 24/7 durante tu go-live.'
    }
  ];

  const workflowFeatures = [
    'Single API para pay-ins y pay-outs',
    'Webhooks en tiempo real',
    'Dashboard unificado multi-país',
    'Reportes y reconciliación automática',
    'Gestión de riesgo configurable',
    'Soporte técnico dedicado'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">
              Integración Simple
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Una sola API.{' '}
              <span className="text-primary">Todos los pagos.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Integra 250+ métodos de pago en LatAm con una única API. Sin complejidad innecesaria.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              4 pasos. Listo.
            </h2>
            <p className="text-lg text-muted-foreground">
              Proceso faseado, documentado y con soporte en cada etapa.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {integrationSteps.map((step, index) => (
                <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-2xl relative overflow-hidden hover:border-primary/30 transition-all group">
                  {/* Phase number watermark */}
                  <div className="absolute top-4 right-6 text-7xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors select-none">
                    {step.phase}
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                        Fase {step.phase}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <p className="text-sm text-primary/80 font-medium">{step.detail}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow / What you get */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Todo lo que necesitas,{' '}
                <span className="text-primary">nada que no</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Una plataforma diseñada para simplificar, no para complicar. 
                Cada herramienta está pensada para que te enfoques en crecer.
              </p>
              <div className="space-y-4">
                {workflowFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* API Code Preview */}
            <Card className="p-6 bg-foreground rounded-2xl border-0 overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
                <div className="w-3 h-3 rounded-full bg-secondary/60" />
                <span className="text-xs text-card/40 ml-2 font-mono">payment.js</span>
              </div>
              <pre className="text-sm text-card/90 font-mono leading-relaxed overflow-x-auto">
{`const payment = await kredibility.payments.create({
  amount: 5000,
  currency: "BRL",
  method: "pix",
  customer: {
    email: "cliente@email.com",
    document: "123.456.789-00"
  },
  callback_url: "https://tu-sitio.com/webhook"
});

// Response
{
  id: "pay_abc123",
  status: "pending",
  pix_code: "00020126...",
  expires_at: "2025-01-15T23:59:59Z"
}`}
              </pre>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Hablemos
              </h2>
              <p className="text-lg text-muted-foreground">
                Cuéntanos sobre tu negocio y te mostramos cómo KredibilityPay puede ayudarte.
              </p>
            </div>

            <Card className="p-8 lg:p-12 bg-card/50 backdrop-blur-sm border-2 rounded-2xl">
              <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    Nombre completo
                  </label>
                  <Input placeholder="Tu nombre" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email corporativo
                  </label>
                  <Input type="email" placeholder="tu@empresa.com" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    Empresa
                  </label>
                  <Input placeholder="Nombre de tu empresa" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    Volumen mensual estimado
                  </label>
                  <Input placeholder="Ej: $50K - $500K" className="rounded-xl" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    ¿Cómo podemos ayudarte?
                  </label>
                  <Textarea
                    placeholder="Cuéntanos sobre tu negocio, los países donde operas y qué necesitas..."
                    className="rounded-xl min-h-[120px]"
                  />
                </div>
                <div className="md:col-span-2">
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl text-lg py-6"
                  >
                    Solicitar Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
