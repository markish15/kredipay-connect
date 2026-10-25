import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/kredibilitypay-logo-full.svg';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const navLinks = [
    { label: t('header.soluciones'), to: '/soluciones' },
    { label: t('header.mercados'), to: '/mercados' },
    { label: t('header.nosotros'), to: '/nosotros' },
    { label: t('header.contactanos'), to: '/contacto' },
  ];

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
  ];

  return (
    <footer className="border-t border-border py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="KredibilityPay" className="h-[150px]" />
          </Link>

          {/* Nav + email */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            <span className="hidden md:inline text-border">|</span>
            <a href="mailto:sales@kredibilitypay.com" className="hover:text-primary transition-colors">
              sales@kredibilitypay.com
            </a>
          </nav>

          {/* Language + copyright */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`font-medium transition-colors ${
                    i18n.language === lang.code ? 'text-primary' : 'hover:text-foreground'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <span className="text-border">|</span>
            <span>© {new Date().getFullYear()} KredibilityPay</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 border-t border-border/60 pt-3 text-[11px] text-muted-foreground/80 md:justify-end">
          <Link to="/terminos" className="transition-colors hover:text-primary">
            {t('footer.terms')}
          </Link>
          <Link to="/aviso-de-privacidad" className="transition-colors hover:text-primary">
            {t('footer.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
