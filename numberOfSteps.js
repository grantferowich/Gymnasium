//REACTO

//Repeat the question
//Examples
//Approach
//Code
//Test
//Optimize

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

function numberOfSteps(num) {
  let i = 0;

  while (num) {
    i++;
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num--;
    }
  }
  return i;
}

//Another approach is to use recursion.
function numSteps(num) {
  if (num === 1) {
    return 1;
  }
  if (num % 2 === 0) {
    return 1 + numSteps(num / 2);
  } else {
    return 1 + numSteps(num - 1);
  }
}
