# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define a codificação de caracteres para suportar acentos e símbolos especiais -->
    <meta charset="UTF-8">

    <!-- Define o título que aparece na aba do navegador -->
    <title>Overflow</title>

    <style>
        /* Estiliza todos os elementos <div> */
        div {
            font-size: 40px;        /* Define um tamanho grande para o texto */
            height: 100px;          /* Altura fixa de 100px */
            width: 260px;           /* Largura fixa de 260px */
            border: solid 3px;      /* Adiciona uma borda sólida de 3px */

            /*
            overflow: hidden;      Oculta qualquer conteúdo que ultrapassar os limites da div
            overflow: scroll;      Sempre adiciona barras de rolagem (mesmo que não sejam necessárias)
            */

            overflow-x: scroll;     /* Permite rolagem horizontal se o conteúdo ultrapassar a largura */
            overflow-y: hidden;     /* Oculta qualquer conteúdo que ultrapassar a altura */
        }
    </style>
</head>

<body>
    <!-- Caixa com conteúdo grande para testar o comportamento do overflow -->
    <div>
        TudoFuncionaMuitoBemEmCSS!!!
        Texto muito grande para caber nessa div.
        Já pensou qual será o comportamento padrão?
    </div>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 🧱 **Compreendendo o Overflow no CSS**

A propriedade `overflow` no CSS controla **o que acontece quando o conteúdo de um elemento ultrapassa suas dimensões** (largura ou altura).

* `overflow: hidden` → Esconde o conteúdo excedente.
* `overflow: scroll` → Sempre mostra barras de rolagem, mesmo que o conteúdo caiba.
* `overflow: auto` → Mostra barras de rolagem **somente se necessário**.
* `overflow-x` e `overflow-y` → Controlam **separadamente** a rolagem **horizontal** (x) e **vertical** (y).

---

### 🧪 **O que o código demonstra**

* A `div` tem tamanho fixo: `260px` de largura e `100px` de altura.
* O conteúdo dentro da `div` é **muito maior** que o espaço disponível.
* Como `overflow-x: scroll` e `overflow-y: hidden` foram definidos:

  * A **barra de rolagem horizontal** aparece para navegar lateralmente.
  * O conteúdo que ultrapassa **verticalmente** é **escondido**.

---

### 🔍 **Comportamento padrão do overflow**

Sem nenhuma configuração de `overflow`, o navegador permite que o conteúdo **ultrapasse** os limites da caixa, o que pode quebrar o layout.

👉 Usar `overflow` corretamente ajuda a **controlar o layout**, especialmente quando há conteúdo dinâmico ou limitado por tamanho fixo.

---

### 🧠 **Dicas Importantes**

* Use `overflow-x` e `overflow-y` para ter **controle detalhado** da rolagem em cada direção.
* Sempre que limitar `width` ou `height`, pense no que deve acontecer com o conteúdo que **não cabe**.
* `overflow: auto` é geralmente a opção mais equilibrada.

---

### 🧾 **Resumo do Aprendizado**

* Aprendemos como a propriedade `overflow` **controla o conteúdo excedente**.
* Vimos como usar `overflow-x` e `overflow-y` **separadamente**.
* Testamos visualmente o efeito da rolagem horizontal com conteúdo extenso.
* Compreendemos a importância do `overflow` para **preservar o layout da página**.