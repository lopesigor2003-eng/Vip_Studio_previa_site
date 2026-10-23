import React from 'react';
import { Heart, Sparkles, TrendingUp, Users2, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Users2,
      title: 'Amizade & Acolhimento',
      description: 'Um espaço humanizado onde cada conquista é comemorada e você é incentivado por profissionais e colegas de treino.',
    },
    {
      icon: Sparkles,
      title: 'Movimento Consciente',
      description: 'Treinos focados na mecânica correta, fortalecimento das articulações e alívio de tensões do dia a dia.',
    },
    {
      icon: TrendingUp,
      title: 'Transformação de Hábitos',
      description: 'Mais disposição, energia e saúde integral. Resultados sólidos e duradouros construídos passo a passo.',
    },
    {
      icon: Heart,
      title: 'Cuidar de Si Mesmo',
      description: 'O maior investimento da sua vida. Aqui você descobre que é capaz de muito mais do que imaginava.',
    },
  ];

  return (
    <section
      id="sobre"
      aria-label="Sobre a Vip Studio"
      className="py-24 bg-zinc-950 relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3">
            <span>Sobre o Vip Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight [text-wrap:balance]">
            Muito Além dos Exercícios: Uma Família em Movimento
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Main Manifesto */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg font-light">
            <p className="text-xl font-medium text-white leading-snug">
              A <strong className="text-yellow-400 font-bold">VIP Studio</strong> é um lugar de 
              amizade, acolhimento, movimento e transformação!
            </p>
            <p>
              Aqui, cada pessoa tem sua história, seus desafios e seus objetivos. 
              Nosso propósito vai muito além de levantar pesos: queremos incentivar mudanças de hábitos, 
              promover saúde, melhorar a qualidade de vida e ajudar cada aluno a descobrir que é capaz de muito mais!
            </p>
            <p>
              É um espaço onde o exercício físico se une à amizade, onde cada conquista é valorizada 
              e onde pequenas mudanças se transformam em grandes resultados. Aqui, você não encontra apenas 
              um lugar para treinar — encontra pessoas que incentivam você, profissionais que acompanham sua evolução 
              e um ambiente onde se sentir bem também faz parte do treino.
            </p>
            <p className="text-white font-medium italic border-l-2 border-yellow-400 pl-4 py-1">
              "Mais saúde, mais movimento, mais disposição e mais qualidade de vida! Porque cuidar de si mesmo é um dos maiores investimentos que podemos fazer."
            </p>
          </div>

          {/* Highlights Box */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-zinc-900/90 border border-yellow-400/20 p-8 shadow-[0_0_30px_rgba(255,255,0,0.06)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4">
                O Padrão VIP de Treinamento
              </h3>
              <p className="text-sm text-zinc-400 mb-6">
                Construído para pessoas de todas as idades que exigem excelência, respeito aos seus limites e atenção individualizada, sem filas ou rotinas genéricas:
              </p>

              <ul className="space-y-4">
                {[
                  'Atendimento com hora marcada e número reduzido de alunos por horário',
                  'Prescrição biomecânica personalizada para objetivos específicos',
                  'Foco absoluto na prevenção e alívio de dores posturais',
                  'Treinadores pós-graduados com dedicação integral à sua evolução',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase text-zinc-400 tracking-wider">Localização Nobre</span>
                  <p className="text-sm font-semibold text-white">Centro de Santa Maria - RS</p>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase text-zinc-400 tracking-wider">Comunidade</span>
                  <p className="text-sm font-semibold text-yellow-400">+30 Alunos Avaliadores</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-black/60 border border-white/10 hover:border-yellow-400/40 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-4 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
