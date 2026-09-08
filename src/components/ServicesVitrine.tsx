import React, { useState } from 'react';
import { SERVICES_DATA, CATEGORIES_CONFIG, WHATSAPP_BASE_URL } from '../data/content';
import { ServiceItem, ServiceCategory } from '../types';
import { 
  Film, 
  Clapperboard, 
  Smartphone, 
  Youtube, 
  Mic, 
  Palette, 
  GitMerge, 
  Cpu, 
  Calculator, 
  GraduationCap, 
  FileText, 
  ArrowUpRight, 
  MessageCircle, 
  Check, 
  Info,
  Sparkles
} from 'lucide-react';

interface ServicesVitrineProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenSimulator: () => void;
}

export const ServicesVitrine: React.FC<ServicesVitrineProps> = ({ 
  onSelectService,
  onOpenSimulator 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Map icon name to Lucide component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Film': return <Film className="w-5 h-5" />;
      case 'Clapperboard': return <Clapperboard className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Youtube': return <Youtube className="w-5 h-5" />;
      case 'Mic': return <Mic className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'GitMerge': return <GitMerge className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section 
      id="servicos" 
      className="relative py-24 z-10 scroll-mt-20"
      aria-label="Nossos Serviços"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#103A60]/40 border border-[#2DB6B9]/30 text-[#2DB6B9] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Portfólio Estratégico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
            Soluções Especializadas para Escalar Sua Operação
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            11 serviços agrupados em 4 núcleos estratégicos. Escolha o serviço pontual ou combine múltiplas entregas em um plano integrado.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES_CONFIG.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap border ${
                activeCategory === cat.id
                  ? 'bg-[#2DB6B9] text-[#080D14] border-[#2DB6B9] shadow-md shadow-[#2DB6B9]/20'
                  : 'bg-[#0E1622]/80 text-slate-300 border-[#1D2D42] hover:border-[#2DB6B9]/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service) => {
            const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
              service.customWhatsAppMessage
            )}`;

            return (
              <div
                key={service.id}
                id={`card-${service.id}`}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0E1622]/90 border border-[#1D2D42] hover:border-[#2DB6B9]/70 hover:shadow-[0_0_25px_rgba(45,182,185,0.12)] transition-all duration-200"
              >
                <div>
                  {/* Top Bar: Icon + Category Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#103A60]/50 border border-[#2DB6B9]/30 text-[#2DB6B9] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#103A60]/80 transition-all duration-200">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2.5 py-1 rounded bg-[#080D14] border border-[#1D2D42]">
                      {service.categoryName}
                    </span>
                  </div>

                  {/* Service Title (H3) */}
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#2DB6B9] transition-colors duration-200 font-display leading-snug">
                    {service.title}
                  </h3>

                  {/* Persuasive Short Description (Max 2 lines) */}
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-2 mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Quick Feature Checklist (Subtle) */}
                  <div className="space-y-1.5 mb-6 pt-4 border-t border-[#1D2D42]/60">
                    {service.deliverables.slice(0, 2).map((del, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-[#2DB6B9] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2.5 pt-2">
                  {/* View Details Modal Trigger */}
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-[#103A60]/30 hover:bg-[#103A60]/60 border border-[#1D2D42] hover:border-[#2DB6B9]/40 rounded-xl transition-all duration-200"
                    title="Ver detalhes do escopo e entregas"
                  >
                    <Info className="w-3.5 h-3.5 text-[#2DB6B9]" />
                    <span>Detalhes</span>
                  </button>

                  {/* Direct WhatsApp CTA for this Service */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#080D14] bg-[#2DB6B9] hover:bg-[#35BAC3] rounded-xl transition-all duration-200 shadow-sm shadow-[#2DB6B9]/20"
                    title={`Solicitar orçamento para ${service.title}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#080D14]" />
                    <span>Contratar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Custom Bundle Simulator Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#103A60]/60 via-[#0E1622] to-[#103A60]/40 border border-[#2DB6B9]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2DB6B9]">Personalização Total</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-display">
              Precisa de múltiplos serviços em um único pacote?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Monte uma esteira customizada (ex: Edição + YouTube SEO + Inteligência Artificial) e tenha uma equipe dedicada com condições exclusivas.
            </p>
          </div>
          <button
            onClick={onOpenSimulator}
            className="shrink-0 px-6 py-3.5 text-sm font-bold text-[#080D14] bg-[#2DB6B9] hover:bg-[#35BAC3] rounded-xl transition-all duration-200 shadow-lg shadow-[#2DB6B9]/20 active:scale-95"
          >
            Montar Pacote Integrado
          </button>
        </div>
      </div>
    </section>
  );
};
