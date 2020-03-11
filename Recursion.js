const nFib = n => {
  if (n <= 2) {
    return 1;
  } else {
    return nFib(n - 1) + nFib(n - 2);
  }
};

console.log(nFib(3));
console.log(nFib(4));
console.log(nFib(5));
console.log(nFib(6));
console.log(nFib(7));
