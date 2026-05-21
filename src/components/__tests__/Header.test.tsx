import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../Header';
import { describe, it, expect, vi } from 'vitest';

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

describe('Header', () => {
  it('deve renderizar o nome da ferramenta se fornecido', () => {
    render(<Header toolName="Teste Tool" />);
    expect(screen.getByText('Teste Tool')).toBeInTheDocument();
  });

  it('deve chamar onOpenHelp quando o botão de ajuda for clicado', () => {
    const onOpenHelp = vi.fn();
    render(<Header onOpenHelp={onOpenHelp} />);
    
    const helpButton = screen.getByRole('button', { name: /ajuda/i });
    fireEvent.click(helpButton);
    
    expect(onOpenHelp).toHaveBeenCalledTimes(1);
  });
});
