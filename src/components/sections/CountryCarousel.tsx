import { useState, useEffect, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

import argentinaImg from '@/assets/carousel-argentina.jpg';
import chileImg from '@/assets/carousel-chile.jpg';
import mexicoImg from '@/assets/carousel-mexico.jpg';
import uruguayImg from '@/assets/carousel-uruguay.jpg';
import colombiaImg from '@/assets/carousel-colombia.jpg';

const countrySlides = [
  {
    name: 'Argentina',
    flag: '🇦🇷',
    image: argentinaImg,
    widgets: [
      { label: 'eCommerce', value: '$15B', position: 'top-right' as const },
      { label: 'Wallets activas', value: '40M+', position: 'bottom-left' as const },
      { label: 'Método #1', value: 'MercadoPago', position: 'bottom-right' as const },
    ],
    methods: ['MercadoPago', 'Rapipago', 'PagoFácil'],
    insight: 'MercadoPago lidera fintech con +40M de wallets activas.',
  },
  {
    name: 'Chile',
    flag: '🇨🇱',
    image: chileImg,
    widgets: [
      { label: 'Bancarización', value: '87%', position: 'top-right' as const },
      { label: 'eCommerce', value: '$12B', position: 'bottom-left' as const },
      { label: 'Método #1', value: 'Webpay', position: 'bottom-right' as const },
    ],
    methods: ['Webpay', 'Khipu', 'ServiPag'],
    insight: 'Mayor penetración bancaria de LatAm con 87%.',
  },
  {
    name: 'México',
    flag: '🇲🇽',
    image: mexicoImg,
    widgets: [
      { label: 'Sucursales OXXO', value: '22K+', position: 'top-right' as const },
      { label: 'eCommerce', value: '$37B', position: 'bottom-left' as const },
      { label: 'Crecimiento SPEI', value: '+40%', position: 'bottom-right' as const },
    ],
    methods: ['OXXO', 'SPEI', 'Tarjetas locales'],
    insight: 'OXXO tiene 22K+ sucursales. SPEI crece 40% anual.',
  },
  {
    name: 'Uruguay',
    flag: '🇺🇾',
    image: uruguayImg,
    widgets: [
      { label: 'Inclusión financiera', value: '74%', position: 'top-right' as const },
      { label: 'eCommerce', value: '$1.2B', position: 'bottom-left' as const },
      { label: 'Crecimiento digital', value: '+25%', position: 'bottom-right' as const },
    ],
    methods: ['Abitab', 'RedPagos', 'Tarjetas locales'],
    insight: 'Líder en inclusión financiera digital del Cono Sur.',
  },
  {
    name: 'Colombia',
    flag: '🇨🇴',
    image: colombiaImg,
    widgets: [
      { label: 'Penetración PSE', value: '85%', position: 'top-right' as const },
      { label: 'eCommerce', value: '$14B', position: 'bottom-left' as const },
      { label: 'Método #1', value: 'PSE', position: 'bottom-right' as const },
    ],
    methods: ['PSE', 'Efecty', 'Nequi'],
    insight: 'PSE domina pagos online con 85% de penetración bancaria digital.',
  },
];

type WidgetPosition = 'top-right' | 'bottom-left' | 'bottom-right';

const positionClasses: Record<WidgetPosition, string> = {
  'top-right': 'top-6 right-6',
  'bottom-left': 'bottom-6 left-6',
  'bottom-right': 'bottom-6 right-6',
};

const CountryCarousel = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % countrySlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const slide = countrySlides[active];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image container */}
      <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square">
        {countrySlides.map((s, i) => (
          <img
            key={s.name}
            src={s.image}
            alt={`Comercio en ${s.name}`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-700',
              i === active ? 'opacity-100' : 'opacity-0'
            )}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />

        {/* Country name + flag top-left */}
        <div className="absolute top-6 left-6 flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
          <span className="text-2xl">{slide.flag}</span>
          <span className="text-lg font-bold text-foreground">{slide.name}</span>
        </div>

        {/* Stat widgets */}
        {slide.widgets.map((widget) => (
          <div
            key={widget.label}
            className={cn(
              'absolute bg-card/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg transition-all duration-500',
              positionClasses[widget.position]
            )}
          >
            <div className="text-xl lg:text-2xl font-bold text-primary">{widget.value}</div>
            <div className="text-xs text-muted-foreground">{widget.label}</div>
          </div>
        ))}

        {/* Insight bar at bottom center */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] max-w-md bg-card/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg text-center hidden lg:block">
          <p className="text-sm text-muted-foreground italic">{slide.insight}</p>
        </div>
      </div>

      {/* Payment methods below image */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {slide.methods.map((m) => (
          <Badge key={m} variant="secondary" className="px-3 py-1.5 text-sm">
            {m}
          </Badge>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {countrySlides.map((s, i) => (
          <button
            key={s.name}
            onClick={() => setActive(i)}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-all duration-300',
              i === active ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            )}
            aria-label={`Ver ${s.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryCarousel;
