# ✅ Código com comentários:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Define a codificação de caracteres como UTF-8 -->
    <meta charset="UTF-8" />

    <!-- Título da página que aparece na aba do navegador -->
    <title>Origem CSS: Externo, Interno e Inline</title>

    <style>
      /* CSS Interno: aplica um estilo diretamente no documento HTML */
      body {
        background-color: aquamarine; /* Cor de fundo definida como aquamarine */
      }
    </style>

    <!-- CSS Externo: importa um arquivo de estilos localizado em 'css/externo.css' -->
    <link rel="stylesheet" href="css/externo.css" />
  </head>

  <!-- CSS Inline: estilo aplicado diretamente no elemento -->
  <body style="background-color: coral">
    <h1>E agora?</h1>
  </body>
</html>
```

---

# 📘 O que foi aprendido:

### 🎨 **O que é CSS e para que serve?**

CSS (Cascading Style Sheets) é a linguagem usada para aplicar **estilos visuais** aos elementos HTML, como cores, tamanhos, fontes e layouts.

No exemplo, aprendemos três formas diferentes de usar CSS:

---

### 🧩 **Tipos de CSS: Inline, Interno e Externo**

#### 🟠 **CSS Inline**

* Aplicado **diretamente no elemento HTML**, usando o atributo `style`.
* Exemplo do código:

  ```html
  <body style="background-color: coral">
  ```
* Prioridade **mais alta** entre os três tipos.

#### 🟢 **CSS Interno**

* Escrito **dentro da tag `<style>` no `<head>`** do documento HTML.
* Exemplo do código:

  ```html
  <style>
    body {
      background-color: aquamarine;
    }
  </style>
  ```

#### 🔵 **CSS Externo**

* Escrito em um **arquivo separado**, vinculado ao HTML com `<link>`.
* Exemplo do código:

  ```html
  <link rel="stylesheet" href="css/externo.css" />
  ```

---

### ⚠️ **Qual estilo é aplicado afinal?**

Mesmo que o CSS Interno defina a cor de fundo como `aquamarine`, o estilo **Inline** (`background-color: coral`) **vence**, pois tem maior prioridade. Por isso, o fundo da página será **coral**.

---

### 🧠 **Resumo da Hierarquia de Prioridade (especificidade)**

1. **CSS Inline** (mais forte)
2. **CSS Interno e Externo** (dependem da ordem de carregamento e especificidade)
3. **Estilo padrão do navegador** (se nada for definido)