# Tasks: Pricing Simulator Currency Formatting

## Implementation Plan
1. [x] Create a reusable `CurrencyInput` component using `react-number-format`. [ID: T1]
2. [x] Update `PrecificacaoPage` to use the new `CurrencyInput` for all monetary fields. [ID: T2]
3. [x] Verify that state updates correctly with numeric values. [ID: T3]
4. [x] Run `npm run lint` and verify visual consistency. [ID: T4]

## Detailed Tasks
- **T1**: Create `src/components/CurrencyInput.tsx`.
  - Done when: Component accepts `value`, `onChange`, `label`, and other standard input props.
  - Tests: Verify formatting on change.
- **T2**: Modify `src/app/simulador-precificacao/page.tsx`.
  - Replace monetary inputs with `CurrencyInput`.
- **T3**: Manual verification in dev mode.
- **T4**: Quality gate check.
