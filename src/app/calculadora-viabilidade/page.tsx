'use client';

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BarChart3 } from 'lucide-react';

export default function ViabilidadePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/30">
      <Header 
        toolName="Calculadora de Viabilidade"
      />
      
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <BarChart3 className="text-unum-blue" size={20} />
              <h1 className="text-xl font-black text-unum-blue uppercase tracking-tighter">
                Viabilidade de Campanha
              </h1>
            </div>
            <p className="text-unum-gray text-xs font-bold uppercase tracking-widest opacity-70">
              Projeção de ROI e CAC
            </p>
          </header>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-500 italic">
              Estrutura preparada. Aguardando planejamento da calculadora de ROI/CAC.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
