/* const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    assert.deepEqual(digitize(0),[0]);
  });
}); */

function digitize(n) {
    let text = n.toString();
    console.log('to string: ' + typeof(text) + text);

    let textArray = text.split('');
    console.log('to array: ' + typeof(textArray) + textArray);
    
    let reversedArray = textArray.reverse();
    console.log('to reversed array: ' + typeof(reversedArray) + reversedArray);    

    let toNumber = reversedArray.map(Number);
    console.log();

    return toNumber    
  }

digitize(35231)
digitize(0)