let statesBorn = ['Utah', 'Nebraska','Colorado']

  enterStates = prompt("Enter the state where you were born:") 

let newStateAddition = enterStates.toUpperCase()

statesBorn.push(newStateAddition) 
  alert(`The state added is ${newStateAddition}`)