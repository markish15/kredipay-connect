import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Gamepad2,
  TrendingUp,
  ShoppingCart,
  Plane,
  
  BarChart3,
  Layers,
  CheckCircle2,
  ArrowDownToLine,
  ArrowUpFromLine,
  LayoutDashboard,
  Users,
  FileBarChart,
  Settings,
  Shield,
} from 'lucide-react';

const industries = [
  {
    icon: Gamepad2,
    name: 'Gaming',
    description: 'Pagos in-game, suscripciones y microtransacciones con métodos locales preferidos por los jugadores.',
  },
  {
    icon: TrendingUp,
    name: 'Trading',
    description: 'Fondeo y retiro de cuentas de trading con liquidación rápida y múltiples divisas.',
  },
  {
    icon: ShoppingCart,
    name: 'eCommerce',
    description: 'Checkout optimizado con los métodos de pago que tus clientes realmente usan.',
  },
  {
    icon: Plane,
    name: 'Travel & Airlines',
    description: 'Aerolíneas, buscadores y agencias con pagos locales en cada mercado de origen.',
  },
  {
    icon: Layers,
    name: 'Otros Sectores',
    description: 'SaaS, educación, marketplaces y más. Solución flexible que se adapta a tu vertical.',
  },
];

const Soluciones = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              Soluciones por industria
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Pagos diseñados para{' '}
              <span className="text-primary">tu sector</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Cada industria tiene sus propios desafíos. Nuestra plataforma se adapta a las 
              necesidades específicas de tu vertical con métodos de pago locales, compliance 
              integrado y liquidación rápida.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-10 py-6 text-lg">
                Contáctanos <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Industrias que <span className="text-primary">confían</span> en nosotros
            </h2>
          </div>

          {/* Top row: 3 cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.slice(0, 3).map((ind) => (
              <Card
                key={ind.name}
                className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-3xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <ind.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{ind.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{ind.description}</p>
              </Card>
            ))}
          </div>
          {/* Bottom row: 2 cards centered between top ones */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {industries.slice(3).map((ind) => (
              <Card
                key={ind.name}
                className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-3xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <ind.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{ind.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{ind.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pay-ins & Pay-outs */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-primary">Pay-ins</span> &{' '}
              <span className="text-primary">Pay-outs</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Cobra y paga en toda Latinoamérica con una sola plataforma.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Pay-ins */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <ArrowDownToLine className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Pay-ins</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Acepta pagos con los métodos locales que tus clientes prefieren: 
                transferencias, wallets, efectivo y tarjetas locales.
              </p>
              <div className="space-y-3">
                {[
                  '300+ métodos de pago locales',
                  'Checkout optimizado por mercado',
                  'Tasas de aprobación superiores al 95%',
                  'Conversión automática de divisas',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Pay-outs */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <ArrowUpFromLine className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Pay-outs</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Envía pagos masivos a proveedores, afiliados o ganadores 
                directamente a sus cuentas locales.
              </p>
              <div className="space-y-3">
                {[
                  'Desembolsos en moneda local o USD/EUR',
                  'Liquidación en 24h',
                  'API de payouts masivos',
                  'Conciliación y reportes automáticos',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard / Merchant Portal */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Merchant <span className="text-primary">Portal</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Todo el control de tu operación de pagos en un solo lugar.
            </p>
          </div>

          {/* Dashboard mockup */}
          <Card className="max-w-5xl mx-auto p-8 bg-card/50 backdrop-blur-sm border-2 rounded-3xl shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center justify-between pb-5 border-b border-border/50 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <span className="text-sm text-muted-foreground ml-2">merchant.kredibilitypay.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Dashboard content */}
            <div className="grid lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Volumen Hoy', value: '$148,320', icon: BarChart3, color: 'text-primary' },
                { label: 'Transacciones', value: '2,847', icon: TrendingUp, color: 'text-secondary' },
                { label: 'Aprobación', value: '96.8%', icon: Shield, color: 'text-primary' },
                { label: 'Merchants', value: '124', icon: Users, color: 'text-secondary' },
              ].map((kpi) => (
                <div key={kpi.label} className="p-4 bg-background/60 rounded-2xl border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
                    <span className="text-xs text-muted-foreground">{kpi.label}</span>
                  </div>
                  <div className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</div>
                </div>
              ))}
            </div>

            {/* Fake chart area */}
            <div className="h-40 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="h-8 w-8 text-primary/30 mr-3" />
              <span className="text-sm text-muted-foreground">Volumen de transacciones — Últimos 30 días</span>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: LayoutDashboard, label: 'Dashboard en tiempo real' },
                { icon: FileBarChart, label: 'Reportes y analytics' },
                { icon: Users, label: 'Gestión de sub-merchants' },
                { icon: Shield, label: 'Control de riesgo' },
                { icon: Settings, label: 'Configuración avanzada' },
              ].map((feat) => (
                <div
                  key={feat.label}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-sm text-foreground"
                >
                  <feat.icon className="h-4 w-4 text-primary" />
                  {feat.label}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Listo para integrar{' '}
            <span className="text-primary">KredibilityPay</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Habla con nuestro equipo y descubre cómo podemos acelerar tu operación de pagos en Latinoamérica.
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
    </div>
  );
};

export default Soluciones;
