import Header from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Target, Users, Award,
  Shield, Heart, Zap, ArrowRight
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import puenteJkImage from '@/assets/puente-jk.jpg';

const valueIcons = [Target, Shield, Heart, Zap, Users, Award];

const Nosotros = () => {
  const { t } = useTranslation();
  const values = t('nosotros.values', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const faqs = t('nosotros.faqs', { returnObjects: true }) as Array<{ question: string; answer: string }>;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">{t('nosotros.heroLabel')}</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              {t('nosotros.heroTitle1')}{' '}
              <span className="text-primary">{t('nosotros.heroTitle2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">{t('nosotros.heroDesc')}</p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">{t('nosotros.razonBadge')}</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">{t('nosotros.razonTitle')}</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>{t('nosotros.razonP1')}</p>
                <p>{t('nosotros.razonP2')}</p>
                <p><strong className="text-foreground">{t('nosotros.razonP3')}</strong></p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-transparent hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={puenteJkImage} alt="Puente JK" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('nosotros.valoresTitle')}</h2>
            <p className="text-lg text-muted-foreground">{t('nosotros.valoresDesc')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-2xl hover:border-primary/30 transition-all group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('nosotros.faqTitle')}</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-2 rounded-2xl px-6 bg-card/50">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            {t('nosotros.ctaTitle1')} <span className="text-primary">{t('nosotros.ctaTitle2')}</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">{t('nosotros.ctaDesc')}</p>
          <Link to="/contacto">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              {t('nosotros.ctaBtn')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
