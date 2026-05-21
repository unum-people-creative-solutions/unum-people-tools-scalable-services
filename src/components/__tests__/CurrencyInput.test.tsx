import { render, screen, fireEvent } from '@testing-library/react';
import { CurrencyInput } from '../CurrencyInput';
import { describe, it, expect, vi } from 'vitest';

describe('CurrencyInput', () => {
  it('deve renderizar o label e o prefixo corretamente', () => {
    render(<CurrencyInput label="Preço" value={0} onChange={() => {}} />);
    expect(screen.getByText(/Preço/i)).toBeInTheDocument();
    expect(screen.getByText(/R\$/i)).toBeInTheDocument();
  });

  it('deve formatar o valor inicial corretamente', () => {
    render(<CurrencyInput value={1234.56} onChange={() => {}} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('1.234,56');
  });

  it('deve chamar onChange com o número correto ao digitar', () => {
    const handleChange = vi.fn();
    render(<CurrencyInput value={0} onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '100,50' } });

    expect(handleChange).toHaveBeenCalledWith(100.5);
  });
});
