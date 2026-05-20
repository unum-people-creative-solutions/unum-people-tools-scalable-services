# Spec: Pricing Simulator Currency Formatting (BRL)

## Goal
Implement Brazilian currency formatting (BRL) for all monetary input fields in the Pricing Simulator tool to improve user experience and ensure data consistency.

## Requirements
- [REQ-01] Replace standard `input type="number"` with a masked currency input for monetary fields.
- [REQ-02] Use the `react-number-format` library for consistent and reliable formatting.
- [REQ-03] Pattern: `R$ 1.234,56`.
- [REQ-04] Input should handle raw numeric values for state updates while displaying formatted text.
- [REQ-05] Apply to the following fields:
  - Custos Fixos: Aluguel, Energia, Internet, Contador, Softwares, Equipe, Pró-labore.
  - Parâmetros do Serviço: Materiais Diretos, Deslocamento / Extras.
  - Resultados: Preço Desejado.

## Traceability
- Feature ID: `pricing-currency-formatting`
- Requirements: `REQ-01` to `REQ-05`
