import PaymentMethodLogo from '@/components/PaymentMethodLogo';

const PaymentMethods = () => {
  const methods = [
    'Pix', 'SPEI', 'OXXO', 'Boleto', 'Banco Azteca',
    'Rapipago', 'Pago Fácil', 'Khipu', '7-Eleven', 'Servipag',
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Métodos de Pago</span> Locales
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Desde transferencias bancarias hasta wallets móviles y pagos en efectivo. 
            Todo con una sola integración.
          </p>
        </div>

        {/* Payment logos grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {methods.map((method) => (
            <div
              key={method}
              className="bg-card/60 backdrop-blur-sm rounded-2xl border-2 border-border/50 hover:border-primary/40 hover:shadow-md transition-all duration-300 w-[140px] h-[80px] flex items-center justify-center p-3"
            >
              <PaymentMethodLogo method={method} className="max-h-10 max-w-[110px] object-contain" />
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10 text-sm">
          …y muchos más en toda Latinoamérica y África.
        </p>
      </div>
    </section>
  );
};

export default PaymentMethods;
