/* 
2215. Find the Difference of Two Arrays
Successfully tested the function on July 19, 2023.

Easy
1.8K
68
Companies
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

Example 1:
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, 
whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, 
whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

Example 2:
Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
*/

const findTheDifferenceOfTwoArrays = (arr1 , arr2) => {
    let outputArr = [[], []]
    let xInt = 0;
    while (xInt < arr1.length){
        let int1 = arr1[xInt]
        // if int1 is in arr2, do nothing
        // if int1 is not in arr2, 
        // append int1 to the first element in the tuple
        if (!arr2.includes(int1) && !outputArr[0].includes(int1)){
            outputArr[0].push(int1)
        }
        xInt++
    }
    xInt = 0;
    while (xInt < arr2.length){
        let int2 = arr2[xInt]
        // if int2 is in arr1, do nothing
        // if int2 is not in arr1, 
        // append int1 to the second element in the tuple
        if (!arr1.includes(int2) && !outputArr[1].includes(int2)){
            outputArr[1].push(int2)
        }
        xInt++
    }


    return outputArr;
}

/* Tests */

const arr1 = [ 1, 2, 3];
const arr2 = [ 2, 4, 6];

const tuple1 = findTheDifferenceOfTwoArrays(arr1, arr2); // [[1, 3], [4, 6]];

console.log('Result 1:', tuple1)
/* Test results 

Result 1: [ [ 1, 3 ], [ 4, 6 ] ]

*/