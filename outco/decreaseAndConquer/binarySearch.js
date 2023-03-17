/* 
Binary Search

Leetcode 704

Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Test cases:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

*/

const binarySearch = (nums, target) => {
    let startPtr = 0
    let endPtr = nums.length-1
    while (startPtr < endPtr){
        let midPtr =  Math.floor((startPtr + endPtr)/2)
        if (nums[midPtr] === target){
            return midPtr
        }
        if (nums[midPtr] > target){
            endPtr = midPtr - 1 
        } else {
            startPtr = midPtr + 1
        }
    }
    return -1
}

/* TESTS */

const nums1 = [-1,0,3,5,9,12]
const target1 = 9
const test1 = binarySearch(nums1, target1)
console.log(`Test 1: ${test1}`)
// Expected output: Test 2: 4 ✓

const nums2 = [-1,0,3,5,9,12]
const target2 = 2
const test2 = binarySearch(nums2, target2)
console.log(`Test 2: ${test2}`)
// Expected output: Test 2: -1 ✓