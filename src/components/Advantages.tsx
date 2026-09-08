import React from 'react';
import { TANGIBLE_ADVANTAGES } from '../data/content';
import { Clock, UserCheck, Layers, Zap } from 'lucide-react';

export const Advantages: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Clock className="w-6 h-6 text-[#2DB6B9]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#2DB6B9]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#2DB6B9]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#2DB6B9]" />;
      default: return <Clock className="w-6 h-6 text-[#2DB6B9]" />;
    }
  };

  return (
    <section 
      id="vantagens" 
      className="relative py-24 z-10 scroll-mt-20 border-t border-[#1D2D42]/60 bg-[#080D14]/70"
      aria-label="Vantagens Tangíveis"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#103A60]/40 border border-[#2DB6B9]/30 text-[#2DB6B9] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Eficiência Comprovada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
            Benefícios Tangíveis para Quem Não Pode Perder Tempo
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Trabalhamos com métricas claras de desempenho para transformar sua sobrecarga em tranquilidade operacional.
          </p>
        </div>

        {/* 4 Advantages Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TANGIBLE_ADVANTAGES.map((adv) => (
            <div
              key={adv.title}
              className="p-8 rounded-2xl bg-[#0E1622]/90 border border-[#1D2D42] hover:border-[#2DB6B9]/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#103A60]/60 border border-[#2DB6B9]/30 flex items-center justify-center shrink-0">
                    {getIcon(adv.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-black text-white font-display">
                      {adv.metric}
                    </span>
                    <p className="text-xs text-[#2DB6B9] font-medium">{adv.metricLabel}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  {adv.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
