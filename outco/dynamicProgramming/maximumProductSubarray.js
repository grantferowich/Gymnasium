
/* 
152. Maximum Product Subarray
Medium
Given an integer array nums, find a 
subarray that has the largest product, 
and return the product.

The test cases are generated so that the 
answer will fit in a 32-bit integer.

*/
const maxProduct = (nums) =>{
    if (nums === undefined || nums === null){ return }

}

/* TESTS */
let input0=undefined // undefined
let input1 = [ 1, 3, -1, 0] // 3
let input2 = [-1, 0, -5] // 0
let input3 = [-1, 2, 3, 5] // 30
let input4 = [ 2, 3, -2, 4] // 6
let input5 = [-2] // -2
let input6 = [-2,3,-4] // 24

console.log(maxProduct(input0)) // undefined
console.log(maxProduct(input1)) // 3 
console.log(maxProduct(input2)) // 0
console.log(maxProduct(input3)) // 15 
console.log(maxProduct(input4)) // 6
console.log(maxProduct(input5)) // -2 
console.log(maxProduct(input6)) // 24