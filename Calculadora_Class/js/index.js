'use strict'

window.alert('Hola usuario!')

let op
let primerOperando
let segundoOperando
let operadores

class MyError extends Error {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
  }
}

class Calculadora {
  lastResult = 0

  sumar () {
    this.lastResult = primerOperando + segundoOperando
    return this.lastResult
  }

  restar () {
    this.lastResult = primerOperando - segundoOperando
    return this.lastResult
  }

  multiplicar () {
    this.lastResult = primerOperando * segundoOperando
    return this.lastResult
  }

  dividir () {
    this.lastResult = primerOperando / segundoOperando
    return this.lastResult
  }
}

const calculadora = new Calculadora()

function elegirOperador () {
  try {
    op = window.prompt('Elije operación: +, -, * ó /', '')
  } catch (error) {
    if (error instanceof MyError) {
      throw new MyError('Error de sintaxis. Introduzca los siguientes valores: +, -, * ó /')
    } else {
      throw error
    }
  }

  if (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
    throw new MyError('Error de sintaxis. Introduzca los siguientes valores: +, -, * ó /')
  }
}

const elegirOperandos = function () {
  try {
    operadores = window.prompt('Introduzca dos números con un espacio: ')
  } catch (error) {
    if (error instanceof MyError) {
      throw new MyError('Error de sintaxis. Debe introducir números o la letra R.')
    } else {
      throw error
    }
  }
  operadores = operadores.trim()
  primerOperando = Number(operadores.substring(0, operadores.indexOf(' ')))
  segundoOperando = Number(operadores.substring(operadores.indexOf(' '), operadores.length))

  if (operadores.substring(0, operadores.indexOf(' ')) === 'R') {
    primerOperando = calculadora.lastResult
  }

  if (operadores.substring(operadores.indexOf(' '), operadores.length).trim() === 'R') {
    segundoOperando = calculadora.lastResult
  }

  if (!((primerOperando && segundoOperando) || primerOperando === 0 || segundoOperando === 0)) {
    throw new MyError('Error de sintaxis. Debe introducir números.')
  }
}

do {
  let correct = true

  do {
    correct = true
    try {
      elegirOperador()
    } catch (exception) {
      window.alert(exception.message)
      correct = false
    }
  } while (!correct)

  if (op === null) {
    break
  }

  do {
    correct = true
    try {
      elegirOperandos()
    } catch (exception) {
      window.alert(exception.message)
      correct = false
    }
  } while (!correct)

  if (operadores === null) {
    break
  }

  switch (op) {
    case '+':
      window.alert('El resultado es: ' + calculadora.sumar())
      break
    case '-':
      window.alert('El resultado es: ' + calculadora.restar())
      break
    case '*':
      window.alert('El resultado es: ' + calculadora.multiplicar())
      break
    case '/':
      window.alert('El resultado es: ' + calculadora.dividir())
      break
  }
} while (window.confirm('¿Quiere realizar otra operacion?'))
