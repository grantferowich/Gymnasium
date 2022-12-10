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

console.log(rotateArray([2, 3, 4, 5, 6, 7, 8], 3));  // [ 6, 7, 8, 2, 3, 4, 5]

// input: array, k
// output: array

// return the array rotated k positions [1,2,3], k=1 => [3,2,1]
// constraints: 
// edge cases: 
 
// Successfully tested the solution on 12/10/22
const rotateArray2 = (array, k) => {
  let x = 0;
  while ( x < k){
    // (removal) store the last element popped off the end of the array
    let element = array.pop();
    // (insertion) append the element to the front of the array
    array.unshift(element) 
    x++
  }
  return array
}
console.log(rotateArray2([2, 3, 4, 5, 6, 7, 8], 3)); 