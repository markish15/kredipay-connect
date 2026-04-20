import { useLocation, useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 font-medium"
    >
      <MessageCircle className="h-5 w-5" />
      <span>{t('floatingContact.label', 'Contacto')}</span>
    </button>
  );
};

export default FloatingContactButton;
