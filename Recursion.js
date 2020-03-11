const nFib = (n, prevValues = []) => {
  if (prevValues[n] != null) {
    return prevValues[n];
  }

  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = nFib(n - 1, prevValues) + nFib(n - 2, prevValues);
  }
  prevValues[n] = result;
  return result;
};

console.log(nFib(3));
console.log(nFib(4));
console.log(nFib(5));
console.log(nFib(6));
console.log(nFib(7));
console.log(nFib(41));
