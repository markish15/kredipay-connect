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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-card/90 backdrop-blur-sm text-foreground border border-border hover:border-primary/40 hover:text-primary px-5 py-2.5 rounded-2xl shadow-md hover:shadow-lg transition-all text-sm font-medium"
    >
      <Mail className="h-4 w-4" />
      <span>{t('floatingContact.label', 'Contacto')}</span>
    </button>
  );
};

export default FloatingContactButton;
