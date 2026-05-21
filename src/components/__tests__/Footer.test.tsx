import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';
import { describe, it, expect, vi } from 'vitest';

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

describe('Footer', () => {
  it('deve renderizar o texto de direitos autorais', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Unum People/i)).toBeInTheDocument();
  });

  it('deve conter links para a Unum People', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    const unumLink = links.find(link => link.getAttribute('href') === 'https://unumpeople.com.br/');
    expect(unumLink).toBeDefined();
  });
});
