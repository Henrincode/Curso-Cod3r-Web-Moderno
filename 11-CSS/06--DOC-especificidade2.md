# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define a codificação de caracteres para suportar acentuação -->
    <meta charset="UTF-8">
    <title>Especificidade CSS</title>

    <style>
        /* Fonte para consulta visual: https://specificity.keegan.st/ */

        /*
            Ordem de especificidade do CSS (da maior para a menor):

            1. Estilos inline (atributo style no HTML)
            2. Seletores por ID (#exemplo)
            3. Classes (.classe), pseudo-classes (:hover) e atributos ([atributo])
            4. Elementos (div, p, h1...) e pseudo-elementos (::before, ::after)
        */

        body {
            font-size: 40px; /* Define o tamanho da fonte do corpo */
        }

        div {
            background-color: #00b; /* Azul escuro padrão para <div> */
            color: #fff; /* Texto branco */
        }

        div[wm-cor] {
            background-color: darkorange; /* Mais específico por usar seletor de atributo */
        }

        div.estilo {
            background-color: green; /* Classe 'estilo' é mais específica que apenas div */
        }

        div:hover {
            background-color: purple; /* Aplica quando o mouse passa sobre qualquer div */
        }

        #unico1,
        #unico2 {
            background-color: #000; /* IDs têm maior prioridade que classe e atributo */
        }

        div:hover,
        #unico1:hover {
            background-color: purple; /* Regra combinada: ao passar o mouse sobre qualquer div ou #unico1 */
        }
    </style>
</head>

<body>
    <!-- Estilo inline tem a maior prioridade -->
    <div id="unico1" class="estilo" style="background-color: red;">
        #unico1 vs .estilo vs inline
    </div>

    <!-- ID e classe competem; ID tem maior especificidade -->
    <div id="unico2" class="estilo">#unico2 vs .estilo</div>

    <!-- Atributo wm-cor vs classe estilo (empate, última regra vence) -->
    <div class="estilo" wm-cor>.estilo vs wm-cor</div>

    <!-- Apenas o atributo wm-cor será aplicado -->
    <div wm-cor>wm-cor</div>

    <!-- Apenas a classe estilo será aplicada -->
    <div class="estilo">.estilo</div>

    <!-- Estilo mais genérico, apenas a regra do elemento div -->
    <div>elemento</div>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 🎯 **O que é Especificidade no CSS?**

A **especificidade** é uma regra do CSS que determina **qual estilo será aplicado** quando dois ou mais seletores disputam o controle sobre o mesmo elemento.

---

### 📊 **Ordem de prioridade da Especificidade**

Do mais forte para o mais fraco:

1. **Inline** – Estilo diretamente no HTML (`style="..."`)
2. **ID** – Seletor `#id`
3. **Classe / Atributo / Pseudo-classe** – `.classe`, `[atributo]`, `:hover`
4. **Elemento / Pseudo-elemento** – `div`, `p`, `::before`

> Em caso de empate, **a última regra lida no CSS vence**.

---

### 🧪 **Comparação Prática de Especificidade**

Vamos comparar os elementos do exemplo:

* 🔴 `<div id="unico1" class="estilo" style="background-color: red;">`

  * `style="..."` (inline) vence todas as regras. O fundo será **vermelho**.
  * Mesmo com a classe `.estilo` ou o ID `#unico1`, o estilo inline ganha.

* ⚫ `<div id="unico2" class="estilo">`

  * O ID `#unico2` vence sobre `.estilo`, então o fundo será **preto** (`#000`).

* 🟧 `<div class="estilo" wm-cor>`

  * O seletor `[wm-cor]` e `.estilo` têm o **mesmo peso**, mas quem estiver **por último no CSS** vence.
  * Resultado: fundo será **verde**, pois `div.estilo` aparece depois.

* 🟠 `<div wm-cor>`

  * Apenas o seletor de atributo se aplica: fundo será **laranja escuro** (`darkorange`).

* 🟩 `<div class="estilo">`

  * Aplicará o fundo da classe `.estilo`: **verde**.

* 🔵 `<div>`

  * Sem classe, sem ID, sem atributo. Aplica o estilo do seletor genérico `div`: **azul escuro** (`#00b`).

---

### 🖱️ **Efeito Hover**

Quando o mouse passa sobre um `<div>`, o fundo muda para **roxo** (`purple`) por causa do seletor `div:hover`.

No caso de `#unico1:hover`, como ele também está listado junto no seletor `#unico1:hover`, ele recebe o mesmo efeito.

---

### 🧠 **Resumo do Aprendizado**

* Estudamos como funciona a **ordem de prioridade das regras CSS**.
* Vimos que estilos **inline sempre vencem**, seguidos por **ID**, **classe/atributo**, e por fim **tags**.
* Aprendemos que o **último seletor no CSS vence em caso de empate**.
* O efeito `:hover` permite **mudar o estilo quando o mouse passa** sobre o elemento.
* Saber usar especificidade evita conflitos e torna o código **mais organizado e fácil de manter**.