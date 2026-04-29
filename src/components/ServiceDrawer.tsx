'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, Save } from 'lucide-react';
import { QUESTIONS, Service, StepKey } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ServiceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (service: Service) => void;
}

const STEPS: { key: StepKey; label: string }[] = [
  { key: 'esforco', label: 'Esforço' },
  { key: 'complexidade', label: 'Complexidade' },
  { key: 'padronizacao', label: 'Padronização' },
  { key: 'lucratividade', label: 'Lucratividade' },
];

export function ServiceDrawer({ isOpen, onClose, onSave }: ServiceDrawerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [nome, setNome] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  if (!isOpen) return null;

  const handleToggle = (questionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const calculateScore = (stepKey: StepKey) => {
    const stepQuestions = QUESTIONS[stepKey];
    const yesCount = stepQuestions.filter((q) => answers[q.id]).length;
    return (yesCount / 6) * 100;
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = () => {
    if (!nome.trim()) return;

    const newService: Service = {
      id: crypto.randomUUID(),
      nome,
      esforco: calculateScore('esforco'),
      complexidade: calculateScore('complexidade'),
      padronizacao: calculateScore('padronizacao'),
      lucratividade: calculateScore('lucratividade'),
    };

    onSave(newService);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setCurrentStep(0);
    setAnswers({});
    setNome('');
  };

  const isFinalStep = currentStep === STEPS.length;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop - Explicitly ignores clicks as requested */}
      <div className="fixed inset-0 bg-black/40" />

      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">Novo Serviço</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-6 scroll-smooth"
        >
          {/* Stepper Indicator */}
          <div className="flex mb-8 justify-between">
            {[...STEPS, { label: 'Finalizar' }].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors',
                    currentStep === idx
                      ? 'bg-blue-600 text-white'
                      : currentStep > idx
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  )}
                >
                  {idx + 1}
                </div>
                <span className="text-[10px] mt-1 text-gray-500 uppercase font-semibold text-center px-1">
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {!isFinalStep ? (
            <div className="space-y-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {STEPS[currentStep].label}
                </h3>
                <p className="text-sm text-gray-500">Responda Sim ou Não para as questões abaixo.</p>
              </div>

              {QUESTIONS[STEPS[currentStep].key].map((q) => (
                <div
                  key={q.id}
                  className="p-4 rounded-xl border border-gray-100 bg-gray-50 space-y-3"
                >
                  <span className="text-sm font-medium text-gray-700 block leading-tight">
                    {q.text}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: true }))}
                      className={cn(
                        'flex-1 py-2 rounded-lg text-xs font-bold transition-all border',
                        answers[q.id] === true
                          ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                          : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600'
                      )}
                    >
                      SIM
                    </button>
                    <button
                      onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: false }))}
                      className={cn(
                        'flex-1 py-2 rounded-lg text-xs font-bold transition-all border',
                        answers[q.id] === false
                          ? 'bg-gray-800 border-gray-800 text-white shadow-md'
                          : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600'
                      )}
                    >
                      NÃO
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Identificação</h3>
                <p className="text-sm text-gray-500">Dê um nome ao serviço para concluir o cadastro.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome do Serviço
                </label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Consultoria Técnica"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-bold text-blue-800 mb-2">Resumo da Pontuação:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-blue-700">
                  <p>Esforço: {calculateScore('esforco').toFixed(0)}%</p>
                  <p>Complexidade: {calculateScore('complexidade').toFixed(0)}%</p>
                  <p>Padronização: {calculateScore('padronizacao').toFixed(0)}%</p>
                  <p>Lucratividade: {calculateScore('lucratividade').toFixed(0)}%</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t bg-gray-50 flex gap-3">
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-all font-medium"
            >
              <ChevronLeft size={18} /> Anterior
            </button>
          )}

          {!isFinalStep ? (
            <button
              onClick={handleNext}
              className="flex-[2] flex items-center justify-center gap-2 p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all font-medium"
            >
              Próximo <ChevronRight size={18} />
            </button>
          ) : (
            <button
              onClick={handleSave}
              disabled={!nome.trim()}
              className="flex-[2] flex items-center justify-center gap-2 p-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save size={18} /> Salvar Serviço
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
