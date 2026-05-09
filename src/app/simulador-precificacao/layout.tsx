import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simulador de Precificação | Unum People',
  description: 'Calcule o ponto de equilíbrio e margem de lucro de seus serviços.',
};

export default function PrecificacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
