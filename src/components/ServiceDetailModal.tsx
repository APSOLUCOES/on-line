import React from 'react';
import { ServiceItem } from '../types';
import { WHATSAPP_BASE_URL } from '../data/content';
import { X, CheckCircle2, Wrench, Users, MessageCircle, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    service.customWhatsAppMessage
  )}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#0E1622] border border-[#2DB6B9]/50 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#080D14] text-slate-400 hover:text-white border border-[#1D2D42] transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#103A60]/50 border border-[#2DB6B9]/30 text-[#2DB6B9] text-xs font-semibold uppercase tracking-wider mb-4">
          <span>{service.categoryName}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3 pr-8">
          {service.title}
        </h2>

        {/* Long Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {service.longDesc}
        </p>

        {/* Deliverables Checklist */}
        <div className="mb-6 p-5 rounded-2xl bg-[#080D14]/80 border border-[#1D2D42]">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2 font-display">
            <CheckCircle2 className="w-4 h-4 text-[#2DB6B9]" />
            <span>O Que Está Incluso (Entregáveis)</span>
          </h3>
          <ul className="space-y-2">
            {service.deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span className="text-[#2DB6B9] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools & Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[#103A60]/20 border border-[#1D2D42]">
            <div className="flex items-center gap-2 text-xs font-bold text-white mb-2 font-display">
              <Wrench className="w-3.5 h-3.5 text-[#2DB6B9]" />
              <span>Tecnologias & Métodos</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {service.toolsAndMethods.map((tool, idx) => (
                <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-[#080D14] border border-[#1D2D42] text-slate-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#103A60]/20 border border-[#1D2D42]">
            <div className="flex items-center gap-2 text-xs font-bold text-white mb-2 font-display">
              <Users className="w-3.5 h-3.5 text-[#2DB6B9]" />
              <span>Público Ideal</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {service.targetAudience}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 text-sm font-bold text-[#080D14] bg-[#2DB6B9] hover:bg-[#35BAC3] rounded-xl shadow-lg shadow-[#2DB6B9]/20 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-[#080D14]" />
            <span>Solicitar Orçamento no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-5 text-xs font-semibold text-slate-400 hover:text-white bg-[#080D14] border border-[#1D2D42] rounded-xl transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
