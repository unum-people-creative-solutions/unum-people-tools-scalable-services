import { render, screen, fireEvent } from '@testing-library/react';
import { ServiceList } from '../ServiceList';
import { describe, it, expect, vi } from 'vitest';
import { Service } from '../../types';

const mockServices: Service[] = [
  {
    id: '1',
    nome: 'Serviço A',
    esforco: 20,
    complexidade: 20,
    padronizacao: 80,
    lucratividade: 80,
  },
  {
    id: '2',
    nome: 'Serviço B',
    esforco: 80,
    complexidade: 80,
    padronizacao: 20,
    lucratividade: 20,
  }
];

describe('ServiceList', () => {
  it('deve renderizar a lista de serviços corretamente', () => {
    render(
      <ServiceList 
        services={mockServices} 
        onRemove={() => {}} 
        onHover={() => {}} 
        onAddClick={() => {}} 
      />
    );

    expect(screen.getAllByText('Serviço A')).toHaveLength(2); // Desktop and Mobile
    expect(screen.getAllByText('Serviço B')).toHaveLength(2);
    
    // Serviço A: (100 - 20) + 80 / 2 = 80%
    // Serviço B: (100 - 80) + 20 / 2 = 20%
    expect(screen.getAllByText(/80[.,]0%/)).toHaveLength(2);
    expect(screen.getAllByText(/20[.,]0%/)).toHaveLength(2);
  });

  it('deve exibir mensagem quando a lista está vazia', () => {
    render(
      <ServiceList 
        services={[]} 
        onRemove={() => {}} 
        onHover={() => {}} 
        onAddClick={() => {}} 
      />
    );

    expect(screen.getAllByText(/Nenhum serviço cadastrado ainda/i)).toHaveLength(2); // Desktop and Mobile
  });

  it('deve chamar onRemove ao clicar no botão de lixeira', () => {
    const handleRemove = vi.fn();
    render(
      <ServiceList 
        services={[mockServices[0]]} 
        onRemove={handleRemove} 
        onHover={() => {}} 
        onAddClick={() => {}} 
      />
    );

    // Get all trash icons (desktop and mobile)
    const removeButtons = screen.getAllByRole('button').filter(btn => btn.querySelector('svg.lucide-trash-2'));
    fireEvent.click(removeButtons[0]);

    expect(handleRemove).toHaveBeenCalledWith('1');
  });

  it('deve chamar onAddClick ao clicar no botão Novo', () => {
    const handleAddClick = vi.fn();
    render(
      <ServiceList 
        services={[]} 
        onRemove={() => {}} 
        onHover={() => {}} 
        onAddClick={handleAddClick} 
      />
    );

    const addButton = screen.getByRole('button', { name: /novo/i });
    fireEvent.click(addButton);

    expect(handleAddClick).toHaveBeenCalledOnce();
  });
});
