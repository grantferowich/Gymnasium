//First, divide the list in two until there are lists of size 1;
//then, merge together all the smaller lists until there is only 1 sorted list;
const { PerformanceObserver, performance } = require("perf_hooks");
var t0 = performance.now();

const mergeSort = unsortedArr => {
  if (unsortedArr.length < 2) {
    return unsortedArr;
  }

  const middle = Math.floor(unsortedArr.length / 2);

  const left = unsortedArr.slice(0, middle);
  const right = unsortedArr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left.slice()).concat(right.slice());
};

console.log(
  mergeSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
