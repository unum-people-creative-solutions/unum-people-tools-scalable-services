import { render, screen } from '@testing-library/react';
import { AdUnit } from '../AdUnit';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('AdUnit', () => {
  beforeEach(() => {
    // Limpa o window.adsbygoogle antes de cada teste
    (window as any).adsbygoogle = [];
    vi.clearAllMocks();
  });

  it('deve renderizar um placeholder em ambiente de desenvolvimento', () => {
    // Simulando ambiente de desenvolvimento
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    render(<AdUnit slot="123456" />);
    expect(screen.getByText(/Google AdSense Placeholder/i)).toBeInTheDocument();
    expect(screen.getByText(/Slot: 123456/i)).toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });

  it('deve renderizar a tag "ins" em produção se o slot for fornecido', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    const { container } = render(<AdUnit slot="789012" />);
    const insElement = container.querySelector('ins.adsbygoogle');
    
    expect(insElement).toBeInTheDocument();
    expect(insElement).toHaveAttribute('data-ad-slot', '789012');

    process.env.NODE_ENV = originalEnv;
  });

  it('NÃO deve chamar adsbygoogle.push em ambiente de desenvolvimento', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    
    const pushSpy = vi.spyOn((window as any).adsbygoogle, 'push');

    render(<AdUnit slot="123456" />);
    expect(pushSpy).not.toHaveBeenCalled();

    process.env.NODE_ENV = originalEnv;
  });

  it('deve chamar adsbygoogle.push exatamente uma vez por instância em produção', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';
    
    const pushSpy = vi.spyOn((window as any).adsbygoogle, 'push');

    const { rerender } = render(<AdUnit slot="789012" />);
    expect(pushSpy).toHaveBeenCalledTimes(1);

    // Re-renderizar não deve disparar outro push devido ao adRef
    rerender(<AdUnit slot="789012" />);
    expect(pushSpy).toHaveBeenCalledTimes(1);

    process.env.NODE_ENV = originalEnv;
  });

  it('deve renderizar placeholder se nenhum slot for fornecido, mesmo em produção', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    render(<AdUnit />);
    expect(screen.getByText(/Nenhum slot configurado/i)).toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });

  it('deve lidar com erros no adsbygoogle.push sem quebrar a aplicação', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';
    
    const pushSpy = vi.spyOn((window as any).adsbygoogle, 'push').mockImplementation(() => {
      throw new Error("All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.");
    });
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(<AdUnit slot="789012" />);
    
    expect(pushSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('AdSense initialization error'), expect.any(Error));

    process.env.NODE_ENV = originalEnv;
    pushSpy.mockRestore();
    consoleSpy.mockRestore();
  });
});
