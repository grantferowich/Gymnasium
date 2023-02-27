/* 
TARGET SUM

Given an integer x and an unsorted array of integers, describe an algorithm to
determine whether two of the numbers add up to x.(In this case, say that the
interviewer hates hash tables.)

array input = [ 1, 1, 2, 3, 5, 8, 13]
integer input = 21
output = true
first sort the array
then, initialize two pointers at the front and back of the array
if the two numbers add up to a number less than the target, move the left pointer
if the two numbers add up to a number greater than the target, move the right pointer
return true if the sum equals the target 
*/

const targetSum = (array, x) => {
    let lPtr = 0
    let rPtr = array.length -1
    array.sort()
    let sum = 0
    while (lPtr < rPtr){
        sum = array[lPtr] + array[rPtr]
        if (sum === x){return true}
        if (sum < x){
            lPtr++
        } 
        if (sum > x){
            rPtr--
        }
    }
    return false;
}

const inputArray = [ 1, 1, 2, 3, 5, 8, 13]
const x = 21
const result = targetSum(inputArray,x)
console.log('result', result) // true


const inputArray2 = [ 13, 1, 8, 3, 5, 2, 1]
const x2 = 21
const result2 = targetSum(inputArray2,x2)
console.log('result2', result2) // true

const inputArray3 = [ 13, 1, 8, 3, 5, 2, 1]
const x3 = 55
const result3 = targetSum(inputArray3, x3)
console.log('result3', result3) // false