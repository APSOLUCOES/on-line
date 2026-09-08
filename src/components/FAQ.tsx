import React, { useState } from 'react';
import { FAQ_ITEMS, WHATSAPP_BASE_URL } from '../data/content';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const whatsappFaqUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    'Olá! Tenho uma dúvida específica antes de fechar com a AP Soluções.'
  )}`;

  return (
    <section 
      id="faq" 
      className="relative py-24 z-10 scroll-mt-20 border-t border-[#1D2D42]/60"
      aria-label="Perguntas Frequentes"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#103A60]/40 border border-[#2DB6B9]/30 text-[#2DB6B9] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Transparência Total</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Respostas diretas e sem rodeios para as principais dúvidas de contratação.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0E1622] border-[#2DB6B9]/60 shadow-lg shadow-[#2DB6B9]/5'
                    : 'bg-[#0A101A]/80 border-[#1D2D42] hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-display">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#2DB6B9] text-[#080D14] rotate-180'
                        : 'bg-[#103A60]/50 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#1D2D42]/60 animate-in fade-in duration-200">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                      {item.answer}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#103A60]/30 border border-[#2DB6B9]/30 text-xs font-semibold text-[#2DB6B9]">
                      <span>✓ {item.highlight}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="p-6 rounded-2xl bg-[#0E1622]/60 border border-[#1D2D42] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-sm font-bold text-white font-display">Ficou com alguma dúvida específica?</h3>
            <p className="text-xs text-slate-400 mt-0.5">Nosso time responde em menos de 15 minutos em horário comercial.</p>
          </div>
          <a
            href={whatsappFaqUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#080D14] bg-[#2DB6B9] hover:bg-[#35BAC3] rounded-xl transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-[#080D14]" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
