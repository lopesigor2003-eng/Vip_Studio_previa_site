import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Dumbbell, Calendar, Send } from 'lucide-react';
import { validateLeadForm, formatPhoneMask, buildWhatsAppLink } from '../utils/fitness.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Treinos Personalizados');
  const [shift, setShift] = useState('Manhã (07h às 12h)');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneMask(e.target.value);
    setPhone(formatted);
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateLeadForm({
      name,
      phone,
      interest,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setSubmitted(true);

    // Prepare WhatsApp message
    const waText = `Olá, equipe Vip Studio! Gostaria de agendar uma aula experimental gratuita.%0A%0A*Nome:* ${encodeURIComponent(
      name
    )}%0A*WhatsApp:* ${encodeURIComponent(phone)}%0A*Objetivo:* ${encodeURIComponent(
      interest
    )}%0A*Turno de Preferência:* ${encodeURIComponent(shift)}`;

    const waUrl = buildWhatsAppLink('055991141979', waText);

    // Auto-open WhatsApp after brief confirmation delay or user click
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 1200);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-zinc-950 border border-yellow-400/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(255,255,0,0.15)] max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
          aria-label="Fechar formulário de agendamento"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 flex items-center justify-center">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-yellow-400 font-bold block">
                  Experiência Exclusiva
                </span>
                <h2 id="modal-title" className="text-xl sm:text-2xl font-black text-white">
                  Agende Sua Aula Experimental
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 mb-6 font-light">
              Venha conhecer a estrutura do Vip Studio no Centro de Santa Maria e faça um treino personalizado sem compromisso.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="book-name" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Nome Completo *
                </label>
                <input
                  id="book-name"
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-white/15 focus:border-yellow-400'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="book-phone" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  WhatsApp com DDD *
                </label>
                <input
                  id="book-phone"
                  type="tel"
                  required
                  placeholder="(55) 99114-1979"
                  value={phone}
                  onChange={handlePhoneChange}
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-white/15 focus:border-yellow-400'
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
              </div>

              {/* Goal / Interest */}
              <div>
                <label htmlFor="book-interest" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Principal Objetivo *
                </label>
                <select
                  id="book-interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/15 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="Treinos Personalizados">Treinos Personalizados & Bem-Estar</option>
                  <option value="Alívio da Dor & Biomecânica">Alívio de Dores & Reabilitação Postural</option>
                  <option value="Condicionamento & Atletismo">Performance Atlética & Condicionamento</option>
                  <option value="Mudança de Hábitos">Saúde, Disposição & Novos Hábitos</option>
                </select>
              </div>

              {/* Shift Preference */}
              <div>
                <label htmlFor="book-shift" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Turno de Preferência
                </label>
                <select
                  id="book-shift"
                  value={shift}
                  onChange={(e) => setShift(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/15 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="Manhã (07h às 12h)">Manhã (07h às 12h)</option>
                  <option value="Tarde (12h às 18h)">Tarde (12h às 18h)</option>
                  <option value="Noite (18h às 21h)">Noite (18h às 21h)</option>
                </select>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-yellow-400 text-black hover:bg-yellow-300 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,255,0,0.25)] mt-4"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirmar e Conectar no WhatsApp</span>
              </button>

              <p className="text-[11px] text-zinc-500 text-center">
                Seus dados serão tratados com total privacidade para agendamento com nossa equipe.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-yellow-400/20 text-yellow-400 border border-yellow-400/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h2>
            <p className="text-sm text-zinc-300 mb-6 max-w-sm mx-auto font-light">
              Excelente, <strong className="text-white font-medium">{name}</strong>! Estamos abrindo seu WhatsApp para que nosso treinador combine o melhor horário para sua aula experimental.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:border-yellow-400 cursor-pointer"
            >
              Fechar Janela
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
