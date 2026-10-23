import React from 'react';
import { MessageCircle, Instagram, MapPin, Clock, ArrowUp } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/fitness.ts';

export const Footer: React.FC = () => {
  const whatsappUrl = buildWhatsAppLink(
    '055991141979',
    'Olá, gostaria de saber mais sobre o Vip Studio!'
  );
  const instagramUrl = 'https://www.instagram.com/vipstudioacademia/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-zinc-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-yellow-400/40 flex items-center justify-center text-yellow-400 font-black text-sm">
                VIP
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                VIP STUDIO
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm font-light mb-6">
              Muito além dos exercícios! Um lugar de amizade, acolhimento, movimento e transformação em Santa Maria - RS.
              Treinamento físico personalizado para quem busca saúde, vitalidade e longevidade.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-yellow-400 hover:border-yellow-400/40 transition-colors flex items-center justify-center"
                aria-label="WhatsApp do Vip Studio"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-yellow-400 hover:border-yellow-400/40 transition-colors flex items-center justify-center"
                aria-label="Instagram @vipstudioacademia"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-yellow-400 transition-colors">
                  Início (Hero)
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-yellow-400 transition-colors">
                  Sobre Nós (Missão)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-yellow-400 transition-colors">
                  Serviços & Diferenciais
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-yellow-400 transition-colors">
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-yellow-400 transition-colors">
                  Depoimentos & Avaliações
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-yellow-400 transition-colors">
                  Contato & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Informações Oficiais
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  R. Felipe de Oliveira, 460 - sala: 101<br />
                  Centro, Santa Maria - RS, 97015-250
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="text-zinc-300">Segunda a Quinta: 07:00 – 21:00</p>
                  <p className="text-zinc-300">Sexta: 06:00 – 18:00</p>
                  <p className="text-zinc-500">Sábado e Domingo: Fechado</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:underline font-mono text-xs"
                >
                  (55) 99114-1979
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-zinc-500 text-center sm:text-left">
            © 2026 Vip Studio - Treinamento Físico Personalizado. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-yellow-400 transition-colors cursor-pointer focus-visible:outline-yellow-400"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
