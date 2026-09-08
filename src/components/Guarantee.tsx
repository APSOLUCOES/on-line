import React from 'react';
import { ShieldCheck, FileCheck, Lock, RefreshCw } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section 
      id="garantia" 
      className="relative py-20 z-10 border-t border-[#1D2D42]/60"
      aria-label="Segurança e Garantia Contratual"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#103A60]/40 via-[#0E1622] to-[#080D14] border border-[#2DB6B9]/40 relative overflow-hidden shadow-2xl">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2DB6B9]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-[#103A60] border border-[#2DB6B9]/50 text-[#2DB6B9] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#2DB6B9]/20">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
              Segurança Contratual e Confiabilidade Incondicional
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Elimine qualquer receio de atraso, quebra de sigilo ou entrega fora do padrão. Cada projeto com a <strong className="text-white font-semibold">AP Soluções</strong> é amparado por garantias formais para proteger seu investimento do primeiro ao último arquivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="p-6 rounded-2xl bg-[#080D14]/70 border border-[#1D2D42] backdrop-blur-sm">
              <FileCheck className="w-6 h-6 text-[#2DB6B9] mb-3" />
              <h3 className="text-base font-bold text-white mb-2 font-display">Contrato Formal & NF</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Escopo detalhado, cronograma de entregas e nota fiscal emitida para sua empresa com total respaldo jurídico.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#080D14]/70 border border-[#1D2D42] backdrop-blur-sm">
              <Lock className="w-6 h-6 text-[#2DB6B9] mb-3" />
              <h3 className="text-base font-bold text-white mb-2 font-display">Sigilo Absoluto (NDA)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Proteção irrevogável dos seus materiais brutos, estratégias de vendas, dados contábeis e pesquisas acadêmicas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#080D14]/70 border border-[#1D2D42] backdrop-blur-sm">
              <RefreshCw className="w-6 h-6 text-[#2DB6B9] mb-3" />
              <h3 className="text-base font-bold text-white mb-2 font-display">Ajustes Finos Inclusos</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rodadas de alinhamento e refinamento técnico garantidas sem cobranças extras até a aprovação definitiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
