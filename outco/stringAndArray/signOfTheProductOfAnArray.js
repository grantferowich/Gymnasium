/* 1822. Sign of the Product of an Array

Successfully tested the function on June 29, 2023. 

Easy
1.9K
191
Companies
There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).

Example 1:

Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1
Example 2:

Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0 */

const arraySign = (numsArr) => {
    let int = 1
    let xInt = 0
    while (xInt < numsArr.length){
        let newInt = numsArr[xInt]
        if (newInt === 0){
            return 0
        }
        int *= newInt
        xInt++
    }
    if (int === 1 || int === 0){
        return 0;
    }
    if (int < 0){
        return -1
    }
    if (int > 1){
        return 1
    }
};

/* Tests */

const arr1 = [-1,-2,-3,-4,3,2,1]
const arr2 = [1,5,0,2,-3]

const outputInt1 = arraySign(arr1);
const outputInt2 = arraySign(arr2);

console.log('Result 1:', outputInt1); // expect 1 
console.log('Result 2:', outputInt2); // expect 0

/* Test results

Result 1: 1
Result 2: 0

*/