# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define o conjunto de caracteres usados na página (UTF-8 suporta acentuação e símbolos especiais) -->
    <meta charset="UTF-8" />

    <!-- Título da aba do navegador -->
    <title>CSS Grid #01</title>

    <style>
        /* Site de referência para verificar compatibilidade do CSS Grid nos navegadores */
        /* https://caniuse.com/#feat=css-grid */

        html,
        body {
            margin: 20px; /* Espaçamento externo ao redor da página */
            height: calc(100% - 40px); /* Altura total da janela menos 40px (20px de margem em cima e embaixo) */
            background-color: lightgray; /* Cor de fundo cinza claro */
        }

        div {
            display: flex; /* Os elementos filhos das divs são centralizados com Flexbox */
            align-items: center; /* Alinha verticalmente os conteúdos no centro */
            justify-content: center; /* Alinha horizontalmente os conteúdos no centro */
            font-size: 30px; /* Tamanho da fonte do conteúdo */
            border: solid 5px dodgerblue; /* Borda azul ao redor de cada div */
            background: #fff; /* Fundo branco dentro das divs */
        }

        body {
            display: grid; /* Ativa o layout de Grid no elemento <body> */

            /* As linhas abaixo testam diferentes formatos de grid-template-columns.
               Cada uma sobrescreve a anterior, sendo a última a que realmente será aplicada. */

            grid-template-columns: 50% 50%;
            grid-template-columns: repeat(4, 8.33% 8.33% 8.33%);
            grid-template-columns: repeat(12, 8.33%);
            grid-template-columns: repeat(11, 100px) 100px;
            /* grid-template-columns: minmax(100px, 300px); */ /* Exemplo comentado: coluna com tamanho mínimo e máximo */
            grid-template-columns: 200px 20% 1fr; /* Exemplo com 3 colunas de larguras diferentes */
            grid-template-columns: 3fr 6fr 3fr; /* Colunas com larguras proporcionais */

            /* Abaixo as mesmas sobreposições ocorrem para as linhas do grid */
            grid-template-rows: 50% 25% 12.5% 12.5%;
            grid-template-rows: 100px 1fr; /* Segunda linha ocupa o restante */
            grid-template-rows: 100px auto; /* Segunda linha cresce de acordo com o conteúdo */
        }

        .d8 {
            grid-column-start: 2; /* Começa na segunda coluna */
            grid-column-end: 4; /* Termina na quarta coluna (não incluso) */
            grid-column-end: span 2; /* Alternativa: ocupa 2 colunas a partir do início */

            grid-row-start: 3; /* Começa na terceira linha */
            grid-row-end: 5; /* Termina na quinta linha (não incluso) */
            grid-row-end: span 2; /* Alternativa: ocupa 2 linhas a partir do início */
        }

        .d10,
        .d11 {
            /* Ambas vão ocupar as mesmas áreas e podem se sobrepor */
            grid-column-start: 1; /* Começa na primeira coluna */
            grid-column-end: 3; /* Vai até a terceira coluna */
            grid-row-start: 5; /* Começa na quinta linha */
            grid-row-end: span 1; /* Ocupa apenas uma linha */
        }

        .d10 {
            z-index: 10; /* Eleva o nível da camada para sobrepor a .d11 */
        }
    </style>
</head>

<body>
    <!-- Cada div representa uma célula no grid -->
    <div class="d1">1</div>
    <div class="d2">2</div>
    <div class="d3">3</div>
    <div class="d4">4</div>
    <div class="d5">5</div>
    <div class="d6">6</div>
    <div class="d7">7</div>
    <div class="d8">8</div> <!-- Essa div ocupa mais de uma célula -->
    <div class="d9">9</div>
    <div class="d10">10</div> <!-- Sobrepõe visualmente a d11 por causa do z-index -->
    <div class="d11">11</div>
    <div class="d12">12</div>
</body>

</html>
```

---

# 📘 O que foi aprendido com esse código

### 🎯 **Objetivo do Código**

Este exercício tem como foco **aprender os fundamentos do layout CSS Grid**, testando diferentes configurações de colunas, linhas e posicionamento dos elementos no grid.

---

### 🧱 **O que é CSS Grid?**

CSS Grid é um sistema de layout **bidimensional** que permite organizar elementos em **linhas e colunas**, sendo ideal para **layouts complexos** e responsivos. Ele dá um controle mais preciso do posicionamento em relação ao Flexbox (que é unidimensional).

---

### 🔧 **Propriedades Utilizadas**

#### `display: grid;`

Ativa o comportamento de Grid no elemento. Os filhos diretos passam a ser **itens do grid**.

---

#### `grid-template-columns` e `grid-template-rows`

Define como as **colunas** e **linhas** do grid serão distribuídas:

* `50% 50%`: 2 colunas, cada uma com metade da largura.
* `repeat(12, 8.33%)`: Cria 12 colunas com aproximadamente 1/12 da largura cada.
* `repeat(11, 100px) 100px`: Cria 12 colunas com 100px fixos.
* `3fr 6fr 3fr`: Distribui espaço proporcionalmente entre colunas (3 partes, 6 partes, 3 partes).
* `100px auto`: Primeira linha com 100px e a segunda cresce conforme o conteúdo.

> ⚠️ Assim como no Flexbox, **apenas a última linha dessas propriedades é aplicada**. As anteriores ficam sobrescritas (eram testes na aula).

---

#### `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end`

Permite posicionar e **estender** elementos do grid manualmente:

* `grid-column-start: 2;` → começa na segunda coluna.
* `grid-column-end: 4;` → vai até a quarta coluna.
* `grid-column-end: span 2;` → ocupa 2 colunas a partir do início.
* O mesmo vale para as linhas (`grid-row-*`).

---

#### `z-index`

Define a **ordem de sobreposição** dos elementos. Um número maior fica “por cima” dos outros.

> A div `.d10` tem `z-index: 10`, então ela aparece por cima da `.d11` mesmo que ocupem o mesmo espaço.

---

### 🔁 **Comportamentos Interessantes**

* O **uso de várias linhas repetidas** para `grid-template-columns` e `rows` simula os testes feitos durante a aula. A ideia é experimentar e **ver visualmente o impacto** das mudanças.
* Os itens `.d8`, `.d10`, `.d11` mostram como **itens do grid podem ocupar múltiplas células**, e como podem **se sobrepor** se necessário.

---

### 🧪 **Resumo Geral**

| Conceito          | Aprendido                                                     |
| ----------------- | ------------------------------------------------------------- |
| `display: grid`   | Ativa o sistema de layout Grid                                |
| `grid-template`   | Define as colunas e linhas (tamanhos, proporções, repetições) |
| `grid-column/row` | Controla a posição e o tamanho dos itens no grid              |
| `z-index`         | Controla qual item aparece por cima quando há sobreposição    |
| `repeat()`        | Função para repetir valores em `grid-template`                |
| `fr`              | Unidade fracionária para dividir espaço proporcionalmente     |