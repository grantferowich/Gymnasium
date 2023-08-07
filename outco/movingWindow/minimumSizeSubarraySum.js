/* 
Minimum Size Subarray

Successfully tested the function 03/14/23.

Medium

Given an array of positive integers nums and a positive 
integer target, return the minimal length of a 
subarray whose sum is greater than or equal to target. 
If there is no such subarray, return 0 instead.

Test cases

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal 
length under the problem constraint.

Input: target = 4, nums = [1,4,4]
Output: 1

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0


Analysis
Minimal window size: track min
sum of window elements compared to target: track sum of elements 

how do we know if we have the sum? 
Each time we see an element we increment the sum

We are tracking some property about the window, the sum of the window elements

1. move right: while sum less than target
2. move left: while sum greater than or equal to target 
3. compare with result
4. return final result

Complexity analysis
Time: O(N)
Space: O(1)
*/

const minimumSizeSubarraySum = (target, nums) => {
    
    let rightPtrInt = 0;
    let leftPtrInt = 0;
    let sumInt = 0
    let lengthInt = Infinity

    while (sumInt < target){
        let rChar = nums[rightPtrInt];
        sumInt += rChar;
        rightPtrInt++;
        while (sumInt >= target){
            if (rightPtrInt - leftPtrInt < lengthInt){
                lengthInt = rightPtrInt - leftPtrInt;
            }
            let lChar = nums[leftPtrInt];
            sumInt -= lChar;
            leftPtrInt++;
        }
    }
    return lengthInt === Infinity ? 0 : lengthInt;
}


/* TESTS */


const test1 = minimumSizeSubarraySum( 7, [2,3,1,2,4,3])
console.log('Test 1:', test1)
// Expected output: 2

const test2 = minimumSizeSubarraySum( 4, [1,4,4])
console.log('Test 2:', test2)
// Expected output: 1

const test3 = minimumSizeSubarraySum( 11, [1,1,1,1,1,1,1,1])
console.log('Test 3:', test3)
// Expected output: 0

const test4 = minimumSizeSubarraySum(11, [1,2,3,4,5])
console.log('Test 4', test4)
// Expected 