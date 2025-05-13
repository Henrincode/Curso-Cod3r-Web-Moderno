# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define a codificação de caracteres como UTF-8 para permitir acentos e caracteres especiais -->
    <meta charset="UTF-8">

    <!-- Define o título da página que aparece na aba do navegador -->
    <title>Herança</title>

    <!-- Importa a fonte 'Oswald' do Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">

    <style>
        /* Estilo aplicado ao corpo da página */
        body {
            font-family: 'Oswald';       /* Define a fonte da página */
            font-size: 40px;             /* Tamanho da fonte */
            border: solid 3px red;       /* Borda vermelha com 3px */
            padding: 50px;               /* Espaçamento interno de 50px */
        }

        /* Estilo aplicado à tag <div> */
        div {
            border: inherit;            /* Herda a borda do elemento pai (body) */
            padding: inherit;           /* Herda o padding (espaçamento interno) do elemento pai */
        }
    </style>
</head>

<body>
    <h1>Herança</h1> <!-- Título principal da página -->

    <div>Estou herdando</div> <!-- Div herda o padding e border do body -->
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 🌱 **O que é Herança no CSS?**

No CSS, **herança** significa que certos estilos aplicados a um **elemento pai** podem ser **repassados aos seus filhos** automaticamente.

Por padrão, apenas algumas propriedades são herdadas, como:

* `font-family`
* `font-size`
* `color`
* `line-height`

Já propriedades como `border`, `padding`, `margin`, `background`, **não são herdadas automaticamente**, mas **podem ser herdadas usando a palavra-chave `inherit`**.

---

### 🧬 **Aplicação do `inherit`**

No código acima:

```css
div {
    border: inherit;
    padding: inherit;
}
```

Significa que a `<div>` **herdará a borda e o espaçamento interno** (`padding`) definidos no `<body>`. Como `border` e `padding` **não são herdados por padrão**, o uso de `inherit` **força essa herança**.

---

### 👀 **Visualização prática**

* O elemento `<body>` tem:

  * Uma **borda vermelha** de 3px
  * Um **padding** de 50px
* A `<div>` herda essas duas propriedades ao usar `inherit`, ficando **visualmente com o mesmo estilo** que o pai.

---

### 📌 **Resumo do Aprendizado**

* Aprendemos o conceito de **herança no CSS**.
* Algumas propriedades, como `font-family`, **são herdadas automaticamente**.
* Outras, como `border` e `padding`, **precisam usar `inherit`** para serem herdadas.
* Com isso, é possível manter consistência visual entre os elementos sem repetir regras.