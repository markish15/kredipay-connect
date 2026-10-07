import { useLocation, useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FloatingContactButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (location.pathname === '/contacto') return null;

  const handleClick = () => {
    navigate('/contacto#demo-form');
  };

  return (
    <button
      onClick={handleClick}
      aria-label={t('floatingContact.label', 'Contacto')}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-md border border-neutral-dark/10 bg-card/90 px-4 py-2.5 text-sm font-medium text-neutral-dark shadow-[0_10px_30px_-12px_hsl(var(--neutral-dark)/0.4)] backdrop-blur transition-colors hover:border-turquoise-dark/40"
    >
      <Mail className="h-4 w-4 text-turquoise-dark" />
      <span>{t('floatingContact.label', 'Contacto')}</span>
    </button>
  );
};

export default FloatingContactButton;
