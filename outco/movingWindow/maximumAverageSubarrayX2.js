/* 
MAXIMUM AVERAGE SUBARRAY
https://leetcode.com/problems/maximum-average-subarray-i/

Attempted May 08, 2023

Input 1
input = [1,12,-5,-6,50,3], k = 4
output = 12.75


localAvg
maxAvg

Input 2
input = [2, 4, 6], kInt = 2
output = 5

Input 3
input = [], kInt = 1
output 0


fixed moving window
1. Initialize two pointers at 0 and kInt - 1 called leftPtrInt and rightPtrInte
2. Loop while rightPtrInt is less than arr.length
3. Loop from leftPtrInt to rightPtrInt 
4. Push each element value to the localSum
5. Calculate localAverage as localSum divided by kInt.
6. If localAverageInt is greater than outputAverageInt then set outputAverageInt equal to localAverageInt.
7. Return outputAverageInt.


*/

const maximumAverageSubarray = (arr, kInt) => {
    if (kInt > arr.length || arr.length === 0){
        return 0;
    }
    let rightPtrInt = kInt - 1;
    let leftPtrInt = 0;
    let localAverage = -Infinity
    let outputAverageInt = -Infinity
    return outputAverageInt

}

/* Tests */

const arr1 = [1,12,-5,-6,50,3];
const kInt1 = 4;

const arr2 = [2, 4, 6];
const kInt2 = 2;

const arr3 = []
const kInt3 = 1

const resultInt1 = maximumAverageSubarray(arr1, kInt1);
const resultInt2 = maximumAverageSubarray(arr2, kInt2);
const resultInt3 = maximumAverageSubarray(arr3, kInt3);

console.log(`Result 1: ${resultInt1}`)
console.log(`Result 2: ${resultInt2}`)
console.log(`Result 3: ${resultInt3}`)

/* Test results */

