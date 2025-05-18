# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Define o conjunto de caracteres para suportar acentos e caracteres especiais -->
    <meta charset="UTF-8" />

    <!-- Título da aba do navegador -->
    <title>Desafio Card</title>

    <style>
      /* Estilo para o container de cada card do curso */
      .curso {
        /* display: inline-block permite que os elementos fiquem lado a lado sem usar float */
        display: inline-block;
        vertical-align: top; /* Alinha os cards pelo topo */
        font-family: Verdana, Geneva, Tahoma, sans-serif; /* Define a fonte padrão */
        border: solid 1px #ccc; /* Borda cinza clara ao redor do card */
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3); /* Sombra para profundidade */
        height: 300px; /* Altura fixa do card */
        width: 260px;  /* Largura fixa do card */
        margin: 5px 20px; /* Espaçamento entre os cards */
        padding: 5px; /* Espaço interno do card */
      }

      /* Estilo da imagem principal do curso dentro do card */
      .curso img {
        width: 100%; /* Faz a imagem ocupar toda a largura do card */
        max-height: 50%; /* Limita a altura da imagem a 50% do card */
      }

      /* Container das informações do curso */
      .curso-info {
        padding: 10px;
        height: 90px; /* Altura fixa para manter os cards iguais */
        overflow: hidden; /* Esconde conteúdo extra que passar da altura */
      }

      /* Título do curso */
      .curso-info h4 {
        font-size: 1.4em; /* Tamanho maior para o título */
        font-weight: 100; /* Peso leve da fonte */
        margin: 0; /* Remove a margem padrão do h4 */
      }

      /* Container do preço do curso */
      .curso-preco {
        float: right; /* Alinha o preço à direita do card */
        margin: 10px;
      }

      /* Preço original do curso, com estilo de riscado */
      .preco-de {
        color: firebrick; /* Cor vermelho escuro */
        text-decoration: line-through; /* Linha cortando o texto */
      }

      /* Preço com desconto */
      .preco-por {
        color: green; /* Cor verde para indicar promoção */
        font-weight: bold; /* Destaca o preço com fonte em negrito */
        font: 1.4em; /* Tamanho da fonte */
      }
    </style>
  </head>

  <body>
    <!-- Título principal da página -->
    <h1>Card</h1>

    <!-- Seção com a imagem de exemplo do que se deseja construir -->
    <h2>Objetivo</h2>
    <img
      src="http://files.cod3r.com.br/curso-web/card.png"
      height="340"
      alt="Objetivo"
    />

    <!-- Seção com o resultado obtido -->
    <h2>Resultado</h2>
    <div>
      <!-- Primeiro card do curso -->
      <div class="curso">
        <img src="http://files.cod3r.com.br/curso-web/curso1.jpg" />
        <div class="curso-info">
          <h4>Docker: Ferramenta essencial para Desenvolvedores</h4>
          <p>Prof. Fulano</p>
        </div>
        <div class="curso-preco">
          <span class="preco-de">R$80,00</span>
          <span class="preco-por">R$50,00</span>
        </div>
      </div>

      <!-- Segundo card do curso -->
      <div class="curso">
        <img src="http://files.cod3r.com.br/curso-web/curso2.jpg" />
        <div class="curso-info">
          <h4>Web Moderno com Javascript + Projetos</h4>
          <p>Prof. Sicrano Filho</p>
        </div>
        <div class="curso-preco">
          <span class="preco-de">R$80,00</span>
          <span class="preco-por">R$50,00</span>
        </div>
      </div>
    </div>
  </body>
</html>
```

---

# 📘 O que foi aprendido com esse código

### 🎯 **Objetivo do Código**

O desafio foi criar uma **interface com cards** de cursos. Cada card exibe:

* Uma **imagem** representando o curso;
* O **título** e o **professor**;
* O **preço original** riscado;
* O **preço promocional** em destaque.

---

### 🎨 **Estilos com CSS**

O **CSS** (Cascading Style Sheets) foi utilizado para definir o visual da página:

* Cards com **borda**, **sombra** e **alinhamento lado a lado** (`inline-block`);
* Controle de **largura e altura** fixas para manter os cards uniformes;
* Estilização do preço com `line-through` e `font-weight: bold`.

---

### 📐 **Alinhamento dos Cards**

Os cards usam `display: inline-block` e `vertical-align: top` para que fiquem lado a lado e alinhados pelo topo. Isso é útil quando queremos evitar o uso de `float` e manter um layout mais controlado.

---

### 💡 **Destaque de Preços**

* O preço original usa `text-decoration: line-through` e `color: firebrick` (vermelho escuro) para parecer um valor antigo.
* O novo preço aparece com `color: green` e destaque de tamanho e negrito, chamando mais atenção do visitante.