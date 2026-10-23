# Painel de Incentivos — Fibratur

Painel estático em HTML, CSS e JavaScript, sem dependências externas. Abra `index.html` em um navegador moderno.

## Escopo dos dados

- Corte da base: 13/10/2026.
- LATAM: meta de 01/10/2026 a 31/10/2026, com realizado disponível até 13/10.
- EHTL: meta de 01/07/2026 a 30/09/2026.
- Azul e GOL: projeção anual de 01/01/2026 a 31/12/2026, com realizado disponível até 13/10.
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

Essa padronização analítica é usada apenas no MVP e não substitui o demonstrativo oficial de cada parceiro.

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
