/* 
Single Number 

Given a non-empty array of integers nums,
 every element appears twice except for one.
  Find that single one.

You must implement a solution with a linear
runtime complexity and use only constant extra space.

Input: nums = [2,2,1]
Output: 1


## Ideas
What if you put an array of bits from 0 up to the max value of the array in an array called 
storageArr. 
Then, loop over the input array. 
If you see 2 and index 2 is undefined, then set the storageArr at index 2 to be 0.
If you see 2 again, and the index at 2 is 0, then set the storageArr at index 2 to be 1. 
Loop over the storageArr.
If the array at index x equals 0, then return the index as the number with a single value.
The proposed function uses linear extra space. 


Store the first element in the variable singleFrequencyInt.
Loop over the array. 
If the array at position x equals singleFrequencyInt,
set singleFrequencyInt to the number at x+1. Increment x by 2.


The optimal solution is to XOR each value. 
"The basic idea is that XORing two equal numbers 
results in 0, so XORing all the numbers in the
array together will cancel out all the pairs
and leave only the single number." (h/t ChatGPT)

*/

const singleNumber = (array) => {
  let singleFrequencyInt = array[0]
  let x = 1
  
  while (x < array.length){
      singleFrequencyInt ^= array[x]
    x++
  }
  return singleFrequencyInt
}

/* TESTS */

let numbers1 = [1,1,2]
let data1 = singleNumber(numbers1)
console.log('Test 1:', data1)
// 2

let numbers2 = [4,1,1,2,2]
let data2 = singleNumber(numbers2)
console.log('Test 2:', data2)
// 4 

let numbers3 = [2,2,1]
let data3 = singleNumber(numbers3)
console.log('Test 3:', data3)
// 1

let numbers4 = [1,0,1]
const data4 = singleNumber(numbers4)
console.log('Test 4:', data4)
// 0