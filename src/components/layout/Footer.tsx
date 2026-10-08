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

  const legalLinks = [
    { label: t('footer.terms'), to: '/terminos' },
    { label: t('footer.privacy'), to: '/aviso-de-privacidad' },
  ];

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
  ];

  const columnTitle = 'font-mono text-[11px] uppercase tracking-wider text-neutral-dark/45';
  const linkClass = 'text-sm text-neutral-dark/75 transition-colors hover:text-neutral-dark';

  return (
    <footer className="border-t border-neutral-dark/10 bg-background">
      <div className="container mx-auto px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-block" aria-label="KredibilityPay">
              <img src={logo} alt="KredibilityPay" width={172} height={48} className="h-12 w-[172px]" />
            </Link>
            <p className="mt-4 max-w-xs font-mono text-xs uppercase leading-relaxed tracking-wider text-neutral-dark/55">
              {t('hero.slogan')}
            </p>
          </div>

          <div>
            <h3 className={columnTitle}>{t('footer.navigation')}</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={columnTitle}>{t('footer.contact')}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="mailto:sales@kredibilitypay.com" className={linkClass}>
                  sales@kredibilitypay.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={columnTitle}>{t('footer.legal')}</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-neutral-dark/10 pt-6 sm:flex-row sm:items-center">
          <span className="font-mono text-[11px] text-neutral-dark/50">
            © {new Date().getFullYear()} KredibilityPay. {t('footer.rights')}
          </span>
          <div className="flex items-center gap-3">
            <span className={columnTitle}>{t('footer.language')}</span>
            <div className="flex gap-1 font-mono text-[11px]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  aria-pressed={i18n.language === lang.code}
                  className={`rounded px-2 py-1 transition-colors ${
                    i18n.language === lang.code
                      ? 'bg-neutral-dark text-neutral-light'
                      : 'text-neutral-dark/60 hover:text-neutral-dark'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
