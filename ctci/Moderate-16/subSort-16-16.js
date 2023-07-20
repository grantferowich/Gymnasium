/* 
Sub Sort
CTCI 16.16
Successfully tested the solution on July 18, 2023. 
Given an array of integers, write a method to find indices m 
and n such that if you sorted elements m through n, the e
entire array would be sorted. Minimize n - m
(that is, find the smallest such sequence.)

Input 1
const arr = [ 1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
output: [ 3, 9 ].
At [ 3, 9 ] you could sort the elements in between 
arr[3] and arr[9] and the entire array would be sorted.

Input 2
const arr = [ 1, 1, 2, 3 ]
output: 0. 
What is the pause condition? The number at arr[iInt] and 
the number at arr[jInt] are equal, or, the element at arr[iInt]
is greater than the element at arr[jInt].


*/

const subSort = (arr) => {

}

/* Test */
const arr1 = [ 1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
                     // x                 // x
const arr2 = [ 1, 1, 2, 3]; // 0
const arr3 = [2, 6, 4, 8, 10, 9, 15]; // 5
// find the first location where the array is not sorted
    // 1 index
// find the last location where the array is not sorted
    // 5 index
// return 5 - 1 + 1
const arr4 = [ 1, 3, 2, 4, 5 ]; // 2


const resultTuple1 = subSort(arr1);
const resultTuple2 = subSort(arr2);
const resultTuple3 = subSort(arr3);
const resultTuple4 = subSort(arr4);

console.log('Result 1:', resultTuple1); // expect [ 3, 9 ] // 7
console.log('Result 2:', resultTuple2); // expect  0 
console.log('Result 3:', resultTuple3); // expect 5 
console.log('Result 4:', resultTuple4); // expect 2


/* Test results */