const fib = (number) => {
  if (1 >= number) {
    return number;
  }
    return fib(number - 1) + fib(number - 2);
};

// fib(4) // 0:0, 1:1, 2:1, 3:2, 4:3, 5:5, 6: 8
// module.exports = fib


// with memoization
// memoization stores the results of subproblems in a struct
// by memoizing the subsolutions 


const fibWtihMemoization = (number) => {

  let lookUp = {};

  if (lookUp[number] == null ){
    if (1 >= number) {
      lookUp[number]=number;
  } else {
    lookUp[number] = fibWtihMemoization(number - 1) + fibWtihMemoization(number - 1);
   
  }}
  return lookUp[number]  
};

// fib(4) // 0:0, 1:1, 2:1, 3:2, 4:3, 5:5, 6: 8
// module.exports = fib
console.log(fibWtihMemoization(6)) // 8 '
console.log(fibWtihMemoization(100))
console.log(fibWtihMemoization(200))
