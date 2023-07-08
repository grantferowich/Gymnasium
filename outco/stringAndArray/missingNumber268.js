/* 268. Missing Number

Successfully tested the solution on July 8, 2023.
Leetcode URL: https://leetcode.com/problems/missing-number/submissions/989263844/
Easy
9.8K
3.2K
Companies
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.


Example 2:
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.


Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums. 

Here is the algorithm. Loop over the array starting at 0.
Step through the array n-1 times, where n is the length.
Maintain a map. 
In the map, there are 0 to n-1 keys with a keyInt and trueOrFalse set as true.
Count up normally from 0 to n-1 to build the intMap.
Now, loop over the input arr. 
At each step, set the intMap value to false.
Finally, retrieve the key from the map whose value is true. Only one key will have a 
value of true. 

*/


const missingNumber = (arr) => {
    let intMap = new Map();
    let iInt = 0
    while (iInt <= arr.length){
        intMap.set(iInt, true)
        iInt++
    }
    iInt = 0
    while (iInt < arr.length){
        let elementInt = arr[iInt]
        intMap.set(elementInt, false)
        iInt++
    }
    for (const [int, trueOrFalse] of intMap){
        if (trueOrFalse === true){
            return int
        }
    }
}

/* Test */
const arr1 = [0, 1, 2, 3, 4]; // the missing number is 5
const arr2 = [3,0,1]; // the missing number is 2
const arr3 = [0,1]; // the missing number is 2
const arr4 = [9,6,4,2,3,5,7,0,1]; // the missing number is 8
const result1Int = missingNumber(arr1);
const result2Int = missingNumber(arr2);
const result3Int = missingNumber(arr3);
const result4Int = missingNumber(arr4);
console.log('The first missing number :', result1Int);
console.log('The second missing number :', result2Int);
console.log('The third missing number :', result3Int);
console.log('The fourth missing number :', result4Int);
/* Test results */