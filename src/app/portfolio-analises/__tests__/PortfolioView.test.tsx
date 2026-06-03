import { render, screen, fireEvent, act } from '@testing-library/react';
import PortfolioView from '../PortfolioView';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock dependências externas
vi.mock('../../components/Header', () => ({
  Header: () => <div data-testid="header" />
}));
vi.mock('../../components/Footer', () => ({
  Footer: () => <div data-testid="footer" />
}));

// Mock crypto.randomUUID
if (!global.crypto) {
  (global as unknown as { crypto: unknown }).crypto = {
    randomUUID: () => 'test-uuid-' + Math.random()
  };
}

describe('PortfolioView', () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.useFakeTimers();
  });

  it('deve abrir o drawer de novo serviço ao clicar no botão "Novo Serviço"', async () => {
    render(<PortfolioView />);
    
    act(() => {
      vi.runAllTimers();
    });

    const novoBotao = screen.getByRole('button', { name: /novo serviço/i });
    fireEvent.click(novoBotao);

    // O primeiro passo é 'Esforço' (procuramos no título do passo)
    expect(screen.getByRole('heading', { name: /esforço/i })).toBeInTheDocument();
  });

  it('deve permitir adicionar um serviço respondendo o questionário', async () => {
    render(<PortfolioView />);
    
    act(() => {
      vi.runAllTimers();
    });

    // Abrir drawer
    fireEvent.click(screen.getByRole('button', { name: /novo serviço/i }));

    // Passo 1 a 4: Esforço, Complexidade, Padronização, Lucratividade
    for(let i = 0; i < 4; i++) {
        const nextButton = screen.getByRole('button', { name: /próximo/i });
        fireEvent.click(nextButton);
    }

    // Passo Final: Nome
    const nomeInput = screen.getByPlaceholderText(/Ex: Consultoria Técnica/i);
    fireEvent.change(nomeInput, { target: { value: 'Serviço de Teste' } });

    const salvarBotao = screen.getByRole('button', { name: /salvar serviço/i });
    fireEvent.click(salvarBotao);

    // Deve aparecer na lista (pode haver versão Desktop e Mobile, então pegamos a primeira)
    expect(screen.getAllByText('Serviço de Teste')[0]).toBeInTheDocument();
  });
});
