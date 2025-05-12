# ✅ Código com comentários:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Define a codificação de caracteres como UTF-8 -->
    <meta charset="UTF-8" />

    <!-- Define o título que será exibido na aba do navegador -->
    <title>Anatomia CSS</title>

    <style>
      /* Estilo aplicado a elementos com a classe "seletor" */
      .seletor {
        color: #fff; /* Define a cor do texto como branco */
        font-size: 30px; /* Tamanho da fonte */
        text-align: center; /* Centraliza o texto horizontalmente */

        /* Propriedade shorthand: aplica borda sólida de 5px na cor navy */
        border: solid 5px navy;

        font-family: Helvetica, sans-serif; /* Define uma fonte com fallback */

        /* Exemplo de função CSS: calcula o valor com base em 100% menos 40px */
        width: calc(100% - 40px);

        background-color: rgb(34, 153, 189); /* Define uma cor de fundo com valores RGB */
      }

      /* Pseudo-classe: aplica estilo quando o mouse passa sobre o elemento */
      .seletor:hover {
        background-color: orangered; /* Muda a cor de fundo */
        cursor: pointer; /* Altera o cursor para uma "mãozinha" */
      }

      /* Pseudo-elemento: estiliza a primeira letra do conteúdo do elemento */
      .seletor::first-letter {
        font-size: 60px; /* Aumenta o tamanho da primeira letra */
        font-weight: bold; /* Deixa a primeira letra em negrito */
      }

      /* Observação sobre nomenclatura de classes:
         É recomendado utilizar dash-case (ex: minha-classe)
         camelCase é comum em JavaScript, mas não em CSS */
    </style>
  </head>

  <body>
    <!-- Elemento com a classe "seletor", que receberá os estilos definidos -->
    <div class="seletor">Conteúdo</div>
  </body>
</html>
```

---

# 📘 O que foi aprendido:

### 🎨 **O que é CSS e o que esse código faz?**

CSS (Cascading Style Sheets) é a linguagem usada para **estilizar** elementos HTML. No exemplo acima, aprendemos a aplicar estilos por meio de uma **classe** chamada `.seletor`.

O código estiliza um `div` com várias propriedades CSS:

* **Cor de fundo** e **cor do texto**
* **Tamanho da fonte**
* **Fonte personalizada**
* **Alinhamento do texto**
* **Borda estilizada**
* **Tamanho dinâmico** com `calc()`
* **Interações** com pseudo-classes como `:hover`
* **Detalhes visuais** com pseudo-elementos como `::first-letter`

---

### 🧱 **Anatomia de um bloco CSS**

Cada bloco CSS segue a estrutura:

```css
.seletor {
  propriedade: valor;
}
```

* **Seletor**: Indica qual elemento será estilizado (`.classe`, `#id`, `tag`, etc.)
* **Propriedades**: O que você deseja mudar (cor, tamanho, espaçamento, etc.)
* **Valores**: Os valores específicos que aplicam o estilo (ex: `red`, `20px`, `center`)

---

### 🧪 **Pseudo-classes e Pseudo-elementos**

* `:hover`: Aplica estilos **quando o usuário passa o mouse** sobre o elemento.
* `::first-letter`: Permite **estilizar apenas a primeira letra** do conteúdo de um elemento.

Esses recursos ajudam a criar interfaces mais dinâmicas e elegantes.

---

### 🧱 **Nomenclatura de classes: dash-case x camelCase**

* A convenção mais comum no CSS é usar **dash-case**: `minha-classe-exemplo`
* Evite camelCase no CSS (`minhaClasse`) — é mais comum em JavaScript.