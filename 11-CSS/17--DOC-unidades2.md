# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define o conjunto de caracteres como UTF-8 (suporta acentuação) -->
    <meta charset="UTF-8">
    
    <!-- Define o título exibido na aba do navegador -->
    <title>Unidades #02</title>

    <style>
        /* Container externo com posição relativa */
        .fora {
            position: relative; /* Define como referência para elementos filhos com position: absolute */
            background-color: orange;
            height: 400px;      /* Altura fixa */
            width: 400px;       /* Largura fixa */
            padding: 50px;      /* Espaço interno em todos os lados */
        }

        /* Elemento interno com diferentes tipos de posicionamento */
        .dentro {
            background-color: mediumvioletred;
            height: 100px;
            width: 100%; /* Largura relativa ao elemento pai */

            /* Comentários explicando os diferentes valores de position: */

            /* position: static;  Padrão – o elemento segue o fluxo normal do HTML */
            
            /* position: relative; Permite mover o elemento com top/right/bottom/left, mas sem tirá-lo do fluxo */
            
            /* position: absolute; Remove o elemento do fluxo e posiciona em relação ao elemento pai com position diferente de static */
            
            /* position: fixed; Fixa o elemento na tela, mesmo com rolagem, em relação à viewport */

            /* Para testes, ative apenas um 'position' por vez */
            position: absolute; /* Exemplo ativado */
        }
    </style>
</head>

<body>
    <div class="fora">
        <div class="dentro"></div>
    </div>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 🧱 **Unidades relativas (%):**

A unidade `%` usada em `width: 100%` define a largura da `.dentro` **relativa ao tamanho da div pai (`.fora`)**. Ou seja, ela ocupará toda a largura da área disponível dentro de `.fora`.

---

### 🧭 **Propriedade `position` no CSS:**

A propriedade `position` define **como um elemento é posicionado** na página. Existem várias opções, e cada uma tem um comportamento específico:

#### 🧊 `static` (padrão)

* O elemento **segue o fluxo natural do HTML**.
* Não aceita valores como `top`, `left`, `right` ou `bottom`.

#### 📍 `relative`

* O elemento **continua no fluxo normal**, mas **pode ser movido** com `top`, `left`, etc.
* Serve como **referência** para seus elementos filhos com `position: absolute`.

#### 📌 `absolute`

* O elemento **sai do fluxo normal** e é posicionado **em relação ao primeiro elemento pai com `position` diferente de `static`**.
* Se não houver pai posicionado, será em relação ao `<body>`.

#### 📎 `fixed`

* O elemento também **sai do fluxo**, mas fica **preso à viewport** (tela).
* Mesmo com rolagem da página, ele **fica fixo no lugar** (ex: cabeçalhos fixos).

---

### 📐 **Contexto de uso dos valores de `position`:**

* Use `relative` quando você **precisa ajustar a posição levemente**, sem tirar do fluxo.
* Use `absolute` para posicionar elementos **precisamente dentro de um container**.
* Use `fixed` para elementos **sempre visíveis**, como botões de "voltar ao topo".
* Use `static` (ou nenhum `position`) quando o comportamento **padrão** for suficiente.

---

### 💡 **Resumo do Aprendizado**

* Aprendemos como usar **unidades relativas (%)** para que o layout se adapte ao tamanho do elemento pai.
* Entendemos como funciona a propriedade `position` e seus principais valores: `static`, `relative`, `absolute` e `fixed`.
* A prática com o exemplo mostrou como **cada tipo de posicionamento altera o comportamento do elemento** na página.
* Também vimos que o posicionamento `absolute` depende de um pai com `position: relative` (ou similar) para ter referência.