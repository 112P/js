function callbackFunctions(someNumber){
    return someNumber * 2
}

function usarNumeroComOuSemCallback(randomNumber, deveUsar, callback){
    let result = randomNumber;
    
    if(deveUsar){
        result = callback(randomNumber)
    };

    return result;
}
console.log("iniciando o callbackFunctions")
console.log(callbackFunctions(20))
console.log("Iniciando o usarNumeroComOuSemCallback com deveUsar = true")
console.log(usarNumeroComOuSemCallback(20, true, callbackFunctions))
console.log("Iniciando o usarNumeroComOuSemCallback com deveUsar = false")
console.log(usarNumeroComOuSemCallback(20, false, callbackFunctions))

console.log("Iniciando o usarNumeroComOuSemCallback com nova function")
console.log(usarNumeroComOuSemCallback(20, false, function (num){
    return num * 2
}))

console.log("Iniciando o usarNumeroComOuSemCallback com arrow function")
console.log(usarNumeroComOuSemCallback(20, false, (num) =>{
    return num * 2
}))


console.log("Iniciando o usarNumeroComOuSemCallback com arrow function without arrow")
console.log(usarNumeroComOuSemCallback(20, false, num => num * 2))

console.log("Iniciando o usarNumeroComOuSemCallback com arrow function without arrow")
console.log(usarNumeroComOuSemCallback(20, true, num => num * 2))