import { render, screen, fireEvent } from '@testing-library/react';
import { ServiceDrawer } from '../ServiceDrawer';
import { describe, it, expect, vi } from 'vitest';

describe('ServiceDrawer', () => {
  it('não deve renderizar se isOpen é false', () => {
    render(<ServiceDrawer isOpen={false} onClose={() => {}} onSave={() => {}} />);
    expect(screen.queryByText(/Novo Serviço/i)).not.toBeInTheDocument();
  });

  it('deve renderizar o título e o primeiro passo se isOpen é true', () => {
    render(<ServiceDrawer isOpen={true} onClose={() => {}} onSave={() => {}} />);
    expect(screen.getByText(/Novo Serviço/i)).toBeInTheDocument();
    // Use getAllByText and check headers/steppers or use a more specific query
    expect(screen.getByRole('heading', { name: /esforço/i })).toBeInTheDocument();
  });

  it('deve navegar entre os passos ao clicar em Próximo e Anterior', () => {
    render(<ServiceDrawer isOpen={true} onClose={() => {}} onSave={() => {}} />);
    
    // Passo 1: Esforço
    expect(screen.getByRole('heading', { name: /esforço/i })).toBeInTheDocument();
    
    const nextButton = screen.getByRole('button', { name: /próximo/i });
    fireEvent.click(nextButton);
    
    // Passo 2: Complexidade
    expect(screen.getByRole('heading', { name: /complexidade/i })).toBeInTheDocument();
    
    const backButton = screen.getByRole('button', { name: /anterior/i });
    fireEvent.click(backButton);
    
    // Volta ao Passo 1
    expect(screen.getByRole('heading', { name: /esforço/i })).toBeInTheDocument();
  });

  it('deve permitir salvar o serviço no último passo', () => {
    const handleSave = vi.fn();
    render(<ServiceDrawer isOpen={true} onClose={() => {}} onSave={handleSave} />);
    
    const nextButton = screen.getByRole('button', { name: /próximo/i });
    
    // Navegar até o passo final (4 passos + 1 final)
    fireEvent.click(nextButton); // Complexidade
    fireEvent.click(nextButton); // Padronização
    fireEvent.click(nextButton); // Lucratividade
    fireEvent.click(nextButton); // Finalizar/Identificação
    
    expect(screen.getByRole('heading', { name: /identificação/i })).toBeInTheDocument();
    
    const input = screen.getByLabelText(/Nome do Serviço/i);
    fireEvent.change(input, { target: { value: 'Teste de Serviço' } });
    
    const saveButton = screen.getByRole('button', { name: /salvar serviço/i });
    fireEvent.click(saveButton);
    
    expect(handleSave).toHaveBeenCalledWith(expect.objectContaining({
      nome: 'Teste de Serviço'
    }));
  });

  it('deve chamar onClose ao clicar no botão de fechar', () => {
    const handleClose = vi.fn();
    render(<ServiceDrawer isOpen={true} onClose={handleClose} onSave={() => {}} />);
    
    // The close button is the one with the X icon and is in the header
    const closeButton = screen.getAllByRole('button').find(btn => btn.querySelector('svg.lucide-x'));
    if (closeButton) fireEvent.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledOnce();
  });
});
