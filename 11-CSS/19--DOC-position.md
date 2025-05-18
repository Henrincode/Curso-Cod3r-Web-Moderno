# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define a codificação de caracteres para suportar acentos e caracteres especiais -->
    <meta charset="UTF-8">

    <!-- Define o título da página que aparece na aba do navegador -->
    <title>Position</title>

    <style>
        /* Estilo padrão para todas as divs */
        div {
            font-size: 60px; /* Aumenta o tamanho da fonte para melhor visualização */
            padding: 30px;    /* Espaço interno de 30px */
            border: solid 5px #222; /* Borda sólida de 5px com cor cinza escura */
        }

        /* Sem position definida - comportamento padrão (static) */
        .static {
            top: 100px; /* Essas propriedades não têm efeito em elementos static */
            left: 100px;
            background-color: steelblue; /* Cor de fundo azul */
        }

        /* Fixa o elemento na tela, mesmo com rolagem */
        .fixed {
            position: fixed;
            bottom: 30px; /* Fixa a 30px do rodapé */
            right: 0px;   /* Alinha à direita da tela */
            background-color: tomato; /* Cor de fundo vermelha */
        }

        /* Move o elemento relativo à sua posição original */
        .relative1 {
            position: relative;
            left: 50px;   /* Move 50px para a direita */
            top: 5px;     /* Move 5px para baixo */
            background-color: seagreen; /* Cor verde */
        }

        /* Posiciona o elemento com base no antecessor mais próximo com posição relativa */
        .absolute1 {
            position: absolute;
            left: 350px;  /* Distância da esquerda da página */
            top: 120px;   /* Distância do topo da página */
            background-color: violet; /* Cor violeta */
        }

        /* Container com posição relativa para conter o .absolute2 */
        .relative2 {
            position: relative;
            left: 250px;
            top: 2000px; /* Move o elemento para baixo (simula rolagem) */
            width: 200px;
            height: 200px;
            background-color: slategrey; /* Cor cinza-azulada */
        }

        /* Posicionado absolutamente dentro do .relative2 */
        .absolute2 {
            position: absolute;
            left: 10px;
            top: 10px;
            width: 20px;
            height: 20px;
            background-color: orange; /* Cor laranja */
        }

        /* Gruda o elemento no topo ao rolar a página */
        .sticky {
            position: sticky;
            background-color: #777; /* Cinza médio */
            top: 0; /* Gruda no topo quando a rolagem atinge o elemento */
        }
    </style>
</head>

<body>
    <!-- Elemento com comportamento padrão (static) -->
    <div class="static">Static (Padrão)</div>

    <!-- Elemento fixado na parte inferior da tela -->
    <div class="fixed">Fixed</div>

    <!-- Elemento com posição relativa -->
    <div class="relative1">Relative</div>

    <!-- Elemento com posição absoluta (em relação ao body) -->
    <div class="absolute1">Absolute</div>

    <!-- Container com position relative -->
    <div class="relative2">
        <!-- Posicionado absolutamente dentro do container relativo -->
        <div class="absolute2"></div>
    </div>

    <!-- Elemento sticky que gruda no topo ao rolar -->
    <div class="sticky">Sticky</div>

    <!-- Espaço extra para rolagem -->
    <p style="padding-bottom: 2000px;">Opa</p>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 🧱 **O que é a propriedade `position` no CSS?**

A propriedade `position` define como um elemento é posicionado na página. Existem 5 valores principais:

---

### 🧍‍♂️ **`static` — Posição padrão**

* Todos os elementos têm `position: static` por padrão.
* **Não** reage às propriedades `top`, `left`, `right`, `bottom`.

```css
.static {
  position: static;
  top: 100px; /* Ignorado */
}
```

---

### 📌 **`fixed` — Fixo na tela**

* Fica **preso à tela**, mesmo com rolagem.
* Usa como referência a **janela do navegador**, e **não o elemento pai**.
* Muito usado para **menus flutuantes**, **botões fixos**, etc.

```css
.fixed {
  position: fixed;
  bottom: 30px;
  right: 0;
}
```

---

### 📦 **`relative` — Posição relativa**

* Posiciona o elemento **em relação à sua posição original**.
* Permite deslocar com `top`, `left`, etc., **sem sair do fluxo da página**.

```css
.relative1 {
  position: relative;
  left: 50px;
}
```

---

### 🧩 **`absolute` — Absoluto em relação ao ancestral com `position`**

* Sai do fluxo da página.
* É posicionado em relação ao **elemento pai mais próximo que tenha `position: relative`, `absolute`, `fixed` ou `sticky`**.
* Se **nenhum pai tiver posição definida**, usa o `body` como referência.

```css
.absolute1 {
  position: absolute;
  left: 350px;
}
```

➡️ Veja como `.absolute2` fica **dentro de `.relative2`**. Ele usa esse container como base.

---

### 🧲 **`sticky` — Fica grudado ao rolar**

* Começa como `relative`, mas **"gruda" quando atinge um ponto definido com `top`, `left` etc.**
* Útil para menus ou cabeçalhos fixos **durante a rolagem**, mas **sem sair do fluxo da página**.

```css
.sticky {
  position: sticky;
  top: 0;
}
```

---

### 🔍 **Resumo dos comportamentos**

| Valor      | Fica no fluxo? | Move com `top`/`left`? | Exemplo prático                 |
| ---------- | -------------- | ---------------------- | ------------------------------- |
| `static`   | ✅ Sim          | ❌ Não                  | Layout padrão                   |
| `relative` | ✅ Sim          | ✅ Sim                  | Ajustes sutis no posicionamento |
| `absolute` | ❌ Não          | ✅ Sim                  | Modais, tooltips, balões        |
| `fixed`    | ❌ Não          | ✅ Sim                  | Botões flutuantes, cabeçalhos   |
| `sticky`   | ✅ Sim          | ✅ Sim                  | Menus fixos ao rolar            |

---

### 🎯 **Resumo do Aprendizado**

* Aprendemos o que é `position` no CSS e os diferentes comportamentos que ela define.
* Vimos que `relative`, `absolute`, `fixed` e `sticky` podem afetar drasticamente como um elemento aparece na tela.
* Elementos com `position: absolute` se baseiam em seus ancestrais com `position` definida.
* `fixed` e `sticky` são úteis para manter elementos visíveis durante a rolagem.
* Compreender essas posições é essencial para **criar layouts modernos e responsivos** com CSS.