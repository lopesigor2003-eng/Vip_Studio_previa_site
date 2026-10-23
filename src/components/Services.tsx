import React from 'react';
import { Dumbbell, Gem, Compass, ShieldCheck, HeartPulse, UserCheck } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section
      id="servicos"
      aria-label="Serviços e Diferenciais"
      className="py-24 bg-black relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3">
            <span>Diferenciais Exclusivos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight [text-wrap:balance]">
            Treinamento Feito Sob Medida Para o Seu Corpo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light">
            Esqueça fichas genéricas e treinos repetitivos. No Vip Studio, cada sessão é planejada para sua biomecânica e saúde.
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Primary Large Feature (Treinos Personalizados) */}
          <div className="lg:col-span-2 p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-yellow-400/50 transition-all group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                <Dumbbell className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono uppercase text-yellow-400 tracking-wider">Pilar Central</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4 group-hover:text-yellow-400 transition-colors">
                Treinos Personalizados Para o Seu Bem-Estar
              </h3>
              <p className="text-base text-zinc-300 leading-relaxed font-light max-w-xl">
                Cada pessoa é única. Desenvolvemos seu plano de treinamento considerando seu condicionamento atual, 
                rotina de trabalho, limitações articulares e preferências atléticas. 
                Progressão inteligente com monitoramento diário do seu rendimento.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-xs font-semibold text-white block">Metodologia Científica</span>
                <span className="text-xs text-zinc-400">Baseada em fisiologia do esforço</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-white block">Ajustes Contínuos</span>
                <span className="text-xs text-zinc-400">Evolução semana a semana</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-white block">Zero Fila de Aparelhos</span>
                <span className="text-xs text-zinc-400">Espaço e ritmo exclusivos</span>
              </div>
            </div>
          </div>

          {/* Card 2: Alívio da dor através do movimento */}
          <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-yellow-400/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                <Gem className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono uppercase text-yellow-400 tracking-wider">Cuidado Clínico</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 mb-4 group-hover:text-yellow-400 transition-colors">
                Alívio da Dor Através do Movimento
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                Dores nas costas, ombros ou joelhos? O sedentarismo e movimentos incorretos sobrecarregam o corpo. 
                Através de exercícios corretivos e mobilidade articular, eliminamos compensações e devolvemos sua liberdade física.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="text-xs font-medium text-yellow-400 inline-flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4" />
                Saúde postural e prevenção de lesões
              </span>
            </div>
          </div>

          {/* Card 3: Avaliação Biomecânica e Postural */}
          <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-yellow-400/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center justify-center mb-5 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                Avaliação Biomecânica & Postural
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Testes detalhados de mobilidade, estabilidade de core, força simétrica e amplitude articular antes de iniciar os treinos pesados.
              </p>
            </div>
            <span className="mt-4 text-xs font-mono text-zinc-500">Diagnóstico Preventivo</span>
          </div>

          {/* Card 4: Acompanhamento Pessoal Exclusivo */}
          <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-yellow-400/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center justify-center mb-5 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                Acompanhamento Personalizado
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Um professor atento a cada repetição, corrigindo postura, ajustando cargas e garantindo máxima eficiência e segurança.
              </p>
            </div>
            <span className="mt-4 text-xs font-mono text-zinc-500">Atenção Dedicada</span>
          </div>

          {/* Card 5: Ambiente Seguro & Equipamentos Premium */}
          <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-yellow-400/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center justify-center mb-5 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                Estrutura & Ambiência Premium
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Ambiente climatizado, som ambiente na medida certa, piso de alta densidade e aparelhos de alto padrão para seu conforto.
              </p>
            </div>
            <span className="mt-4 text-xs font-mono text-zinc-500">Conforto & Sofisticação</span>
          </div>

        </div>

      </div>
    </section>
  );
};
