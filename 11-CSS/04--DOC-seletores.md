# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define a codificação de caracteres para suportar acentuação -->
    <meta charset="UTF-8">
    <title>CSS Selectors</title>

    <!-- Importa um arquivo CSS externo -->
    <link rel="stylesheet" href="css/tag.css">

    <style>
        /*
        * Seletor Universal - Aplica a todos os elementos
        * {}

        .tag
        * Seletor de Classe - Aplica aos elementos que possuem a classe "tag"

        #aprovados
        * Seletor de ID - Aplica apenas ao elemento com o id "aprovados"

        #aninhado > div
        * Seletor de Filho Direto - Seleciona apenas divs diretamente dentro de #aninhado

        #aninhado > section
        * Outro exemplo de filho direto: section diretamente dentro de #aninhado

        #aninhado section
        * Seletor Descendente - Seleciona qualquer section dentro de #aninhado, em qualquer nível

        p + ul
        * Seletor Adjacente - Seleciona ul que vem logo após um p (irmão imediato)

        p + ol
        * Outro seletor adjacente: ol logo após p

        p ~ ol
        * Seletor de Irmão Geral - Seleciona todos os ol que estão no mesmo nível e após um p

        [feira]
        * Seletor por Atributo - Seleciona elementos que possuem o atributo "feira"

        [feira="casa"]
        * Atributo com valor exato - Seleciona onde feira é exatamente "casa"

        [feira~="escritorio"]
        * Atributo com valor separado por espaços - Seleciona onde uma das palavras é "escritorio"

        [feira*="as"]
        * Atributo que contém sequência de letras - Seleciona onde "feira" contém "as" em qualquer parte

        span:nth-child(1)
        * Seleciona o primeiro filho de seu pai, se for uma tag <span>

        selection > :nth-child(odd)
        * Seleciona filhos ímpares diretos de "selection" (1º, 3º, 5º...)

        selection > :nth-child(even)
        * Seleciona filhos pares diretos de "selection" (2º, 4º, 6º...)

        selection > :nth-child(odd), ul, p
        * Múltiplos Seletores - Aplica para filhos ímpares de selection, além de ul e p

        selection > :nth-child(odd) label
        * Seleciona label dentro dos filhos ímpares de selection

        selection > span:nth-of-type(2)
        * Seleciona o segundo <span> direto dentro de selection
        */

        /* Exemplo de uso do seletor universal desativado:
        * {
            color: #ff0;
            background-color: #f77;
        }
        */
    </style>
</head>

<body>
    <div class='tag'>
        <div class='tag'>
            <p class='tag'>1</p>

            <!-- Lista com atributo feira="casa" -->
            <ul class='tag' feira='casa'>
                <li>Arroz</li>
                <li>Feijão</li>
            </ul>

            <!-- Lista com múltiplos valores no atributo feira -->
            <ul class='tag' feira='escritorio empresa'>
                <li>Café</li>
                <li>Água</li>
            </ul>

            <!-- Lista ordenada com ID específico -->
            <ol id='aprovados' class='tag'>
                <li>Maria</li>
                <li>Pedro</li>
                <li>Ana</li>
            </ol>

            <!-- Estrutura com aninhamento -->
            <div id='aninhado' class='tag'>
                <div class="tag">
                    <section class='tag nolabel'>
                        <span class='tag'>1</span>
                        <p class='tag'>2</p>
                        <span class='tag'>3</span>
                    </section>
                </div>
            </div>
        </div>
    </div>

    <!-- Script que estiliza as tags com cores e labels -->
    <script src="js/tag.js"></script>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 🎯 **Seletores CSS: entendendo as formas de selecionar elementos**

Aprendemos diferentes formas de selecionar elementos no CSS:

* `*` seleciona **todos os elementos** (seletor universal).
* `.classe` seleciona **todos os elementos com a classe especificada**.
* `#id` seleciona **um único elemento com o ID especificado**.
* `pai > filho` seleciona **apenas filhos diretos**.
* `pai filho` seleciona **todos os descendentes em qualquer nível**.
* `irmão1 + irmão2` seleciona **irmão imediatamente após**.
* `irmão1 ~ irmão2` seleciona **todos os irmãos posteriores** no mesmo nível.
* `[atributo]` seleciona elementos que possuem **um atributo específico**.
* `[atributo=valor]`, `[atributo~=palavra]`, `[atributo*=letras]` são formas mais específicas de **filtrar atributos**.

---

### 🧪 **Pseudo-classes com `:nth-child()` e `:nth-of-type()`**

Essas pseudo-classes permitem **selecionar elementos com base em sua posição entre os irmãos**:

* `:nth-child(odd)` = ímpares (1º, 3º, 5º...)
* `:nth-child(even)` = pares (2º, 4º, 6º...)
* `:nth-of-type(n)` = seleciona o n-ésimo elemento de um tipo específico (por exemplo, o segundo `<span>`)

---

### 🏷️ **Seletor por Atributo: mais controle na seleção**

Você também aprendeu a usar **atributos personalizados** para aplicar estilos, o que é muito útil para criar filtros visuais sem depender apenas de classes ou IDs.

---

### 🧠 **Resumo do Aprendizado**

* Como usar **seletores CSS avançados** para estilizar elementos com mais precisão.
* Como combinar **classes, IDs, atributos e pseudo-classes** para ter maior controle no design.
* Como usar `tag.js` para aplicar **cores e rótulos automaticamente** com base na tag HTML.