# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define a codificação de caracteres para suportar acentuação e símbolos -->
    <meta charset="UTF-8">

    <!-- Define o título exibido na aba do navegador -->
    <title>Float</title>

    <style>
        /* Define a cor de fundo da página como cinza escuro */
        body {
            background-color: #222;
        }

        /* Define a div com fundo vermelho e flutuação para a direita */
        .c1 {
            background-color: red;
            float: right;
        }

        /* Define a div com fundo verde, flutuação à esquerda
           e "clear: right" para não permitir que elementos flutuando à direita fiquem ao seu lado */
        .c2 {
            background-color: green;
            clear: right;
            float: left;
        }

        /* Define a div com fundo azul e "clear: both"
           para impedir que elementos flutuando à esquerda ou à direita fiquem ao seu lado */
        .c3 {
            background-color: blue;
            clear: both;
        }

        /* Define a div com fundo laranja e flutuação à direita */
        .c4 {
            background-color: orange;
            float: right;
        }

        /* Define altura e largura fixas para todas as divs */
        div {
            height: 150px;
            width: 150px;
        }
    </style>
</head>

<body>
    <!-- Div vermelha flutuando à direita -->
    <div class="c1"></div>

    <!-- Div verde flutuando à esquerda, impedindo elementos à direita ao seu lado -->
    <div class="c2"></div>

    <!-- Div azul que quebra as flutuações anteriores (direita e esquerda) -->
    <div class="c3"></div>

    <!-- Div laranja flutuando à direita -->
    <div class="c4"></div>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 🧾 **O que é a propriedade `float` no CSS?**

A propriedade `float` no CSS serve para **fazer um elemento "flutuar" dentro do layout**, ou seja, ele é retirado do fluxo normal da página e **alinhado à esquerda (`left`) ou à direita (`right`)**.

Isso permite que outros elementos de bloco (como `divs`) fiquem **ao lado do elemento flutuante**, desde que também estejam configurados para isso.

---

### 💧 **O que faz o `clear`?**

A propriedade `clear` serve para **evitar que um elemento fique ao lado de elementos flutuantes anteriores**.

Ela tem três valores principais:

* `left` – Impede que elementos à esquerda fiquem ao lado.
* `right` – Impede que elementos à direita fiquem ao lado.
* `both` – Impede elementos flutuando de qualquer lado (esquerda ou direita).

---

### 🎨 **Aplicação prática no código**

* `.c1` (vermelho): flutua à direita.
* `.c2` (verde): flutua à esquerda e não permite que elementos à direita fiquem ao lado dela.
* `.c3` (azul): não flutua, **mas impede que qualquer flutuação anterior (esquerda ou direita) interfira em seu posicionamento**, por causa do `clear: both`.
* `.c4` (laranja): flutua à direita e aparece após a quebra da flutuação feita pela `.c3`.

---

### 🧠 **Dicas e observações úteis**

* `float` é muito útil para criar **layouts simples lado a lado**, mas seu uso foi sendo substituído por técnicas mais modernas como `flexbox` e `grid`.
* Sempre que usar `float`, pense no uso de `clear` para controlar **como os próximos elementos serão posicionados**.
* Elementos flutuantes **não ocupam espaço vertical no fluxo da página**, o que pode causar sobreposição ou comportamento inesperado.

---

### 🎯 **Resumo do Aprendizado**

* Aprendemos a usar `float` para alinhar elementos à esquerda ou direita.
* Vimos que o `clear` serve para **limpar** a influência de elementos flutuantes anteriores.
* O layout com `float` exige **atenção no controle do fluxo visual da página**, principalmente quando há múltiplos elementos flutuando.
* Conhecer `float` é importante, mas **o ideal é usar `flexbox` ou `grid` para layouts modernos**.