import React from 'react';
import { CheckCircle, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  timeAgo: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Matheus Rezende',
      comment:
        'O Vip Studio mudou completamente minha relação com a academia. Eu sofria constantemente com dores na lombar após as corridas. Com a avaliação biomecânica e o treino personalizado, não apenas eliminei a dor, como melhorei meus tempos de prova. O acolhimento dos professores é surreal!',
      timeAgo: 'há 2 semanas',
    },
    {
      id: 2,
      name: 'Dra. Gabriela Vasconcellos',
      comment:
        'Rotina de hospital é puxada e eu nunca conseguia manter constância em academias convencionais cheias de barulho e disputa de aparelhos. No Vip Studio, o treino é focado no meu tempo, com hora marcada e atenção individual. Saio com mais disposição e energia!',
      timeAgo: 'há 1 mês',
    },
    {
      id: 3,
      name: 'Lucas Dornelles',
      comment:
        'Ambiente nota 1000! Aqui você não é apenas uma matrícula no sistema. Os professores sabem seus limites, comemoram cada avanço e corrigem sua postura em cada repetição. Já são 10 meses treinando sem faltar. A amizade e a energia do lugar fazem toda a diferença.',
      timeAgo: 'há 1 mês',
    },
    {
      id: 4,
      name: 'Larissa Mello',
      comment:
        'Espaço limpo, aparelhos modernos e metodologia séria. O foco no alívio de dor e fortalecimento postural é impecável. É visível o cuidado que a equipe tem com cada aluno. Recomendo de olhos fechados para quem quer qualidade de vida em Santa Maria.',
      timeAgo: 'há 3 meses',
    },
  ];

  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos e Avaliações de Alunos"
      className="py-24 bg-black relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reviews Badge (No Stars) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3">
            <span>Prova Social Verificada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight [text-wrap:balance]">
            O Que Diz Quem Treina Conosco
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light">
            Resultados reais, superação de limites e amizades construídas diariamente no Vip Studio.
          </p>

          {/* Google Maps Reviews Capsule (No Stars) */}
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-zinc-950 border border-yellow-400/30 shadow-[0_0_20px_rgba(255,255,0,0.1)]">
            <span className="text-2xl font-black text-yellow-400 font-mono">+30</span>
            <div className="h-6 w-px bg-white/10" />
            <div className="text-left text-xs">
              <span className="font-semibold text-white block">Avaliações de Alunos</span>
              <span className="text-zinc-400 font-medium">Opiniões registradas no Google Maps</span>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-yellow-400/40 transition-all flex flex-col justify-between group relative"
            >
              <Quote className="w-10 h-10 text-yellow-400/15 absolute top-6 right-6 pointer-events-none group-hover:text-yellow-400/25 transition-colors" />

              <div>
                {/* Verified Tag (No Stars) */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded border border-yellow-400/20">
                    Avaliação Verificada
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">{t.timeAgo}</span>
                </div>

                {/* Comment */}
                <p className="text-base text-zinc-300 leading-relaxed font-light mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {t.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded-full border border-yellow-400/20">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Aluno Verificado</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
