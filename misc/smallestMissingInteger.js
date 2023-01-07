// Given an array of numbers, return the smallest positive integer greater than 0 that does not occur in a

// const solution = arr => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (0 <= arr[i]) {
//       result[arr[i]] = true;
//     }
//   }

//   for (let j = 1; j < result.length; j++) {
//     if (undefined === result[j]) {
//       return i;
//     }
//   }
//   return 1;
// };

function smallestMissingInteger(A) {
  const len = A.length;
  const hash = {};
  for (let i = 0; i < len; i++) {
    hash[A[i]] = A[i];
  }
  for (let i = 1; i < 1000002; i++) {
    if (!hash[i]) return i;
  }
  return 1;
}

const run = smallestMissingInteger([1, 2, 3, 4]);
console.log(run); // =>5
//THIS DOES NOT WORK >:(
