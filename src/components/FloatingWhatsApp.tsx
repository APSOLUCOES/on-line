import React, { useState } from 'react';
import { WHATSAPP_BASE_URL } from '../data/content';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const customMessage = encodeURIComponent(
    'Olá gostaria de tirar uma dúvida sobre serviços para o meu negócio.'
  );
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${customMessage}`;

  return (
    <div 
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto"
    >
      {/* Interactive Trigger Balloon / Tooltip */}
      {!tooltipDismissed && (
        <div 
          className="relative max-w-xs p-3.5 rounded-2xl bg-[#0E1622] border border-[#2DB6B9]/50 shadow-2xl shadow-black/60 text-left text-xs animate-in fade-in slide-in-from-bottom-2 duration-300 backdrop-blur-md"
        >
          <button
            onClick={() => setTooltipDismissed(true)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white p-0.5 rounded-full"
            aria-label="Fechar balão de WhatsApp"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-1.5 font-bold text-white mb-1">
            <span className="w-2 h-2 rounded-full bg-[#2DB6B9] animate-pulse" />
            <span>Atendimento Comercial AP</span>
          </div>

          <p className="text-slate-300 leading-relaxed pr-3">
            Precisa de um orçamento rápido ou quer tirar uma dúvida? Fale direto com nossos especialistas no WhatsApp.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#2DB6B9] hover:underline"
          >
            <span>Iniciar conversa rápida</span>
            <span>→</span>
          </a>
        </div>
      )}

      {/* Pulsing Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-[#2DB6B9] hover:bg-[#35BAC3] text-[#080D14] flex items-center justify-center shadow-lg shadow-[#2DB6B9]/30 hover:shadow-[#2DB6B9]/50 transition-all duration-200 border-2 border-[#35BAC3] active:scale-95"
        aria-label="Conversar pelo WhatsApp"
      >
        {/* Subtle breathing pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#2DB6B9] opacity-70 animate-ping pointer-events-none group-hover:opacity-100" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-[#080D14] relative z-10" />

        {/* Online Indicator Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#103A60] border-2 border-[#080D14] z-20 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </span>
      </a>
    </div>
  );
};
