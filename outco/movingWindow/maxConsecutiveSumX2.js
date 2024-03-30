/*
 *  Homework - Dynamic Programming
 * 
 * Successfully tested the function May 04, 2023. 
 *  Implemented Kadane's algorithm. 
 *  Problem 1:  Max Consecutive Sum
 *
 *  Prompt:    Given an array of integers find the sum of consecutive
 *             values in the array that produces the maximum value.
 *
 *  Input:     Unsorted array of positive and negative integers
 *  Output:    Integer (max consecutive sum)
 *
 *  Example:   input = [6, -1, 3, 5, -10]
 *             output = 13 (6 + -1 + 3 + 5 = 13)
 *
 * Loop from 0 to arr.length
 *
 *
 * */

const maxConsecutiveSum = (arr) => {
    let tempSum = - Infinity;
    let maxSum = -Infinity;
    let xInt = 0;
    while (xInt < arr.length){
        tempSum = Math.max(tempSum + arr[xInt], arr[xInt]);
        maxSum = Math.max(tempSum, maxSum);
        xInt++;
    }
    return maxSum !== -Infinity ? maxSum : 0;
}

/* Tests */

const arr1 = [6, -1, 3, 5, -10];
const arr2 = [5];
const arr3 = [];
const arr4 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const result1Int = maxConsecutiveSum(arr1);
const result2Int = maxConsecutiveSum(arr2);
const result3Int = maxConsecutiveSum(arr3);
const result4Int = maxConsecutiveSum(arr4);

console.log(`Result 1: ${result1Int}`)
console.log(`Result 2: ${result2Int}`)
console.log(`Result 3: ${result3Int}`)
console.log(`Result 4: ${result4Int}`)

/* Test Results

Result 1: 13
Result 2: 5
Result 3: 0
Result 4: 6

*/