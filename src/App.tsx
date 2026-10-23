/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { GalleryCarousel } from './components/GalleryCarousel.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { CallToAction } from './components/CallToAction.tsx';
import { ContactLocation } from './components/ContactLocation.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from './utils/fitness.ts';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const floatingWhatsAppUrl = buildWhatsAppLink(
    '055991141979',
    'Olá, gostaria de saber mais sobre o Vip Studio!'
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-yellow-400 selection:text-black">
      {/* 1. Header with Top Bar Contract */}
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* 2. Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero onOpenBooking={() => setBookingOpen(true)} />

        {/* Sobre Nós (Missão / Filosofia) */}
        <About />

        {/* Serviços / Diferenciais */}
        <Services />

        {/* Galeria / Carrossel */}
        <GalleryCarousel />

        {/* Depoimentos / Avaliações */}
        <Testimonials />

        {/* Chamada para Ação (CTA) */}
        <CallToAction onOpenBooking={() => setBookingOpen(true)} />

        {/* Contato e Localização com Mapa */}
        <ContactLocation />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Acesso rápido WhatsApp" className="fixed bottom-6 right-6 z-40">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,255,0,0.35)] active:scale-95 transition-all focus-visible:outline-white"
          aria-label="Abrir conversa no WhatsApp oficial do Vip Studio"
        >
          <MessageCircle className="w-5 h-5 fill-black text-black group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
