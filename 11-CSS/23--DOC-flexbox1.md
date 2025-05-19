# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Define o tipo de codificação dos caracteres (acentuação e símbolos especiais) -->
    <meta charset="UTF-8" />

    <!-- Título da aba do navegador -->
    <title>Flexbox #01</title>

    <!-- Importa um arquivo CSS externo com estilos reutilizáveis -->
    <link rel="stylesheet" href="css/tag.css" />

    <style>
      /* Estilo para todas as <div> padrão da página */
      div {
        border: solid 5px dodgerblue; /* Borda azul em volta das divs */
        font-size: 40px; /* Tamanho grande da fonte */
        margin: 5px; /* Espaçamento externo entre os elementos */
      }

      /* Classe que aumenta o tamanho da fonte em relação ao padrão */
      .big {
        font-size: 1.5em; /* 1.5x o tamanho base do elemento pai */
      }

      /* Container flexível com várias propriedades sendo testadas */
      .flex-container {
        display: flex; /* Ativa o Flexbox no container */

        /* Direção dos itens - última instrução sobrescreve as anteriores */
        flex-direction: column;
        flex-direction: column-reverse;
        flex-direction: row-reverse;
        flex-direction: row;

        width: 50%; /* Define a largura do container */

        /* Permite que os itens quebrem de linha se não couberem */
        flex-wrap: wrap;
        flex-wrap: wrap-reverse;

        /* Shorthand para flex-direction e flex-wrap juntos */
        flex-flow: row wrap;
        height: 200px; /* Altura inicial do container */
        flex-flow: column-reverse wrap;
        flex-flow: row wrap; /* Valor final usado pelo navegador */

        /* Justifica os itens no eixo principal (horizontal) */
        justify-content: flex-start;
        justify-content: flex-end;
        justify-content: center;
        justify-content: space-around;
        flex-direction: row-reverse; /* Reinserido após justify-content */
        justify-content: space-between; /* Valor final que será aplicado */

        /* CROSS AXIS = eixo perpendicular ao principal */
        height: 400px; /* Sobrescreve altura anterior */

        /* Alinha os itens no eixo cruzado (vertical) */
        align-items: stretch; /* Valor padrão - itens esticam na altura */
        align-items: baseline;
        align-items: flex-start;
        align-items: flex-end;
        align-items: center; /* Valor final aplicado */

        /* Quando há quebra de linha, define o alinhamento entre as linhas */
        align-content: flex-start;
        align-content: flex-end;
        align-content: center;
        align-content: space-around;
        align-content: space-between; /* Valor final aplicado */
      }
    </style>
  </head>

  <body>
    <!-- Container principal com classe de flex e estilos visuais -->
    <div class="flex-container tag nolabel">
      <!-- Cada div representa um item dentro do container flex -->
      <div class="tag nolabel">1</div>
      <div class="tag nolabel">2</div>
      <div class="tag nolabel big">3</div> <!-- Fonte maior por causa da classe "big" -->
      <div class="tag nolabel">4</div>
      <div class="tag nolabel">5</div>
      <div class="tag nolabel">6</div>
      <div class="tag nolabel">7</div>
      <div class="tag nolabel">8</div>
      <div class="tag nolabel">9</div>
      <div class="tag nolabel">10</div>
    </div>

    <!-- Importa um script JS externo (possivelmente para estilizar os números das tags) -->
    <script src="js/tag.js"></script>
  </body>
</html>
```

---

Agora vamos para a explicação do que foi aprendido nesse código.

---

# 📘 O que foi aprendido com esse código

### 🎯 **Objetivo do Código**

Este exercício foi feito para **praticar e visualizar como o Flexbox funciona no CSS**. Nele, testamos propriedades de layout como:

* Direção dos itens (`flex-direction`)
* Quebra de linha (`flex-wrap`)
* Posicionamento dos itens (`justify-content`, `align-items`, `align-content`)

---

### 🧱 **O que é Flexbox?**

Flexbox é um modelo de layout CSS que facilita a criação de estruturas **flexíveis e responsivas**. Ele distribui os elementos em linha ou coluna com muito mais controle do que o modelo tradicional com `float` ou `inline-block`.

---

### 🔧 **Propriedades Utilizadas**

#### `display: flex;`

Ativa o modelo Flexbox no container. Todos os filhos diretos passam a ser *itens flexíveis*.

---

#### `flex-direction`

Define **em que direção** os itens serão organizados no container:

| Valor            | Efeito                          |
| ---------------- | ------------------------------- |
| `row`            | Horizontal (esquerda → direita) |
| `row-reverse`    | Horizontal (direita → esquerda) |
| `column`         | Vertical (cima → baixo)         |
| `column-reverse` | Vertical (baixo → cima)         |

> ⚠️ No código, várias direções foram testadas, mas **a última vale**: `row-reverse`, depois substituída por `row`.

---

#### `flex-wrap`

Define se os itens **quebram para a próxima linha**:

| Valor          | Efeito                         |
| -------------- | ------------------------------ |
| `nowrap`       | Tudo em uma linha só (padrão)  |
| `wrap`         | Permite quebra para nova linha |
| `wrap-reverse` | Quebra em ordem invertida      |

---

#### `flex-flow`

É uma **shorthand** (atalho) que combina `flex-direction` e `flex-wrap`:

```css
flex-flow: row wrap;
/* equivale a:
   flex-direction: row;
   flex-wrap: wrap;
*/
```

---

#### `justify-content`

Controla o **alinhamento dos itens no eixo principal** (horizontal quando `flex-direction: row`):

| Valor           | Descrição                        |
| --------------- | -------------------------------- |
| `flex-start`    | Alinha à esquerda                |
| `flex-end`      | Alinha à direita                 |
| `center`        | Centraliza                       |
| `space-between` | Espaço igual entre os itens      |
| `space-around`  | Espaço igual nos lados dos itens |

---

#### `align-items`

Controla o **alinhamento dos itens no eixo cruzado** (vertical quando `flex-direction: row`):

| Valor        | Descrição                                  |
| ------------ | ------------------------------------------ |
| `stretch`    | Estica os itens para ocupar a altura total |
| `flex-start` | Alinha ao topo                             |
| `flex-end`   | Alinha à base                              |
| `center`     | Centraliza verticalmente                   |
| `baseline`   | Alinha pelas linhas de base do texto       |

---

#### `align-content`

Usado quando há **múltiplas linhas** de itens (ex: com `flex-wrap: wrap`). Ele define o espaçamento **entre as linhas**:

| Valor           | Descrição                              |
| --------------- | -------------------------------------- |
| `flex-start`    | Linhas agrupadas no topo               |
| `flex-end`      | Linhas agrupadas embaixo               |
| `center`        | Linhas centralizadas                   |
| `space-between` | Espaço igual entre as linhas           |
| `space-around`  | Espaço igual acima e abaixo das linhas |

---

### 👀 **Visualizando o Comportamento**

A ideia da aula é **alterar uma propriedade por vez** e **ver visualmente o impacto** dela sobre os elementos. Por isso várias linhas são repetidas — elas simulam testes durante a aula.

---

### 🧪 **Resumo Geral**

| Conceito          | Aprendido                                    |
| ----------------- | -------------------------------------------- |
| Flexbox           | Modelo de layout moderno e responsivo        |
| `flex-direction`  | Organiza os itens em linha ou coluna         |
| `justify-content` | Alinhamento no eixo principal                |
| `align-items`     | Alinhamento no eixo cruzado                  |
| `flex-wrap`       | Permite que os itens quebrem para nova linha |
| `align-content`   | Espaçamento entre múltiplas linhas           |