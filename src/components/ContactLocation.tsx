import React, { useState } from 'react';
import { MapPin, Clock, MessageCircle, Instagram, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppLink, getStudioOpenStatus } from '../utils/fitness.ts';

export const ContactLocation: React.FC = () => {
  const status = getStudioOpenStatus();
  const whatsappUrl = buildWhatsAppLink(
    '055991141979',
    'Olá, gostaria de saber mais sobre o Vip Studio!'
  );
  const instagramUrl = 'https://www.instagram.com/vipstudioacademia/';
  const googleMapsUrl = 'https://maps.google.com/?q=R.+Felipe+de+Oliveira,+460+-+sala:+101+-+Centro,+Santa+Maria+-+RS,+97015-250';

  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactPhone.trim()) return;

    // Direct to WhatsApp with the user's customized message
    const message = `Olá, meu nome é ${contactName.trim()}. ${contactMsg.trim() ? contactMsg.trim() : 'Gostaria de agendar uma visita ao Vip Studio!'}`;
    const dynamicLink = buildWhatsAppLink('055991141979', message);
    setSentSuccess(true);
    
    // Open WhatsApp link in new tab
    window.open(dynamicLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      aria-label="Contato e Localização"
      className="py-24 bg-zinc-950 relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3">
            <span>Venha Nos Conhecer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight [text-wrap:balance]">
            Localização Privilegiada no Centro de Santa Maria
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light">
            Estrutura central com fácil acesso, estacionamento nas proximidades e atendimento acolhedor.
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid: Contact Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Info & Quick Message */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Contact Info Cards */}
            <div className="space-y-4">
              
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-black border border-white/10 hover:border-yellow-400/30 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Endereço</h3>
                  <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
                    R. Felipe de Oliveira, 460 - sala: 101<br />
                    Centro, Santa Maria - RS, 97015-250
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-yellow-400 hover:text-yellow-300 font-medium mt-2 focus-visible:outline-yellow-400"
                  >
                    <span>Abrir rota no Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-2xl bg-black border border-white/10 hover:border-yellow-400/30 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Horários de Treino</h3>
                    <span className="text-[10px] font-mono text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded">
                      {status.isOpen ? 'Aberto' : 'Fechado'}
                    </span>
                  </div>
                  <div className="text-sm text-zinc-300 mt-1 space-y-1">
                    <p><strong className="text-white">Segunda a Quinta:</strong> 07:00 – 21:00</p>
                    <p><strong className="text-white">Sexta-feira:</strong> 06:00 – 18:00</p>
                    <p className="text-xs text-zinc-500">Sábado e Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-black border border-white/10 hover:border-yellow-400/50 hover:bg-zinc-900 transition-all flex items-center gap-3 text-white group"
                  aria-label="Abrir WhatsApp oficial"
                >
                  <div className="w-10 h-10 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block group-hover:text-yellow-400 transition-colors">WhatsApp</span>
                    <span className="text-[11px] text-zinc-400 font-mono">(55) 99114-1979</span>
                  </div>
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-black border border-white/10 hover:border-yellow-400/50 hover:bg-zinc-900 transition-all flex items-center gap-3 text-white group"
                  aria-label="Acessar perfil do Instagram @vipstudioacademia"
                >
                  <div className="w-10 h-10 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block group-hover:text-yellow-400 transition-colors">Instagram</span>
                    <span className="text-[11px] text-zinc-400">@vipstudioacademia</span>
                  </div>
                </a>
              </div>

            </div>

            {/* Quick Contact Form */}
            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <h3 className="text-base font-bold text-white mb-2">Envie uma Mensagem Rápida</h3>
              <p className="text-xs text-zinc-400 mb-4">
                Preencha seus dados para conectar direto com nosso time no WhatsApp:
              </p>

              {sentSuccess ? (
                <div className="p-4 rounded-xl bg-yellow-400/10 border border-yellow-400/30 text-center">
                  <CheckCircle2 className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-sm font-bold text-white">Mensagem encaminhada ao WhatsApp!</p>
                  <p className="text-xs text-zinc-400 mt-1">Nossa equipe responderá em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Seu Nome</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="sr-only">Seu WhatsApp</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="Seu WhatsApp (com DDD)"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-msg" className="sr-only">Mensagem</label>
                    <textarea
                      id="contact-msg"
                      rows={2}
                      placeholder="Qual o seu objetivo ou dúvida? (opcional)"
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-bold text-xs uppercase tracking-wider bg-yellow-400 text-black hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,255,0,0.2)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Iniciar Conversa no WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Interactive Google Maps Embed */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 relative shadow-2xl">
              <iframe
                title="Localização do Vip Studio em Santa Maria - RS"
                src="https://maps.google.com/maps?q=R.+Felipe+de+Oliveira,+460+-+Centro,+Santa+Maria+-+RS,+97015-250&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500 w-full h-full"
              />

              {/* Pin Overlay Badge */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 max-w-xs pointer-events-none">
                <span className="text-[10px] font-mono uppercase tracking-wider text-yellow-400 font-bold block">
                  VIP STUDIO
                </span>
                <span className="text-xs font-semibold text-white block">
                  R. Felipe de Oliveira, 460 - Sala 101
                </span>
                <span className="text-[11px] text-zinc-400 block">
                  Centro · Santa Maria - RS
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
