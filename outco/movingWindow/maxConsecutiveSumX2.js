/*
 *  Homework - Dynamic Programming
 *
 *
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
 */

const maxConsecutiveSum = (arr) => {
    let tempSum = - Infinity
    let maxSum = -Infinity
    let xInt = 0

    while (xInt < arr.length){
        tempSum = Math.max(tempSum + arr[xInt], arr[xInt]);
        maxSum = Math.max(tempSum, maxSum);
        xInt++;
    }

    return maxSum;
}

/* Tests */

const arr1 = [6, -1, 3, 5, -10]
const arr2 = [5]


const result1Int = maxConsecutiveSum(arr1)
const result2Int = maxConsecutiveSum(arr2)

console.log(`Result 1: ${result1Int}`)
console.log(`Result 2: ${result2Int}`)

/* Test Results

Result 1: 13
Result 2: 5

*/