let array = [1,2,3,4,4,4,5,6,7];

// let spliced = array.splice(2,1,4);  // returns an array of the deleted element: [3]
// console.log(spliced); // [3]
// console.log(array); // [1,2,4,4,4,5,6,7] // the array's third element is removed

// console.log(array.splice(2)) // returns an array without the first two elements 

// console.log(array.splice(2)) 
// 
// 
// let sliced = array.slice(4) // slices off the first four elements of the array
let sliced = array.slice(0,4) // returns an array of elements from index 0 to index 4
console.log(sliced) // returns the first four elements of the array
