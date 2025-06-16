# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Define o conjunto de caracteres da página, suportando acentuação e símbolos especiais -->
    <meta charset="UTF-8" />
    
    <!-- Define o título exibido na aba do navegador -->
    <title>CSS Grid #02</title>

    <style>
      html,
      body {
        margin: 20px; /* Espaço externo ao redor da página (20px em todos os lados) */
        height: calc(100% - 40px); /* Altura total da janela menos as margens verticais */
        background-color: lightgray; /* Define o fundo da página como cinza claro */
      }

      div {
        display: flex; /* Alinha o conteúdo interno das divs usando Flexbox */
        align-items: center; /* Centraliza verticalmente o conteúdo */
        justify-content: center; /* Centraliza horizontalmente o conteúdo */
        font-size: 30px; /* Define o tamanho da fonte do número dentro das divs */
        border: solid 5px dodgerblue; /* Borda azul ao redor de cada div */
        background: #fff; /* Fundo branco dentro de cada div */
      }

      body {
        display: grid; /* Ativa o sistema de Grid no body */

        /* Define as colunas do grid, incluindo nomes para os pontos de início/fim */
        grid-template-columns:
          [inicio] 1fr                /* Primeira coluna ocupa 1 fração do espaço disponível */
          [metade-1 meio-1] 1fr       /* Segunda coluna com 2 nomes de linha (apelidos) */
          [metade-2 meio-2] 1fr [fim];/* Terceira coluna com nomes de linha e finalização */

        /* Cria 3 linhas com tamanhos iguais (1fr cada) */
        grid-template-rows: repeat(3, 1fr);

        column-gap: 20px; /* Espaço entre colunas */
        row-gap: 20px;    /* Espaço entre linhas */

        gap: 50px 10px; /* Sobrescrito na linha abaixo - seria 50px de linha e 10px de coluna */
        gap: 10px; /* Define um espaçamento único de 10px entre todos os elementos (linhas e colunas) */
        /* ⚠️ A última declaração de "gap" sobrescreve as anteriores */
      }

      .d1 {
        grid-column-start: metade-2; /* Inicia na linha nomeada 'metade-2' */
        grid-column-end: fim; /* Vai até a linha nomeada 'fim' (exclusivo) */

        grid-column: meio-1 / fim; /* Forma abreviada que substitui as duas linhas acima */

        grid-row: 1 / span 2; /* Começa na linha 1 e ocupa 2 linhas (1ª e 2ª) */

        /* Comentário explicando o formato de grid-area */
        /* grid-area: row-start / column-start / row-end / column-end */

        grid-area: 1 / meio-1 / span 3 / fim;
        /* Começa na linha 1, coluna 'meio-1' e vai até a linha 3 (ocupando 3 linhas) e coluna 'fim' */
        /* Essa linha sobrescreve as anteriores (é a forma mais completa) */
      }
    </style>
  </head>

  <body>
    <div class="d1">1</div> <!-- Essa div ocupa múltiplas linhas e colunas, posicionada manualmente -->
    <div class="d2">2</div>
    <div class="d3">3</div>
  </body>
</html>
```

---

# 📘 O que foi aprendido com esse código

### 🎯 **Objetivo do Código**

O propósito deste exercício é entender o **posicionamento de elementos em Grid** utilizando **nomes personalizados nas linhas/colunas** e o uso da **shorthand `grid-area`** para posicionamento mais detalhado.

---

### 🧱 **O que é CSS Grid?**

CSS Grid é um sistema de layout bidimensional que permite organizar os elementos tanto em **linhas quanto colunas**. É ideal para **estruturas complexas**, responsivas e com controle detalhado de posicionamento.

---

### 🧭 **Nomenclatura nas Linhas e Colunas**

Podemos dar **nomes** para marcar pontos específicos nas colunas ou linhas com `[]`:

```css
grid-template-columns: [inicio] 1fr [meio] 1fr [fim];
```

Com isso, podemos usar esses nomes ao invés de números:

```css
grid-column: meio / fim;
```

> Isso ajuda a dar mais **semântica** e **clareza** ao layout, principalmente em projetos maiores.

---

### 🧩 **`grid-area` - Posicionamento completo**

```css
grid-area: 1 / meio-1 / span 3 / fim;
```

Essa propriedade **resume quatro propriedades**:

* `grid-row-start: 1`
* `grid-column-start: meio-1`
* `grid-row-end: span 3`
* `grid-column-end: fim`

> Uma forma mais direta de posicionar os elementos, principalmente quando ocupam várias células.

---

### 🔄 **Prioridade das Propriedades**

Várias propriedades foram testadas, mas só a última de cada grupo é aplicada:

```css
gap: 50px 10px;
gap: 10px;
```

A segunda linha **sobrescreve a anterior**. Isso mostra que o professor queria demonstrar possibilidades diferentes e testar os efeitos visuais.

---

### 🧪 **Resumo do que foi usado**

| Propriedade              | Descrição                                                            |
| ------------------------ | -------------------------------------------------------------------- |
| `display: grid`          | Ativa o sistema de layout Grid no `body`                             |
| `grid-template-columns`  | Define o número de colunas e seus tamanhos, com nomes personalizados |
| `grid-template-rows`     | Define o número de linhas e seus tamanhos                            |
| `gap`                    | Define o espaçamento entre as células (colunas e linhas)             |
| `grid-column`            | Controla onde a célula começa e termina horizontalmente              |
| `grid-row`               | Controla o início e fim vertical da célula                           |
| `grid-area`              | Forma resumida e poderosa de posicionar elementos                    |
| `flex` dentro das `divs` | Usado para centralizar o conteúdo interno dos elementos              |

---

### 💡 **Dica extra**

Você pode visualizar melhor o funcionamento do Grid ativando o **modo de inspeção no navegador** (botão direito → inspecionar elemento). O DevTools mostra as **linhas e áreas do grid**, facilitando o entendimento.
