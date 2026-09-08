import React from 'react';
import { WHATSAPP_BASE_URL } from '../data/content';
import { 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Clock, 
  Zap 
} from 'lucide-react';

interface HeroProps {
  onOpenSimulator: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSimulator, onExploreServices }) => {
  const customMessage = encodeURIComponent(
    'Olá! Quero eliminar a sobrecarga operacional do meu negócio e conhecer as soluções integradas da AP Soluções.'
  );
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${customMessage}`;

  return (
    <section 
      id="hero-section" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden z-10"
      aria-label="Apresentação Principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge / Status chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#103A60]/40 border border-[#2DB6B9]/30 text-[#2DB6B9] text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#2DB6B9] animate-pulse" />
            <span>Diagnóstico Preciso & Execução Ágil</span>
          </div>

          {/* H1 Headline Principal - Autoridade, Seleção da Melhor Solução, Agilidade e Resultado */}
          <h1 
            id="hero-h1-headline"
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 font-display"
          >
            A melhor solução para o seu negócio.{' '}
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2DB6B9] via-[#38C6CA] to-teal-200">
              Agilidade que acelera. Resultado que escala.
            </span>
          </h1>

          {/* Subheadline de Apoio Direta e Envolvente */}
          <p 
            id="hero-subheadline"
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-9"
          >
            Analisamos seu momento para selecionar e executar a solução ideal em audiovisual, IA, design e gestão. Sem tentativa e erro: entregas ágeis focadas no seu resultado.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            {/* Primary High-Contrast WhatsApp CTA */}
            <a
              id="hero-primary-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-bold text-[#080D14] bg-[#2DB6B9] hover:bg-[#35BAC3] rounded-xl shadow-lg shadow-[#2DB6B9]/25 hover:shadow-[#2DB6B9]/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-[#080D14]" />
              <span>Falar no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary Simulator CTA */}
            <button
              id="hero-secondary-cta"
              onClick={onOpenSimulator}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-[#0E1622]/80 hover:bg-[#152336] border border-[#1D2D42] hover:border-[#2DB6B9]/50 rounded-xl transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-[#2DB6B9]" />
              <span>Simular Solução Ideal</span>
            </button>
          </div>

          {/* Minimalist Trust & Value Ribbon */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-[#1D2D42]/60 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#2DB6B9]" />
              <span><strong className="text-white font-semibold">99.4%</strong> pontualidade</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#2DB6B9]" />
              <span><strong className="text-white font-semibold">11 soluções</strong> integradas</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#2DB6B9]" />
              <span>Zero burocracia</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2DB6B9]" />
              <span>Contrato formal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
