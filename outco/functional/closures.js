/* 
Closures

Successfully tested the function 
In JavaScript, a closure is a feature that allows a function 
to access and remember variables from its outer scope even
after the outer function has returned. Essentially, a closure
is a function with access to its own private variables 
and the variables in the scope chain of its outer function.

A closure is created when a function is defined inside 
another function and the inner function has access 
to the outer function's variables. The inner function 
can then be returned or passed as an argument to another 
function and still retain access to the outer function's 
variables.

Closures are often used to create private variables and 
functions, as well as to implement callback functions, 
event handlers, and other advanced programming patterns. 
They can also be used to create modular and reusable code, 
and to improve the performance of certain operations by 
avoiding the creation of unnecessary variables and functions.
(h/t ChatGPT)
*/
const summation = arr => {
  let sum = 0;

  //the sumFun closure captures the array even though the array is not passed as an argument
  //the closure captures a free variable - arr - that was defined at the time the function was defined
  const sumFun = () => {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  };

  sumFun();
  return sum;
};

console.log(summation([1, 2, 3, 4])); // ==> 10
//works
