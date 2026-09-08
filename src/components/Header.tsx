import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { WHATSAPP_BASE_URL } from '../data/content';
import { 
  MessageCircle, 
  Menu, 
  X, 
  Tv, 
  FileText, 
  ArrowUpRight 
} from 'lucide-react';

interface HeaderProps {
  onOpenDossier: () => void;
  isPresentationMode: boolean;
  onTogglePresentationMode: () => void;
  onOpenSimulator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDossier,
  isPresentationMode,
  onTogglePresentationMode,
  onOpenSimulator
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferencial', href: '#diferencial' },
    { label: 'Processo', href: '#como-funciona' },
    { label: 'Vantagens', href: '#vantagens' },
    { label: 'FAQ', href: '#faq' },
  ];

  const primaryWhatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    'Olá! Estava navegando na landing page da AP Soluções e gostaria de tirar uma dúvida sobre serviços para o meu negócio.'
  )}`;

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080D14]/90 backdrop-blur-md border-b border-[#1D2D42] py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 focus:outline-none" aria-label="AP Soluções Home">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-[#2DB6B9] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Quick Quote Simulator Trigger */}
          <button
            id="header-btn-simulator"
            onClick={onOpenSimulator}
            className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-[#0E1622] hover:bg-[#103A60]/50 border border-[#1D2D42] hover:border-[#2DB6B9]/50 rounded-lg transition-colors"
            title="Monte seu pacote customizado de serviços"
          >
            <span>Simulador</span>
          </button>

          {/* Utility Icon Buttons Group */}
          <div className="flex items-center gap-1 bg-[#0A1018]/60 p-1 rounded-lg border border-[#1D2D42]/60">
            {/* Presentation Mode Toggle (Zoom/Meet 16:9 Screen Share) */}
            <button
              id="header-btn-presentation"
              onClick={onTogglePresentationMode}
              className={`p-1.5 rounded-md transition-colors ${
                isPresentationMode
                  ? 'bg-[#2DB6B9] text-[#080D14]'
                  : 'text-slate-400 hover:text-white hover:bg-[#103A60]/50'
              }`}
              title="Modo Apresentação 16:9 (Zoom/Meet)"
              aria-label="Modo Apresentação 16:9"
            >
              <Tv className="w-3.5 h-3.5" />
            </button>

            {/* Strategic UX/SEO Dossier Modal */}
            <button
              id="header-btn-dossier"
              onClick={onOpenDossier}
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-[#103A60]/50 transition-colors"
              title="Dossiê Estratégico (UX/SEO)"
              aria-label="Dossiê Estratégico"
            >
              <FileText className="w-3.5 h-3.5 text-[#2DB6B9]" />
            </button>
          </div>

          {/* Primary WhatsApp CTA */}
          <a
            id="header-cta-whatsapp"
            href={primaryWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-[#080D14] bg-[#2DB6B9] hover:bg-[#35BAC3] rounded-lg shadow-sm shadow-[#2DB6B9]/20 transition-all duration-150 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#080D14]" />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href={primaryWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#080D14] bg-[#2DB6B9] rounded-lg"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-[#080D14]" />
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-[#0E1622] border border-[#1D2D42] rounded-lg"
            aria-label="Alternar menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#080D14]/98 border-b border-[#1D2D42] px-6 py-6 space-y-4 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-[#2DB6B9] py-2 border-b border-slate-800/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSimulator();
              }}
              className="w-full py-2.5 px-4 text-sm font-semibold text-slate-200 bg-[#103A60]/40 border border-[#1D2D42] rounded-lg text-center"
            >
              Simulador de Pacotes
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDossier();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-slate-300 bg-[#0E1622] border border-[#1D2D42] rounded-lg"
            >
              <FileText className="w-4 h-4 text-[#2DB6B9]" />
              <span>Dossiê Estratégico</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onTogglePresentationMode();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-slate-300 bg-[#0E1622] border border-[#1D2D42] rounded-lg"
            >
              <Tv className="w-4 h-4 text-[#2DB6B9]" />
              <span>{isPresentationMode ? 'Desativar 16:9' : 'Modo 16:9 (Zoom/Meet)'}</span>
            </button>

            <a
              href={primaryWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#080D14] bg-[#2DB6B9] hover:bg-[#35BAC3] rounded-lg text-center shadow-md shadow-[#2DB6B9]/20"
            >
              <MessageCircle className="w-4 h-4 fill-[#080D14]" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
