import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculadora de Viabilidade | Unum People',
  description: 'Calcule ROI e CAC para validar a viabilidade de suas campanhas.',
};

export default function ViabilidadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
