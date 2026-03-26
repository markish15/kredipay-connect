import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';
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
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Logo & email */}
          <div className="space-y-4">
            <Link to="/">
              <img src={logo} alt="KredibilityPay" className="h-10 brightness-0 invert" />
            </Link>
            <a
              href="mailto:sales@kredibilitypay.com"
              className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              sales@kredibilitypay.com
            </a>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-4">
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Language */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-4">
              {t('footer.language')}
            </h4>
            <div className="flex gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`text-sm font-medium transition-colors ${
                    i18n.language === lang.code
                      ? 'text-primary'
                      : 'text-background/60 hover:text-background'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & copyright */}
        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} KredibilityPay. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
