/* Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */

function basicOp(operation, value1, value2)
{
    let result = 0;
    let whtaOperation = 'string';
  
    switch (operation) {
    case '+':
        result = value1 + value2;
        whtaOperation = 'soma';
    break;
    case '-':
        result = value1 - value2;
        whtaOperation = 'subtração';
    break;
    case '*':
        result = value1 * value2;
        whtaOperation = 'multiplicação';
        
    break;
    case '/':
        result = value1 / value2;
        whtaOperation = 'divisão';
    break;
  
    default:
    break;
  }

  console.log('Operação realizada: ' + whtaOperation)
  console.log('Resultado da operação ' + result)

  return result;

}

console.log('/* INICIANDO OS TESTES */')

basicOp('+', 4, 7);
basicOp('-', 15, 18);
basicOp('*', 5, 5);
basicOp('/', 49, 7);
