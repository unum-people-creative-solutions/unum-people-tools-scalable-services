# Tasks: Integração Google AdSense

## Setup Inicial [P]
- [ ] **TASK-1**: Criar o arquivo `public/ads.txt` com o conteúdo fornecido.
  - **Verification**: Acessar `http://localhost:3000/ads.txt` após rodar o dev server.
- [ ] **TASK-2**: Atualizar `src/app/layout.tsx` para incluir o script do AdSense e a meta tag de verificação da conta.
  - **Verification**: Inspecionar o `<head>` no navegador e encontrar o script e a meta tag.

## Desenvolvimento de Componentes [P]
- [ ] **TASK-3**: Implementar o componente `src/components/AdUnit.tsx`.
  - **Verification**: O componente deve renderizar um placeholder visível em modo dev.

## Implementação de Layout (Páginas)
- [ ] **TASK-4**: Adicionar blocos de anúncio na Home (`src/app/page.tsx`).
  - **Verification**: Verificar visualmente os placeholders no topo e fundo da home.
- [ ] **TASK-5**: Adicionar blocos de anúncio na Calculadora de Viabilidade (`src/app/calculadora-viabilidade/page.tsx`).
  - **Verification**: Verificar visualmente os placeholders nas zonas A e B.
- [ ] **TASK-6**: Adicionar blocos de anúncio no Simulador de Precificação (`src/app/simulador-precificacao/page.tsx`).
  - **Verification**: Verificar visualmente os placeholders nas zonas A e B.

## Validação Final
- [ ] **TASK-7**: Testar responsividade e garantir que não há erros de console.
  - **Verification**: Abrir as ferramentas em mobile, verificar se os anúncios (placeholders) não quebram o fluxo lateral.
