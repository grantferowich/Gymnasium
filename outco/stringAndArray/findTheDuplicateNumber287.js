/* 
287. Find the Duplicate Number

Successfully tested the solution on July 8, 2023.
Leetcode URL: https://leetcode.com/problems/find-the-duplicate-number/submissions/989270329/
Medium
19.8K
3.1K
Companies
Given an array of integers nums containing n + 1 integers
 where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums,
 return this repeated number.

You must solve the problem without modifying the array 
nums and uses only constant extra space.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

The approach here is to store all integers as keys in a map.
Then store the frequency of each integer as each key's value.
Then return the key whose frequency is 2. 
*/

const findTheDuplicateNumber = (arr) => {
    let intMap = new Map();
    let xInt = 0;
    while (xInt < arr.length){
        let elementInt = arr[xInt]
        if (intMap.has(elementInt)){
            let frequencyInt = intMap.get(elementInt);
            intMap.set(elementInt, frequencyInt + 1);
        }
        if (!intMap.has(elementInt)){
            intMap.set(elementInt, 1)
        }
        xInt++
    }
    for (const [ int, frequencyInt] of intMap){
        if (frequencyInt >= 2){
            return int
        }
    }
}

/* Test */
const arr1 = [0, 1, 2, 3, 4, 5, 5]; // The first duplicate number is 5
const arr2 = [1,3,4,2,2]; // The second duplicate number is 2
const arr3 = [3,1,3,4,2]; // The third duplicate number is 3
const arr4 = [2,2,2,2,2] // The fourth duplicate number is 2
const int1 = findTheDuplicateNumber(arr1);
const int2 = findTheDuplicateNumber(arr2);
const int3 = findTheDuplicateNumber(arr3);
const int4 = findTheDuplicateNumber(arr4);
console.log('The first duplicate number is ', int1);
console.log('The second duplicate number is ', int2);
console.log('The third duplicate number is ', int3);
console.log('The fourth duplicate number is ', int4);
/* Test result 
The first duplicate number is  5
The second duplicate number is  2
The third duplicate number is  3
The fourth duplicate number is  2
*/