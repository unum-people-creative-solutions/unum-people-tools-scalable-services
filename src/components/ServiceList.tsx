'use client';

import React from 'react';
import { Trash2, FileDown, Plus, Target } from 'lucide-react';
import { Service } from '../types';
import { exportToCSV } from '../utils/csv';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ServiceListProps {
  services: Service[];
  onRemove: (id: string) => void;
  onHover: (id: string | null) => void;
  onAddClick: () => void;
}

export function ServiceList({ services, onRemove, onHover, onAddClick }: ServiceListProps) {
  const calculateAtratividade = (s: Service) => {
    const operacao = (s.esforco + s.complexidade) / 2;
    const decisao = (s.padronizacao + s.lucratividade) / 2;
    return ((100 - operacao) + decisao) / 2;
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-700 bg-green-50 border-green-100';
    if (score >= 40) return 'text-blue-700 bg-blue-50 border-blue-100';
    return 'text-red-700 bg-red-50 border-red-100';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b flex justify-between items-center bg-gray-50/50">
        <div>
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <Target className="text-blue-600" size={20} />
            Ranking de Atratividade
          </h2>
          <p className="text-sm text-gray-500">Serviços ordenados pelo potencial estratégico</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => exportToCSV(services)}
            disabled={services.length === 0}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FileDown size={18} /> Exportar CSV
          </button>
          <button
            onClick={onAddClick}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
          >
            <Plus size={18} /> Novo Serviço
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-[11px] uppercase tracking-wider font-semibold">
              <th className="px-6 py-4">Nome do Serviço</th>
              <th className="px-6 py-4 text-center">Score Atratividade</th>
              <th className="px-6 py-4">Operação (E+C)</th>
              <th className="px-6 py-4">Decisão (P+L)</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {services.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                  Nenhum serviço cadastrado ainda.
                </td>
              </tr>
            ) : (
              [...services]
                .sort((a, b) => calculateAtratividade(b) - calculateAtratividade(a))
                .map((service) => {
                  const score = calculateAtratividade(service);
                  const operacao = (service.esforco + service.complexidade) / 2;
                  const decisao = (service.padronizacao + service.lucratividade) / 2;

                  return (
                    <tr
                      key={service.id}
                      onMouseEnter={() => onHover(service.id)}
                      onMouseLeave={() => onHover(null)}
                      className="hover:bg-blue-50/30 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <span className="font-bold text-gray-900 block">{service.nome}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-xs font-black border tracking-tighter",
                            getScoreColor(score)
                          )}>
                            {score.toFixed(1)}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden max-w-[60px]">
                            <div 
                              className="h-full bg-orange-400" 
                              style={{ width: `${operacao}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-gray-400 font-bold">{operacao.toFixed(0)}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden max-w-[60px]">
                            <div 
                              className="h-full bg-green-500" 
                              style={{ width: `${decisao}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-gray-400 font-bold">{decisao.toFixed(0)}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => onRemove(service.id)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  );
                })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
