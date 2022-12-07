const fib = (number) => {
  if (1 >= number) {
    return number;
  }
    return fib(number - 1) + fib(number - 2);
};

// fib(4) // 0:0, 1:1, 2:1, 3:2, 4:3, 5:5, 6: 8
module.exports = fib