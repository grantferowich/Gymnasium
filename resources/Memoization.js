//memoization is caching values for later retrival;

const square = n => {
  const prevValues = [];
  if (prevValues[n] != null) {
    return prevValues[n];
  }

  let result = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1;
    }
  }
  prevValues[n] = result;
  return result;
};

console.log(square(10000));
console.log(square(10000));
console.log(square(10000));
console.log(square(10000));
console.log(square(10000));
