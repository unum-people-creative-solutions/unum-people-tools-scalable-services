# Instruções de Projeto (Project Instructions)

Estas diretrizes são fundamentais para o funcionamento do Gemini CLI neste repositório.

## 🔄 Persistência e Reorientação
- **Sempre** leia o arquivo `AGENTS.md` na raiz do projeto ao iniciar uma nova sessão.
- **Após qualquer compressão de contexto** (`/compress`), o primeiro passo deve ser a leitura do `AGENTS.md` para recuperar as diretrizes de design e arquitetura da Unum People.

## 📐 Padrões de Código
- Siga rigorosamente as definições de cores e componentes descritas no `AGENTS.md`.
- Mantenha a separação de rotas por ferramenta dentro de `src/app/`.

## 🛡️ Segurança e Privacidade
- Nunca remova o banner de cookies ou a página de privacidade sem instrução explícita.
- Priorize `localStorage` para novos recursos de ferramentas.
