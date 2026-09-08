import React, { useState } from 'react';
import { SEO_DOSSIER } from '../data/content';
import { 
  X, 
  FileText, 
  Search, 
  Compass, 
  Shield, 
  Sparkles, 
  Layout, 
  Target, 
  CheckCircle2, 
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';

interface StrategyDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyDossierModal: React.FC<StrategyDossierModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'seo' | 'copy' | 'ux' | 'brand'>('seo');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl rounded-3xl bg-[#0E1622] border border-[#2DB6B9]/50 shadow-2xl p-6 sm:p-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#1D2D42]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#103A60]/40 text-[#2DB6B9] text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Dossiê Executivo AP Soluções</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display">
              Planejamento Arquitetural, Estratégia de UX & On-Page SEO
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Documentação técnica do Copywriting de Alta Conversão, Arquitetura de Informação e Estrutura Semântica.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#080D14] text-slate-400 hover:text-white border border-[#1D2D42]"
            aria-label="Fechar Dossiê"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 pt-4 pb-2 border-b border-[#1D2D42]/60">
          <button
            onClick={() => setActiveTab('seo')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'seo'
                ? 'bg-[#2DB6B9] text-[#080D14]'
                : 'bg-[#080D14] text-slate-300 hover:text-white border border-[#1D2D42]'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>1. Arquitetura SEO & Tags</span>
          </button>

          <button
            onClick={() => setActiveTab('copy')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'copy'
                ? 'bg-[#2DB6B9] text-[#080D14]'
                : 'bg-[#080D14] text-slate-300 hover:text-white border border-[#1D2D42]'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>2. Copywriting & Gatilhos</span>
          </button>

          <button
            onClick={() => setActiveTab('ux')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'ux'
                ? 'bg-[#2DB6B9] text-[#080D14]'
                : 'bg-[#080D14] text-slate-300 hover:text-white border border-[#1D2D42]'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>3. Estratégia de UX & Mobile</span>
          </button>

          <button
            onClick={() => setActiveTab('brand')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'brand'
                ? 'bg-[#2DB6B9] text-[#080D14]'
                : 'bg-[#080D14] text-slate-300 hover:text-white border border-[#1D2D42]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>4. Identidade Visual & Congruência</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6 pr-2">
          {activeTab === 'seo' && (
            <div className="space-y-6 text-sm text-slate-300">
              {/* Primary & Secondary Keywords */}
              <div className="p-4 rounded-2xl bg-[#080D14] border border-[#1D2D42]">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2 text-[#2DB6B9]">
                  Palavra-Chave Principal & Densidade Semântica
                </h3>
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-[#0E1622] border border-[#1D2D42] text-slate-200 font-semibold mb-3">
                  <code>{SEO_DOSSIER.primaryKeyword}</code>
                  <button
                    onClick={() => handleCopy(SEO_DOSSIER.primaryKeyword, 'pk')}
                    className="text-xs text-[#2DB6B9] hover:underline flex items-center gap-1"
                  >
                    {copiedKey === 'pk' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SEO_DOSSIER.secondaryKeywords.map((kw, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-[#103A60]/40 border border-[#1D2D42] text-slate-300">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tag Hierarchy */}
              <div className="p-4 rounded-2xl bg-[#080D14] border border-[#1D2D42]">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 text-[#2DB6B9]">
                  Hierarquia Semântica Estrita (H1 / H2 / H3)
                </h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-bold text-[#2DB6B9] bg-[#103A60]/40 px-2 py-0.5 rounded">H1</span>
                    <p className="mt-1 font-semibold text-white">{SEO_DOSSIER.h1Tag}</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#35BAC3] bg-[#103A60]/30 px-2 py-0.5 rounded">H2 Tags Estruturais:</span>
                    <ul className="mt-1.5 space-y-1 list-disc list-inside text-slate-300">
                      {SEO_DOSSIER.h2Tags.map((h2, idx) => (
                        <li key={idx}>{h2}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Search Intents */}
              <div className="p-4 rounded-2xl bg-[#080D14] border border-[#1D2D42]">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 text-[#2DB6B9]">
                  Mapeamento de Intenção de Busca
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  {SEO_DOSSIER.searchIntents.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#0E1622] border border-[#1D2D42]">
                      <span className="font-bold text-[#2DB6B9] block mb-1">{item.intent}</span>
                      <p className="text-slate-300 mb-2">{item.description}</p>
                      <p className="text-[11px] text-slate-400 font-medium">
                        <strong>Onde é atacada:</strong> {item.addressedIn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'copy' && (
            <div className="space-y-6 text-sm text-slate-300">
              <div className="p-5 rounded-2xl bg-[#080D14] border border-[#1D2D42]">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-[#2DB6B9]">
                  Engenharia de Copywriting de Alta Conversão
                </h3>
                <div className="space-y-4">
                  {SEO_DOSSIER.copyTriggers.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#0E1622] border border-[#1D2D42]">
                      <h4 className="text-sm font-bold text-white mb-1">{item.trigger}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.application}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#103A60]/30 border border-[#2DB6B9]/40">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 text-[#2DB6B9]">
                  Tom de Voz e Posicionamento Adotado
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Corporativo, assertivo, cirúrgico e focado em soluções práticas. Sem clichês genéricos como "revolucionário" ou "potencialize seu negócio". O copywriting foca no cálculo pragmático: quanto tempo o tomador de decisão perde hoje gerenciando tarefas operacionais e como a AP Soluções transforma esse desperdício em faturamento e escala.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'ux' && (
            <div className="space-y-6 text-sm text-slate-300">
              <div className="p-5 rounded-2xl bg-[#080D14] border border-[#1D2D42]">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 text-[#2DB6B9]">
                  Arquitetura de Informação & Decisões de UX
                </h3>
                <ul className="space-y-3 text-xs leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2DB6B9] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Redução de Fricção Cognitiva:</strong> Em vez de dispersar 11 serviços isolados, agrupamos a vitrine em 4 pilares estratégicos (Audiovisual, Design & Vendas, Tecnologia & IA, Soluções Estruturais).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2DB6B9] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Mobile-First Rigoroso:</strong> Zona de alcance fácil do polegar para o botão flutuante de WhatsApp, navegação fluida e cards de toque mínimo de 44px.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2DB6B9] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Modo Apresentação 16:9 Integrado:</strong> Botão no header permitindo alternar para proporção de slides cinematográficos 16:9, ideal para compartilhamento de tela em reuniões no Zoom e Google Meet.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2DB6B9] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Deep Link no WhatsApp:</strong> Cada card de serviço possui link com mensagem pré-preenchida contendo o nome exato do serviço, eliminando hesitação do lead.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'brand' && (
            <div className="space-y-6 text-sm text-slate-300">
              <div className="p-5 rounded-2xl bg-[#080D14] border border-[#1D2D42]">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-[#2DB6B9]">
                  Diretrizes da Marca & Paleta Oficial Extraída
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#103A60] border border-[#2DB6B9]/30 text-white">
                    <span className="text-xs font-bold block">Azul Petróleo Escuro</span>
                    <code className="text-xs text-slate-200">#103A60 a #133E68</code>
                    <p className="text-[10px] text-slate-300 mt-1">Letra "A", autoridade e base institucional.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#2DB6B9] text-[#080D14]">
                    <span className="text-xs font-bold block">Verde-Água / Turquesa</span>
                    <code className="text-xs text-[#080D14] font-bold">#2DB6B9 a #35BAC3</code>
                    <p className="text-[10px] text-[#080D14] mt-1 font-semibold">Letra "P", seta ascendente e botões de ação.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#080D14] border border-[#1D2D42] text-slate-200">
                    <span className="text-xs font-bold block">Preto Dark Mode Tech</span>
                    <code className="text-xs text-[#2DB6B9]">#080D14 / #0A0F16</code>
                    <p className="text-[10px] text-slate-400 mt-1">Fundo tecnológico imersivo de alto contraste.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0E1622] border border-[#1D2D42] text-xs">
                  <h4 className="font-bold text-white mb-1">Simbolismo do Logo Oficial</h4>
                  <p className="text-slate-300 leading-relaxed">
                    A haste e o arco da letra "P" em verde-água se estendem em uma seta diagonal ascendente voltada para o canto superior direito (↗), simbolizando escala e crescimento sustentável para o cliente da AP Soluções.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#1D2D42] flex justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-6 rounded-xl font-bold text-xs text-[#080D14] bg-[#2DB6B9] hover:bg-[#35BAC3] transition-colors"
          >
            Concluir Leitura do Dossiê
          </button>
        </div>
      </div>
    </div>
  );
};
