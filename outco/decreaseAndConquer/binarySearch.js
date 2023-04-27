/* 
Binary Search

Leetcode 704: Easy

Successfully passed the test cases on Leetcode on April 1, 2023.

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

Algorithm analysis
Time: O(log(N))
Space: O(1)

*/

const binarySearch = (numsArr, targetInt) => {
    let startPtrInt = 0;
    let endPtrInt = numsArr.length-1;
    while (startPtrInt <= endPtrInt){
        let midPtrInt = parseInt((startPtrInt + endPtrInt)/2)
        if (numsArr[midPtrInt] === targetInt){
            return midPtrInt;
        }
        if (numsArr[midPtrInt] > targetInt){
            endPtrInt = midPtrInt - 1;
        } else {
            startPtrInt = midPtrInt + 1;
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

const nums3 = [2,5]
const target3 = 5
const test3 = binarySearch(nums3, target3)
console.log(`Test 3: ${test3}`)
// Expected output: Test 3: 1 ✓

const nums4 = [5]
const target4 = 5
const test4 = binarySearch(nums4, target4)
console.log(`Test 4: ${test4}`)
// Expected output: Test 4: 0 ✓