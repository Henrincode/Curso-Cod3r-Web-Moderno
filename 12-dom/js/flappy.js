// Cria um novo elemento HTML com uma tag e classe especificadas
function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

// Classe para representar uma barreira (superior ou inferior)
function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')

    // Se for reversa, inverte a ordem do corpo e da borda
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    // Define a altura do corpo da barreira
    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// Classe para representar um par de barreiras (superior e inferior)
function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    // Sorteia a altura de cada barreira com base na abertura
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    // Pega e define a posição X do par de barreiras
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

// Classe que controla o conjunto de pares de barreiras
function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3),
    ]

    const deslocamento = 3

    // Faz as barreiras se moverem e reaparecerem do outro lado ao sair da tela
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // Reposiciona o par se sair da tela
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            // Verifica se o jogador passou no meio da tela (pontuação)
            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            if (cruzouOMeio) notificarPonto()
        })
    }
}

// Classe que representa o pássaro
function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    // Pega e define a altura do pássaro
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    // Detecta quando o jogador pressiona ou solta a tecla espaço
    window.onkeydown = e => {
        if (e.code === 'Space') {
            voando = true
            this.elemento.classList.add('inclinado') // animação
        }
    }

    window.onkeyup = e => {
        if (e.code === 'Space') {
            voando = false
            this.elemento.classList.remove('inclinado')
        }
    }

    // Faz o pássaro subir ou cair
    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    // Define posição inicial do pássaro
    this.setY(alturaJogo / 2)
}

// Exibe a pontuação atual
function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

// Verifica se dois elementos estão colidindo
function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top
    return horizontal && vertical
}

// Verifica se o pássaro colidiu com alguma barreira
function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(ParDeBarreiras => {
        if (!colidiu) {
            const superior = ParDeBarreiras.superior.elemento
            const inferior = ParDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

// Função principal que inicializa e inicia o jogo
function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    // Adiciona os elementos na tela
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
    areaDoJogo.appendChild(progresso.elemento)

    // Inicia o loop do jogo
    this.start = () => {
        const temporalizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporalizador)
            }
        }, 20)
    }
}

// Cria e inicia o jogo
new FlappyBird().start()


// Adiciona controle por toque de tela (mobile)
window.addEventListener('touchstart', () => {
    const eventoEspaco = new KeyboardEvent('keydown', { code: 'Space' })
    window.dispatchEvent(eventoEspaco)
})

window.addEventListener('touchend', () => {
    const eventoEspaco = new KeyboardEvent('keyup', { code: 'Space' })
    window.dispatchEvent(eventoEspaco)
})

// Adiciona botão para reiniciar o jogo
const btnReiniciar = document.createElement('button')
btnReiniciar.id = 'btn-reiniciar'
btnReiniciar.innerText = 'Reiniciar'

btnReiniciar.onclick = () => location.reload()

document.querySelector('[wm-flappy]').appendChild(btnReiniciar)
