# Painel de Incentivos — Fibratur

Painel estático em HTML, CSS e JavaScript, sem dependências externas. Abra `index.html` em um navegador moderno.

## Escopo dos dados

- Período: 01/01/2026 a 13/10/2026, inclusive.
- Parceiros: LATAM, GOL, Azul e EHTL.
- Vendas: soma de `Vlr. Venda`, excluindo produtos identificados como incentivo.
- Incentivos recebidos: soma de `Mrg. Lucro` para produtos relacionados a incentivo, over, bônus ou premiação.
- Filtros: segmento e parceiro. O clique em gráficos e linhas seleciona o mesmo parceiro em todo o painel.
- Exportação: os botões com o ícone do Excel geram CSV UTF-8 separado por ponto e vírgula, compatível com Excel em pt-BR.

## Padronização do MVP

- Meta: maior meta documentada para LATAM e EHTL.
- Sem meta fixa: GOL e Azul usam projeção anual pelo ritmo observado em 286 dias: `vendas × 365 ÷ 286`.
- Taxa efetiva: `taxa máxima × mínimo(vendas ÷ meta; 100%)`.
- Valor atual a receber: `vendas × taxa efetiva`.
- LATAM: teto doméstico de 10% (2% fixo + até 8% variável).
- GOL e Azul: 2% fixo.
- EHTL: teto de 1%.

As premissas aparecem também no rodapé do painel. Elas são uma padronização analítica para o MVP e não substituem o demonstrativo oficial de cada parceiro.

## Estrutura

```text
DashBoard/
├── index.html
├── README.md
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
├── css/
│   ├── style.css
│   └── components/
└── js/
    ├── data.js
    ├── format.js
    ├── export.js
    ├── charts.js
    └── main.js
```
