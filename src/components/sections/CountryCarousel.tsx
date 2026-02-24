import { useState, useEffect, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

import argentinaImg from '@/assets/carousel-argentina.jpg';
import brasilImg from '@/assets/carousel-brasil.jpg';
import chileImg from '@/assets/carousel-chile.jpg';
import colombiaImg from '@/assets/carousel-colombia.jpg';
import mexicoImg from '@/assets/carousel-mexico.jpg';
import peruImg from '@/assets/carousel-peru.jpg';
import uruguayImg from '@/assets/carousel-uruguay.jpg';

const countrySlides = [
  {
    name: 'Brasil',
    flag: '🇧🇷',
    image: brasilImg,
    stats: [
      { value: '$49B', label: 'eCommerce' },
      { value: '215M', label: 'Población' },
      { value: '#1', label: 'Mercado LatAm' },
    ],
    methods: ['Pix', 'Boleto', 'Tarjetas locales'],
    insight: 'Pix procesa +$250B/mes. Mercado #1 en LatAm.',
  },
  {
    name: 'México',
    flag: '🇲🇽',
    image: mexicoImg,
    stats: [
      { value: '$37B', label: 'eCommerce' },
      { value: '22K+', label: 'Sucursales OXXO' },
      { value: '+40%', label: 'Crecimiento SPEI' },
    ],
    methods: ['OXXO', 'SPEI', 'Tarjetas locales'],
    insight: 'OXXO tiene 22K+ sucursales. SPEI crece 40% anual.',
  },
  {
    name: 'Colombia',
    flag: '🇨🇴',
    image: colombiaImg,
    stats: [
      { value: '$14B', label: 'eCommerce' },
      { value: '85%', label: 'Penetración PSE' },
      { value: '52M', label: 'Población' },
    ],
    methods: ['PSE', 'Efecty', 'Nequi'],
    insight: 'PSE domina pagos online con 85% de penetración bancaria digital.',
  },
  {
    name: 'Argentina',
    flag: '🇦🇷',
    image: argentinaImg,
    stats: [
      { value: '$15B', label: 'eCommerce' },
      { value: '40M+', label: 'Wallets activas' },
      { value: '46M', label: 'Población' },
    ],
    methods: ['MercadoPago', 'Rapipago', 'PagoFácil'],
    insight: 'MercadoPago lidera fintech con +40M de wallets activas.',
  },
  {
    name: 'Chile',
    flag: '🇨🇱',
    image: chileImg,
    stats: [
      { value: '$12B', label: 'eCommerce' },
      { value: '87%', label: 'Bancarización' },
      { value: '19M', label: 'Población' },
    ],
    methods: ['Webpay', 'Khipu', 'ServiPag'],
    insight: 'Mayor penetración bancaria de LatAm con 87%.',
  },
  {
    name: 'Perú',
    flag: '🇵🇪',
    image: peruImg,
    stats: [
      { value: '$8B', label: 'eCommerce' },
      { value: '15M+', label: 'Usuarios Yape' },
      { value: '34M', label: 'Población' },
    ],
    methods: ['Yape', 'PagoEfectivo', 'Transferencia'],
    insight: 'Yape: +15M de usuarios activos. Billetera #1.',
  },
  {
    name: 'Uruguay',
    flag: '🇺🇾',
    image: uruguayImg,
    stats: [
      { value: '$1.2B', label: 'eCommerce' },
      { value: '74%', label: 'Inclusión financiera' },
      { value: '+25%', label: 'Crecimiento digital' },
    ],
    methods: ['Abitab', 'RedPagos', 'Tarjetas locales'],
    insight: 'Líder en inclusión financiera digital del Cono Sur.',
  },
];

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
      <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
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

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />

        {/* Country name + flag top-left */}
        <div className="absolute top-5 left-5 flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
          <span className="text-2xl">{slide.flag}</span>
          <span className="text-lg font-bold text-foreground">{slide.name}</span>
        </div>

        {/* Insight text overlay */}
        <div className="absolute bottom-20 left-5 right-5 lg:bottom-24">
          <p className="text-sm text-card/90 italic drop-shadow-md">{slide.insight}</p>
        </div>

        {/* Stats row at bottom */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
          {slide.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 bg-card/90 backdrop-blur-sm px-3 py-2.5 rounded-xl shadow-lg text-center"
            >
              <div className="text-lg lg:text-xl font-bold text-primary">{stat.value}</div>
              <div className="text-[10px] lg:text-xs text-muted-foreground leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment methods + dots */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-wrap gap-2">
          {slide.methods.map((m) => (
            <Badge key={m} variant="secondary" className="px-3 py-1.5 text-sm">
              {m}
            </Badge>
          ))}
        </div>
        <div className="flex gap-1.5">
          {countrySlides.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActive(i)}
              className={cn(
                'h-2.5 rounded-full transition-all duration-300',
                i === active ? 'bg-primary w-6' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5'
              )}
              aria-label={`Ver ${s.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryCarousel;
