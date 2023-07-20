/* 
Contiguous Sequence
CTCI 16.17

Unfinished as of July 19, 2023. 

You are given an array of integers (both
positive and negative). Find the 
contiguous sequence with the largest sum.
Return the sum.

Input 1
const arr1 = [2, -8, 3, -2, 4, -10]
output: [3, -2, 4]

*/

const contiguousSum = (arr) => {

    let localSumInt = -Infinity;
    let maxSumInt = -Infinity;
    let startInt = 0;
    let endInt = 0;
    let xInt = 0;
    while (xInt < arr.length){
        localSumInt = Math.max(arr[xInt], localSumInt + arr[xInt]);
        maxSumInt = Math.max(maxSumInt, localSumInt);
        xInt++
    }
    return maxSumInt
}

/* Tests */
const arr1 = [2, -8, 3, -2, 4, -10] // [ 3, -2, 4]
const resultArr1 = contiguousSum(arr1);
console.log('Result 1:', resultArr1)

/* Test results */