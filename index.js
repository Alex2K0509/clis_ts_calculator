"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = readline_sync_1.question("Ingresa un numero:\n");
    var operator = readline_sync_1.question("Ingresa el operador: \n");
    var secondString = readline_sync_1.question("Ingresa el segundo numero: \n");
    /*Obteniendo el booleano de los inputs */
    var validInput = isNumber(firstString) && isOperator(operator) && isNumber(secondString);
    /*Si todo es true, procedera a realizar la operación */
    if (validInput) {
        var firstNum = parseInt(firstString);
        var secondNum = parseInt(secondString);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\n invalid input \n');
        main();
    }
}
/*
@function Realiza las operaciones que se le solicite
@return El resultado de la operacion
*/
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
            break;
        case '-':
            return firstNum - secondNum;
            break;
        case '*':
            return firstNum * secondNum;
            break;
        case '/':
            return firstNum / secondNum;
            break;
        default:
            return false;
            break;
    }
}
/*
@function validar que el valor de operador si sea uno valido
y mediante el atributo "boolean" devoleremos true o false

@return La función retorna un valor booleano
*/
function isOperator(operator) {
    switch (operator) {
        case '+':
            return true;
            break;
        case '-':
            return true;
            break;
        case '*':
            return true;
            break;
        case '/':
            return true;
            break;
        default:
            return false;
            break;
    }
}
/*
@function validar que un numero si sea numero
y mediante el atributo "boolean" devoleremos true o false
si es o no numero

@return La función retorna un valor booleano
*/
function isNumber(str) {
    var maybeNumber = parseInt(str);
    var isNum = !isNaN(maybeNumber); //almancenamos en una constante si es numero o no
    return isNum;
}
main();
