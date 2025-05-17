# ✅ Código com Comentários Corrigidos

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Define a codificação de caracteres para acentuação e caracteres especiais -->
    <meta charset="UTF-8" />

    <!-- Define o título da página exibido na aba do navegador -->
    <title>Desafio Menu</title>

    <!-- Fonte personalizada "Oswald" importada do Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Oswald"
      rel="stylesheet"
    />

    <!-- Ícones da biblioteca Font Awesome -->
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />

    <style>
      /* Aplica o modelo de caixa border-box a todos os elementos */
      * {
        box-sizing: border-box;
      }

      /* Estilo do corpo da página */
      body {
        margin: 0; /* Remove a margem padrão */
        font-family: "Oswald", sans-serif; /* Define a fonte */
        background-color: lightgray; /* Cor de fundo cinza claro */
      }

      /* Cabeçalho principal */
      .cabecalho {
        background-color: #333; /* Fundo escuro */
        border-bottom: solid 5px #4faddb; /* Linha azul na parte inferior */
        height: 80px;
        box-sizing: content-box;
      }

      /* Logo do cabeçalho */
      .logo {
        display: inline-block; /* Permite ficar ao lado do menu */
        height: 80px;
        padding: 15px;
      }

      /* Imagem dentro da logo */
      .logo img {
        height: 100%; /* Faz a imagem ocupar toda a altura disponível */
      }

      /* Botão que alterna o menu (ícone de "hambúrguer") */
      .menu-toggle {
        float: right; /* Alinha à direita */
        color: #eee;
        background-color: #555;
        border: solid 1px #777;
        border-radius: 5px;
        height: 40px;
        padding: 10px 20px;
        margin: 20px 15px;
      }

      /* Área do menu principal */
      .menu {
        display: inline-block;
        vertical-align: top;
      }

      /* Estilo da lista de links do menu */
      .menu ul {
        margin: 0;
        padding: 0;
        height: 80px;
        padding: 25px; /* Espaçamento interno */
      }

      /* Itens de menu exibidos lado a lado */
      .menu li {
        display: inline-block;
      }

      /* Estiliza todos os links dentro do cabeçalho */
      .cabecalho a {
        text-decoration: none; /* Remove sublinhado */
        color: #eee; /* Cor clara */
        font-size: 1.3em; /* Tamanho da fonte */
      }

      /* Espaçamento interno dos links do menu */
      .menu a {
        padding: 15px;
      }

      /* Área de login/registro no canto direito */
      .autenticacao {
        float: right;
        height: 80px;
        padding: 25px;
      }

      /* Estilo para quando o link está selecionado ou com mouse sobre ele */
      .menu a:hover,
      .menu a.selected {
        background-color: #4faddb; /* Cor de destaque */
        color: #000; /* Texto preto */
        border-radius: 25px;
      }

      /* Estilo base dos botões */
      .botao {
        border-radius: 30px;
        padding: 10px 25px;
        margin: 10px;
      }

      /* Botão com destaque em vermelho */
      .destaque {
        background-color: #f50a31;
        color: #fff;
      }

      /* Esconde o botão de menu em telas maiores (não é necessário) */
      @media (min-width: 910px) {
        .menu-toggle {
          display: none;
        }
      }

      /* Esconde o menu em telas pequenas */
      @media (max-width: 760px) {
        .menu {
          display: none;
        }
      }

      /* Esconde a seção de login em telas pequenas */
      @media (max-width: 910px) {
        .autenticacao {
          display: none;
        }
      }
    </style>
  </head>

  <body>
    <!-- Cabeçalho principal da página -->
    <header class="cabecalho">
      <!-- Logo clicável que leva para o início -->
      <div class="logo">
        <a href="#inicio">
          <img src="http://files.cod3r.com.br/curso-web/logo.png" alt="Logo" />
        </a>
      </div>

      <!-- Botão do menu para dispositivos móveis -->
      <button class="menu-toggle">
        <i class="fa fa-lg fa-bars"></i>
      </button>

      <!-- Menu de navegação -->
      <nav class="menu">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#cursos">Cursos</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <!-- Área de autenticação (Login e Registro) -->
      <aside class="autenticacao">
        <a href="#login">Login</a>
        <a href="#registar" class="botao destaque">Registrar</a>
      </aside>
    </header>

    <!-- Script para trocar a classe "selected" ao trocar de seção no menu -->
    <script>
      window.onhashchange = function (e) {
        const oldURL = e.oldURL.split("#")[1]; // Extrai a âncora anterior da URL
        const newURL = e.newURL.split("#")[1]; // Extrai a nova âncora da URL
        console.log(oldURL, newURL); // Exibe no console as mudanças

        // Remove a seleção do link anterior
        const oldLink = document.querySelector(`.menu a[href='#${oldURL}']`);
        oldLink && oldLink.classList.remove("selected");

        // Adiciona a seleção no novo link
        const newLink = document.querySelector(`.menu a[href='#${newURL}']`);
        newLink && newLink.classList.add("selected");
      };
    </script>
  </body>
</html>
```

---

# 📘 O que foi aprendido com esse código

### 🎯 **Objetivo do Código**

Este desafio foi feito para **praticar a criação de um cabeçalho responsivo**, com:

* Uma **logo clicável**
* Um **menu de navegação**
* Área de **login e registro**
* Um **botão de menu para dispositivos móveis**
* Estilos personalizados com CSS
* Um pequeno **script em JavaScript** para trocar a cor do link ativo

---

### 🎨 **Estilos com CSS**

O CSS define cores, tamanhos, espaçamentos e como os elementos se comportam em diferentes larguras de tela.

✔️ Foi utilizado o `@media` para adaptar o layout em telas **menores** (celulares/tablets), escondendo o menu tradicional e o botão de login, e exibindo apenas o botão do menu.

---

### 💡 **JavaScript com `onhashchange`**

Esse trecho escuta alterações na URL (quando você clica em um link que usa `#âncora`) e aplica a classe `.selected` no menu ativo:

```js
window.onhashchange = function (e) {
  // troca visual do link selecionado no menu
};
```

✅ Isso cria o **efeito visual** de "menu ativo", onde o item clicado fica com destaque.

---

### 📱 **Responsividade com Media Queries**

Foram usadas regras como:

```css
@media (max-width: 760px) {
  .menu {
    display: none;
  }
}
```

✅ Assim, o menu é **ocultado em celulares**, e o botão de hambúrguer (`.menu-toggle`) pode ser usado para mostrá-lo com JavaScript futuramente.

---

### 🧪 **Resumo Geral**

| Elemento        | Função                                                  |
| --------------- | ------------------------------------------------------- |
| `.cabecalho`    | Cabeçalho da página                                     |
| `.logo`         | Imagem clicável do logo                                 |
| `.menu`         | Navegação principal                                     |
| `.autenticacao` | Área de login e registro                                |
| `@media`        | Adaptação para diferentes tamanhos de tela              |
| `JavaScript`    | Trocando a classe selecionada com base na âncora da URL |