/* 
Max Consecutive Sum a.k.a. Max Subarray Sum

Given an array of integers find the sum of consecutive values
in the array that produces the maximum value.

Input: array
Output: number

Input = [6, -1, 3, 5, -10]
Output = 13

Succesfully tested the solution 12/13/2022.

Increased test coverage 03/15/2023.

 */
const maxConsecutiveSum = (array) => {
    let local = -Infinity;
    let ultimate = -Infinity;
    for (let x = 0; x < array.length; x++){
        local = Math.max(local + array[x], array[x]);
        ultimate = Math.max(local, ultimate);
    }
    return ultimate;
}
/* TESTS */
let data1 = maxConsecutiveSum([ 6, -1, 3, 5, -10])
console.log('Test 1:', data1)
// 13

let data2 = maxConsecutiveSum([ 5, 4, -1, 7, 8])
console.log('Test 2:', data2)
// 23

let data3 = maxConsecutiveSum([1])
console.log('Test 3:', data3)
// 1

let data4 = maxConsecutiveSum([-2,1,-3,4,-1,2,1,-5,4])
console.log('Test 4:', data4)
// 6
