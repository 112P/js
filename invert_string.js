/* describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(solution('world'), 'dlrow');
      assert.strictEqual(solution('hello'), 'olleh');
      assert.strictEqual(solution(''), '');
      assert.strictEqual(solution('h'), 'h');
    });
  });   */

  function inversorDeStrings(str){
    console.log('String pra inverter: ' + str)

    var arrayString = str.split('');
    console.log('String transformada em array: ' + arrayString[0])
    
    arrayString.reverse();
    console.log("Array invertida: " + arrayString)

    let stringString = arrayString.join('');
    console.log("Array convertido pra string: " + stringString)


    console.log('Retorno da funcao: ' + stringString);
    return stringString
  }  

  //INICIANDO TESTES
  var palavraInversa = 'world'
  inversorDeStrings(palavraInversa)

  var palavraInversa2 = 'hello'
  inversorDeStrings(palavraInversa2)

  var palavraInversa3 = ''
  inversorDeStrings(palavraInversa3)

  var palavraInversa4 = 'h'
  inversorDeStrings(palavraInversa4)

  