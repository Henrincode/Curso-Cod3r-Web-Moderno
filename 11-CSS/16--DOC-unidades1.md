# ✅ Código com Comentários:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- Define o conjunto de caracteres como UTF-8, suportando acentuação -->
    <meta charset="UTF-8">

    <!-- Define o título da aba do navegador -->
    <title>Unidades #01</title>

    <style>
        /* Estiliza a primeira div com unidades absolutas */
        .unidades-absolutas {
            position: absolute; /* Posiciona o elemento em relação ao body */
            font-size: 40px; /* Tamanho da fonte fixo */
            padding: 20px; /* Espaço interno fixo */
            border: solid 5px #222; /* Borda sólida com espessura fixa */
            margin: 30px; /* Espaço externo fixo */
            
            /* Unidades absolutas de medida (pouco usadas no CSS moderno) */
            width: 4cm;     /* Largura definida em centímetros */
            height: 20mm;   /* Altura definida em milímetros */

            top: 150px;     /* Distância do topo da página */
            left: 200px;    /* Distância da esquerda da página */
        }

        /* Estiliza a segunda div com unidades relativas */
        .unidades-relativas {
            position: absolute; /* Posiciona em relação ao body */
            font-size: 4em;      /* 4 vezes o tamanho da fonte do elemento pai */
            padding: 5%;         /* Espaçamento interno relativo ao tamanho do elemento pai */
            border: solid 1vw #222; /* Borda com espessura relativa à largura da tela */
            margin: .8%;         /* Margem externa relativa ao elemento pai */

            width: 20vw;         /* Largura relativa à largura da viewport (janela) */
            height: 15vh;        /* Altura relativa à altura da viewport */
            bottom: 5%;          /* Distância da parte inferior da viewport */
            right: 5%;           /* Distância da borda direita da viewport */
        }
    </style>
</head>

<body>
    <!-- Div com medidas fixas (absolutas) -->
    <div class="unidades-absolutas">Opa!</div>

    <!-- Div com medidas dinâmicas (relativas) -->
    <div class="unidades-relativas">Epa!</div>
</body>

</html>
```

---

# 📘 O que foi aprendido:

### 📏 **O que são unidades de medida no CSS?**

No CSS, usamos **unidades de medida** para definir tamanhos, espaçamentos e posições. Elas podem ser **absolutas** (fixas) ou **relativas** (dinâmicas, adaptáveis ao contexto da tela ou do elemento pai).

---

### 🧱 **Unidades Absolutas**

Essas unidades têm **tamanho fixo** e **não se adaptam** a diferentes tamanhos de tela:

* `cm` (centímetro)
* `mm` (milímetro)
* `in` (polegada)
* `px` (pixel) – a mais comum das absolutas
* `pt` (ponto tipográfico)
* `pc` (pica tipográfica)

🟡 **Observação:** Unidades como `cm` e `mm` **são pouco usadas** no desenvolvimento web porque não se ajustam bem em telas diferentes.

---

### 📐 **Unidades Relativas**

Essas unidades se adaptam ao **contexto do elemento pai ou da janela do navegador**:

* `em` – relativo ao **tamanho da fonte do elemento pai**
* `rem` – relativo ao **tamanho da fonte do elemento raiz (html)**
* `%` – relativo ao **tamanho do elemento pai**
* `vw` – relativo à **largura da viewport** (janela do navegador)
* `vh` – relativo à **altura da viewport**

✅ **Vantagem:** As unidades relativas tornam os layouts **responsivos** e mais flexíveis em diferentes tamanhos de tela.

---

### 💡 **Resumo do Aprendizado**

* Existem dois tipos principais de unidades: **absolutas** e **relativas**.
* Unidades **absolutas** são fixas e raramente usadas em web design moderno (ex: `cm`, `mm`, `in`).
* Unidades **relativas** são mais comuns e tornam o layout **responsivo** (ex: `em`, `%`, `vw`, `vh`).
* A propriedade `position: absolute` permite **posicionar elementos de forma precisa** dentro da página.
* Aprendemos como aplicar essas unidades para controlar **fontes, margens, preenchimentos, tamanhos e posições** de elementos na tela.