console.log("Criando novo array")
const myArray = [1, 2, 3, 4, 5 ]
console.log(myArray)

console.log("Criando função de callback")
function myCustomOperationCallback(itemFromArray){
    return itemFromArray * 2
};

const newArray = myArray.map(myCustomOperationCallback);

console.log(newArray)

const strArray = ["Hello", "World", "my", "name"]

console.log("Usando arrow function no array.map")
console.log(strArray.map(itemFromArray => itemFromArray[0]))
