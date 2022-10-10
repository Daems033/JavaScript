"use strict";
    let pregunta = false;
    let operacion;
    let operacionCorrecta = false;
    alert("¡¡¡Bienvenido a la Calculadora!!!");
do {
    do {
        operacion = prompt("¿Qué operación desea realizar?: (+, -, * ó /)", "").trim();
        if(operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") {
            operacionCorrecta = true;
        }
    } while(!operacionCorrecta);

    let operadores;
    let primerOperando;
    let segundoOperando;
    do {
        operadores = prompt("Por favor, introduzca dos operadores separados por espacio").trim();
        primerOperando = Number(operadores.substring(0, operadores.indexOf(' ')));
        segundoOperando = Number(operadores.substring(operadores.indexOf(' '), operadores.length));
        if(primerOperando && segundoOperando) {
            operacionCorrecta = true;
        } else {
            operacionCorrecta = false;
        }
    } while(!operacionCorrecta);
    
    switch(operacion) {
        case '+': alert(primerOperando + segundoOperando);
        break;

        case '-': alert(primerOperando - segundoOperando);
        break;

        case '*': alert(primerOperando * segundoOperando);
        break;

        case '/': alert(primerOperando / segundoOperando);
        break;
    }
    pregunta = confirm("¿Desea realizar otra operación?")
} while(pregunta);
