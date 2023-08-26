/* 
219. Contains Duplicate II

Easy
5.3K
2.8K
Companies
Given an integer array nums and an integer k, 
return true if there are two distinct
indices i and j in the array such that 
nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

// const containsDuplicate = (arr, kInt) => {

//     if (kInt === 0){
//         return;
//     }

//     let lPtrInt = 0;
//     let rPtrInt = 0;
//     let windowArr = [];
//     while (rPtrInt < kInt){
//         windowArr.push(arr[rPtrInt]);
//         rPtrInt++;
//     }
// }

/* tests */
const numsArr1 = [1,2,3,1];
const kInt = 3;
// Output: true


const numsArr2 = [1,0,1,1]; 
const kInt2 = 1;
// Output: true


const numsArr3 = [1,2,3,1,2,3];
const kInt3 = 2;
// Output: false;
//

