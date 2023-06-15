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