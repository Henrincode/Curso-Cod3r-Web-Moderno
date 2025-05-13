# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define a codificação de caracteres para suportar acentos e símbolos especiais -->
    <meta charset="UTF-8">

    <!-- Define o título da aba do navegador -->
    <title>Display</title>

    <style>
        /* Estiliza o corpo da página com uma fonte grande, cor branca e fundo coral */
        body {
            font-size: 40px;
            color: #fff;
            background-color: coral;
        }

        /* Remove o espaçamento interno padrão da lista */
        ul {
            padding: 0;
        }

        /* Define a cor de fundo das divs como verde-mar */
        div {
            background-color: seagreen;
        }

        /* Define a cor de fundo dos elementos <span> como azul */
        span {
            background-color: dodgerblue;
        }

        /* Define a cor de fundo dos itens de lista como roxo */
        li {
            background-color: purple;
        }

        /* Aplica as mesmas regras de tamanho, alinhamento e exibição para div, span e li */
        div,
        span,
        li {
            width: 50%;           /* Esta linha será sobrescrita pela próxima */
            width: 200px;         /* Largura fixa de 200px */
            height: 80px;         /* Altura fixa de 80px */
            padding-top: 30px;    /* Espaço interno no topo de 30px */
            text-align: center;   /* Centraliza o texto horizontalmente */

            /* As três declarações de display abaixo se sobrescrevem.
               A última (inline-block) é a que será aplicada. */
            display: inline;
            display: block;
            display: inline-block;
        }
    </style>
</head>

<body>
    <!-- Div que será renderizada como inline-block com fundo verde -->
    <div>Texto 1</div>

    <!-- Spans que também terão comportamento inline-block com fundo azul -->
    <span>Texto 2</span>
    <span>Texto 3</span>

    <!-- Lista com itens estilizados individualmente -->
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 🧾 **O que é a propriedade `display` no CSS?**

A propriedade `display` define **como um elemento será exibido** no layout da página. Ela é uma das mais importantes do CSS, pois controla o comportamento visual dos elementos HTML.

---

### 🧩 **Principais valores usados no código**

* `inline` – O elemento não quebra linha e só ocupa o espaço do conteúdo. **Altura, largura, padding vertical e margin vertical geralmente não funcionam.**
* `block` – O elemento **quebra linha** e ocupa toda a largura disponível. Altura e largura podem ser definidas.
* `inline-block` – Mistura os comportamentos de `inline` e `block`: **não quebra linha**, **mas aceita altura e largura**.

⚠️ No código, foram usadas **três declarações `display` seguidas**, mas **apenas a última (`inline-block`) é aplicada**, pois as anteriores são sobrescritas.

---

### 🧪 **Aplicação prática no exemplo**

No código:

* Todos os elementos `<div>`, `<span>` e `<li>` foram configurados com `display: inline-block`.
* Isso faz com que:

  * Os elementos **fiquem lado a lado** (como `inline`).
  * Mas também **possam ter largura e altura definidas** (como `block`).
* Mesmo `div` e `li`, que são naturalmente `block`, se comportam de forma mais flexível.

---

### 🧠 **Dicas e observações úteis**

* O `display` padrão de alguns elementos:

  * `div`: block
  * `span`: inline
  * `li`: list-item (exibe marcadores de lista)
* Quando você muda o `display`, pode mudar **completamente o comportamento visual e estrutural** do elemento.
* `inline-block` é muito útil quando se deseja criar layouts em linha com elementos que precisam de tamanho ajustável.

---

### 🎯 **Resumo do Aprendizado**

* Aprendemos a usar o `display` para controlar o layout dos elementos.
* Vimos que valores diferentes de `display` (inline, block e inline-block) influenciam diretamente como os elementos são renderizados.
* O uso de `inline-block` permite alinhar elementos horizontalmente **sem perder a capacidade de definir altura e largura**.
* Atenção: a **última declaração de uma mesma propriedade** (como `display`) é a que vale — evite escrever múltiplos valores sem necessidade.