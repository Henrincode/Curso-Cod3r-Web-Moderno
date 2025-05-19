# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Define o conjunto de caracteres da página para suportar acentos e caracteres especiais -->
    <meta charset="UTF-8" />

    <!-- Define o título da aba no navegador -->
    <title>Flexbox #03</title>

    <style>
      /* Estilo padrão para todas as divs: borda azul e fonte grande */
      div {
        border: solid 5px dodgerblue;
        font-size: 40px;
      }

      /* Garante que padding e bordas sejam incluídos na largura total das divs */
      .flex-container div {
        box-sizing: border-box;
      }

      /* Define o container como um elemento flexível com os itens em linha (horizontal) */
      .flex-container {
        display: flex;
        flex-direction: row; /* Direção padrão: itens são dispostos em linha */
      }

      /* Estilo aplicado a todas as divs filhas dentro do container flexível */
      .flex-container div {
        flex-basis: 100px; /* Tamanho base inicial dos itens flexíveis */
        width: 200px;      /* Será ignorado porque o 'flex-basis' tem prioridade quando usado com 'flex' */
      }

      /* Estiliza a quarta div individualmente */
      .flex-container div:nth-child(4) {
        flex: 3 6 100px; 
        /* 
          Essa notação representa:
          flex-grow: 3 → pode crescer até 3x mais que outros, se houver espaço extra
          flex-shrink: 6 → pode encolher até 6x mais que outros, se o espaço for reduzido
          flex-basis: 100px → tamanho base inicial do item
        */
      }

      .flex-container {
        width: 300px; /* Primeira declaração de largura (será sobrescrita) */
        width: 600px; /* Valor final aplicado: largura total do container */
      }
    </style>
  </head>

  <body>
    <!-- Container principal com a classe 'flex-container' -->
    <div class="flex-container tag nolabel">
      <!-- Itens filhos numerados de 1 a 4 -->
      <div class="tag nolabel">1</div>
      <div class="tag nolabel">2</div>
      <div class="tag nolabel">3</div>
      <div class="tag nolabel">4</div>
    </div>
  </body>
</html>
```

---

# 📘 O que foi aprendido com esse código

---

### 🎯 **Objetivo do Código**

Este exemplo tem como objetivo mostrar como o **Flexbox** permite controlar o tamanho dos elementos com `flex-grow`, `flex-shrink` e `flex-basis`, usando a **propriedade composta `flex`**. Também vemos que quando propriedades são repetidas, apenas a última é aplicada.

---

### 🧱 **O que é Flexbox?**

Flexbox é uma técnica de layout em CSS que facilita a criação de interfaces flexíveis e responsivas. Permite alinhar e distribuir espaço entre os itens em um container, tanto no eixo horizontal quanto vertical.

---

### 🔍 **Propriedades Praticadas no Código**

---

#### 🧭 `display: flex;` e `flex-direction: row;`

* Ativa o comportamento flexível no container.
* Com `row`, os elementos filhos são dispostos **horizontalmente** (padrão do flexbox).

---

#### 📏 `flex-basis: 100px;`

* Define o **tamanho base** que cada item deve ter **antes** de crescer ou encolher.
* Neste caso, todas as `div`s começam com 100px de largura, mesmo que tenham `width: 200px`.

> ⚠️ Quando `flex-basis` e `width` estão juntos, o `flex-basis` tem prioridade no layout flexível.

---

#### 💪 `flex: 3 6 100px;`

* É uma forma **abreviada** de declarar:

  * `flex-grow: 3;` → o item pode crescer 3x mais que outros
  * `flex-shrink: 6;` → o item pode encolher 6x mais que outros
  * `flex-basis: 100px;` → tamanho base do item

> Isso foi aplicado **apenas na quarta div**, fazendo com que ela tenha comportamento diferenciado em relação às outras.

---

#### 📐 `width: 600px;`

* Define a **largura total do container**.
* A linha `width: 300px;` foi sobrescrita pela última, portanto **não tem efeito no resultado final**.

---

### 🧪 **Resumo Geral do Aprendizado**

| Conceito            | O que foi praticado                                    |
| ------------------- | ------------------------------------------------------ |
| `display: flex`     | Ativação do layout flexível                            |
| `flex-basis`        | Define o tamanho base dos itens                        |
| `width`             | Pode ser sobrescrito por `flex-basis` em flexbox       |
| `flex`              | Combinação de crescimento, encolhimento e tamanho base |
| Propriedades finais | A última declaração sempre sobrescreve as anteriores   |

---

### 👁️‍🗨️ **Dica Importante**

Quando estiver aprendendo Flexbox, **experimente modificar os valores de `flex` e a largura do container** para ver como os itens se comportam. Isso ajuda a fixar os conceitos de forma visual e prática. O uso de valores diferentes nos filhos permite entender como o espaço é distribuído.