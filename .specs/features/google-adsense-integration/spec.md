# Spec: Integração Google AdSense

## Objetivo
Implementar a infraestrutura e os componentes necessários para exibir anúncios do Google AdSense no site, seguindo uma estratégia conservadora que prioriza a experiência do usuário (UX).

## Requisitos de Negócio (REQ)
- **REQ-1**: O site deve ser verificado pelo AdSense através de meta-tags e arquivo `ads.txt`.
- **REQ-2**: Os anúncios devem ser posicionados de forma a não interromper o fluxo de uso das calculadoras.
- **REQ-3**: A implementação deve utilizar blocos de anúncios manuais (Placeholders) em vez de anúncios automáticos.

## Especificações Técnicas (TECH)
- **TECH-1**: Inserir o script global do AdSense no `layout.tsx` usando `next/script` com estratégia `afterInteractive`.
- **TECH-2**: Criar um arquivo estático `public/ads.txt`.
- **TECH-3**: Criar um componente React `AdUnit` para encapsular a lógica de inicialização de anúncios individuais.
- **TECH-4**: O componente `AdUnit` deve lidar com a inicialização do `adsbygoogle` apenas no lado do cliente.
- **TECH-5**: Adicionar placeholders visuais em ambiente de desenvolvimento ou quando o slot não estiver preenchido para facilitar o layout.

## Dados do AdSense (Contexto)
- **Client ID**: `ca-pub-7103356380607005`
- **Ads.txt Content**: `google.com, pub-7103356380607005, DIRECT, f08c47fec0942fa0`
- **Account Meta**: `ca-pub-7103356380607005`

## Critérios de Aceitação (AC)
- [ ] O arquivo `/ads.txt` está disponível publicamente.
- [ ] O console do navegador não apresenta erros de inicialização do AdSense.
- [ ] O layout das ferramentas permanece utilizável em mobile e desktop.
- [ ] Os anúncios (ou placeholders) aparecem nos locais definidos: Topo e Rodapé das páginas principais.
