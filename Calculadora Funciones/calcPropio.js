'use strict'

alert('Hola usuario!');

let op;
let repetir = false;
let operando1;
let operando2;
let operandos;

function elegirOperador() {
  do {
    op = prompt('Elije operación: +, -, * ó /', '');
    if (op === null) {
      break;
    }
    op = op.trim();
    if (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
      alert('La operación introducida es errónea. Prueba de nuevo.');
    }
  } while (op !== '+' && op !== '-' && op !== '*' && op !== '/');
  return op;
}

let elegirOperandos = function () {
  operando1 = '';
  operando2 = '';
  let salir = false;

  while (!salir) {
    operandos = prompt('Introduce los operandos separados por espacio', '');
    let i = 0;
    if (operandos === null) {
      break;
    }
    for (; i < operandos.length; i++) {
      if (operandos[i] !== ' ') {
        operando1 += operandos[i];
      } else {
        if (operando1 !== '') {
          break;
        }
      }
    }

    for (; i < operandos.length; i++) {
      if (operandos[i] !== ' ') {
        operando2 += operandos[i];
      } else {
        if (operando2 !== '') {
          break;
        }
      }
    }

    operando1 = Number(operando1);
    operando2 = Number(operando2);
    if (isNaN(operando1) || isNaN(operando2)) {
      alert('Tienes que introducir números')
      salir = false;
    } else {
      salir = true;
    }
  }
  return operando1, operando2;
};

do {

  elegirOperador();
  if (op === null) {
    break;
  }
  elegirOperandos();
  if (operandos === null) {
    break;
  }

  switch (op) {

    case '+':
      let suma = (operando1, operando2) => operando1 + operando2;
      alert("El resultado es: " + suma(operando1, operando2));
      break;
    case '-':
      let resta = (operando1, operando2) => operando1 - operando2;
      alert("El resultado es: " + resta(operando1, operando2));
      break;
    case '*':
      let multiplicacion = (operando1, operando2) => operando1 * operando2;
      alert("El resultado es: " + multiplicacion(operando1, operando2));
      break;
    case '/':
      let division = (operando1, operando2) => operando1 / operando2;
      alert("El resultado es: " + division(operando1, operando2));
      break;
  }
  repetir = confirm('Quieres realizar otra operación?');
} while ((op !== '+' && op !== '-' && op !== '*' && op !== '/') || repetir);
