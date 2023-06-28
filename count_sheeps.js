/* 
describe("Tests", () => {
    it("test", () => {
  var array1 = [true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true ];
                
  Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")
    });
  }); */
  var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

  function countSheeps(arrayOfSheep) {
    let contador = 0;

    for (let i = 0; i < arrayOfSheep.length; i++) {
        const element = arrayOfSheep[i];
        if (element === true) {            
            contador++
        } else {
            console.log('-1')
        }
    }

    console.log('Contador: ' + contador)
    return contador;
  }

  countSheeps(array1);

