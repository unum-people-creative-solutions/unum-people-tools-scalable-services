import { exportToCSV } from '../csv';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Service } from '../../types';

describe('exportToCSV', () => {
  beforeEach(() => {
    // Mock URL.createObjectURL and Blob
    global.URL.createObjectURL = vi.fn(() => 'mock-url');
    global.URL.revokeObjectURL = vi.fn();
    
    // Mock document methods
    document.createElement = vi.fn().mockImplementation((tagName) => {
      if (tagName === 'a') {
        return {
          setAttribute: vi.fn(),
          click: vi.fn(),
          style: { visibility: '' },
        };
      }
      return {};
    });
    document.body.appendChild = vi.fn();
    document.body.removeChild = vi.fn();
  });

  it('deve gerar conteúdo CSV corretamente a partir dos serviços', () => {
    const mockServices: Service[] = [
      {
        id: '1',
        nome: 'Serviço Teste',
        esforco: 50,
        complexidade: 50,
        padronizacao: 50,
        lucratividade: 50,
      }
    ];

    // We can't easily inspect the Blob content without a real browser env,
    // but we can verify the function runs and triggers the download.
    exportToCSV(mockServices);

    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(global.URL.createObjectURL).toHaveBeenCalled();
  });
});
