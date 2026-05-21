import PrecificacaoView from './PrecificacaoView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simulador de Precificação e Margem de Lucro',
  description: 'Calcule o lucro real de seus serviços considerando custos fixos, variáveis, impostos e margem líquida.',
};

export default function Page() {
  return <PrecificacaoView />;
}
