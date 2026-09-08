import React from 'react';
import { WHATSAPP_BASE_URL } from '../data/content';
import { MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const ClosingCTA: React.FC = () => {
  const customMessage = encodeURIComponent(
    'Olá! Quero garantir uma vaga deste mês na AP Soluções para estruturar as demandas do meu negócio.'
  );
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${customMessage}`;

  return (
    <section 
      id="fechamento" 
      className="relative py-24 z-10 overflow-hidden"
      aria-label="Fechamento de Alta Conversão"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#103A60] via-[#0E1B2B] to-[#080D14] border-2 border-[#2DB6B9]/60 shadow-[0_0_50px_rgba(45,182,185,0.15)] text-center overflow-hidden">
          {/* Background Decorative Accents */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#2DB6B9]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#103A60]/50 rounded-full blur-3xl pointer-events-none" />

          {/* Limited Capacity / Subtle Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#080D14]/80 border border-[#2DB6B9] text-[#2DB6B9] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2DB6B9] animate-ping" />
            <span>Capacidade Mensal Limitada • Padrão Executivo</span>
          </div>

          {/* Headline H2 */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-6 max-w-3xl mx-auto leading-tight">
            Pronto para Eliminar o Caos e Escalar com Previsibilidade?
          </h2>

          {/* Subtitle with subtle urgency */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Para garantir o mais alto nível de excelência técnica e atendimento direto com nossos especialistas, <strong className="text-white">limitamos a entrada de novos clientes mensais</strong>. Garanta seu lugar no cronograma antes do fechamento da janela.
          </p>

          {/* Capacity Status Tracker */}
          <div className="max-w-md mx-auto mb-10 p-4 rounded-xl bg-[#080D14]/60 border border-[#1D2D42]">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className="text-slate-300">Vagas preenchidas este mês:</span>
              <span className="text-[#2DB6B9]">3 de 5 ocupadas</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#172A40] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#103A60] to-[#2DB6B9] w-[60%] rounded-full" />
            </div>
            <p className="text-[11px] text-slate-400 mt-2 text-center">
              Restam apenas 2 posições abertas para onboarding prioritário.
            </p>
          </div>

          {/* Primary High-Contrast WhatsApp CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="closing-cta-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-base sm:text-lg font-bold text-[#080D14] bg-[#2DB6B9] hover:bg-[#35BAC3] rounded-xl shadow-xl shadow-[#2DB6B9]/30 hover:shadow-[#2DB6B9]/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-[#080D14]" />
              <span>Garantir Meu Atendimento no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Guarantee summary */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2DB6B9]" />
              Sem compromisso inicial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2DB6B9]" />
              Diagnóstico em 15 minutos
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2DB6B9]" />
              Segurança contratual plena
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
