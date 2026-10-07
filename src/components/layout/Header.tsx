import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ArrowRight } from 'lucide-react';
import fullLogo from '@/assets/kredibilitypay-logo-full.svg';

const languages = ['es', 'en', 'pt'] as const;

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: t('header.soluciones'), href: '/soluciones' },
    { name: t('header.mercados'), href: '/mercados' },
    { name: t('header.nosotros'), href: '/nosotros' },
    { name: t('header.contactanos'), href: '/contacto' },
  ];

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname === '/contacto') {
      document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contacto#demo-form');
    }
  };

  const languageSwitch = (
    <div className="flex items-center rounded-md border border-neutral-dark/10 bg-card p-0.5 font-mono text-[11px]">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          aria-pressed={i18n.language === lang}
          className={`rounded px-2 py-1 uppercase transition-colors ${
            i18n.language === lang
              ? 'bg-neutral-dark text-neutral-light'
              : 'text-neutral-dark/60 hover:text-neutral-dark'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-dark/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="KredibilityPay">
            {/* The SVG canvas is square; sizing to its viewBox ratio keeps the wordmark crisp */}
            <img src={fullLogo} alt="KredibilityPay" width={150} height={42} className="h-[42px] w-[150px]" loading="eager" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-neutral-dark' : 'text-neutral-dark/60 hover:text-neutral-dark'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {languageSwitch}
            <a
              href="/contacto#demo-form"
              onClick={handleDemoClick}
              className="group inline-flex items-center gap-1.5 rounded-md bg-neutral-dark px-4 py-2 text-sm font-medium text-neutral-light transition-colors hover:bg-neutral-dark/90"
            >
              {t('header.solicitarDemo')}
              <ArrowRight className="h-3.5 w-3.5 text-turquoise transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            className="rounded-md p-2 text-neutral-dark md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-neutral-dark/10 pb-4 pt-2 md:hidden">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block rounded-md px-2 py-3 text-base font-medium text-neutral-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 px-2">
              {languageSwitch}
              <a
                href="/contacto#demo-form"
                onClick={handleDemoClick}
                className="inline-flex items-center gap-1.5 rounded-md bg-neutral-dark px-4 py-2 text-sm font-medium text-neutral-light"
              >
                {t('header.solicitarDemo')}
                <ArrowRight className="h-3.5 w-3.5 text-turquoise" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
