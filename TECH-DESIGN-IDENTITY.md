# TECH-DESIGN-IDENTITY: Atualização da Identidade Visual (Unum People)

## 1. Objetivo
Migrar a identidade visual da aplicação web para o novo manual da marca Unum People (P2P), atualizando cores, tipografia (Poppins) e assets gráficos, e garantindo que os componentes do Tailwind CSS reflitam essas mudanças.

## 2. Contexto e Arquivos Afetados
*   **Assets:** `identity_temp/` -> `public/images/` e `src/app/icon.png`
*   **Tipografia e Metadados:** `src/app/layout.tsx`
*   **Variáveis e Estilos Globais:** `src/app/globals.css`
*   **Componentes (para refatoração de classes utilitárias):** 
    *   `src/app/layout.tsx` (ex: bg-gray-50)
    *   `src/components/Header.tsx`, `Footer.tsx`, etc.
    *   `src/app/page.tsx` e Views específicas.

## 3. Passos de Implementação

### Passo 3.1: Assets Gráficos
Substituir os arquivos de imagem antigos pelos novos presentes em `identity_temp/`:
1.  Copiar `identity_temp/nova_logo_simbolo.png` para `public/images/logo_simbolo.png`
2.  Copiar `identity_temp/nova_logo_texto.png` para `public/images/logo_texto.png`
3.  Copiar `identity_temp/nova_logo_simbolo.png` para `src/app/icon.png` (usado como favicon)

### Passo 3.2: Tipografia (Next.js Fonts)
Modificar `src/app/layout.tsx` para importar e utilizar a fonte **Poppins**:
*   Remover importação do `Inter`.
*   Adicionar importação do `Poppins` com os pesos adequados (400, 700).
*   Atualizar a variável `--font-poppins` no HTML e no Tailwind (`src/app/globals.css`).

### Passo 3.3: Cores Globais (Tailwind CSS)
Atualizar o arquivo `src/app/globals.css` para definir a nova paleta de cores no `:root` e na diretiva `@theme`:
*   `--color-brand-blue: #0047FF;` (Azul Tecnologia)
*   `--color-brand-purple: #8F00FF;` (Roxo Conexão)
*   `--color-brand-orange: #FF5C00;` (Laranja Humano)
*   `--color-brand-dark: #14142B;` (Unum Dark Blue)
*   `--color-brand-grey: #6E7191;` (Support Grey)
*   `--color-brand-white: #FFFFFF;` (Absolute White)

### Passo 3.4: Refatoração de Componentes
*   Mapear o uso de cores antigas (ex: `text-unum-blue`, `bg-unum-slate`, etc.) e substituí-las pelas novas variáveis de marca.
*   Garantir o contraste correto, utilizando preferencialmente `text-brand-dark` para conteúdos e `bg-brand-blue` para ações principais.
*   O agente QA criará/atualizará os testes necessários caso algum assert verifique as classes CSS.

## 4. Verificação e Testes
*   Rodar `npm run dev` para garantir que o Next.js carrega a fonte corretamente.
*   Executar `npm run test` (Vitest) e verificar se nenhuma suite falha devido a alterações em componentes e estilos de UI.
