/* Use a function with two parameters to calculate the BMI and pass back the answer to the main program.*/

  function calcBMI (weight,height,multiplier){
    return(weight/(height * height)) * 703 
  }
  
  let weight = Number(prompt("Enter your weight"))
  let height = Number(prompt("Enter your height"))
  let multiplier = Number(prompt("Please enter the value 703"))
  
    let answer = calcBMI(weight,height,multiplier)
      alert(`Your BMI is ${answer}`)