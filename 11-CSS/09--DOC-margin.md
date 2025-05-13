# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define a codificação de caracteres para suportar acentos e caracteres especiais -->
    <meta charset="UTF-8">

    <!-- Define o título que aparece na aba do navegador -->
    <title>Margin</title>

    <style>
        /* Remove a margem padrão do body e define um tamanho grande de fonte para melhor visualização */
        body {
            margin: 0;
            font-size: 40px;
        }

        /* Aplica uma borda a todas as divs */
        div {
            border: solid 5px #222; /* Borda de 5px na cor cinza escuro (#222) */
        }

        /* Aplica uma margem de 30px em todos os lados */
        .m30 {
            margin: 30px;
        }

        /* Aplica uma margem inferior de 30px */
        .mb30 {
            margin-bottom: 30px;
        }

        /* Aplica uma margem superior de 30px */
        .mt30 {
            margin-top: 30px;
        }

        /*
            Observação:
            Propriedades como float, position e display podem afetar o comportamento de margens.
            Exemplos:
            - float: left / right
            - position: absolute
            - display: inline-block
        */
    </style>
</head>

<body>
    <!-- Div com margem completa (30px em todos os lados) -->
    <div class="m30">Conteúdo 1</div>

    <!-- Div com margem completa, mas sem borda (isso ajuda a visualizar o colapso de margens) -->
    <div class="m30" style="border: none"></div>

    <!-- Outra div com margem completa -->
    <div class="m30">Conteúdo 2</div>

    <!-- Div com margem inferior de 30px -->
    <div class="mb30">Conteúdo 3</div>

    <!-- Div com margem superior de 30px -->
    <div class="mt30">Conteúdo 4</div>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 🧱 **O que é o colapso de margens (margin collapse)?**

O **margin collapse** acontece quando margens verticais de dois elementos se "juntam" em vez de se somarem.

🔍 Por exemplo:

* Se uma `<div>` com `margin-bottom: 30px` estiver logo acima de outra com `margin-top: 30px`, o espaçamento total entre elas **não será 60px**, mas **30px**.
* Isso acontece porque as **margens verticais colapsam**, ou seja, a maior delas prevalece.

---

### 🧪 **Aplicação prática no código**

No exemplo acima:

* As `div.m30` têm margem completa (30px em todos os lados).
* Uma delas está sem borda (`style="border: none"`), o que permite visualizar o colapso das margens com mais clareza.
* As `div.mb30` e `div.mt30` demonstram o colapso de margens entre elementos consecutivos:

```html
<div class="mb30">Conteúdo 3</div>
<div class="mt30">Conteúdo 4</div>
```

✅ Mesmo que ambas tenham margens de 30px, o espaço entre elas **não será 60px**, mas **30px** (a maior margem prevalece).

---

### 🧠 **Curiosidades úteis**

* O colapso de margens **só acontece verticalmente** (cima e baixo), **nunca horizontalmente** (esquerda e direita).
* Se um elemento tiver **bordas, padding ou conteúdo entre margens**, o colapso pode **não acontecer**.
* Elementos com `float`, `position: absolute` ou `display: inline-block` **não sofrem colapso de margem**.

---

### 🎯 **Resumo do Aprendizado**

* Aprendemos que margens verticais **podem colapsar**, ou seja, se sobrepõem em vez de se somarem.
* O colapso **reduz o espaço entre elementos** consecutivos com margens superiores e inferiores.
* Bordas e conteúdos intermediários podem **impedir** o colapso.
* Esse comportamento é importante para o **controle preciso do layout** em CSS.