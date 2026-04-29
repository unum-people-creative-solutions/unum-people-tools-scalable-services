import { Service } from '../types';

export function exportToCSV(services: Service[]) {
  const calculateAtratividade = (s: Service) => {
    const operacao = (s.esforco + s.complexidade) / 2;
    const decisao = (s.padronizacao + s.lucratividade) / 2;
    return ((100 - operacao) + decisao) / 2;
  };

  const headers = [
    'Nome do Serviço',
    'Score de Atratividade (%)',
    'Média Operação (%)',
    'Média Decisão (%)',
    'Esforço (%)',
    'Complexidade (%)',
    'Padronização (%)',
    'Lucratividade (%)'
  ];

  const rows = services
    .map(s => {
      const operacao = (s.esforco + s.complexidade) / 2;
      const decisao = (s.padronizacao + s.lucratividade) / 2;
      const score = calculateAtratividade(s);

      return [
        s.nome,
        score.toFixed(2),
        operacao.toFixed(2),
        decisao.toFixed(2),
        s.esforco.toFixed(2),
        s.complexidade.toFixed(2),
        s.padronizacao.toFixed(2),
        s.lucratividade.toFixed(2),
      ];
    })
    .sort((a, b) => parseFloat(b[1]) - parseFloat(a[1])); // Sort by Score in CSV too

  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.map(value => `"${value}"`).join(',')),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `ranking_atratividade_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
