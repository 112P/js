/* describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(findAverage([1,1,1]), 1);
      assert.strictEqual(findAverage([1,2,3]), 2);
      assert.strictEqual(findAverage([1,2,3,4]), 2.5);
    });
  });  */

  function findAverage(array) {
    console.log(array.length);
    let average = 0;
    let lengthOfArray = array.length;
    console.log('tamanho do array: ' + lengthOfArray);
    let result = 0;
    let sumAllNumbers = 0;

    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      sumAllNumbers += element
      console.log(element);
      console.log('Soma dos numeros: ' + sumAllNumbers);
    }
    
    result = sumAllNumbers / lengthOfArray
    console.log(result);   

    return result;
  }
   let arrayTest = [1,1,1] 
  findAverage(arrayTest)

  let arrayTest2 = [1,2,3] 
  findAverage(arrayTest2) 

  let arrayTest3 = [1,2,3, 4] 
  findAverage(arrayTest3)