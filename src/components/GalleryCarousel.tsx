import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Maximize2, X } from 'lucide-react';

interface GallerySlide {
  id: number;
  url: string;
  title: string;
  caption: string;
}

export const GalleryCarousel: React.FC = () => {
  const slides: GallerySlide[] = [
    {
      id: 1,
      url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q2pCWNimG1wJOGWCIHDn_zlu-N7o2BdTmpYkJySy-Jyho4JmcDi5SLiqx5V2HQGXhoeCMg03EkdVCnou7PDztnzDBUkylyxwALbe8pJfupnNJxiBR2TBFdPH1b2sZ5secT3CC4=w1200-h800-k-no',
      title: 'Espaço de Treino & Pesos Livres',
      caption: 'Equipamentos modernos com piso de alta absorção para treinos seguros e eficientes.',
    },
    {
      id: 2,
      url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QW4zkNZKOu8ksLsgwaXgLCJnJZL_-LoWl1BnmxKNmJlNDb4IiE7IaTyVY7c1_ONmnEzlpbboCZOL4ZkFlvL1k1N5_oeYTmDnUgWEAQWoSrSEr4GASKC59KC9eyyqDIkIQZSA_9=w1200-h800-k-no',
      title: 'Área de Treinamento Funcional & Mobilidade',
      caption: 'Estrutura voltada ao alívio de tensões, reabilitação e desenvolvimento atlético.',
    },
    {
      id: 3,
      url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QRmOnLjXnE5gmfA5qDB_V4uIpHwylU2-4VKQUpfjS-SfWl-p3WGFk-B4HowPc29rgCo7Etu4tGfnBqeA8Pn8xsnbloMhEGK2OVYOXazW5m34Vepfrq3jCPeCauHATyvUOyx84V=w1200-h800-k-no',
      title: 'Ambiente Climatizado & Exclusivo',
      caption: 'Sem lotação ou disputa de equipamentos. Conforto total para o seu momento de treino.',
    },
    {
      id: 4,
      url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RTca_7GGwyjY44meIMpd1DjuMnHhtb-Ec7FRvHPHBfrwRmQRN3Fmu-K3jgSqRLSLbk6uEVs2aSNGMY_Y6OSPemzmhUAWzvujMDX6VHHX7buPaYLAIKrGMGyKWLYw1x8L9mTrE=w1200-h800-k-no',
      title: 'Acompanhamento de Perto em Cada Detalhe',
      caption: 'Postura, respiração e execução técnica acompanhadas individualmente por profissionais.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const handleImageError = (id: number) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Auto rotate every 5 seconds
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  // Handle keyboard arrow navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'Escape' && lightboxOpen) setLightboxOpen(false);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      id="galeria"
      aria-label="Galeria do Studio"
      className="py-24 bg-zinc-950 relative border-t border-white/5"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">
              <span>Instalações</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Nosso Espaço em Santa Maria
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 font-light max-w-xl">
              Um estúdio concebido para oferecer sofisticação, foco absoluto e privacidade durante seus treinos.
            </p>
          </div>

          {/* Autoplay & Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-yellow-400 hover:border-yellow-400/40 transition-colors focus-visible:outline-yellow-400 cursor-pointer"
              aria-label={isPlaying ? 'Pausar rotação automática da galeria' : 'Iniciar rotação automática da galeria'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-yellow-400 hover:border-yellow-400/40 transition-colors focus-visible:outline-yellow-400 cursor-pointer"
              aria-label="Slide anterior da galeria"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-yellow-400 hover:border-yellow-400/40 transition-colors focus-visible:outline-yellow-400 cursor-pointer"
              aria-label="Próximo slide da galeria"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Carousel Stage - Preserving original 16:9 photo format */}
        <div
          className="relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Main Slide Frame in original 16:9 camera proportion */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
            {!failedImages[currentSlide.id] ? (
              <img
                src={currentSlide.url}
                alt={currentSlide.title}
                className="w-full h-full object-cover sm:object-contain transition-transform duration-700 group-hover:scale-101"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={() => handleImageError(currentSlide.id)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-black to-zinc-950 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-yellow-400 text-sm font-mono uppercase tracking-widest mb-2">
                  Vip Studio Gallery
                </span>
                <span className="text-2xl font-bold text-white mb-2">{currentSlide.title}</span>
                <span className="text-sm text-zinc-400 max-w-md">{currentSlide.caption}</span>
              </div>
            )}

            {/* Subtle Gradient Scrim for Legibility at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

            {/* Lightbox Trigger Button */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-zinc-300 hover:text-yellow-400 hover:border-yellow-400/50 transition-colors cursor-pointer"
              aria-label="Ver imagem em tela cheia"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Caption & Title Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-wider text-yellow-400 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded border border-yellow-400/20 inline-block mb-2">
                  Espaço Vip · {currentIndex + 1} de {slides.length}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                  {currentSlide.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-light max-w-xl">
                  {currentSlide.caption}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer focus-visible:outline-yellow-400 ${
                      idx === currentIndex
                        ? 'w-8 bg-yellow-400 shadow-[0_0_10px_rgba(255,255,0,0.5)]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ir para a foto ${idx + 1}`}
                    aria-current={idx === currentIndex ? 'true' : 'false'}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Preview Strip */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-xl overflow-hidden aspect-[16/9] border transition-all cursor-pointer text-left focus-visible:outline-yellow-400 ${
                idx === currentIndex
                  ? 'border-yellow-400 ring-2 ring-yellow-400/20 shadow-lg scale-102'
                  : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
              }`}
              aria-label={`Ver foto ${idx + 1}: ${slide.title}`}
            >
              {!failedImages[slide.id] ? (
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(slide.id)}
                />
              ) : (
                <div className="w-full h-full bg-zinc-900 flex items-center justify-center p-2 text-center">
                  <span className="text-[10px] text-zinc-400 font-mono">Foto {idx + 1}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-colors" />
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualização em tela cheia da galeria"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900 border border-white/20 text-white hover:text-yellow-400 hover:border-yellow-400 transition-colors cursor-pointer"
            aria-label="Fechar visualização em tela cheia"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center">
            <img
              src={currentSlide.url}
              alt={currentSlide.title}
              className="max-w-full max-h-[70vh] object-contain rounded-xl border border-white/15"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">{currentSlide.title}</h3>
              <p className="text-sm text-zinc-400 mt-1">{currentSlide.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
