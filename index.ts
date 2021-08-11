import { question } from "readline-sync";

/*limitando los operadores*/
type Operator = '+'|'-'|'/'|'*';

function main(): void {
  const firstString: string = question("Ingresa un numero:\n");

  const operator: string = question("Ingresa el operador: \n");

  const secondString: string = question("Ingresa el segundo numero: \n");

  
  
  

  /*Obteniendo el booleano de los inputs */
  const validInput: boolean = isNumber(firstString) && isOperator(operator) && isNumber(secondString);

  /*Si todo es true, procedera a realizar la operación */
  if (validInput) {
    const firstNum = parseInt(firstString);
    const secondNum = parseInt(secondString);

    const result = calculate(firstNum,operator as Operator, secondNum);
    console.log(result);
  }else {
    console.log('\n invalid input \n');
    main();
  }
 
 
  
}
/*
@function Realiza las operaciones que se le solicite
@return El resultado de la operacion
*/

function calculate(firstNum: number, operator: string, secondNum: number) {
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

function isOperator(operator:String):boolean {
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

function isNumber(str: string): boolean {
  const maybeNumber = parseInt(str);
  const isNum: boolean = !isNaN(maybeNumber); //almancenamos en una constante si es numero o no

  return isNum;
}

main();
