import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Gamepad2, TrendingUp, Users, Pill } from 'lucide-react';

const industryIcons = [Gamepad2, TrendingUp, Users, Pill];

const Industrias = () => {
  const { t } = useTranslation();
  const industries = t('industrias.industries', { returnObjects: true }) as Array<{
    title: string; description: string;
    challenges: string[]; solutions: string[]; tags: string[];
  }>;

  const stats = [
    [
      { label: 'Aprobación', value: '96%' },
      { label: 'Payout Speed', value: '12h' },
      { label: 'Uptime', value: '99.9%' }
    ],
    [
      { label: 'Depósitos', value: '<1min' },
      { label: 'Retiros', value: '24h' },
      { label: 'Divisas', value: '30+' }
    ],
    [
      { label: 'Retención', value: '92%' },
      { label: 'Chargeback', value: '<1%' },
      { label: 'Discretion', value: '100%' }
    ],
    [
      { label: 'Retención', value: '89%' },
      { label: 'Recovery', value: '65%' },
      { label: 'MRR Growth', value: '+45%' }
    ]
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('industrias.heroTitle1')} <span className="text-primary">{t('industrias.heroTitle2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">{t('industrias.heroDesc')}</p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {industries.map((industry, index) => {
              const Icon = industryIcons[index];
              return (
                <div key={index}>
                  <Card className="p-12 bg-card/50 backdrop-blur-sm border-2 rounded-3xl overflow-hidden">
                    <div className="grid lg:grid-cols-5 gap-12">
                      <div className="lg:col-span-3">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-4xl font-bold text-foreground mb-4">{industry.title}</h2>
                        <p className="text-lg text-muted-foreground mb-8">{industry.description}</p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {industry.tags.map((tag, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{tag}</Badge>
                          ))}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">{t('industrias.desafios')}</h3>
                            <ul className="space-y-2">
                              {industry.challenges.map((challenge, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                  <span className="mr-2">•</span><span>{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">{t('industrias.soluciones')}</h3>
                            <ul className="space-y-2">
                              {industry.solutions.map((solution, idx) => (
                                <li key={idx} className="text-sm text-foreground flex items-start">
                                  <span className="mr-2 text-primary">✓</span><span>{solution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          {t('industrias.hablarExperto')} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      <div className="lg:col-span-2">
                        <div className="space-y-6">
                          {stats[index].map((stat, idx) => (
                            <div key={idx} className="p-6 bg-background/80 rounded-2xl border border-border/50">
                              <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">{t('industrias.ctaTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('industrias.ctaDesc')}</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">{t('industrias.ctaBtn')}</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industrias;
