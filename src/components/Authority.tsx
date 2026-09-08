import React from 'react';
import { WHATSAPP_BASE_URL } from '../data/content';
import { 
  XCircle, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  TrendingUp, 
  ShieldAlert, 
  ShieldCheck 
} from 'lucide-react';

export const Authority: React.FC = () => {
  const customMessage = encodeURIComponent(
    'Olá! Quero centralizar minhas demandas técnicas e criativas com a AP Soluções para ganhar tempo.'
  );
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${customMessage}`;

  return (
    <section 
      id="diferencial" 
      className="relative py-24 z-10 scroll-mt-20 border-y border-[#1D2D42]/60 bg-[#0A101A]/70 backdrop-blur-sm"
      aria-label="Autoridade e Diferencial Competitivo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#103A60]/40 border border-[#2DB6B9]/30 text-[#2DB6B9] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Diferencial Estratégico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-6">
            Centralização Inteligente vs. O Caos de Múltiplos Freelancers
          </h2>
          {/* Paragraph of authority required by the prompt */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Gerenciar múltiplos profissionais independentes não é delegar; é acumular a sobrecarga de cobrar prazos, conferir formatos e resolver retrabalhos. A <strong className="text-white font-semibold">AP Soluções</strong> elimina o ruído operacional ao concentrar design, audiovisual, automações e soluções fiscais em um parceiro executivo único, garantindo congruência estética e pontualidade irrepreensível.
          </p>
        </div>

        {/* High-Contrast Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Disjointed Freelancers Column (The Pain) */}
          <div className="p-8 rounded-2xl bg-[#0D1420]/80 border border-red-900/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-950/50 border border-red-800/40 text-red-400 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-200 font-display">Operação Fragmentada</h3>
                <p className="text-xs text-red-400/90 font-medium">Contratando freelancers avulsos</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Desalinhamento constante:</strong> O designer não fala com o editor de vídeo, gerando peças visuais sem padrão ou identidade corporativa.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Perda massiva de tempo:</strong> Você gasta 15 a 20 horas semanais cobrando entregas, repassando arquivos e explicando briefings repetidos.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Insegurança nos prazos:</strong> Falta de compromisso formal; sumiços em dias de lançamento e desculpas técnicas imprevistas.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Custos invisíveis de retrabalho:</strong> Pagar duas vezes pelo mesmo ajuste por incompatibilidade técnica de arquivos.
                </span>
              </li>
            </ul>
          </div>

          {/* Unified AP Soluções Model (The Solution) */}
          <div className="p-8 rounded-2xl bg-[#0E1B2B]/90 border border-[#2DB6B9]/50 relative overflow-hidden shadow-[0_0_30px_rgba(45,182,185,0.08)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#103A60] border border-[#2DB6B9]/40 text-[#2DB6B9] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Modelo Integrado AP Soluções</h3>
                <p className="text-xs text-[#2DB6B9] font-semibold">Parceiro Executivo Multidisciplinar</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2DB6B9] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Um único canal estratégico:</strong> Um único ponto de contato no WhatsApp para alinhar audiovisual, automações e soluções burocráticas.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2DB6B9] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Economia real de tempo:</strong> Você foca 100% em vendas e expansão, sabendo que as entregas técnicas rodam com autonomia supervisionada.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2DB6B9] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Pontualidade contratual (99.4%):</strong> Cronogramas respeitados com rigor e entregas validadas nos formatos exatos de uso.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2DB6B9] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Sinergia técnica total:</strong> O SEO do YouTube conversa com o corte dos vídeos curtos e as automações de IA, gerando mais ROI.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Authority Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-xl bg-[#0E1622]/60 border border-[#1D2D42]">
            <p className="text-3xl sm:text-4xl font-extrabold text-[#2DB6B9] font-display">+25h</p>
            <p className="text-sm font-semibold text-white mt-1">Horas economizadas por semana</p>
            <p className="text-xs text-slate-400 mt-1">Liderança focada no core business</p>
          </div>

          <div className="p-6 rounded-xl bg-[#0E1622]/60 border border-[#1D2D42]">
            <p className="text-3xl sm:text-4xl font-extrabold text-[#2DB6B9] font-display">1 Contato</p>
            <p className="text-sm font-semibold text-white mt-1">Resolução de 11 demandas</p>
            <p className="text-xs text-slate-400 mt-1">Zero ruído ou intermediação frágil</p>
          </div>

          <div className="p-6 rounded-xl bg-[#0E1622]/60 border border-[#1D2D42]">
            <p className="text-3xl sm:text-4xl font-extrabold text-[#2DB6B9] font-display">100%</p>
            <p className="text-sm font-semibold text-white mt-1">Aderência aos padrões técnicos</p>
            <p className="text-xs text-slate-400 mt-1">Arquivos prontos para publicação</p>
          </div>
        </div>
      </div>
    </section>
  );
};
