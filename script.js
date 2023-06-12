console.log('Hello Word')
//Thread.sleep(1000) ISSO SO FUNCIONA NO JAVA
function sleep(seconds) 
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
  
}

function  whatType(type, type){

}

sleep(1);
console.log('Iniciando o projeto...')
sleep(1);

const newVariable = 'Hello World';
let variable2 = 10;
var variable3 = 10;
const variable4 = '10';

console.log('iniciando soma de number + string')
const resultadoSomaNumberMaisString = variable3 + variable4;

console.log(resultadoSomaNumberMaisString)
console.log('fim da soma de number + string')
console.log(newVariable)

console.log(variable2)

console.log(variable3)

let counter  = variable2 + 1
console.log(counter)

console.log(typeof newVariable);

const functionContainerVariable = function(){
    return 20;
}