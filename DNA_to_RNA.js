/* const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    });
  }) */
let rna1 = 'TTTT'
let rna2 = 'GCAT'
let rna3 = 'GACCGCCGCC'

function DNAtoRNA(dna) {
    let rna = 'string';
    let arrayDNA = dna.split('')

    console.log('Criando array: ' + arrayDNA);

    for (let i = 0; i < arrayDNA.length; i++) {
        const element = arrayDNA[i];
        console.log(arrayDNA[i])
            if (element === 'T') {
            arrayDNA[i] = 'U'
            console.log('Valor alterado para ' + arrayDNA);   
            
            }    
        rna = arrayDNA.join('');
        console.log('String alterada:' + rna);
    return rna;
    }
}

DNAtoRNA(rna1);




