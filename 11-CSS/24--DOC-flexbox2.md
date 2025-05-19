# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Define o conjunto de caracteres da página para permitir acentos e símbolos -->
    <meta charset="UTF-8" />

    <!-- Define o título da aba do navegador -->
    <title>Flexbox #02</title>

    <style>
      /* Aplica borda azul e fonte grande a todas as divs */
      div {
        border: solid 5px dodgerblue;
        font-size: 40px;
      }

      /* Garante que o padding e a borda sejam incluídos na largura total da div */
      .flex-container div {
        box-sizing: border-box;
      }

      /* Define o container como flexível com largura e altura específicas */
      .flex-container {
        display: flex; /* Ativa o modelo flexbox */
        height: 300px; /* Altura total do container */
        width: 600px;  /* Largura inicial do container */
      }

      /* Estiliza o terceiro item da lista (div de número 3) */
      .flex-container div:nth-child(3) {
        background-color: indianred; /* Cor de fundo destacada */

        /* A propriedade 'order' define a ordem do item. 
           Como foi declarada 3 vezes, apenas a última (order: -1) será aplicada */
        order: 1;
        order: 0;
        order: -1; /* Valor final que será usado */

        /* A propriedade 'align-self' define o alinhamento individual do item.
           A última declaração (stretch) sobrescreve as anteriores */
        align-self: center;
        align-self: flex-end;
        align-self: stretch; /* Valor final que será aplicado */
      }

      /* Estilo base das divs filhas: largura e crescimento flexível */
      .flex-container div {
        width: 100px;     /* Largura inicial de cada item */
        flex-grow: 0;     /* Itens não crescem inicialmente */
        flex-grow: 1;     /* Valor final aplicado: todos os itens crescem igualmente */
      }

      /* A primeira div cresce duas vezes mais que as outras */
      .flex-container div:nth-child(1) {
        flex-grow: 2; /* Cresce mais que os demais */
      }

      /* Redefine a largura do container e aplica encolhimento */
      .flex-container {
        width: 300px;     /* Novo valor de largura do container */
        flex-shrink: 1;   /* Permite que os itens encolham quando necessário */
      }

      /* A primeira div também encolhe mais que os outros */
      .flex-container div:nth-child(1) {
        flex-shrink: 5; /* Encolhe 5x mais rápido que os outros */
      }
    </style>
  </head>

  <body>
    <!-- Container principal com a classe flex-container -->
    <div class="flex-container tag nolabel">
      <!-- Itens filhos flexíveis numerados -->
      <div class="tag nolabel">1</div>
      <div class="tag nolabel">2</div>
      <div class="tag nolabel">3</div>
      <div class="tag nolabel">4</div>
    </div>
  </body>
</html>
```

---

Agora vamos para a parte da explicação do que foi aprendido com esse código.

---

# 📘 O que foi aprendido com esse código

---

### 🎯 **Objetivo do Código**

Este código serve para praticar conceitos fundamentais do **Flexbox**, explorando **ordenação**, **alinhamento individual**, **crescimento** e **encolhimento** dos itens dentro de um container flexível.

---

### 🧱 **O que é Flexbox?**

Flexbox é um modelo de layout CSS que permite organizar elementos de forma **dinâmica, adaptável e responsiva**, ideal para construir layouts alinhados tanto horizontal quanto verticalmente com pouco esforço.

---

### 🔍 **Propriedades Praticadas no Código**

---

#### ⚙️ `display: flex;`

Ativa o Flexbox no container. Todos os filhos diretos se tornam itens flexíveis.

---

#### 📏 `width` e `height`

Define o tamanho do container `.flex-container`, influenciando o espaço disponível para distribuir os itens flexíveis.

---

#### 🔄 `order`

Altera a **ordem de exibição** dos elementos no container.

| Valor    | Descrição                     |
| -------- | ----------------------------- |
| Padrão   | Todos os itens têm `order: 0` |
| Negativo | Exibido antes dos demais      |

> No código, a terceira div recebeu `order: -1`, por isso aparece antes das outras.

---

#### 🎚️ `flex-grow`

Define quanto um item **deve crescer** em relação aos outros quando há espaço disponível.

| Valor        | Comportamento                   |
| ------------ | ------------------------------- |
| `0` (padrão) | Não cresce além do tamanho base |
| `1` ou mais  | Cresce proporcionalmente        |

> A primeira `div` tem `flex-grow: 2`, então ela cresce o dobro das demais.

---

#### 📉 `flex-shrink`

Controla o quanto um item pode **encolher** quando o espaço é insuficiente.

| Valor        | Comportamento                      |
| ------------ | ---------------------------------- |
| `1` (padrão) | Encolhe proporcionalmente          |
| `5`          | Encolhe 5 vezes mais que os outros |

> Isso foi usado para testar o comportamento quando a largura do container foi reduzida para `300px`.

---

#### 🎯 `align-self`

Permite alinhar **individualmente** um item no eixo cruzado (vertical, no caso).

| Valor      | Efeito                           |
| ---------- | -------------------------------- |
| `stretch`  | Ocupa toda a altura do container |
| `center`   | Centraliza verticalmente         |
| `flex-end` | Alinha à base do container       |

> A terceira `div` recebeu `align-self: stretch`, sobrescrevendo as anteriores.

---

### 🧪 **Resumo Geral do Aprendizado**

| Conceito      | O que foi aprendido                                 |
| ------------- | --------------------------------------------------- |
| Flexbox       | Modelo moderno e poderoso de layout                 |
| `order`       | Muda a ordem dos elementos na tela                  |
| `flex-grow`   | Controla quanto um item pode crescer                |
| `flex-shrink` | Controla quanto um item pode encolher               |
| `align-self`  | Alinha individualmente os itens no eixo transversal |

---

### 👁️‍🗨️ **Dica para aprender melhor**

As múltiplas declarações repetidas (como `order`, `align-self`, `flex-grow`) representam **testes práticos feitos na aula**. No final, apenas o **último valor** declarado é que realmente é aplicado pelo navegador.

Você pode comentar/descomentar essas linhas para ver o comportamento mudando na tela em tempo real. Isso ajuda muito a entender o Flexbox na prática!