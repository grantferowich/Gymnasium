const summation = n => {
  let sum = 0;
  let i = 1;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const summationSequence = (start, length) => {
  let arr = [start];

  while (arr.length < length) {
    let last = arr.length - 1;
    arr.push(summation(arr[last]));
  }

  return arr;
};

console.log(summationSequence(3, 4)); // => [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // => [5, 15, 120])
