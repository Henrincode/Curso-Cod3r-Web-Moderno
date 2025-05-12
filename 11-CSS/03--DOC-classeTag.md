# ✅ Código com Comentários:

`03-classeTag.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <!-- Define a codificação de caracteres como UTF-8 para garantir a correta exibição de caracteres especiais -->
  <meta charset="UTF-8" />
  <title>Tag Class</title>

  <!-- Link para o arquivo de estilos externos CSS -->
  <link rel="stylesheet" href="css/tag.css" />
</head>

<body class="tag">
  <!-- Container principal com a classe 'tag', para aplicar as regras de estilo -->
  <div class="tag">
    <!-- Elementos com a classe 'tag' serão destacados com bordas coloridas e labels -->
    <span class="tag">1</span>
    <span class="tag">2</span>
    <span class="tag">3</span>
    <p class="tag">4</p>
    <div class="tag">5</div>
    <ul class="tag">6</ul>
    <ol class="tag">7</ol>
    <form class="tag">8</form>
  </div>

  <!-- Link para o arquivo JavaScript que manipula as cores e labels -->
  <script src="js/tag.js"></script>
</body>

</html>
```

---

`tag.css`

```css
/* Estilos gerais para o corpo da página */
body {
  font-size: 40px; /* Aumenta o tamanho da fonte para facilitar a leitura */
}

/* Remove o padding das listas não ordenadas e ordenadas */
ul,
ol {
  padding: 0;
}

/* Adiciona margem à esquerda dos itens das listas */
li {
  margin-left: 60px;
}

/* Estilo geral para os elementos com a classe 'tag' */
.tag {
  border: solid 4px; /* Borda sólida de 4px para destacar os elementos */
  margin: 5px; /* Margem para separar os elementos */
}

/* Estilo específico para o label dentro da tag */
.tag label {
  color: #fff; /* Cor do texto do label em branco */
  font-size: 25px; /* Tamanho da fonte do label */
  vertical-align: top; /* Alinha o texto no topo do label */
  margin-right: 10px; /* Espaço à direita do label */
  padding: 0 5px 3px 3px; /* Espaçamento interno do label */
}
```

---

`tag.js`

```javascript
// Definindo um objeto de cores associadas a diferentes tags HTML
const colors = {
  p: "#388e3c", // Cor para a tag <p>
  div: "#1565c0", // Cor para a tag <div>
  span: "#e53935", // Cor para a tag <span>
  selection: "#f67809", // Cor para seleção de texto
  ul: "#5e35b1", // Cor para a tag <ul>
  ol: "#fbc02d", // Cor para a tag <ol>
  header: "#d81b60", // Cor para o <header>
  nav: "#64dd17", // Cor para a tag <nav>
  main: "#00acc1", // Cor para o <main>
  footer: "#304ffe", // Cor para o <footer>
  form: "#9f6581", // Cor para o <form>
  body: "#25b6da", // Cor para o corpo da página
  padrao: "#616161", // Cor padrão para tags não especificadas
  get(tag) {
    return this[tag] ? this[tag] : this.padrao; // Retorna a cor da tag ou a cor padrão
  },
};

// Aplica as cores e insere labels nos elementos com a classe 'tag'
document.querySelectorAll(".tag").forEach(elemento => {
  const tagName = elemento.tagName.toLowerCase(); // Obtém o nome da tag em minúsculas

  elemento.style.borderColor = colors.get(tagName); // Define a cor da borda de acordo com a tag

  if (!elemento.classList.contains("nolabel")) { // Verifica se o elemento não possui a classe 'nolabel'
    const label = document.createElement("label"); // Cria o elemento <label>
    label.style.backgroundColor = colors.get(tagName); // Define a cor de fundo do label
    label.innerHTML = tagName; // Adiciona o nome da tag ao label
    elemento.insertBefore(label, elemento.childNodes[0]); // Insere o label antes do conteúdo do elemento
  }
});
```

---

# 📘 O que foi aprendido:

### 🧩 **Como as classes CSS ajudam a organizar o código**

A classe `.tag` foi usada para adicionar estilos comuns a vários elementos HTML, permitindo que todos eles compartilhem o mesmo estilo visual. Isso facilita a manutenção do código e a aplicação de estilos de forma consistente.

---

### 🎨 **Uso de JavaScript para interatividade**

No arquivo `tag.js`, o JavaScript é utilizado para alterar a cor das bordas dos elementos com a classe `.tag` de acordo com o nome da tag. Além disso, ele insere um label com o nome da tag dentro de cada elemento, proporcionando uma melhor visualização e compreensão do conteúdo da página.

---

### 🔍 **Depuração e Melhorias Visuais**

A adição das bordas coloridas e dos labels ajuda na **depuração** do código, pois permite que você veja facilmente quais tags estão sendo usadas no HTML, melhorando a visualização e a análise do layout da página.

---

### 🧠 **Resumo do Aprendizado**

* Como aplicar classes CSS a múltiplos elementos HTML para organizar e estilizar o conteúdo.
* Como usar JavaScript para interagir com o DOM, atribuindo estilos dinâmicos e criando novos elementos.
* A importância de usar estilos para facilitar a depuração e melhorar a visualização da estrutura da página.