import React from 'react';
import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AdUnit } from '../components/AdUnit';
import { LayoutGrid, ArrowRight, BarChart3, Target, Calculator } from 'lucide-react';

export const metadata = {
  title: 'Home',
  description: 'Ferramentas inteligentes da Unum People para análise estratégica, ROI de campanhas e lucratividade de serviços.',
};

const tools = [
  {
    title: 'Análise de Portfólio',
    description: 'Mapeamento estratégico de serviços com foco em escalabilidade e rentabilidade.',
    href: '/portfolio-analises',
    icon: LayoutGrid,
    color: 'bg-brand-blue',
    status: 'Disponível'
  },
  {
    title: 'Simulador de Precificação',
    description: 'Elimine o achismo ao cobrar. Calcule o ponto de equilíbrio e margem de lucro real.',
    href: '/simulador-precificacao',
    icon: Calculator,
    color: 'bg-brand-blue',
    status: 'Disponível'
  },
  {
    title: 'Viabilidade de Campanhas',
    description: 'Calcule o esforço necessário para obter retorno em anúncios antes de investir.',
    href: '/calculadora-viabilidade',
    icon: BarChart3,
    color: 'bg-brand-blue',
    status: 'Disponível'
  },
  {
    title: 'Mapeador de Benchmark de Aquisição',
    description: 'Compare suas métricas de marketing com as referências do mercado para identificar gaps.',
    href: '#',
    icon: Target,
    color: 'bg-brand-grey',
    status: 'Em breve'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-white">
      <Header />
      
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto py-12 md:py-20">
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-brand-blue uppercase tracking-tighter mb-6">
              Ecossistema de <br /> Inteligência Estratégica
            </h1>
            <p className="text-brand-grey text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Ferramentas diretas para você focar no que importa: o seu cliente.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div 
                key={tool.title}
                className={`group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 ${
                  tool.href !== '#' ? 'hover:shadow-xl hover:-translate-y-1' : 'opacity-75'
                }`}
              >
                <div className={`${tool.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-blue/10`}>
                  <tool.icon size={32} />
                </div>
                
                <div className="mb-4">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                    tool.status === 'Disponível' ? 'bg-brand-orange/10 text-brand-orange' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {tool.status}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-brand-blue mb-4">
                  {tool.title}
                </h2>
                
                <p className="text-brand-grey text-base leading-relaxed mb-10 h-20">
                  {tool.description}
                </p>

                {tool.href !== '#' ? (
                  <Link 
                    href={tool.href}
                    className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all"
                  >
                    Acessar Ferramenta
                    <ArrowRight size={18} />
                  </Link>
                ) : (
                  <span className="text-gray-400 font-bold text-sm uppercase tracking-widest cursor-not-allowed">
                    Acesso Restrito
                  </span>
                )}
              </div>
            ))}
          </div>

          <AdUnit className="mt-20" slot="7715444307" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
