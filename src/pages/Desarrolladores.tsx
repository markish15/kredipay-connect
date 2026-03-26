import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';
import { Code2, Terminal, Book, Webhook, Key, PlayCircle } from 'lucide-react';

const Desarrolladores = () => {
  const { t } = useTranslation();
  const endpointsTranslated = t('desarrolladores.endpoints', { returnObjects: true }) as Array<{ description: string }>;
  const webhookFeatures = t('desarrolladores.webhookFeatures', { returnObjects: true }) as string[];

  const sdks = [
    { name: 'Node.js', version: 'v2.1.0', color: 'bg-green-500/10 text-green-500' },
    { name: 'PHP', version: 'v2.0.3', color: 'bg-purple-500/10 text-purple-500' },
    { name: 'Python', version: 'v1.9.2', color: 'bg-blue-500/10 text-blue-500' },
    { name: 'Ruby', version: 'v1.8.5', color: 'bg-red-500/10 text-red-500' }
  ];

  const plugins = [
    { name: 'Shopify', status: 'Stable' },
    { name: 'WooCommerce', status: 'Stable' },
    { name: 'Magento', status: 'Beta' },
    { name: 'PrestaShop', status: 'Coming Soon' }
  ];

  const endpoints = [
    { method: 'POST', path: '/v1/charges' },
    { method: 'GET', path: '/v1/charges/:id' },
    { method: 'POST', path: '/v1/payouts' },
    { method: 'POST', path: '/v1/refunds' },
    { method: 'GET', path: '/v1/transactions' },
    { method: 'POST', path: '/v1/webhooks' }
  ];

  const codeExample = `// Node.js SDK Example
const KredibilityPay = require('@kredibilitypay/node');

const client = new KredibilityPay({
  apiKey: 'sk_live_...',
  environment: 'production'
});

// Create a charge
const charge = await client.charges.create({
  amount: 10000,
  currency: 'BRL',
  payment_method: 'pix',
  customer: {
    email: 'customer@example.com',
    document: '12345678900'
  },
  metadata: {
    order_id: 'ORD-123'
  }
});

console.log('Charge ID:', charge.id);
console.log('Status:', charge.status);`;

  const webhookExample = `{
  "event": "charge.succeeded",
  "data": {
    "id": "chr_abc123",
    "amount": 10000,
    "currency": "BRL",
    "status": "succeeded",
    "payment_method": "pix",
    "created_at": "2025-01-15T10:30:00Z"
  }
}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('desarrolladores.heroTitle1')} <span className="text-primary">{t('desarrolladores.heroTitle2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">{t('desarrolladores.heroDesc')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Book className="mr-2 h-5 w-5" />
                {t('desarrolladores.verDocs')}
              </Button>
              <Button size="lg" variant="outline">
                <PlayCircle className="mr-2 h-5 w-5" />
                {t('desarrolladores.probarSandbox')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Code2 className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">{t('desarrolladores.quickStart')}</h2>
              </div>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 rounded-2xl overflow-hidden">
                <div className="bg-slate-950 text-slate-50 p-6 rounded-lg overflow-x-auto">
                  <pre className="text-sm"><code>{codeExample}</code></pre>
                </div>
              </Card>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Terminal className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">{t('desarrolladores.sdksPlugins')}</h2>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 rounded-2xl">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t('desarrolladores.officialSdks')}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {sdks.map((sdk, index) => (
                      <div key={index} className={`p-4 ${sdk.color} rounded-xl`}>
                        <div className="font-semibold mb-1">{sdk.name}</div>
                        <div className="text-sm opacity-80">{sdk.version}</div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 rounded-2xl">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t('desarrolladores.ecommercePlugins')}</h3>
                  <div className="space-y-3">
                    {plugins.map((plugin, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-background/60 rounded-xl">
                        <span className="font-medium text-foreground">{plugin.name}</span>
                        <Badge variant={plugin.status === 'Stable' ? 'default' : 'secondary'}>{plugin.status}</Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('desarrolladores.apiReference')}</h2>
            <p className="text-lg text-muted-foreground">{t('desarrolladores.apiDesc')}</p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 rounded-2xl max-w-5xl mx-auto">
            <div className="space-y-3">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-background/60 rounded-xl hover:bg-background/80 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <Badge variant={endpoint.method === 'POST' ? 'default' : 'secondary'} className="w-16 justify-center">{endpoint.method}</Badge>
                    <code className="text-sm font-mono text-primary">{endpoint.path}</code>
                  </div>
                  <span className="text-sm text-muted-foreground">{endpointsTranslated[index]?.description}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Webhooks */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Webhook className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">{t('desarrolladores.webhooks')}</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">{t('desarrolladores.webhooksDesc')}</p>
              <ul className="space-y-3">
                {webhookFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span className="text-foreground">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 rounded-2xl">
              <div className="bg-slate-950 text-slate-50 p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm"><code>{webhookExample}</code></pre>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('desarrolladores.recursosTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 rounded-2xl text-center hover:scale-105 transition-transform cursor-pointer">
              <Key className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{t('desarrolladores.apiKeys')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('desarrolladores.apiKeysDesc')}</p>
              <Button variant="outline" size="sm">{t('desarrolladores.irDashboard')}</Button>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 rounded-2xl text-center hover:scale-105 transition-transform cursor-pointer">
              <Book className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{t('desarrolladores.guias')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('desarrolladores.guiasDesc')}</p>
              <Button variant="outline" size="sm">{t('desarrolladores.verGuias')}</Button>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 rounded-2xl text-center hover:scale-105 transition-transform cursor-pointer">
              <PlayCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{t('desarrolladores.sandbox')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('desarrolladores.sandboxDesc')}</p>
              <Button variant="outline" size="sm">{t('desarrolladores.acceder')}</Button>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Desarrolladores;
