import React from 'react';
import { Logo } from './Logo';
import { WHATSAPP_BASE_URL } from '../data/content';
import { MessageCircle, Mail, Clock, Shield, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenDossier: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDossier }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com o time comercial da AP Soluções.'
  )}`;

  return (
    <footer 
      id="main-footer" 
      className="relative z-10 bg-[#05080E] border-t border-[#1D2D42] text-slate-400 text-sm py-16"
      aria-label="Rodapé Institucional"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Brand & Reduced Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo variant="symbol" size="md" />
              <div>
                <span className="font-extrabold text-white text-lg tracking-wider font-display">AP SOLUÇÕES</span>
                <p className="text-[10px] tracking-[0.2em] text-[#2DB6B9] uppercase font-semibold">Agência Integrada</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Centralizamos audiovisual, automações de inteligência artificial, design estratégico e soluções estruturais com foco em velocidade e retorno sobre investimento.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <Shield className="w-4 h-4 text-[#2DB6B9]" />
              <span>Conformidade com a LGPD</span>
            </div>
          </div>

          {/* Column 2: Núcleos de Atuação */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
              Soluções Integradas
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#servicos" className="hover:text-[#2DB6B9] transition-colors">Edição & Pós-Produção de Vídeo</a></li>
              <li><a href="#servicos" className="hover:text-[#2DB6B9] transition-colors">Vídeos Curtos (Reels/TikTok/Kwai)</a></li>
              <li><a href="#servicos" className="hover:text-[#2DB6B9] transition-colors">Otimização SEO para YouTube</a></li>
              <li><a href="#servicos" className="hover:text-[#2DB6B9] transition-colors">Implementação de IA & Automações</a></li>
              <li><a href="#servicos" className="hover:text-[#2DB6B9] transition-colors">Contabilidade Digital para PJ</a></li>
              <li><a href="#servicos" className="hover:text-[#2DB6B9] transition-colors">Formatação & Consultoria ABNT</a></li>
            </ul>
          </div>

          {/* Column 3: Navegação Rápida & Ferramentas */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
              Navegação & Estratégia
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#diferencial" className="hover:text-[#2DB6B9] transition-colors">Diferencial Centralizado</a></li>
              <li><a href="#como-funciona" className="hover:text-[#2DB6B9] transition-colors">Processo em 4 Etapas</a></li>
              <li><a href="#vantagens" className="hover:text-[#2DB6B9] transition-colors">Vantagens & Métricas</a></li>
              <li><a href="#garantia" className="hover:text-[#2DB6B9] transition-colors">Segurança & Contrato</a></li>
              <li><a href="#faq" className="hover:text-[#2DB6B9] transition-colors">Perguntas Frequentes</a></li>
              <li>
                <button 
                  onClick={onOpenDossier}
                  className="text-[#2DB6B9] hover:underline font-semibold text-left"
                >
                  Plano Estratégico (UX/SEO)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Canais Oficiais */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
              Canais Oficiais
            </h4>
            <div className="space-y-3 text-xs">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#2DB6B9] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#2DB6B9]" />
                <span>WhatsApp Comercial Oficial</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#2DB6B9]" />
                <span>contato@apsolucoes.com.br</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-[#2DB6B9]" />
                <span>Segunda a Sexta: 09h às 18h</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-[#0E1622] border border-[#1D2D42] rounded-lg transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-[#2DB6B9]" />
                  <span>Voltar ao topo</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-[#1D2D42]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} AP Soluções. Todos os direitos reservados. CNPJ ativo no Brasil.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300">Termos de Prestação de Serviços</span>
            <span className="hover:text-slate-300">Política de Privacidade & Sigilo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
