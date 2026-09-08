import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesVitrine } from './components/ServicesVitrine';
import { Authority } from './components/Authority';
import { ProcessSteps } from './components/ProcessSteps';
import { Advantages } from './components/Advantages';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TechBackground } from './components/TechBackground';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { DemandSimulatorModal } from './components/DemandSimulatorModal';
import { StrategyDossierModal } from './components/StrategyDossierModal';
import { ServiceItem } from './types';
import { Tv, X, ChevronRight, ChevronLeft } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  // Presentation Mode Section Navigation
  const presentationSections = [
    { id: 'hero-section', title: '1. Introdução & Proposta de Valor' },
    { id: 'servicos', title: '2. Nossos 11 Serviços' },
    { id: 'diferencial', title: '3. Diferencial Competitivo' },
    { id: 'como-funciona', title: '4. Metodologia em 4 Etapas' },
    { id: 'vantagens', title: '5. Vantagens Tangíveis' },
    { id: 'garantia', title: '6. Segurança Contratual' },
    { id: 'faq', title: '7. Perguntas Frequentes' },
    { id: 'fechamento', title: '8. Fechamento Comercial' },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < presentationSections.length) {
      setCurrentSlideIndex(index);
      const target = document.getElementById(presentationSections[index].id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080D14] text-slate-100 selection:bg-[#2DB6B9]/30 selection:text-[#2DB6B9]">
      {/* Visual Tech Background with Parallax and Opacity Mask (25% opacity, 2.5px blur) */}
      <TechBackground opacity={0.25} blur={2.5} enableParallax={!isPresentationMode} />

      {/* Floating Presentation Mode Toolbar when active */}
      {isPresentationMode && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#0E1622]/95 border border-[#2DB6B9] shadow-2xl px-5 py-2.5 rounded-full flex items-center gap-4 backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2DB6B9]">
            <Tv className="w-4 h-4" />
            <span className="hidden sm:inline">Apresentação 16:9 (Zoom/Meet):</span>
            <span className="text-white">
              {presentationSections[currentSlideIndex].title} ({currentSlideIndex + 1}/{presentationSections.length})
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => goToSlide(currentSlideIndex - 1)}
              disabled={currentSlideIndex === 0}
              className="p-1 rounded bg-[#080D14] text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
              title="Slide Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => goToSlide(currentSlideIndex + 1)}
              disabled={currentSlideIndex === presentationSections.length - 1}
              className="p-1 rounded bg-[#080D14] text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
              title="Próximo Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setIsPresentationMode(false)}
            className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 pl-2 border-l border-slate-700"
          >
            <X className="w-3.5 h-3.5" />
            <span>Sair</span>
          </button>
        </div>
      )}

      {/* Main Presentation Container Wrapper */}
      <div className={`relative z-10 transition-all duration-300 ${isPresentationMode ? 'max-w-6xl mx-auto shadow-[0_0_80px_rgba(0,0,0,0.9)] my-6 rounded-3xl border border-[#1D2D42] overflow-hidden bg-[#080D14]' : 'w-full'}`}>
        {/* Sticky Header */}
        <Header 
          onOpenDossier={() => setIsDossierOpen(true)}
          isPresentationMode={isPresentationMode}
          onTogglePresentationMode={() => setIsPresentationMode(!isPresentationMode)}
          onOpenSimulator={() => setIsSimulatorOpen(true)}
        />

        {/* 1. Hero Section (Primeira Dobra) */}
        <Hero 
          onOpenSimulator={() => setIsSimulatorOpen(true)}
          onExploreServices={() => {
            const elem = document.getElementById('servicos');
            elem?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Nossos Serviços (Vitrine Estratégica em Grid com 11 Serviços em 4 Categorias) */}
        <ServicesVitrine 
          onSelectService={(service) => setSelectedService(service)}
          onOpenSimulator={() => setIsSimulatorOpen(true)}
        />

        {/* 3. Bloco de Autoridade e Diferencial (Centralização vs. Caos de Freelancers) */}
        <Authority />

        {/* 4. Como Funciona (Processo em 4 Etapas Ágeis) */}
        <ProcessSteps />

        {/* 5. Vantagens Tangíveis (Métricas de Prazos, Atendimento Direto e Pacotes) */}
        <Advantages />

        {/* 6. Redução de Risco / Garantia (Contrato, Sigilo NDA e Revisão) */}
        <Guarantee />

        {/* 7. Perguntas Frequentes (FAQ Desarmando Objeções) */}
        <FAQ />

        {/* 8. Fechamento de Alta Conversão (Urgência de Vagas Mensais e CTA Imediato) */}
        <ClosingCTA />

        {/* 9. Rodapé Profissional (Versão Reduzida do Símbolo, Contatos Oficiais e Direitos) */}
        <Footer onOpenDossier={() => setIsDossierOpen(true)} />
      </div>

      {/* 10. Botão Flutuante do WhatsApp com Gatilho */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />

      <DemandSimulatorModal 
        isOpen={isSimulatorOpen} 
        onClose={() => setIsSimulatorOpen(false)} 
      />

      <StrategyDossierModal 
        isOpen={isDossierOpen} 
        onClose={() => setIsDossierOpen(false)} 
      />
    </div>
  );
}
