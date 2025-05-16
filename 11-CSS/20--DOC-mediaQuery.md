# ✅ Código com Comentários Corrigidos:

```html
<!DOCTYPE html>
<html>

<head>
  <!-- Define a codificação de caracteres para suportar acentos e caracteres especiais -->
  <meta charset="UTF-8" />

  <!-- Título da página exibido na aba do navegador -->
  <title>Media Query</title>

  <style>
    /* Estilo padrão para todas as divs */
    div {
      font-size: 40px; /* Tamanho da fonte para facilitar a leitura */
      margin: 20px;     /* Espaço externo ao redor da div */
      padding: 20px;    /* Espaço interno dentro da div */
      background-color: coral; /* Cor de fundo coral */
      border: solid 5px; /* Borda sólida de 5px */
      display: none;     /* Oculta todas as divs por padrão */
    }

    /* Exibe a div somente em telas com largura de até 600px */
    @media (max-width: 600px) {
      .muito-pequeno {
        display: block;
      }
    }

    /* Exibe a div em telas com largura de até 1000px OU se a orientação for retrato */
    @media (max-width: 1000px), (orientation: portrait) {
      .pequeno-retrato {
        display: block;
      }
    }

    /* Exibe a div em telas com largura entre 500px e 1000px */
    @media (min-width: 500px) and (max-width: 1000px) {
      .intervalo {
        display: block;
      }
    }
  </style>
</head>

<body>
  <!-- Essa div aparece apenas em telas muito pequenas (até 600px) -->
  <div class="muito-pequeno">Muito Pequeno</div>

  <!-- Essa div aparece em telas pequenas (até 1000px) ou se o dispositivo estiver em modo retrato -->
  <div class="pequeno-retrato">Pequeno ou Retrato</div>

  <!-- Essa div aparece apenas no intervalo de 500px a 1000px -->
  <div class="intervalo">Intervalo</div>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 🎯 **O que são Media Queries no CSS?**

As **Media Queries** são regras do CSS usadas para aplicar estilos diferentes dependendo das **características do dispositivo**, como a **largura da tela**, a **orientação** (retrato ou paisagem), entre outras.

---

### 📱 **@media (max-width: 600px)**

```css
@media (max-width: 600px) {
  .muito-pequeno {
    display: block;
  }
}
```

✅ Essa regra faz com que a `.muito-pequeno` apareça **somente em telas com largura de até 600px**, como celulares pequenos.

---

### 🔁 **@media (max-width: 1000px), (orientation: portrait)**

```css
@media (max-width: 1000px), (orientation: portrait) {
  .pequeno-retrato {
    display: block;
  }
}
```

✅ Aqui temos **duas condições** separadas por vírgula, ou seja:

* A div será exibida **se a largura for até 1000px** **OU**
* **Se o dispositivo estiver em modo retrato** (em pé, como seguramos o celular).

---

### 📏 **@media (min-width: 500px) and (max-width: 1000px)**

```css
@media (min-width: 500px) and (max-width: 1000px) {
  .intervalo {
    display: block;
  }
}
```

✅ Esta condição é mais específica: só exibe a `.intervalo` **quando a tela tiver entre 500px e 1000px de largura**. Ideal para tablets ou notebooks pequenos.

---

### 🧱 **Por que `display: none` no começo?**

No estilo padrão, todas as divs são ocultadas (`display: none`). As Media Queries então reativam (`display: block`) **apenas as que se encaixam nas condições da tela atual**, tornando o conteúdo **dinâmico e responsivo**.

---

### 📚 **Resumo do Aprendizado**

| Media Query                                           | Quando aparece?                               |
| ----------------------------------------------------- | --------------------------------------------- |
| `@media (max-width: 600px)`                           | Telas pequenas como celulares                 |
| `@media (max-width: 1000px), (orientation: portrait)` | Telas pequenas **ou** modo retrato (vertical) |
| `@media (min-width: 500px) and (max-width: 1000px)`   | Telas médias como tablets                     |

---

### 📱💡 **Por que usar Media Queries?**

Media Queries permitem adaptar o design de um site para diferentes dispositivos — **celulares, tablets, notebooks e monitores grandes**. Com elas, o site fica **mais acessível, legível e bonito**, independentemente da tela.