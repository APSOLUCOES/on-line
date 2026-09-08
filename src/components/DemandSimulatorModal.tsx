import React, { useState } from 'react';
import { SERVICES_DATA, WHATSAPP_BASE_URL } from '../data/content';
import { X, Check, MessageCircle, Sparkles, Layers, ArrowRight } from 'lucide-react';

interface DemandSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemandSimulatorModal: React.FC<DemandSimulatorModalProps> = ({ isOpen, onClose }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'edicao-de-videos',
    'otimizacao-seo-youtube',
    'gestao-implementacao-ia'
  ]);

  if (!isOpen) return null;

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedServices = SERVICES_DATA.filter((s) => selectedIds.includes(s.id));

  // Format WhatsApp pre-filled message
  const serviceListText = selectedServices.map((s) => `• ${s.title}`).join('\n');
  const customMessage = `Olá! Montei um pacote customizado na AP Soluções com os seguintes serviços:\n\n${serviceListText}\n\nGostaria de entender a viabilidade e o investimento para a minha operação.`;
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(customMessage)}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#0E1622] border border-[#2DB6B9]/50 shadow-2xl p-6 sm:p-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#1D2D42]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#103A60]/40 text-[#2DB6B9] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulador de Demanda Personalizada</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display">
              Monte Sua Operação Sob Medida
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Selecione os serviços que sua empresa precisa hoje e receba uma proposta unificada sem burocracia.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#080D14] text-slate-400 hover:text-white border border-[#1D2D42]"
            aria-label="Fechar simulador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Services Multi-Select List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-2.5 pr-2">
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedIds.includes(service.id);
            return (
              <div
                key={service.id}
                onClick={() => toggleSelect(service.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-150 flex items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-[#103A60]/60 border-[#2DB6B9] text-white shadow-sm'
                    : 'bg-[#080D14]/70 border-[#1D2D42] text-slate-300 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'bg-[#2DB6B9] border-[#2DB6B9] text-[#080D14]'
                        : 'border-slate-600 bg-transparent'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-display">{service.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-1">{service.shortDesc}</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[#0A0F18] border border-[#1D2D42] text-slate-400 shrink-0">
                  {service.categoryName.split('&')[0]}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer Summary & WhatsApp Dispatch */}
        <div className="pt-4 border-t border-[#1D2D42] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0E1622]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#103A60] border border-[#2DB6B9]/40 flex items-center justify-center text-[#2DB6B9]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Serviços Selecionados:</p>
              <p className="text-sm font-bold text-white">
                {selectedServices.length} de {SERVICES_DATA.length} especialidades
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 ${
              selectedServices.length > 0
                ? 'bg-[#2DB6B9] hover:bg-[#35BAC3] text-[#080D14] shadow-lg shadow-[#2DB6B9]/25'
                : 'bg-slate-700 text-slate-400 pointer-events-none'
            }`}
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Enviar Seleção para o WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
