# Unum People Tools - Guia do Agente (TLC-Spec-Driven)

Este arquivo orienta os agentes sobre como operar neste repositório.

## 🔄 Fluxo de Trabalho Obrigatório
Este repositório utiliza rigorosamente o fluxo **TLC-Spec-Driven**.

1. **Ative a Skill**: `activate_skill(name='tlc-spec-driven')`
2. **Consulte as Regras**: Leia sempre `rules.md` na raiz.
3. **Mapeamento do Código**: Consulte `.specs/codebase/` para padrões técnicos e `baseline_tools_spec.md` para o stack.
4. **Implementação**: Siga o ciclo `SPECIFY` -> `DESIGN` -> `TASKS` -> `EXECUTE`.

## 🛠️ Ferramentas e Padrões
- **Stack**: Next.js 16, Tailwind v4, TypeScript.
- **Privacidade**: `localStorage` apenas. Nunca envie dados sensíveis para APIs externas.
- **Consistência**: Use os componentes `Header`, `Footer` e `CookieBanner`.

## 📚 Documentação
- Mantenha a pasta `.specs/` sempre atualizada.
- Registre decisões e bloqueios no `.specs/project/STATE.md`.
