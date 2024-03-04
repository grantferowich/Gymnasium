/* 
Contiguous Sequence
CTCI 16.17

Dev March 1, 2024. 

You are given an array of integers (both
positive and negative). Find the 
contiguous sequence with the largest sum.
Return the sum.

Input 1
const arr1 = [2, -8, 3, -2, 4, -10]
output: [3, -2, 4] // 5

*/

const contiguousSum = (arr) => {

    let localSumInt = -Infinity;
    let maxSumInt = -Infinity;
    let xInt = 0;
    while (xInt < arr.length){
        localSumInt = Math.max(arr[xInt], localSumInt + arr[xInt]);
        maxSumInt = Math.max(maxSumInt, localSumInt);
        xInt++
    }
    return maxSumInt
}

/* Tests */
const arr1 = [2, -8, 3, -2, 4, -10] // [ 3, -2, 4] // sum is 5
const resultArr1 = contiguousSum(arr1);
console.log('for the array', arr1);
console.log('the largest contiguous sum is')
console.log('Result 1: Sum is..', resultArr1)

/* Test results

for the array [ 2, -8, 3, -2, 4, -10 ]
the largest contiguous sum is
Result 1: Sum is.. 5

*/