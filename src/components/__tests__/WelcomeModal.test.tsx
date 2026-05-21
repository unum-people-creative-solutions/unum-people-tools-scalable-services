import { render, screen, fireEvent } from '@testing-library/react';
import { WelcomeModal } from '../WelcomeModal';
import { describe, it, expect, vi } from 'vitest';

describe('WelcomeModal', () => {
  it('deve aparecer quando isOpen é true', () => {
    render(<WelcomeModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByText(/Guia Estratégico/i)).toBeInTheDocument();
  });

  it('não deve aparecer se isOpen é false', () => {
    render(<WelcomeModal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByText(/Guia Estratégico/i)).not.toBeInTheDocument();
  });

  it('deve chamar onClose ao clicar no botão de prosseguir', () => {
    const handleClose = vi.fn();
    render(<WelcomeModal isOpen={true} onClose={handleClose} />);
    
    const closeButton = screen.getByRole('button', { name: /entendi, prosseguir/i });
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledOnce();
  });

  it('deve chamar onClose ao clicar no botão de fechar (X)', () => {
    const handleClose = vi.fn();
    render(<WelcomeModal isOpen={true} onClose={handleClose} />);
    
    const xButton = screen.getByRole('button', { name: /fechar/i }); // Assuming Lucide X component or button has aria-label/text
    // The component has: <button onClick={onClose} ...><X size={24} /></button>
    // Let's check if we need to add aria-label or use query by SVG/container.
    // Actually, I'll update the component to have an aria-label for better testability if it doesn't.
    // Wait, I saw "absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors" in the code.
    // It doesn't have an aria-label.
    fireEvent.click(xButton);
    expect(handleClose).toHaveBeenCalledOnce();
  });
});
