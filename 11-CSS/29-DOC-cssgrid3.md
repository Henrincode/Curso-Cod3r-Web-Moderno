# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Define o tipo de codificação de caracteres para a página (UTF-8 suporta acentuação e símbolos especiais) -->
    <meta charset="UTF-8" />

    <!-- Título que aparece na aba do navegador -->
    <title>CSS Grid #03</title>

    <!-- Importa um arquivo CSS externo que provavelmente estiliza elementos com a classe 'tag' -->
    <link rel="stylesheet" href="css/tag.css" />

    <style>
      /* Define a área do grid chamada 'cabecalho' para o elemento <header> */
      header {
        grid-area: cabecalho;
      }

      /* Define a área do grid chamada 'navegacao' para o elemento <nav> */
      nav {
        grid-area: navegacao;
      }

      /* Define a área do grid chamada 'conteudo' para o elemento <main> */
      main {
        grid-area: conteudo;
      }

      /* Define a área do grid chamada 'rodape' para o elemento <footer> */
      footer {
        grid-area: rodape;
      }

      body {
        display: grid; /* Ativa o layout em grid para o body */
        min-height: 100vh; /* Garante que o body ocupe pelo menos 100% da altura da tela */
        
        /* Define duas colunas: 300px fixa para navegação e o restante (1fr) para conteúdo */
        grid-template-columns: 300px 1fr;
        
        /* Define três linhas: 100px para cabeçalho, 1fr para o conteúdo e 100px para rodapé */
        grid-template-rows: 100px 1fr 100px;

        /* Define as áreas nomeadas do grid, distribuindo os elementos por linha */
        grid-template-areas:
          "cabecalho cabecalho"
          "navegacao conteudo"
          "rodape rodape";
      }

      /* Define o layout quando a largura da tela for menor ou igual a 700px (modo responsivo) */
      @media (max-width: 700px) {
        body {
          grid-template-columns: 1fr; /* Apenas uma coluna */
          grid-template-rows: 80px 1fr 100px; /* Altura menor para o cabeçalho em dispositivos menores */
          
          /* Reorganiza as áreas do grid em ordem vertical */
          grid-template-areas:
            "navegacao"
            "conteudo"
            "rodape";
        }

        header {
          display: none; /* Esconde o cabeçalho em telas menores */
        }
      }
    </style>
  </head>

  <body>
    <!-- Conteúdo principal da página, posicionado na área 'conteudo' do grid -->
    <main class="tag">CONTEÚDO</main>

    <!-- Cabeçalho da página, posicionado na área 'cabecalho' do grid -->
    <header class="tag">CABEÇALHO</header>

    <!-- Rodapé da página, posicionado na área 'rodape' do grid -->
    <footer class="tag">RODAPÉ</footer>

    <!-- Menu de navegação da página, posicionado na área 'navegacao' do grid -->
    <nav class="tag">NAVEGAÇÃO</nav>

    <!-- Script externo JavaScript que pode adicionar comportamentos dinâmicos -->
    <script src="js/tag.js"></script>
  </body>
</html>
```

---

# 📘 O que foi aprendido com esse código

### 🎯 **Objetivo do Código**

Este exercício ensina como **criar um layout completo com CSS Grid**, utilizando **nomes de áreas** (`grid-area`) para distribuir as partes principais da página: **cabeçalho**, **navegação**, **conteúdo** e **rodapé**. Também é abordada a **responsividade com media queries**.

---

### 🧱 **O que é CSS Grid Layout?**

CSS Grid é um sistema de layout em duas dimensões (linhas e colunas) que permite **organizar elementos de forma precisa**. É ideal para páginas com estruturas definidas, como cabeçalho, menu lateral, conteúdo e rodapé.

---

### 🗺️ **Uso de `grid-area` com nomes personalizados**

No código, usamos `grid-template-areas` para **dar nomes semânticos às áreas do layout**. Isso facilita muito a leitura e manutenção do código:

```css
grid-template-areas:
  "cabecalho cabecalho"
  "navegacao conteudo"
  "rodape rodape";
```

Depois, aplicamos esses nomes nas tags:

```css
header {
  grid-area: cabecalho;
}
```

> Com isso, cada seção vai automaticamente para sua posição na grade, sem precisar indicar números de linhas ou colunas.

---

### 📐 **Definição de colunas e linhas**

```css
grid-template-columns: 300px 1fr;
grid-template-rows: 100px 1fr 100px;
```

* `300px 1fr`: A primeira coluna (menu) tem 300px fixos, e a segunda (conteúdo) ocupa o restante.
* `100px 1fr 100px`: Cabeçalho e rodapé com altura fixa, e o conteúdo cresce conforme o restante do espaço.

---

### 📱 **Responsividade com `@media`**

O layout muda quando a tela fica menor que 700px:

* As colunas viram uma única coluna (`1fr`).
* O cabeçalho some (`display: none`).
* As áreas são reorganizadas em **uma única coluna vertical**.

```css
@media (max-width: 700px) {
  body {
    grid-template-columns: 1fr;
    grid-template-areas:
      "navegacao"
      "conteudo"
      "rodape";
  }

  header {
    display: none;
  }
}
```

> Isso mostra como adaptar o layout para **diferentes tamanhos de tela**, importante para **mobile first**.

---

### 🧪 **Resumo das propriedades utilizadas**

| Propriedade               | Função                                                       |
| ------------------------- | ------------------------------------------------------------ |
| `display: grid`           | Ativa o sistema de grid layout                               |
| `grid-template-columns`   | Define largura das colunas                                   |
| `grid-template-rows`      | Define altura das linhas                                     |
| `grid-template-areas`     | Define a disposição das áreas nomeadas no grid               |
| `grid-area`               | Atribui uma área nomeada a um elemento                       |
| `@media (max-width: ...)` | Permite mudar o layout em telas pequenas (design responsivo) |
| `display: none`           | Esconde elementos, usado no header para dispositivos menores |

---

### 💡 **Dica extra para aprendizado**

No navegador, pressione **F12** para abrir as ferramentas de desenvolvedor e inspecionar o layout grid. Ative a visualização de grade para ver as linhas, colunas e áreas destacadas. Isso ajuda muito a **visualizar a estrutura** que você está montando com o Grid.