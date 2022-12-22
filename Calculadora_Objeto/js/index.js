'use strict'

window.alert('Hola usuario!')

let op
let operacionCorrecta = false
let primerOperando
let segundoOperando
let operadores

const Calculadora = {
  lastResult: 0
}

Calculadora.sumar = function () {
  this.lastResult = primerOperando + segundoOperando
  return this.lastResult
}

Calculadora.restar = function () {
  this.lastResult = primerOperando - segundoOperando
  return this.lastResult
}

Calculadora.multiplicar = function () {
  this.lastResult = primerOperando * segundoOperando
  return this.lastResult
}

Calculadora.dividir = function () {
  this.lastResult = primerOperando / segundoOperando
  return this.lastResult
}

do {
  function elegirOperador () {
    do {
      op = window.prompt('Elije operación: +, -, * ó /', '')
      if (op === null) {
        break
      }
      op = op.trim()
      if (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
        window.alert('La operación introducida es errónea. Prueba de nuevo.')
      }
    } while (op !== '+' && op !== '-' && op !== '*' && op !== '/')
  }

  elegirOperador()
  if (op === null) {
    break
  }

  const elegirOperandos = function () {
    do {
      operadores = window.prompt('Introduzca dos números con un espacio: ')
      if (operadores === null) {
        break
      }
      operadores = operadores.trim()
      primerOperando = Number(operadores.substring(0, operadores.indexOf(' ')))
      segundoOperando = Number(operadores.substring(operadores.indexOf(' '), operadores.length))

      if (operadores.substring(0, operadores.indexOf(' ')) === 'R') {
        primerOperando = Calculadora.lastResult
      }

      if (operadores.substring(operadores.indexOf(' '), operadores.length).trim() === 'R') {
        segundoOperando = Calculadora.lastResult
      }

      if ((primerOperando && segundoOperando) || primerOperando === 0 || segundoOperando === 0) {
        operacionCorrecta = true
      } else {
        operacionCorrecta = false
        window.alert('Tienes que introducir números')
      }
    } while (!operacionCorrecta)
  }

  elegirOperandos()
  if (operadores === null) {
    break
  }

  switch (op) {
    case '+':
      window.alert('El resultado es: ' + Calculadora.sumar())
      break
    case '-':
      window.alert('El resultado es: ' + Calculadora.restar())
      break
    case '*':
      window.alert('El resultado es: ' + Calculadora.multiplicar())
      break
    case '/':
      window.alert('El resultado es: ' + Calculadora.dividir())
      break
  }
} while (window.confirm('¿Quiere realizar otra operacion?'))
