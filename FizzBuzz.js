const fizzBuzz = n => {
  let newArr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      newArr.push(i.toString());
    } else if (i % 3 === 0 && i % 5 !== 0) {
      newArr.push("Fizz");
    } else if (i % 3 !== 0 && i % 5 == 0) {
      newArr.push("Buzz");
    } else {
      newArr.push("FizzBuzz");
    }
  }

  return newArr;
};

const run = fizzBuzz(100);
console.log(run);
