/* Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

function bmi(weight, height) {
    let weightCalc = weight;
    let heightCalc = height;
    let result = 0;
    let bmi = 'none';

    result = weightCalc / height**2

    if (result <= 18.5 ) {
        bmi = 'Underweight'
        console.log(bmi);
    } else  if (result <= 25.0 ) {
        bmi = 'Normal'
        console.log(bmi);
    } else  if (result <= 30.0) {
        bmi = 'Overweight'
        console.log(bmi);        
    } else{ if (result > 30) {
        bmi = 'Obese'
        console.log(bmi);  
    }
        
    }
    console.log('Resultado: ' + result);
    return bmi;
  }

bmi(8, 1.80)

bmi(70, 1.80)

bmi(90, 1.80)

bmi(180, 1.80)