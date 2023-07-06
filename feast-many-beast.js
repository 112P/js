/* const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(feast("great blue heron", "garlic naan"), true)
Test.assertEquals(feast("chickadee", "chocolate cake"), true)
Test.assertEquals(feast("brown bear", "bear claw"), false)
  });
}); */

function feast(beast, dish) {
    let firstLetterFromName = 'none';
    let lastLetterFromName = 'none';
    let firstLetterFromDishe = 'none';
    let lastLetterFromDishe = 'none';
    let indexOfLastLetterFromName = 0;
    let indexOfLastLetterFromDishe = 0;
    let beastName = beast; 
    let disheName = dish; 
    let canEnter = false;

    let arrayBeast = beast.split('');
    let arrayDish = dish.split('');

    console.log('arrays: ' + arrayBeast + ' ' + arrayDish );

    firstLetterFromName = arrayBeast[0];
    indexOfLastLetterFromName = arrayBeast.length -1;
    lastLetterFromName = arrayBeast[indexOfLastLetterFromName];

    console.log('primeira e ultima letra do nome: ' + firstLetterFromName + ' ' + lastLetterFromName);

    firstLetterFromDishe = arrayDish[0];
    indexOfLastLetterFromDishe = arrayDish.length -1;
    lastLetterFromDishe = arrayDish[indexOfLastLetterFromDishe];

    console.log('primeira e ultima letra do prato: ' + firstLetterFromDishe + ' ' + lastLetterFromDishe);

    if (firstLetterFromName  === firstLetterFromDishe && lastLetterFromName === lastLetterFromDishe) {
        canEnter = true;
        console.log('Pode entrar sao iguais: ');
    } else {
        console.log('São Diferentes, não pode entrar');
    }

    console.log('Valor do pode entrar: ' + canEnter);

    return canEnter; 

}

/* TESTE */

feast("great blue heron", "garlic naan")
feast("chickadee", "chocolate cake")
feast("brown bear", "bear claw")