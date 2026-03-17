import { useState } from 'react';
import Header from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import {
  Code2, FileJson, TestTube, Rocket,
  ArrowRight, CheckCircle2, Mail, Building2, User, MessageSquare, Loader2
} from 'lucide-react';

const stepIcons = [Code2, FileJson, TestTube, Rocket];

const Contacto = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', volume: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: t('contacto.toastRequired'), variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', { body: formData });
      if (error) throw error;
      setIsSubmitted(true);
      toast({ title: t('contacto.toastSuccess'), description: t('contacto.toastSuccessDesc') });
    } catch (err) {
      console.error('Error sending form:', err);
      toast({ title: t('contacto.toastError'), description: t('contacto.toastErrorDesc'), variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = t('contacto.steps', { returnObjects: true }) as Array<{ title: string; description: string; detail: string }>;
  const workflowFeatures = t('contacto.workflowFeatures', { returnObjects: true }) as string[];
  const phases = ['01', '02', '03', '04'];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">{t('contacto.heroBadge')}</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              {t('contacto.heroTitle1')}{' '}
              <span className="text-primary">{t('contacto.heroTitle2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t('contacto.heroDesc1')}<br />{t('contacto.heroDesc2')}
            </p>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">{t('contacto.stepsBadge')}</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('contacto.stepsTitle')}</h2>
            <p className="text-lg text-muted-foreground">{t('contacto.stepsDesc')}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, index) => {
                const Icon = stepIcons[index];
                return (
                  <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-2xl relative overflow-hidden hover:border-primary/30 transition-all group">
                    <div className="absolute top-4 right-6 text-7xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors select-none">
                      {phases[index]}
                    </div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="border-secondary text-secondary text-xs">
                          {t('contacto.fase')} {phases[index]}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-3">{step.description}</p>
                      <p className="text-sm text-primary/80 font-medium">{step.detail}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {t('contacto.workflowTitle1')}{' '}
                <span className="text-primary">{t('contacto.workflowTitle2')}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t('contacto.workflowDesc')}</p>
              <div className="space-y-4">
                {workflowFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('contacto.formTitle')}</h2>
              <p className="text-lg text-muted-foreground">{t('contacto.formDesc')}</p>
            </div>

            {isSubmitted ? (
              <Card className="p-12 bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{t('contacto.successTitle')}</h3>
                <p className="text-lg text-muted-foreground mb-6">{t('contacto.successDesc')}</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', company: '', volume: '', message: '' });
                  }}
                  className="rounded-2xl"
                >
                  {t('contacto.sendAnother')}
                </Button>
              </Card>
            ) : (
              <Card className="p-8 lg:p-12 bg-card/50 backdrop-blur-sm border-2 rounded-2xl">
                <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      {t('contacto.labelName')} *
                    </label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder={t('contacto.placeholderName')} className="rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      {t('contacto.labelEmail')} *
                    </label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t('contacto.placeholderEmail')} className="rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      {t('contacto.labelCompany')}
                    </label>
                    <Input name="company" value={formData.company} onChange={handleChange} placeholder={t('contacto.placeholderCompany')} className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      {t('contacto.labelVolume')}
                    </label>
                    <Input name="volume" value={formData.volume} onChange={handleChange} placeholder={t('contacto.placeholderVolume')} className="rounded-xl" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {t('contacto.labelMessage')} *
                    </label>
                    <Textarea
                      name="message" value={formData.message} onChange={handleChange}
                      placeholder={t('contacto.placeholderMessage')}
                      className="rounded-xl min-h-[120px]" required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl text-lg py-6">
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" />{t('contacto.submitting')}</>
                      ) : (
                        <>{t('contacto.submitBtn')}<ArrowRight className="ml-2 h-5 w-5" /></>
                      )}
                    </Button>
                  </div>
                </form>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
