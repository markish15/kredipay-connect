import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Badge } from '@/components/ui/badge';
import { Banknote, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react';

const countries = [
  {
    name: 'Brasil',
    flag: '🇧🇷',
    population: '215M',
    ecommerce: '$49B',
    cashMethods: ['Pix', 'Boleto'],
    onlineMethods: ['Tarjetas locales', 'Transferencia bancaria'],
    highlight: 'Pix procesa +$250B/mes. Mercado #1 en LatAm.',
    stat: '70%',
    statLabel: 'Pagos vía Pix',
  },
  {
    name: 'México',
    flag: '🇲🇽',
    population: '130M',
    ecommerce: '$37B',
    cashMethods: ['OXXO', 'SPEI'],
    onlineMethods: ['Tarjetas locales', 'Transferencia'],
    highlight: 'OXXO tiene 22K+ sucursales. SPEI crece 40% anual.',
    stat: '22K+',
    statLabel: 'Puntos OXXO',
  },
  {
    name: 'Colombia',
    flag: '🇨🇴',
    population: '52M',
    ecommerce: '$14B',
    cashMethods: ['Efecty', 'Baloto'],
    onlineMethods: ['PSE', 'Tarjetas locales'],
    highlight: 'PSE domina pagos online con 85% de penetración bancaria digital.',
    stat: '85%',
    statLabel: 'Penetración PSE',
  },
  {
    name: 'Chile',
    flag: '🇨🇱',
    population: '19M',
    ecommerce: '$12B',
    cashMethods: ['Sencillito', 'ServiPag'],
    onlineMethods: ['Webpay', 'Khipu'],
    highlight: 'Mayor penetración bancaria de LatAm (87%).',
    stat: '87%',
    statLabel: 'Bancarización',
  },
  {
    name: 'Perú',
    flag: '🇵🇪',
    population: '34M',
    ecommerce: '$8B',
    cashMethods: ['PagoEfectivo', 'Agentes'],
    onlineMethods: ['Yape', 'Transferencia'],
    highlight: 'Yape: +15M de usuarios activos. Billetera #1.',
    stat: '15M+',
    statLabel: 'Usuarios Yape',
  },
  {
    name: 'Argentina',
    flag: '🇦🇷',
    population: '46M',
    ecommerce: '$15B',
    cashMethods: ['Rapipago', 'PagoFácil'],
    onlineMethods: ['MercadoPago', 'Transferencia'],
    highlight: 'MercadoPago lidera fintech con +40M de wallets.',
    stat: '40M+',
    statLabel: 'Wallets activas',
  },
];

const CountryInsightsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();

    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(interval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {countries.map((country, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="bg-card border-2 rounded-3xl p-8 mx-1 h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{country.flag}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{country.name}</h3>
                    <div className="flex gap-3 text-sm text-muted-foreground">
                      <span>{country.population} hab.</span>
                      <span>•</span>
                      <span>eComm: {country.ecommerce}</span>
                    </div>
                  </div>
                </div>

                {/* Highlight */}
                <p className="text-sm text-muted-foreground mb-5 italic leading-relaxed">
                  {country.highlight}
                </p>

                {/* Methods */}
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Banknote className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Cash / Voucher</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {country.cashMethods.map((m) => (
                        <Badge key={m} variant="outline" className="text-xs border-primary/30 text-primary">{m}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard className="h-4 w-4 text-secondary" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Online / Digital</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {country.onlineMethods.map((m) => (
                        <Badge key={m} variant="outline" className="text-xs border-secondary/30 text-secondary">{m}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stat badge */}
                <div className="bg-primary/10 rounded-2xl p-4 inline-flex items-center gap-3">
                  <div className="text-3xl font-bold text-primary">{country.stat}</div>
                  <div className="text-sm text-muted-foreground">{country.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          <button onClick={scrollPrev} className="w-9 h-9 rounded-full border-2 flex items-center justify-center hover:bg-primary/10 transition-colors">
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <button onClick={scrollNext} className="w-9 h-9 rounded-full border-2 flex items-center justify-center hover:bg-primary/10 transition-colors">
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
        </div>
        <div className="flex gap-1.5">
          {countries.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === selectedIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryInsightsCarousel;
