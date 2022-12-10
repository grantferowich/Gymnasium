// // Write an algorithm that accepts a number and returns a number.
//  If the input number is even, divide it into two until reaching 0.
//  If the number is odd, subtract 1.
// Return the number of steps to reach 0.

//For example: 14
// Steps = 0
// 14/2 = 7. Steps = 1.
// 7 - 1 = 6. Steps = 2.
// 6 / 2 = 3. Steps = 3.
// 3 - 1 = 2. Steps =4.
// 2/2 = 1. Steps = 5.
// 1 - 1 = 0. Steps = 6.

//The first approach is to loop through the number,
// check if its even or odd, and then divide or subtract until
//hitting 0, counting the steps as you go.

// successfully tested numberOfSteps 12/10/22.

function numberOfSteps(num) {
  // i tracks state of the number of steps
  let i = 0;

  while (num) {
    i++;
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num--;
    }
  }
  // return the number of steps
  return i;
}

//Another approach is to use recursion.
// The recursive approach was successfully tested 12/10/22.

// recall the steps for recursion:
// state variables
// return state variables
// define and invoke helper method
// Base case: terminating case
// Recursive case: case in which method calls itself

function numSteps(num) {
  let steps = 0
  
  if (num === 1) {
    steps = 1
  }
  
  const traverse = (x) => {
    if (x === 0) return;
    if ( x % 2 !== 0){
      steps++
      traverse(x-1)
    }
    if ( x % 2 === 0){
      steps++
      traverse(x/2)
    }
  }
  traverse(num)
  return steps;
}

// console.log(numberOfSteps(14)) // 6
console.log(numSteps(14)) // 6