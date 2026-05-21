# Agent Rules & Harness

## 🚀 Workflow: TLC-Spec-Driven
Every modification MUST follow the adaptive TLC-Spec-Driven pipeline:
1. **SPECIFY**: Define requirements and traceable IDs in `.specs/features/[feature]/spec.md`.
2. **DESIGN**: (If Medium/Large) Architecture and components in `.specs/features/[feature]/design.md`.
3. **TASKS**: (If Large/Complex) Atomic task breakdown in `.specs/features/[feature]/tasks.md`.
4. **EXECUTE**: Implementation with gate-checked verification.

## 🛡️ Core Mandates
- **Privacy by Design**: Never store tool data on servers. Use `localStorage`.
- **Integrity**: Always run `npm run lint` before completing a task.
- **Documentation**: Keep `.specs/` and `AGENTS.md` in sync with codebase changes.
- **Safety**: No `git` operations without explicit user authorization.

## 📐 Project Conventions
- Siga rigorosamente a paleta de cores Unum People.
- Use `lucide-react` para ícones.
- Mantenha a separação de responsabilidades: Hooks para lógica, Components para UI, App para rotas.

## 🧠 Memory & Context
- Se houver perda de contexto ou após `/compress`, leia `AGENTS.md` e `rules.md`.
- Verifique `.specs/codebase/` para entender padrões existentes antes de propor novos.

## ✅ Definition of Done
- Requirements implemented as specified.
- Linting and build pass.
- All tests passing (Vitest/Jest).
- Verification logic (tests or manual check steps) executed and successful.
- Documentation updated.
