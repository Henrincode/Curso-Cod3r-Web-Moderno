# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define a codificação de caracteres para suportar acentos e caracteres especiais -->
    <meta charset="UTF-8">

    <!-- Define o título exibido na aba do navegador -->
    <title>Altura e Largura</title>

    <style>
        /* Define a altura do elemento <html> como 100% da altura da janela do navegador */
        html {
            height: 100%;
        }

        /* Estiliza o corpo da página */
        body {
            font-size: 40px;              /* Tamanho da fonte grande para facilitar a visualização */
            background-color: coral;      /* Cor de fundo coral */
            height: 100%;                 /* Ocupa 100% da altura da janela */
            margin: 0;                    /* Remove as margens padrão do navegador */
        }

        /* Define a cor de fundo das <div> como verde-mar */
        div {
            background-color: seagreen;
        }

        /* Define a cor de fundo dos <span> como azul */
        span {
            background-color: dodgerblue;
        }

        /* Aplica as mesmas regras para <div> e <span> */
        span,
        div {
            width: 50%;         /* Define a largura como metade do elemento pai (body) */
            height: 250px;      /* Define a altura como 250px (será sobrescrita) */
            height: 50%;        /* A altura final será 50% do elemento pai — esta linha sobrescreve a anterior */
            display: block;     /* Faz os elementos ocuparem toda a largura e quebrarem linha */
        }
    </style>
</head>

<body>
    <!-- Elemento de bloco com fundo verde -->
    <div>Título</div>

    <!-- Elemento de bloco com fundo azul -->
    <span>Subtítulo</span>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 🧱 **Altura (`height`) e Largura (`width`) no CSS**

As propriedades `width` e `height` são usadas para definir o **tamanho dos elementos**.

* `width` define a **largura**.
* `height` define a **altura**.

Essas propriedades podem usar:

* **Valores fixos** como `250px`.
* **Valores relativos** como `50%`, que significam "50% do tamanho do elemento pai".

⚠️ No código, a linha `height: 250px;` foi sobrescrita por `height: 50%;`, pois **o CSS aplica a última declaração quando há duplicação**.

---

### 🧩 **Entendendo o `display: block`**

Por padrão:

* `div` já é `display: block`.
* `span` é `display: inline` (ou seja, não aceita altura e largura).

Mas neste exemplo, `span` recebeu `display: block`, o que:

* Faz com que ele **quebre linha** como a `div`.
* Permite que tenha **largura e altura definidas**.

---

### 🎨 **Comportamento visual dos elementos**

Com as configurações:

* Ambos os elementos (`div` e `span`) aparecem **um embaixo do outro**.
* Ambos ocupam **50% da largura da tela**.
* Ambos têm altura de **50% da altura da janela do navegador**, por conta do `height: 50%`.

---

### 🧠 **Dicas importantes**

* Evite repetir a mesma propriedade com valores diferentes (como `height: 250px` e depois `height: 50%`). A última será a que o navegador considera.
* Para que `height: 50%` funcione corretamente, o elemento pai também precisa ter altura definida (`body` e `html` com `height: 100%`).
* Usar `display: block` em um `span` transforma seu comportamento, permitindo definir altura, largura e fazendo-o se comportar como uma `div`.

---

### 🎯 **Resumo do Aprendizado**

* Aprendemos a usar `width` e `height` para definir tamanhos de elementos.
* Entendemos a importância de definir o `height` no elemento pai para usar valores percentuais.
* Vimos como o `display: block` transforma o comportamento de um `span`, permitindo que ele funcione como um `div`.
* Reforçamos que **a última declaração CSS de uma mesma propriedade é a que prevalece**.