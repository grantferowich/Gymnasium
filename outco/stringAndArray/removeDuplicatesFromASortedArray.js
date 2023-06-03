/* 
26. Remove Duplicates from Sorted Array
Easy

Engineered on June 1, 2023.
Successfully tested the function on June 1, 2023 at 8:57pm. 

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge: 


Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, 
with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, 
with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/
const removeDuplicates = (numsArr) => {
    let xInt = 0;
    while (xInt < numsArr.length){
        let elementInt = numsArr[xInt]
        if (numsArr.indexOf(elementInt) < xInt){
            numsArr.splice(xInt, 11)
        }
        xInt++
    }
    return numsArr
};

/* Tests */

const numsArr1 = [1, 1, 2];
const numsArr2 = [1, 1, 2, 2, 3, 3];

const outputArr1 = removeDuplicates(numsArr1);
const outputArr2 = removeDuplicates(numsArr2);

console.log('Result 1:', outputArr1);
console.log('Result 2:', outputArr2);

/* Test result */