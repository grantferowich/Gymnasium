/* 
Remove duplicates from array
Leetcode - Easy
Successfully tested the function 6/02/2023

create a new set, 
pass in array, 
a set object only allows unique values, 
pread operator converts back to array

*/

const removeDuplicates = arr => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));



// const removeDuplicatesTwo = arr => {
//   let a = Array.from(new Set(arr));
//   return a;
// };

// console.log(removeDuplicatesTwo([1, 1, 2, 2, 3, 3, 4, 4]));
