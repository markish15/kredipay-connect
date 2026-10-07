import PaymentMethodLogo from '@/components/PaymentMethodLogo';
import { useTranslation } from 'react-i18next';
import SectionEyebrow from '@/components/sections/SectionEyebrow';

const PaymentMethods = () => {
  const { t } = useTranslation();
  const methods = [
    'Pix', 'SPEI', 'OXXO', 'Boleto', 'Banco Azteca', 'Banorte', 'Afirme',
    'Rapipago', 'Pago Fácil', 'Khipu', '7-Eleven', 'Circle K', 'Servipag',
  ];

  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionEyebrow index="01">{t('home.methodsEyebrow')}</SectionEyebrow>
            <h2 className="text-balance mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-dark lg:text-6xl">
              {t('paymentMethods.title1')} {t('paymentMethods.title2')}
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-neutral-dark/65 lg:justify-self-end">
            {t('paymentMethods.description')}
          </p>
        </div>

        {/* Hairline logo wall: 1px gaps over a border-coloured backdrop draw the grid lines */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-neutral-dark/10 bg-neutral-dark/10 sm:grid-cols-4 lg:grid-cols-7">
          {methods.map((method) => {
            // These marks are square or carry wide padding, so they get a taller box
            const isSquare = ['Pago Fácil', '7-Eleven', 'Khipu', 'Banco Azteca'].includes(method);
            return (
              <div
                key={method}
                className="group relative flex h-28 items-center justify-center bg-card p-6 transition-colors hover:bg-neutral-light/60"
              >
                <PaymentMethodLogo
                  method={method}
                  className={`${isSquare ? 'max-h-16 max-w-[96px]' : 'max-h-11 max-w-[104px]'} object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0`}
                />
                <span className="absolute bottom-2 left-3 font-mono text-[10px] uppercase tracking-wider text-neutral-dark/0 transition-colors group-hover:text-neutral-dark/45">
                  {method}
                </span>
              </div>
            );
          })}
          <div className="flex h-28 items-center justify-center bg-neutral-light/60 p-6 sm:col-span-3 lg:col-span-1">
            <span className="text-center font-mono text-xs leading-relaxed text-neutral-dark/60">
              {t('paymentMethods.more')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
