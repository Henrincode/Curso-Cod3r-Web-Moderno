# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define o conjunto de caracteres da página como UTF-8 para suportar acentuação -->
    <meta charset="UTF-8">

    <!-- Define o título exibido na aba do navegador -->
    <title>Cores</title>

    <style>
        /* 
            Links úteis sobre cores em CSS:
            https://www.w3schools.com/colors/colors_hsl.asp
            https://coolors.co/
            http://paletton.com/
        */

        body {
            /* Cor de fundo nomeada (em inglês) */
            background-color: green;

            /* Cor hexadecimal com 6 dígitos (#rrggbb) */
            background-color: #f67809;

            /* Cor hexadecimal abreviada com 3 dígitos (#rgb) */
            background-color: #abc;

            /* Cor hexadecimal com 4 dígitos (#rgba) – inclui transparência */
            background-color: #e928;

            /* Cor em formato RGB (vermelho, verde, azul) */
            background-color: rgb(55, 110, 220);

            /* Cor em formato RGBA (RGB + alfa para transparência) */
            background-color: rgba(55, 110, 220, 0.5);

            /* Cor em formato HSL (matiz, saturação e luminosidade) */
            background-color: hsl(299, 58%, 50%);

            /* Cor em formato HSLA (HSL + alfa para transparência) */
            background-color: hsla(299, 58%, 50%, 0.5);
        }
    </style>
</head>

<body>

</body>

</html>
```

---

# 📘 O que foi aprendido:

### 🎨 **O que são cores no CSS?**

O CSS permite aplicar cores de várias formas. Você pode mudar a cor de fundo, do texto, de bordas e muito mais usando diferentes formatos de cor.

---

### 🌈 **Formatos de cores mais usados no CSS**

1. **Nomes de cores (color names)**
   Exemplos: `red`, `green`, `blue`, `black`, `white`, etc.

2. **Hexadecimal (`#rrggbb` ou `#rgb`)**

   * `#f67809` – uma cor laranja.
   * `#abc` – forma abreviada de `#aabbcc`.
   * `#e928` – versão com transparência (formato `#rgba` – pouco usado e nem todos os navegadores suportam bem).

3. **RGB (`rgb(r, g, b)`)**

   * Exemplo: `rgb(55, 110, 220)`
   * Cada valor vai de 0 a 255.

4. **RGBA (`rgba(r, g, b, a)`)**

   * Igual ao RGB, mas com um quarto valor: **alfa**, que controla a **transparência** (0 = totalmente transparente, 1 = opaco).
   * Exemplo: `rgba(55, 110, 220, 0.5)` (50% transparente).

5. **HSL (`hsl(h, s%, l%)`)**

   * `h` = **Hue** (matiz – a cor), vai de 0 a 360.
   * `s` = **Saturation** (saturação – quão viva está a cor).
   * `l` = **Lightness** (luminosidade – quão clara ou escura).
   * Exemplo: `hsl(299, 58%, 50%)`.

6. **HSLA (`hsla(h, s%, l%, a)`)**

   * Igual ao HSL, mas com o canal **alfa (a)** para transparência.
   * Exemplo: `hsla(299, 58%, 50%, 0.5)`.

---

### 🧠 **Dicas e observações úteis**

* O último `background-color` declarado sempre **sobrepõe os anteriores**, pois CSS lê de cima para baixo.
* Os formatos `rgba` e `hsla` são ideais quando você quer aplicar **transparência**.
* O formato `hsl` é muito visual e facilita ajustes de cor, como clarear, escurecer ou mudar o tom.
* Sites como [Coolors](https://coolors.co/) e [Paletton](http://paletton.com/) ajudam a escolher paletas de cores harmônicas.

---

### 🎯 **Resumo do Aprendizado**

* Aprendemos a aplicar cores no CSS de diferentes formas.
* Conhecemos os formatos: `color name`, `hex`, `rgb(a)` e `hsl(a)`.
* Entendemos o uso de **transparência** com os formatos `rgba` e `hsla`.
* Vimos que o CSS lê propriedades de cima para baixo, e a última definição é a que prevalece.