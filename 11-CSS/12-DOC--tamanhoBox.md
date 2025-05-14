# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define a codificação de caracteres para suportar acentos e símbolos especiais -->
    <meta charset="UTF-8">

    <!-- Define o título da aba do navegador -->
    <title>Tamanho Box</title>

    <style>
        /* Aplica o box-sizing: border-box a todos os elementos,
           fazendo com que padding e border sejam incluídos no cálculo do tamanho total */
        * {
            box-sizing: border-box;
        }

        /* Estiliza o corpo da página */
        body {
            font-size: 45px;  /* Tamanho grande da fonte para facilitar a visualização */
            margin: 0;        /* Remove margens padrão do navegador */
        }

        /* Estiliza a div principal */
        div {
            background-color: deepskyblue; /* Cor de fundo azul vibrante */
            width: 100%;                   /* Largura total do elemento pai (body) */
            height: 300px;                 /* Altura fixa de 300px */
            padding: 100px;                /* Espaçamento interno de 100px em todos os lados */
            border: solid 20px;            /* Borda sólida com 20px em todos os lados */
        }
    </style>
</head>

<body>
    <!-- Caixa azul com conteúdo centralizado -->
    <div>
        O tamanho do Box é...
    </div>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 📦 **Box Model (Modelo de Caixa)**

No CSS, todo elemento é representado como uma **caixa retangular**, composta por:

* `content` (conteúdo),
* `padding` (espaço interno),
* `border` (borda),
* `margin` (espaço externo).

O tamanho final da caixa normalmente soma todos esses valores. Porém:

➡️ Com `box-sizing: border-box`, o navegador **inclui** `padding` e `border` **dentro** da `width` e `height` definidas.
Isso ajuda a manter o controle exato do tamanho da caixa.

---

### 📏 **Propriedades aplicadas na `div`**

* `width: 100%` → A `div` ocupa toda a largura disponível do elemento pai (`body`).
* `height: 300px` → Define uma altura fixa.
* `padding: 100px` → Adiciona espaço **interno** em todos os lados.
* `border: solid 20px` → Adiciona uma borda sólida de 20px em todos os lados.

⚠️ Sem `box-sizing: border-box`, o `padding` e a `border` **aumentariam o tamanho total** da `div`.

---

### 🎨 **Visual do elemento com `box-sizing: border-box`**

Com `box-sizing: border-box`:

* O tamanho total da `div` continua sendo **300px de altura** e **100% de largura**,
* O conteúdo é ajustado para **caber dentro** desses limites, **sem ultrapassar** por causa do `padding` e da `border`.

---

### 🧠 **Dicas Importantes**

* Sempre que usar `padding` ou `border`, prefira adicionar `box-sizing: border-box` no início do seu CSS para evitar surpresas com o tamanho final dos elementos.
* Usar o seletor universal `*` com `box-sizing: border-box` aplica essa regra em todos os elementos da página — boa prática!

---

### 🎯 **Resumo do Aprendizado**

* Aprendemos o que é o **Box Model**.
* Vimos como o `box-sizing: border-box` **controla melhor o tamanho** dos elementos.
* Entendemos o efeito de `padding` e `border` sobre o tamanho da `div`.
* Refletimos sobre como o CSS calcula dimensões reais no layout.