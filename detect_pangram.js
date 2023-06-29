const string = "The quick brown fox jumps over the lazy dog."
var verificaPangran = false;
console.log(string)

function isPangram(string){
    //... CRIAR UM VETOR QUE VERIFICA TODAS AS LETRAS
    var isPagran = false;
       
    let vetor = [];
    vetor = string.split('');
    
    console.log("Array de strings")
    console.log(vetor)
    
    for (i = 0; i < string.length; i++){
      if (vetor[i] === 'a') {
        console.log(vetor[i])
        console.log("Tem a");
        isPagran = true;
      } else{
        isPagran = false
      }

      if (vetor[i] === 'b') {
        console.log(vetor[i])
        console.log("Tem b");
        isPagran = true;
      } else{
        isPagran = false
      }

      if (vetor[i] === 'c') {
        console.log(vetor[i])
        console.log("Tem b");
        isPagran = true;
      } else{
        isPagran = false
      }
      
      
    }    
    
    return isPagran
    
}

isPangram(string);

  /* TESTE */
console.log("INICIANDO TESTES")

 
console.log("É PRANGRAM? " + isPangram(string))