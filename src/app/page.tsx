'use client';

import React, { useState, useEffect } from 'react';
import { useServices } from '../hooks/useServices';
import { ServiceCharts } from '../components/ServiceCharts';
import { ServiceList } from '../components/ServiceList';
import { ServiceDrawer } from '../components/ServiceDrawer';
import { WelcomeModal } from '../components/WelcomeModal';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LayoutGrid } from 'lucide-react';

export default function PortfolioPage() {
  const { services, addService, removeService, isLoaded } = useServices();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded) {
      const hasSeenModal = localStorage.getItem('unum_welcome_seen');
      if (!hasSeenModal) {
        setIsHelpOpen(true);
      }
    }
  }, [isLoaded]);

  const closeHelp = () => {
    localStorage.setItem('unum_welcome_seen', 'true');
    setIsHelpOpen(false);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 bg-unum-blue/20 rounded-full mb-4"></div>
          <p className="text-unum-gray font-medium">Carregando portfólio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/30">
      <Header onOpenHelp={() => setIsHelpOpen(true)} />
      <WelcomeModal isOpen={isHelpOpen} onClose={closeHelp} />
      
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <LayoutGrid className="text-unum-blue" size={20} />
                <h1 className="text-xl font-black text-unum-blue uppercase tracking-tighter">
                  Mapeamento Estratégico
                </h1>
              </div>
              <p className="text-unum-gray text-xs font-bold uppercase tracking-widest opacity-70">
                Análise de Escalabilidade e Rentabilidade
              </p>
            </div>
            
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="bg-unum-blue hover:bg-unum-slate text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-unum-blue/20 flex items-center justify-center gap-2 active:scale-95 text-xs uppercase tracking-widest"
            >
              Novo Serviço
            </button>
          </header>

          <section className="space-y-10">
            <ServiceCharts 
              services={services} 
              highlightedId={highlightedId} 
            />
            
            <ServiceList 
              services={services} 
              onRemove={removeService} 
              onHover={setHighlightedId}
              onAddClick={() => setIsDrawerOpen(true)}
            />
          </section>
        </div>
      </main>

      <Footer />

      <ServiceDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        onSave={addService} 
      />
    </div>
  );
}
