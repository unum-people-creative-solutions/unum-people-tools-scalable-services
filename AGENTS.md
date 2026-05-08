# Unum People Tools - Guia do Agente

Este arquivo contém as diretrizes fundamentais para o desenvolvimento e manutenção das ferramentas estratégicas da Unum People. **Agente: Leia este arquivo sempre que iniciar uma sessão ou após comandos de compressão de contexto.**

## 🎯 Contexto do Projeto
Este é um ecossistema de ferramentas B2B para análise estratégica. O objetivo é manter ferramentas leves, seguras e focadas em privacidade.

## 🏗️ Arquitetura e Rotas
- `/`: Hub Central de Ferramentas.
- `/portfolio-analises`: Ferramenta de Mapeamento Estratégico (Escalabilidade/Rentabilidade).
- `/simulador-precificacao`: Simulador de Precificação e Margem de Serviços.
- `/calculadora-viabilidade`: Calculadora de Viabilidade de Campanhas (ROI e CAC).
- `/privacidade`: Política de Privacidade e conformidade LGPD.

## 🛠️ Padrões de Desenvolvimento & Segurança
- **Framework**: Next.js (App Router).
- **Estilização**: Tailwind CSS (v4) com variáveis de cor da Unum (`--unum-blue`, etc).
- **Estado**: Preferência por `localStorage` para persistência de dados do usuário (foco em privacidade local).
- **Componentes**: Utilizar `Header` genérico com `toolName` e `Footer` institucional em todas as ferramentas.

### 🛡️ Protocolo de Engenharia Defensiva
- **Investigação Prévia**: Antes de qualquer alteração, investigue dependências e possíveis efeitos colaterais em outras rotas ou componentes compartilhados.
- **Validação de Integridade**: Após cada alteração, é OBRIGATÓRIO executar `npm run lint` e, se necessário, `npm run build` para garantir que a aplicação permanece íntegra.
- **Surgical Updates**: Prefira edições cirúrgicas e localizadas em vez de refatorações globais, a menos que explicitamente solicitado.
- **Verificação Visual**: Sempre valide se os componentes mantêm a estética Unum (espaçamentos, cores e responsividade).

### 📚 Manutenção de Documentação
- **Avaliação Contínua**: Após cada alteração funcional ou arquitetural, avalie se a documentação técnica (README.md, comentários de código) precisa de atualização.
- **Sincronização do AGENTS.md**: É obrigatório manter o arquivo `AGENTS.md` atualizado com novas rotas, padrões ou protocolos definidos durante o desenvolvimento. Nunca deixe a documentação do agente defasada em relação ao código.

## 🛡️ Diretrizes LGPD & Privacidade
- **Privacy by Design**: Dados de ferramentas não devem ser enviados ao servidor sem consentimento explícito. O armazenamento padrão é local.
- **Transparência**: Sempre incluir o `CookieBanner` no `layout.tsx` e link para `/privacidade` no rodapé.

## 🧠 Persistência de Contexto (Context Anchor)
- **Recuperação**: Se você sentir perda de contexto ou após um comando `/compress`, execute imediatamente `cat AGENTS.md` para se reorientar.
- **Busca Inicial**: Sempre verifique a existência de `AGENTS.md` na raiz ao iniciar para carregar as regras específicas deste repositório.

## 📝 Comandos Úteis
- `npm run dev`: Ambiente de desenvolvimento.
- `npm run lint`: Verificação de padrões e erros.
- `npm run build`: Build de produção.
