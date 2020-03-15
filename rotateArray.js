//example

// array = [1, 3, 0]
// k = 1 ==> [0,1,3]

const rotateArray = (arr, k) => {
  let i = 0;
  while (i < k) {
    arr.unshift(arr.pop());
    i++;
  }
  return arr;
};

console.log(rotateArray([2, 3, 4, 5, 6, 7, 8], 3));
