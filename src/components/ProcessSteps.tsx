import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { MessageSquare, FileCheck2, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-[#2DB6B9]" key="step1" />,
    <FileCheck2 className="w-5 h-5 text-[#2DB6B9]" key="step2" />,
    <Cpu className="w-5 h-5 text-[#2DB6B9]" key="step3" />,
    <CheckCircle2 className="w-5 h-5 text-[#2DB6B9]" key="step4" />
  ];

  return (
    <section 
      id="como-funciona" 
      className="relative py-24 z-10 scroll-mt-20"
      aria-label="Como Funciona o Processo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#103A60]/40 border border-[#2DB6B9]/30 text-[#2DB6B9] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Metodologia Ágil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
            Do Primeiro Contato ao Resultado em 4 Etapas Transparentes
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Fluxo estruturado para eliminar atritos, respeitar seu tempo e garantir previsibilidade absoluta de entrega.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="relative flex flex-col justify-between p-6 rounded-2xl bg-[#0E1622]/90 border border-[#1D2D42] hover:border-[#2DB6B9]/60 hover:shadow-[0_0_20px_rgba(45,182,185,0.1)] transition-all duration-200 group"
            >
              <div>
                {/* Header row: Step number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-slate-700 group-hover:text-[#2DB6B9]/40 transition-colors duration-200 font-display">
                    {step.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#103A60]/50 border border-[#2DB6B9]/30 flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                </div>

                {/* Step Titles */}
                <span className="text-xs font-semibold text-[#2DB6B9] tracking-wider uppercase block mb-1">
                  {step.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Footer Badge: Duration & Deliverable */}
              <div className="pt-4 border-t border-[#1D2D42]/70 text-xs">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span>Tempo de resposta:</span>
                  <span className="font-semibold text-slate-200">{step.duration}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Entregável:</span>
                  <span className="font-semibold text-[#2DB6B9]">{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
