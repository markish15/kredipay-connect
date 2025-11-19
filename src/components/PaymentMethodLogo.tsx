interface PaymentMethodLogoProps {
  method: string;
  className?: string;
}

const PaymentMethodLogo = ({ method, className = "h-6" }: PaymentMethodLogoProps) => {
  // Map payment method names to logo file names
  const logoMap: Record<string, string> = {
    'Pix': 'pix',
    'Boleto': 'boleto',
    'Boleto Bancário': 'boleto',
    'SPEI': 'spei',
    'OXXO': 'oxxo',
    'PSE': 'pse',
    'Efecty': 'efecty',
    'PagoEfectivo': 'pagoefectivo',
    'Yape': 'yape',
    'WebPay': 'webpay',
    'Khipu': 'khipu',
    'MercadoPago': 'mercadopago',
    'Rapipago': 'rapipago',
    'M-Pesa': 'mpesa',
    'Fawry': 'fawry',
    'EFT': 'eft',
    'Paystack': 'paystack',
    'Mobile Money': 'mobile-money',
    'MTN Money': 'mobile-money',
    'Airtel Money': 'mobile-money',
    'Vodafone Cash': 'mobile-money',
    'Tigo Pesa': 'mobile-money',
    'MTN Mobile Money': 'mobile-money',
    'Tarjetas Locales': 'tarjetas-locales',
  };

  const logoFileName = logoMap[method];

  // If we have a logo for this method, show it
  if (logoFileName) {
    return (
      <img 
        src={`/payment-logos/${logoFileName}.png`}
        alt={method}
        className={className}
        onError={(e) => {
          // Fallback to text if image fails to load
          e.currentTarget.style.display = 'none';
          if (e.currentTarget.nextSibling) {
            (e.currentTarget.nextSibling as HTMLElement).style.display = 'inline';
          }
        }}
      />
    );
  }

  // Fallback to text for methods without logos
  return <span className="text-xs font-medium">{method}</span>;
};

export default PaymentMethodLogo;
