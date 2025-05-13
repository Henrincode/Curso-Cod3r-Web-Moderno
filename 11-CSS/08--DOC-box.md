# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define a codificação de caracteres como UTF-8 para suportar acentuação e caracteres especiais -->
    <meta charset="UTF-8">

    <!-- Define o título da aba do navegador -->
    <title>Box Model</title>

    <style>
        /* Estilos para o corpo da página */
        body {
            font-size: 80px;   /* Tamanho da fonte dos textos */
            margin: 0;         /* Remove a margem padrão do navegador */
        }

        /* Estilos para a div com a classe "c1" */
        .c1 {
            background-color: orange; /* Cor de fundo laranja */
        }

        /* Estilos para a div com a classe "c2" */
        .c2 {
            background-color: skyblue; /* Cor de fundo azul claro */
        }

        /* Estilos para a div com a classe "c3" */
        .c3 {
            background-color: tomato; /* Cor de fundo vermelho tomate */
        }

        /* Estilos aplicados a todas as divs */
        div {
            float: left; /* Faz os elementos ficarem lado a lado (horizontalmente) */
            
            /* A linha abaixo aplica espaçamento interno (padding) de forma abreviada:
               100px em cima e embaixo, 50px nas laterais */
            padding: 100px 50px;

            /* Define margens externas: 0px em cima/baixo e 20px nas laterais */
            margin: 0px 20px;

            /* Adiciona uma borda preta de 15px ao redor da div */
            border: solid 15px black;
        }
    </style>
</head>

<body>
    <!-- Cada div possui um número e uma cor diferente -->
    <div class="c1">1</div>
    <div class="c2">2</div>
    <div class="c3">3</div>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 📦 **O que é o Box Model no CSS?**

O **Box Model** (modelo de caixa) é o conceito que define como os elementos HTML são renderizados na página. Cada elemento é tratado como uma "caixa" composta por:

* **Content** (conteúdo)
* **Padding** (espaço interno)
* **Border** (borda)
* **Margin** (espaço externo)

Essas partes se somam para definir o **tamanho total** e o **posicionamento** do elemento.

---

### 🧱 **Aplicação no código**

No exemplo:

* Cada `<div>` tem um **conteúdo numérico**: 1, 2, 3.
* As **cores de fundo** ajudam a diferenciar visualmente cada caixa.
* O **`float: left`** faz com que as caixas fiquem lado a lado (em linha), em vez de uma abaixo da outra.
* A **propriedade `padding: 100px 50px;`** define:

  * 100px de espaço interno **acima e abaixo** do conteúdo
  * 50px de espaço interno **à esquerda e à direita**
* A **`margin: 0px 20px;`** adiciona:

  * 0px de espaço externo acima e abaixo
  * 20px de espaço externo nas laterais (espaçamento entre as caixas)
* A **borda preta** de 15px cria um contorno visível ao redor de cada caixa.

---

### 🧪 **Teste de substituição (erro comum no código)**

⚠️ No código original, havia linhas de `padding` repetidas:

```css
padding-top: 100px;
padding: 10px 50px 100px 150px;
padding: 100px 50px;
```

👉 **A última linha sempre sobrescreve as anteriores**, por isso **só a última é aplicada**. No caso:

```css
padding: 100px 50px;
```

Substitui todas as definições anteriores.

---

### 🎯 **Resumo do Aprendizado**

* Entendemos o **Box Model**, que define como elementos HTML são exibidos.
* Usamos `padding`, `margin`, `border` e `float` para **controlar o layout e espaçamento** dos elementos.
* Aprendemos que **a última declaração CSS com a mesma propriedade sobrescreve as anteriores**.
* Com `float: left`, conseguimos **alinhar caixas horizontalmente**.
* O `padding` e `margin` controlam o **espaço interno e externo** da caixa.
* A borda (`border`) ajuda a **visualizar melhor os limites de cada caixa**.