'use strict'

alert('Hola usuario!');

let op;
let repetir = false;
let operando1;
let operando2;

function elegirOperador() {
  do {
    op = prompt('Elije operación: +, -, * ó /', '');
    op = op.trim();
    if(op !== '+' && op !== '-' && op !== '*' && op !== '/') {
      alert('La operación introducida es errónea. Prueba de nuevo.');
    }
  } while(op !== '+' && op !== '-' && op !== '*' && op !== '/');
  return op;
}

let elegirOperandos = function() {
  operando1 = '';
  operando2 = '';
  let salir = false;

  while (!salir) {
    let operandos = prompt('Introduce los operandos separados por espacio', '');

    let i = 0;
    for (; i < operandos.length; i++) {
      if (operandos[i] !== ' ') {
        operando1 += operandos[i];
      } else {
        if (operando1 !== '') {
          break;
        }
      }
    }

    console.log(operando1);

    for (; i < operandos.length; i++) {
      if (operandos[i] !== ' ') {
        operando2 += operandos[i];
      } else {
        if (operando2 !== '') {
          break;
        }
      }
    }
    console.log(operando2);

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
  elegirOperandos();

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
}while((op !== '+' && op !== '-' && op !== '*' && op !== '/') || repetir);

console.log(op);