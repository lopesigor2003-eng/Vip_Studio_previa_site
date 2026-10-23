import React, { useState } from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Activity } from 'lucide-react';
import { buildWhatsAppLink, getStudioOpenStatus } from '../utils/fitness.ts';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [heroImgError, setHeroImgError] = useState(false);
  const status = getStudioOpenStatus();
  const whatsappUrl = buildWhatsAppLink('055991141979', 'Olá! Gostaria de saber mais sobre as aulas personalizadas do Vip Studio.');

  return (
    <section
      id="hero"
      aria-label="Apresentação Vip Studio"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-black"
    >
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-400/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Status & City Tag */}
            <div className="inline-flex items-center gap-2.5 text-xs text-zinc-300 mb-6 flex-wrap">
              <span className="font-semibold text-yellow-400 tracking-wider uppercase">
                Santa Maria - RS
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">{status.message}</span>
            </div>

            {/* Single Strict H1 for the page */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6 [text-wrap:balance]">
              Treinamento Físico Personalizado &{' '}
              <span className="text-yellow-400 drop-shadow-[0_0_25px_rgba(255,255,0,0.25)]">
                Transformação Real
              </span>
            </h1>

            {/* Engaging Copy */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl font-light">
              Muito além de levantar pesos: na <strong className="text-white font-medium">VIP Studio</strong>, 
              o exercício físico se une à amizade, acolhimento e movimento consciente. 
              Um ambiente exclusivo para pessoas de todas as idades que buscam saúde, qualidade de vida, 
              alívio de dores e superação contínua com acompanhamento individual.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-yellow-400 text-black hover:bg-yellow-300 active:scale-98 transition-all shadow-[0_0_30px_rgba(255,255,0,0.25)] cursor-pointer focus-visible:outline-white whitespace-nowrap"
                aria-label="Agendar aula experimental gratuita"
              >
                <span>Agendar Aula Experimental</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm text-zinc-200 hover:text-yellow-400 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-yellow-400/40 transition-all cursor-pointer whitespace-nowrap"
                aria-label="Conversar no WhatsApp oficial do Vip Studio"
              >
                <MessageCircle className="w-4 h-4 text-yellow-400" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Social Proof Reviews Marker (No stars, reviews only) */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <span className="font-bold text-white text-sm">+30 Avaliações Verificadas</span>
              <span className="text-zinc-600">·</span>
              <span className="text-xs text-zinc-400">Feedback dos alunos no Google Maps</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Frame with Google user image or sleek luxury fallback */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl group">
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] relative overflow-hidden">
                {!heroImgError ? (
                  <img
                    src="https://i.postimg.cc/GhfvBPtD/fullsize-2017-09-04-09-Logo-221049-37530-094433693-1762899904.jpg"
                    alt="Vip Studio - Treinamento Físico Personalizado"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-black to-zinc-950 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mb-4 text-yellow-400">
                      <Activity className="w-8 h-8" />
                    </div>
                    <span className="text-xl font-bold text-white mb-2">Ambiente Premium</span>
                    <span className="text-xs text-zinc-400 max-w-xs">
                      Equipamentos modernos e espaço planejado para o seu conforto e biomecânica.
                    </span>
                  </div>
                )}
                {/* Visual Scrim Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Floating Feature Tag Inside Frame */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-yellow-400/20 text-yellow-400 flex items-center justify-center border border-yellow-400/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">Treino 100% Individualizado</h3>
                    <p className="text-[11px] text-zinc-400">Com foco em saúde, movimento e técnica</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                  Vip Standard
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column Metric Strip Below Hero (No stars, all ages) */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-zinc-950/40 border border-white/5">
            <div className="text-2xl sm:text-3xl font-black text-yellow-400 font-mono tabular-nums">
              +30
            </div>
            <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">Avaliações no Google</div>
          </div>
          <div className="p-4 rounded-xl bg-zinc-950/40 border border-white/5">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">100%</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">Treino Personalizado</div>
          </div>
          <div className="p-4 rounded-xl bg-zinc-950/40 border border-white/5">
            <div className="text-2xl sm:text-3xl font-black text-yellow-400 font-mono tabular-nums">Todas</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">As Idades Acolhidas</div>
          </div>
          <div className="p-4 rounded-xl bg-zinc-950/40 border border-white/5">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">Zero Dor</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">Alívio Pelo Movimento</div>
          </div>
        </div>

      </div>
    </section>
  );
};
