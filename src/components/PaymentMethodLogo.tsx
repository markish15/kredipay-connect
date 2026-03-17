interface PaymentMethodLogoProps {
  method: string;
  className?: string;
}

const PaymentMethodLogo = ({ method, className = "h-6" }: PaymentMethodLogoProps) => {
  const logoMap: Record<string, string> = {
    'Pix': 'pix',
    'SPEI': 'spei',
    'OXXO': 'oxxo',
    'Boleto': 'boleto',
    'Banco Azteca': 'banco-azteca',
    'Banorte': 'banorte',
    'Afirme': 'afirme',
    'Rapipago': 'rapipago',
    'Pago Fácil': 'pagofacil',
    'Khipu': 'khipu',
    '7-Eleven': '7eleven',
    'Circle K': 'circlek',
    'Servipag': 'servipag',
  };

  const logoFileName = logoMap[method];

  if (logoFileName) {
    return (
      <img 
        src={`/payment-logos/${logoFileName}.png`}
        alt={method}
        className={className}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          if (e.currentTarget.nextSibling) {
            (e.currentTarget.nextSibling as HTMLElement).style.display = 'inline';
          }
        }}
      />
    );
  }

  return <span className="text-xs font-medium">{method}</span>;
};

export default PaymentMethodLogo;
