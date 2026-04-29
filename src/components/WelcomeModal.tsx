'use client';

import React, { useEffect } from 'react';
import { X, Info, CheckCircle2, LayoutGrid, Target, BarChart3 } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-unum-blue/40 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-unum-blue p-8 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 p-2 rounded-lg">
              <BarChart3 size={24} />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tighter">Guia Estratégico</h2>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed max-w-xl font-medium">
            Entenda como a ferramenta Unum Portfolio ajuda a identificar o caminho de menor resistência para o lucro.
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <section>
            <h3 className="text-unum-blue font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
              <LayoutGrid size={16} /> As Matrizes de Análise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50">
                <p className="font-bold text-gray-800 text-sm mb-1">Matriz de Operação</p>
                <p className="text-xs text-gray-500 leading-relaxed italic">
                  Eixo X (Esforço) vs Eixo Y (Complexidade). Identifica se o serviço é Crítico, Especialista, Operacional ou Eficiente.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50">
                <p className="font-bold text-gray-800 text-sm mb-1">Matriz de Decisão</p>
                <p className="text-xs text-gray-500 leading-relaxed italic">
                  Eixo X (Padronização) vs Eixo Y (Lucratividade). Classifica em Estrela, Oportunidade, Escala ou Revisar.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-unum-blue font-black uppercase text-xs tracking-widest flex items-center gap-2">
              <Target size={16} /> O Score de Atratividade
            </h3>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-900 leading-relaxed">
                Nosso algoritmo cruza as duas matrizes. Quanto maior o score, maior a facilidade de escala com a melhor margem possível. Use o ranking para priorizar seus esforços de venda e marketing.
              </p>
            </div>
          </section>

          <div className="flex gap-3 items-start">
            <Info className="text-unum-blue shrink-0 mt-0.5" size={20} />
            <div className="space-y-2">
              <p className="text-xs text-gray-600">
                <strong>Microinteração:</strong> Passe o mouse sobre os itens da lista para destacar o posicionamento exato dele nos gráficos acima.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Persistência:</strong> Seus dados são salvos localmente no seu navegador. Você pode exportar para CSV sempre que precisar.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-gray-50">
          <button 
            onClick={onClose}
            className="w-full bg-unum-blue hover:bg-unum-slate text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-unum-blue/20 transition-all active:scale-[0.98]"
          >
            Entendi, Prosseguir
          </button>
        </div>
      </div>
    </div>
  );
}
