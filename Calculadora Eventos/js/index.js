'use strict'

class DibujarCalculadora {
  generarEncabezado () {
    const h1 = document.createElement('h1')
    h1.textContent = 'Calculadora'
    return h1
  }

  generarContainer () {
    const divContainer = document.createElement('div')
    divContainer.className = 'container'
    return divContainer
  }

  generarContainerButtons () {
    const divButtons = document.createElement('div')
    divButtons.className = 'botones'
    return divButtons
  }

  generarScreen () {
    const divScreen0 = document.createElement('div')
    divScreen0.id = 'screen'
    divScreen0.textContent = '0'
    return divScreen0
  }

  generarBotonesNumericos (buttonNumbers) {
    for (let i = 0; i < 10; i++) {
      buttonNumbers[i] = document.createElement('button')
      buttonNumbers[i].textContent = i
      buttonNumbers[i].classList.add('number')
    }
    return buttonNumbers
  }

  generarBotonesOperandos (buttonOperator) {
    const operadores = ['+', '-', '*', '/']
    for (let i = 0; i < operadores.length; i++) {
      buttonOperator[i] = document.createElement('button')
      buttonOperator[i].textContent = operadores[i]
    }
    return buttonOperator
  }

  generarBotonesExtra (buttonExtra) {
    const operadoresExtra = ['R', ',', 'C', '=']
    for (let i = 0; i < operadoresExtra.length; i++) {
      buttonExtra[i] = document.createElement('button')
      buttonExtra[i].textContent = operadoresExtra[i]
    }
    return buttonExtra
  }
}

class EventosCalculadora {
  constructor (buttonNumbers, buttonOperators, buttonExtra, divScreen) {
    this.buttonNumbers = buttonNumbers
    this.buttonOperators = buttonOperators
    this.buttonExtra = buttonExtra
    this.divScreen = divScreen
  }

  eventosButtonNumericos () {
    this.buttonNumbers.forEach((button) => {
      button.addEventListener('click', (event) => {
        const valorActual = this.divScreen.textContent
        if (valorActual === '0') {
          this.divScreen.textContent = event.target.textContent
        } else {
          this.divScreen.textContent = valorActual + event.target.textContent
        }
      })
    })
  }

  eventosButtonOperadores () {
    this.buttonOperators.forEach((button) => {
      button.addEventListener('click', (event) => {
        this.divScreen.textContent = this.divScreen.textContent + event.target.textContent
      })
    })
  }

  eventoClear () {
    this.buttonExtra[2].addEventListener('click', () => {
      this.divScreen.textContent = '0'
    })
  }

  eventoResult () {
    this.buttonExtra[3].addEventListener('click', () => {
      this.divScreen.textContent = this.calcularResultado(this.divScreen.textContent)
      window.sessionStorage.setItem('ultimaOperacion', this.divScreen.textContent)
    })
  }

  eventoRecuperar () {
    this.buttonExtra[0].addEventListener('click', () => {
      this.divScreen.textContent = window.sessionStorage.getItem('ultimaOperacion')
    })
  }

  calcularResultado (operacion) {
    let resultado = 0
    let op1 = 0
    let op2 = 0
    let operador = ''

    for (let i = 0; i < operacion.length; i++) {
      if (operacion[i] === '+' || operacion[i] === '-' || operacion[i] === '*' || operacion[i] === '/') {
        operador = operacion[i]
        op1 = Number(operacion.substring(0, operacion.indexOf(operador)))
      } else {
        if (i === operacion.length - 1) {
          op2 = Number(operacion.substring(operacion.indexOf(operador) + 1, operacion.length))
        }
      }
    }

    switch (operador) {
      case '+':
        resultado = op1 + op2
        break
      case '-':
        resultado = op1 - op2
        break
      case '*':
        resultado = op1 * op2
        break
      case '/':
        resultado = op1 / op2
        break
    }
    return resultado
  }

  eventoComa () {
    this.buttonExtra[1].addEventListener('click', () => {
      const valorActual = this.divScreen.textContent
      if (valorActual === '0') {
        this.divScreen.textContent = '0.'
      } else {
        if (valorActual.indexOf('.') === -1) {
          this.divScreen.textContent = this.divScreen.textContent + '.'
        }
      }
    })
  }
}

const dibujarCalculadora = new DibujarCalculadora()

const body = document.querySelector('body')

const buttonNumbers = []
const buttonOperator = []
const buttonExtra = []

const encabezado = dibujarCalculadora.generarEncabezado()
const divContainer = dibujarCalculadora.generarContainer()
const divButtons = dibujarCalculadora.generarContainerButtons()
const divScreen = dibujarCalculadora.generarScreen()

body.after(encabezado)

encabezado.append(divContainer)

divContainer.append(divButtons)

divButtons.append(divScreen)

dibujarCalculadora.generarBotonesNumericos(buttonNumbers)
dibujarCalculadora.generarBotonesOperandos(buttonOperator)
dibujarCalculadora.generarBotonesExtra(buttonExtra)

divScreen.after(buttonExtra[0], buttonOperator[0])

buttonOperator[0].after(buttonNumbers[7], buttonNumbers[8], buttonNumbers[9], buttonOperator[1], buttonNumbers[4],
  buttonNumbers[5], buttonNumbers[6], buttonOperator[2], buttonNumbers[1], buttonNumbers[2], buttonNumbers[3],
  buttonOperator[3], buttonNumbers[0], buttonExtra[1], buttonExtra[2], buttonExtra[3])

const calculadora = new EventosCalculadora(buttonNumbers, buttonOperator, buttonExtra, divScreen)
calculadora.eventosButtonNumericos()
calculadora.eventoComa()
calculadora.eventosButtonOperadores()
calculadora.eventoClear()
calculadora.eventoResult()
calculadora.eventoRecuperar()
