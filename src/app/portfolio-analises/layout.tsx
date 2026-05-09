import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mapeamento de Portfólio | Unum People',
  description: 'Análise estratégica de escalabilidade e rentabilidade de serviços.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
