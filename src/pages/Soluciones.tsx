import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight, Gamepad2, TrendingUp, ShoppingCart, Plane,
  BarChart3, Layers, CheckCircle2, ArrowDownToLine, ArrowUpFromLine,
  LayoutDashboard, Users, FileBarChart, Settings, Shield,
} from 'lucide-react';

const industryIcons = [Gamepad2, TrendingUp, ShoppingCart, Plane, Layers];
const kpiIcons = [BarChart3, TrendingUp, Shield, Users];
const featureIcons = [LayoutDashboard, FileBarChart, Users, Shield, Settings];

const Soluciones = () => {
  const { t } = useTranslation();
  const industries = t('soluciones.industries', { returnObjects: true }) as Array<{ name: string; description: string }>;
  const payins = t('soluciones.payins', { returnObjects: true }) as string[];
  const payouts = t('soluciones.payouts', { returnObjects: true }) as string[];
  const portalKpis = t('soluciones.portalKpis', { returnObjects: true }) as Array<{ label: string; value: string }>;
  const portalFeatures = t('soluciones.portalFeatures', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">{t('soluciones.heroLabel')}</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              {t('soluciones.heroTitle1')}{' '}
              <span className="text-primary">{t('soluciones.heroTitle2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">{t('soluciones.heroDesc')}</p>
            <Link to="/contacto">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-10 py-6 text-lg">
                {t('soluciones.ctaBtn')} <ArrowRight className="ml-2 h-5 w-5" />
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
              {t('soluciones.industriesTitle1')} <span className="text-primary">{t('soluciones.industriesTitle2')}</span> {t('soluciones.industriesTitle3')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.slice(0, 3).map((ind, i) => {
              const Icon = industryIcons[i];
              return (
                <Card key={ind.name} className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-3xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{ind.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{ind.description}</p>
                </Card>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {industries.slice(3).map((ind, i) => {
              const Icon = industryIcons[i + 3];
              return (
                <Card key={ind.name} className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-3xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{ind.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{ind.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pay-ins & Pay-outs */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-primary">{t('soluciones.payinsTitle')}</span> &{' '}
              <span className="text-primary">{t('soluciones.payoutsTitle')}</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">{t('soluciones.payinsPayoutsDesc')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <ArrowDownToLine className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t('soluciones.payinsTitle')}</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{t('soluciones.payinsDesc')}</p>
              <div className="space-y-3">
                {payins.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <ArrowUpFromLine className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t('soluciones.payoutsTitle')}</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{t('soluciones.payoutsDesc')}</p>
              <div className="space-y-3">
                {payouts.map((item) => (
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
              {t('soluciones.portalTitle')} <span className="text-primary">{t('soluciones.portalTitle2')}</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">{t('soluciones.portalDesc')}</p>
          </div>

          <Card className="max-w-5xl mx-auto p-8 bg-card/50 backdrop-blur-sm border-2 rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between pb-5 border-b border-border/50 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <span className="text-sm text-muted-foreground ml-2">merchant.kredibilitypay.com</span>
              </div>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </div>

            <div className="grid lg:grid-cols-4 gap-4 mb-6">
              {portalKpis.map((kpi, i) => {
                const KpiIcon = kpiIcons[i];
                const color = i % 2 === 0 ? 'text-primary' : 'text-secondary';
                return (
                  <div key={kpi.label} className="p-4 bg-background/60 rounded-2xl border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <KpiIcon className={`h-4 w-4 ${color}`} />
                      <span className="text-xs text-muted-foreground">{kpi.label}</span>
                    </div>
                    <div className={`text-2xl font-bold ${color}`}>{kpi.value}</div>
                  </div>
                );
              })}
            </div>

            <div className="h-40 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="h-8 w-8 text-primary/30 mr-3" />
              <span className="text-sm text-muted-foreground">{t('soluciones.portalChart')}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {portalFeatures.map((feat, i) => {
                const FeatIcon = featureIcons[i];
                return (
                  <div key={feat} className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-sm text-foreground">
                    <FeatIcon className="h-4 w-4 text-primary" />
                    {feat}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            {t('soluciones.ctaTitle1')}{' '}
            <span className="text-primary">{t('soluciones.ctaTitle2')}</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">{t('soluciones.ctaDesc')}</p>
          <Link to="/contacto">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              {t('soluciones.ctaBtn')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Soluciones;
