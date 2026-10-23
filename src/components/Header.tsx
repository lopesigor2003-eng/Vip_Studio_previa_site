import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoadError, setLogoLoadError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Diferenciais', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-black/40 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus-visible:outline-yellow-400"
          aria-label="Vip Studio - Início"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-yellow-400/40 bg-zinc-900 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,0,0.15)] group-hover:border-yellow-400 transition-colors">
            {!logoLoadError ? (
              <img
                src="https://lh3.googleusercontent.com/a-/ALV-UjV0rntc4Jy2bPwGMzmcWIWpJdraa9lTQZjvtreH-5XV6cvbCaM=w72-h72-p-rp-mo-br100"
                alt="Logotipo Vip Studio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={() => setLogoLoadError(true)}
              />
            ) : (
              <span className="font-bold text-yellow-400 text-sm tracking-wider">VIP</span>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-yellow-400 transition-colors">
              VIP STUDIO
            </span>
            <span className="text-[10px] uppercase tracking-wider text-yellow-400 font-medium">
              Treinamento Personalizado
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Strict single-line text links) */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-zinc-300"
          aria-label="Navegação Principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-yellow-400 transition-colors relative py-1 focus-visible:outline-yellow-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs uppercase tracking-wider bg-yellow-400 text-black hover:bg-yellow-300 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,0,0.2)] focus-visible:outline-white whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="Agendar aula experimental no Vip Studio"
          >
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Agendar Aula</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-yellow-400 hover:bg-zinc-900 border border-white/10 transition-colors focus-visible:outline-yellow-400 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3" aria-label="Menu Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-medium text-zinc-200 hover:text-yellow-400 border-b border-zinc-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-3 w-full py-3 rounded-lg font-bold text-xs uppercase tracking-wider bg-yellow-400 text-black hover:bg-yellow-300 transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,255,0,0.2)]"
            >
              <Dumbbell className="w-4 h-4" />
              Agendar Aula Experimental
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
