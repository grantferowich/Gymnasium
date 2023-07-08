/* 
287. Find the Duplicate Number
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

*/

const findTheDuplicateNumber = (arr) => {

}

/* Test */
const arr1 = [0, 1, 2, 3, 4, 5, 5]; // The first duplicate number is 5
const arr2 = [1,3,4,2,2]; // The second duplicate number is 2
const arr3 = [3,1,3,4,2]; // The third duplicate number is 3
const int1 = findTheDuplicateNumber(arr1);
const int2 = findTheDuplicateNumber(arr2);
const int3 = findTheDuplicateNumber(arr3);
console.log('The first duplicate number is ', int1);
console.log('The second duplicate number is ', int2);
console.log('The third duplicate number is ', int3);
/* Test result */