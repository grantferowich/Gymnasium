/* 
485. Max Consecutive Ones

Developed and completed testing on August 15, 2023.
Two hints to reach final soln. 

Easy
4.9K
439
Companies
Given a binary array nums, return the maximum number of 
consecutive 1's in the array.


Example 1:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 2 
*/

const maxConsecutiveOnes = (arr) =>{
        let rPtrInt = 0;
        let currentResultInt = 0;
        let ultimateResultInt = 0;
        while (rPtrInt < arr.length){
            if (arr[rPtrInt] === 1 ){
                currentResultInt++;
                ultimateResultInt = Math.max(currentResultInt, ultimateResultInt);
            } 
            if (arr[rPtrInt] === 0) { 
                currentResultInt = 0;
            }
            rPtrInt++;
        }
        return ultimateResultInt;
}

/* Tests */
const arr1 = [1,1,0,1,1,1]; // expect 3 // passing 
const arr2 = [1,0,1,1,0,1]; // expect 2;
const resultInt1 = maxConsecutiveOnes(arr1);
const resultInt2 = maxConsecutiveOnes(arr2);
console.log("Result 1: ", resultInt1);
console.log("Result 2: ", resultInt2);

/* Test results */