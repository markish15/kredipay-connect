import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import fullLogo from '@/assets/kredibilitypay-logo-full.svg';

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

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/contacto') {
      document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contacto#demo-form');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={fullLogo}
                alt="KredibilityPay"
                className="w-auto object-contain" style={{ height: '200px' }}
                loading="eager"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1.5 text-sm text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-lg hover:bg-primary/5">
                  <Globe className="h-4 w-4" />
                  <span className="font-medium">{i18n.language === 'es' ? 'ES' : i18n.language === 'pt' ? 'PT' : 'EN'}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="bottom" align="center" className="min-w-[80px] bg-popover/95 backdrop-blur-sm rounded-xl p-1">
                <DropdownMenuItem
                  onClick={() => changeLanguage('es')}
                  className={`justify-center rounded-lg font-semibold text-sm px-4 py-1.5 ${i18n.language === 'es' ? 'bg-accent text-accent-foreground hover:bg-accent/80' : ''}`}
                >
                  {i18n.language === 'es' ? '✓ ' : ''}ES
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeLanguage('en')}
                  className={`justify-center rounded-lg font-semibold text-sm px-4 py-1.5 ${i18n.language === 'en' ? 'bg-accent text-accent-foreground hover:bg-accent/80' : ''}`}
                >
                  {i18n.language === 'en' ? '✓ ' : ''}EN
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeLanguage('pt')}
                  className={`justify-center rounded-lg font-semibold text-sm px-4 py-1.5 ${i18n.language === 'pt' ? 'bg-accent text-accent-foreground hover:bg-accent/80' : ''}`}
                >
                  {i18n.language === 'pt' ? '✓ ' : ''}PT
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/contacto#demo-form" onClick={handleDemoClick}>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t('header.solicitarDemo')}
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary w-full px-3 py-2">
                      <Globe className="h-4 w-4" />
                      <span>{i18n.language === 'es' ? 'Español' : i18n.language === 'pt' ? 'Português' : 'English'}</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => changeLanguage('es')}>
                      🇪🇸 Español
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeLanguage('en')}>
                      🇺🇸 English
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeLanguage('pt')}>
                      🇧🇷 Português
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <a href="/contacto#demo-form" onClick={(e) => { handleDemoClick(e); setIsMenuOpen(false); }}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {t('header.solicitarDemo')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
