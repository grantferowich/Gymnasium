/* 
222 - Consecutive Subarray Sum

Given an array of positive integers and a target value, 
return true if there is a subarray of consecutive 
elements that sum up to this target value.

Input: Array of integers, target value
Output: ToF

Constraints: O(N) time complexity, O(1) auxiliary space complexity

Input: [6,12,1,7,5,2,3], 14      	=>	Output: true (7+5+2)
Input: [8,3,7,9,10,1,13], 50		=>	Output: false

dynamic moving window problem
initialized slow pointer and fast pointer at 0 and 0
initialize a variable called sumInt
if the sumInt is less than the targetInt move the fast pointer
if the sumInt is greater than the targetInt move the slow pointer
if the sumInt equals the targetInt return true
return false

*/

const consecutiveSubarraySum = (arr, targetInt) => {
    
    let slowPtrInt = 0;
    let fastPtrInt = 1;
    let sumInt = arr[slowPtrInt] + arr[fastPtrInt];

    while (fastPtrInt < arr.length){
        // hunting logic
        while (sumInt < targetInt){
            fastPtrInt++;
            sumInt += arr[fastPtrInt];
            // console.log(`sumInt ${sumInt}`)
            if (sumInt === targetInt){
                return true;
            }
        }
        
        // contraction logic
        while (sumInt > targetInt){
            sumInt -= arr[slowPtrInt];
            // console.log(`sumInt ${sumInt}`)
            slowPtrInt++;
            if (sumInt === targetInt){
                return true;
            }
        }
    }
    return false;
}

/* Test */

const arr1 = [6,12,1,7,5,2,3];
const int1 = 14;

const arr2 = [8,3,7,9,10,1,13];
const int2 = 50;

const result1ToF = consecutiveSubarraySum(arr1, int1);
const result2ToF = consecutiveSubarraySum(arr2, int2);

console.log(`Result 1: ${result1ToF}`)
console.log(`Result 2: ${result2ToF}`)

/* Test Result 

Result 1: true
Result 2: false

*/