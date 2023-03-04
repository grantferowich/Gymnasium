/* 
Single Number 

Given a non-empty array of integers nums,
 every element appears twice except for one.
  Find that single one.

You must implement a solution with a linear
runtime complexity and use only constant extra space.

Input: nums = [2,2,1]
Output: 1

Whatever value is seen first, hold that as the return value. 
if you see that number again, set return value to null. 
Set next value which the function sees to the return value. 

*/

const singleNumber = (array) => {


}

/* TESTS */

let numbers1 = [1,1,2]
let data1 = singleNumber(numbers1)
console.log('Test 1:', data1)

let numbers2 = [4,1,1,2,2]
let data2 = singleNumber(numbers2)
console.log('Test 2:', data2)

let numbers3 = [2,2,1]
let data3 = singleNumber(numbers3)
console.log('Test 3:', data3)

let numbers4 = [1,0,1]
const data4 = singleNumber()