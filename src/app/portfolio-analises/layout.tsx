import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Análise de Portfólio e Escalabilidade de Serviços',
  description: 'Mapeamento estratégico para identificar serviços com maior potencial de escala e rentabilidade no seu negócio.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
