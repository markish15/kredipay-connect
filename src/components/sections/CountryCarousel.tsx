import { useState, useEffect, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import argentinaImg from '@/assets/carousel-argentina.jpg';
import boliviaImg from '@/assets/carousel-bolivia.jpg';
import brasilImg from '@/assets/carousel-brasil.jpg';
import chileImg from '@/assets/carousel-chile.jpg';
import colombiaImg from '@/assets/carousel-colombia.jpg';
import costaricaImg from '@/assets/carousel-costarica.jpg';
import dominicanaImg from '@/assets/carousel-dominicana.jpg';
import ecuadorImg from '@/assets/carousel-ecuador.jpg';
import elsalvadorImg from '@/assets/carousel-elsalvador.jpg';
import guatemalaImg from '@/assets/carousel-guatemala.jpg';
import mexicoImg from '@/assets/carousel-mexico.jpg';
import panamaImg from '@/assets/carousel-panama.jpg';
import paraguayImg from '@/assets/carousel-paraguay.jpg';
import peruImg from '@/assets/carousel-peru.jpg';
import uruguayImg from '@/assets/carousel-uruguay.jpg';

const countrySlides = [
  {
    name: 'Brasil', flag: '🇧🇷', image: brasilImg,
    stats: [{ value: '$49B', label: 'eCommerce' }, { value: '215M', label: 'Población' }, { value: '#1', label: 'Mercado LatAm' }],
    methods: ['Pix', 'Boleto', 'Tarjetas locales'],
    insight: 'Pix procesa +$250B/mes. Mercado #1 en LatAm.',
  },
  {
    name: 'México', code: 'mx', image: mexicoImg,
    stats: [{ value: '$37B', label: 'eCommerce' }, { value: '22K+', label: 'Sucursales OXXO' }, { value: '+40%', label: 'Crec. SPEI' }],
    methods: ['OXXO', 'SPEI', 'Tarjetas locales'],
    insight: 'OXXO tiene 22K+ sucursales. SPEI crece 40% anual.',
  },
  {
    name: 'Colombia', code: 'co', image: colombiaImg,
    stats: [{ value: '$14B', label: 'eCommerce' }, { value: '85%', label: 'Penetración PSE' }, { value: '52M', label: 'Población' }],
    methods: ['PSE', 'Efecty', 'Nequi'],
    insight: 'PSE domina pagos online con 85% de penetración digital.',
  },
  {
    name: 'Argentina', code: 'ar', image: argentinaImg,
    stats: [{ value: '$15B', label: 'eCommerce' }, { value: '40M+', label: 'Wallets' }, { value: '46M', label: 'Población' }],
    methods: ['MercadoPago', 'Rapipago', 'PagoFácil'],
    insight: 'MercadoPago lidera fintech con +40M de wallets activas.',
  },
  {
    name: 'Chile', code: 'cl', image: chileImg,
    stats: [{ value: '$12B', label: 'eCommerce' }, { value: '87%', label: 'Bancarización' }, { value: '19M', label: 'Población' }],
    methods: ['Webpay', 'Khipu', 'ServiPag'],
    insight: 'Mayor penetración bancaria de LatAm con 87%.',
  },
  {
    name: 'Perú', code: 'pe', image: peruImg,
    stats: [{ value: '$8B', label: 'eCommerce' }, { value: '15M+', label: 'Usuarios Yape' }, { value: '34M', label: 'Población' }],
    methods: ['Yape', 'PagoEfectivo', 'Transferencia'],
    insight: 'Yape: +15M de usuarios activos. Billetera #1.',
  },
  {
    name: 'Ecuador', code: 'ec', image: ecuadorImg,
    stats: [{ value: '$3.5B', label: 'eCommerce' }, { value: '18M', label: 'Población' }, { value: '+22%', label: 'Crec. digital' }],
    methods: ['Transferencia', 'Efectivo', 'Tarjetas locales'],
    insight: 'Economía dolarizada con rápida adopción de pagos digitales.',
  },
  {
    name: 'Uruguay', code: 'uy', image: uruguayImg,
    stats: [{ value: '$1.2B', label: 'eCommerce' }, { value: '74%', label: 'Inclusión fin.' }, { value: '+25%', label: 'Crec. digital' }],
    methods: ['Abitab', 'RedPagos', 'Tarjetas locales'],
    insight: 'Líder en inclusión financiera digital del Cono Sur.',
  },
  {
    name: 'Paraguay', code: 'py', image: paraguayImg,
    stats: [{ value: '$1B', label: 'eCommerce' }, { value: '7.4M', label: 'Población' }, { value: '+30%', label: 'Crec. digital' }],
    methods: ['Transferencia', 'Giros Tigo', 'Tarjetas locales'],
    insight: 'Billeteras móviles creciendo +30% año tras año.',
  },
  {
    name: 'Bolivia', code: 'bo', image: boliviaImg,
    stats: [{ value: '$0.8B', label: 'eCommerce' }, { value: '12M', label: 'Población' }, { value: '+35%', label: 'Crec. digital' }],
    methods: ['QR Simple', 'Transferencia', 'Tigo Money'],
    insight: 'QR Simple impulsa la inclusión financiera digital.',
  },
  {
    name: 'Costa Rica', code: 'cr', image: costaricaImg,
    stats: [{ value: '$2B', label: 'eCommerce' }, { value: '5.2M', label: 'Población' }, { value: '68%', label: 'Bancarización' }],
    methods: ['SINPE Móvil', 'Transferencia', 'Tarjetas locales'],
    insight: 'SINPE Móvil revoluciona pagos P2P en el país.',
  },
  {
    name: 'Panamá', code: 'pa', image: panamaImg,
    stats: [{ value: '$2.5B', label: 'eCommerce' }, { value: '4.4M', label: 'Población' }, { value: '+20%', label: 'Crec. digital' }],
    methods: ['Yappy', 'Transferencia', 'Tarjetas locales'],
    insight: 'Yappy domina pagos móviles con adopción masiva.',
  },
  {
    name: 'Guatemala', code: 'gt', image: guatemalaImg,
    stats: [{ value: '$1.5B', label: 'eCommerce' }, { value: '17M', label: 'Población' }, { value: '+28%', label: 'Crec. digital' }],
    methods: ['Transferencia', 'Efectivo', 'Tarjetas locales'],
    insight: 'Mercado en expansión con fuerte adopción móvil.',
  },
  {
    name: 'Rep. Dominicana', code: 'do', image: dominicanaImg,
    stats: [{ value: '$2B', label: 'eCommerce' }, { value: '11M', label: 'Población' }, { value: '+24%', label: 'Crec. digital' }],
    methods: ['Transferencia', 'Tarjetas locales', 'Efectivo'],
    insight: 'Líder del Caribe en comercio electrónico.',
  },
  {
    name: 'El Salvador', code: 'sv', image: elsalvadorImg,
    stats: [{ value: '$0.9B', label: 'eCommerce' }, { value: '6.5M', label: 'Población' }, { value: '+32%', label: 'Crec. digital' }],
    methods: ['Transferencia', 'Chivo Wallet', 'Efectivo'],
    insight: 'Pionero en adopción de pagos digitales en Centroamérica.',
  },
];

const CountryCarousel = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % countrySlides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + countrySlides.length) % countrySlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 4000);
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
        <div className="absolute top-5 left-5 flex items-center gap-3 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
          <img
            src={`https://flagcdn.com/w80/${slide.code}.png`}
            alt={`Bandera de ${slide.name}`}
            className="w-8 h-6 object-cover rounded shadow-sm"
          />
          <span className="text-lg font-bold text-foreground">{slide.name}</span>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md shadow-lg flex items-center justify-center text-white/80 hover:ring-2 hover:ring-primary hover:text-white transition-all"
          aria-label="País anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md shadow-lg flex items-center justify-center text-white/80 hover:ring-2 hover:ring-primary hover:text-white transition-all"
          aria-label="País siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Insight text */}
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
        <div className="flex gap-1">
          {countrySlides.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActive(i)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                i === active ? 'bg-primary w-5' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
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
