import { renderHook, act } from '@testing-library/react';
import { useServices } from './useServices';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Service } from '../types';

describe('useServices', () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.useFakeTimers();
  });

  it('deve inicializar vazio se não houver dados no localStorage', () => {
    const { result } = renderHook(() => useServices());
    
    act(() => {
      vi.runAllTimers();
    });

    expect(result.current.services).toEqual([]);
    expect(result.current.isLoaded).toBe(true);
  });

  it('deve carregar serviços do localStorage', () => {
    const mockServices: Service[] = [
      { id: '1', name: 'Service 1', scalability: 80, profitability: 70 }
    ];
    window.localStorage.setItem('portfolio_services', JSON.stringify(mockServices));

    const { result } = renderHook(() => useServices());
    
    act(() => {
      vi.runAllTimers();
    });

    expect(result.current.services).toEqual(mockServices);
  });

  it('deve adicionar um serviço corretamente', () => {
    const { result } = renderHook(() => useServices());
    
    act(() => {
      vi.runAllTimers();
    });

    const newService: Service = { id: '2', name: 'New Service', scalability: 50, profitability: 60 };
    
    act(() => {
      result.current.addService(newService);
    });

    expect(result.current.services).toHaveLength(1);
    expect(result.current.services[0]).toEqual(newService);
  });

  it('deve remover um serviço corretamente', () => {
    const mockServices: Service[] = [
      { id: '1', name: 'Service 1', scalability: 80, profitability: 70 },
      { id: '2', name: 'Service 2', scalability: 50, profitability: 60 }
    ];
    window.localStorage.setItem('portfolio_services', JSON.stringify(mockServices));

    const { result } = renderHook(() => useServices());
    
    act(() => {
      vi.runAllTimers();
    });

    act(() => {
      result.current.removeService('1');
    });

    expect(result.current.services).toHaveLength(1);
    expect(result.current.services[0].id).toBe('2');
  });
});
