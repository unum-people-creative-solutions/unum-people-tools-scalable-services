# Design: Integração Google AdSense

## Componente `AdUnit`

O componente deve ser resiliente a renderização no lado do servidor (SSR) e evitar erros quando o script do AdSense ainda não foi carregado.

### Interface (Props)
```typescript
interface AdUnitProps {
  slot?: string; // ID do bloco (opcional por enquanto para permitir placeholders)
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
  className?: string;
}
```

### Comportamento
1. Renderiza uma tag `<ins>` com a classe `adsbygoogle`.
2. No `useEffect`, verifica se o script já carregou e executa o `push`.
3. Em ambiente de desenvolvimento, exibe uma borda e etiqueta "AD PLACEHOLDER" para visualização.

## Estratégia de Layout

### Zonas de Anúncio (Ad Zones)
Para seguir a abordagem conservadora:

- **Zone A (Topo)**: Logo abaixo do `Header`, dentro do contêiner `main`, centralizado.
- **Zone B (Rodapé)**: Logo acima do `Footer`, fora do fluxo principal de ferramentas.

### Mapeamento de Arquivos
- `src/components/AdUnit.tsx`: Implementação do componente.
- `src/app/page.tsx`: 1x Zone A, 1x Zone B.
- `src/app/calculadora-viabilidade/page.tsx`: 1x Zone A, 1x Zone B.
- `src/app/simulador-precificacao/page.tsx`: 1x Zone A, 1x Zone B.

## Considerações de Estilo
- Usar Tailwind para garantir que o contêiner do anúncio tenha uma altura mínima (min-height) para evitar saltos de layout (Layout Shift) quando o anúncio carregar.
- Recomendado: `min-h-[100px]` ou `min-h-[250px]` dependendo do formato esperado.
