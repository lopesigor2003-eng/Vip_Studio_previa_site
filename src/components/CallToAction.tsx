import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/fitness.ts';

interface CallToActionProps {
  onOpenBooking: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenBooking }) => {
  const whatsappUrl = buildWhatsAppLink(
    '055991141979',
    'Olá! Quero dar o primeiro passo e agendar minha aula experimental no Vip Studio.'
  );

  return (
    <section
      aria-label="Chamada para Ação"
      className="py-24 bg-black relative border-t border-white/5 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-400/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-yellow-400/30 p-8 sm:p-12 lg:p-16 text-center shadow-[0_0_50px_rgba(255,255,0,0.1)] relative">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 text-xs font-mono uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transforme Sua Rotina</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6 [text-wrap:balance]">
            Sua Mudança Começa Com Um Único Passo.
            <br />
            <span className="text-yellow-400">Venha Fazer Parte Dessa Família!</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Treinando o corpo, fortalecendo vínculos e transformando hábitos. 
            Agende hoje sua aula experimental gratuita e venha vivenciar a energia exclusiva do Vip Studio em Santa Maria.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-yellow-400 text-black hover:bg-yellow-300 active:scale-98 transition-all shadow-[0_0_30px_rgba(255,255,0,0.3)] cursor-pointer focus-visible:outline-white"
              aria-label="Agendar aula experimental gratuita agora"
            >
              <span>Agendar Aula Experimental</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm text-zinc-200 hover:text-yellow-400 bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-yellow-400/40 transition-all cursor-pointer"
              aria-label="Falar diretamente com nossa equipe no WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-yellow-400" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Reassurances */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400" />
              <span>Aula experimental sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400" />
              <span>Avaliação física inicial inclusa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400" />
              <span>Horários flexíveis de seg a sex</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
