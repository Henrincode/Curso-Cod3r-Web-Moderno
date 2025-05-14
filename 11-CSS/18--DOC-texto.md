# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define o conjunto de caracteres da página como UTF-8 para suportar acentuação -->
    <meta charset="UTF-8">

    <!-- Define o título da aba do navegador -->
    <title>Texto</title>

    <!-- Importa uma fonte do Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">

    <style>
        /* Remove a margem padrão de todos os elementos */
        * {
            margin: 0;
        }

        /* Define o tamanho da fonte base para todo o HTML */
        html {
            font-size: 28px;
        }

        /* Centraliza os itens do body verticalmente e horizontalmente */
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* Define o tamanho da fonte nos elementos <div> */
        div {
            font-size: 50px;
        }

        /* Estilos aplicados ao parágrafo <p> */
        p {
            /* Exemplos de tamanhos com diferentes unidades */

            /* ➤ Unidades absolutas */
            /* Tamanho em pixels (px) – relativo à densidade da tela */
            font-size: 100px;

            /* Tamanho em pontos (pt) – mais usado em impressão */
            font-size: 42pt;

            /* Tamanho em polegadas (in) */
            font-size: 1in;

            /* ➤ Unidades relativas */
            /* em = relativo ao tamanho da fonte do elemento pai */
            font-size: 2.2em;

            /* rem = relativo ao tamanho da fonte do elemento <html> */
            font-size: 2.2rem;

            /* vh = relativo à altura da janela de visualização (viewport height) */
            font-size: 50vh;

            /* vw = relativo à largura da janela de visualização (viewport width) */
            font-size: 10vw;

            /* ➤ Fontes com diferentes famílias */

            /* monospace = todos os caracteres ocupam o mesmo espaço */
            font-family: monospace;

            /* serif = letras com pequenos traços decorativos nas extremidades */
            font-family: Georgia, serif;

            /* sans-serif = letras limpas, sem traços decorativos */
            font-family: Verdana, sans-serif;

            /* cursive = letras cursivas (como escrita à mão) */
            font-family: 'Indie Flower', cursive;

            /* ➤ Outros estilos tipográficos */

            /* Peso da fonte (100 é bem fino, 900 é mais grosso) */
            font-weight: 100;

            /* Estilo itálico */
            font-style: italic;

            /* Transforma todas as letras em maiúsculas */
            text-transform: uppercase;

            /* Decorações no texto (comentado) */
            /* text-decoration: overline underline line-through; */

            /* Espaço entre palavras */
            word-spacing: 10px;

            /* Espaço entre letras */
            letter-spacing: 10px;

            /* Espaçamento entre linhas */
            line-height: 2.5em;

            /* Alinhamento do texto */
            text-align: center;
        }

        /* Estilo base do botão */
        .botao {
            font-size: 28px;
            text-decoration: none;
            padding: 10px 30px;
            border-radius: 25px;
        }

        /* Estilo especial para o botão em destaque */
        .destaque {
            color: #fff;
            background-color: tomato;
            box-shadow: 2px 2px 1px 1px #000;
        }

        /* Estilo aplicado ao botão quando está sendo pressionado */
        .destaque:active {
            box-shadow: none;
        }
    </style>
</head>

<body>
    <div>
        <p>
            Que texto
            <br>legal!!!
        </p>
    </div>

    <!-- Link que parece um botão com destaque -->
    <a href="http://google.com" class="botao destaque">Google</a>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 🧾 **O que é HTML?**

HTML (HyperText Markup Language) é a **linguagem de marcação** usada para estruturar conteúdos na web. Com HTML, criamos elementos como **títulos, parágrafos, imagens, links, listas, formulários**, entre outros.

---

### ✍️ **Manipulando texto com CSS**

O CSS (Cascading Style Sheets) nos permite personalizar **a aparência dos textos** no HTML com vários estilos e formatos.

---

### 📏 **Tamanhos de fonte no CSS**

* **Unidades Absolutas**:

  * `px` → Pixels, baseado na densidade da tela.
  * `pt` → Pontos, usado geralmente em impressões.
  * `in` → Polegadas (1in = 96px).

* **Unidades Relativas**:

  * `em` → Relativo ao tamanho da fonte do elemento pai.
  * `rem` → Relativo ao tamanho da fonte do elemento `<html>`.
  * `vh` → Relativo à altura da tela (viewport).
  * `vw` → Relativo à largura da tela.

🔁 **Observação importante:** quando vários `font-size` são declarados para o mesmo seletor, **o último é o que será aplicado**.

---

### 🔤 **Tipos de fontes (`font-family`)**

* `monospace` → Todos os caracteres têm o mesmo tamanho.
* `serif` → Fontes com pequenos traços decorativos nas pontas.
* `sans-serif` → Fontes sem os traços decorativos (mais modernas e limpas).
* `cursive` → Fontes com estilo de caligrafia/escrita manual.

Você também pode importar fontes personalizadas com links externos, como o Google Fonts.

---

### 🖋️ **Estilos e formatações de texto**

* `font-weight` → Define o peso (espessura) da fonte. Ex: `100`, `400` (normal), `700` (negrito).
* `font-style: italic` → Deixa o texto em itálico.
* `text-transform: uppercase` → Transforma todas as letras em MAIÚSCULAS.
* `text-decoration` → Adiciona sublinhado, linha acima ou tachado.
* `word-spacing` → Define o espaço entre palavras.
* `letter-spacing` → Define o espaço entre letras.
* `line-height` → Define o espaço entre as linhas de texto.
* `text-align` → Define o alinhamento do texto (esquerda, direita, centralizado, justificado).

---

### 🔘 **Estilizando botões com links**

* O link `<a>` recebeu classes para parecer um botão.
* Usamos:

  * `padding` → Espaçamento interno.
  * `border-radius` → Cantos arredondados.
  * `background-color` e `box-shadow` → Estilo visual e sombra.
  * `:active` → Estilo aplicado ao clicar no botão (remove a sombra ao pressionar).

---

### 🎯 **Resumo do Aprendizado**

* Aprendemos a usar **CSS para estilizar textos** de várias formas.
* Conhecemos diferentes **unidades de medida** para definir tamanhos de fonte.
* Vimos **como aplicar tipos de fontes** com `font-family`.
* Exploramos **estilos e efeitos visuais** no texto como espaçamento, itálico, caixa alta, alinhamento e decoração.
* Criamos um **botão estilizado** a partir de um link com classes CSS.