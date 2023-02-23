/* 
724. Find Pivot Index
Easy

Successfully tested the function on 2/23/23.

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly
to the left of the index is equal to the sum of all the numbers strictly
to the index's right.

If the index is on the left edge of the array, 
then the left sum is 0 because there are no elements to the left. 
This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/


const pivotIndex = function(nums) {
    if (nums.length === 0){
        return -1;
    }
    if (nums.length === 1){
        return 0
    }

    let x = 0 
    let totalSum = 0
    let currentSum = 0
    while (x < nums.length){
        totalSum += nums[x];
        x++
    }

    x = 0
    while (x < nums.length){
        rightSum = totalSum - nums[x] - currentSum
        if (currentSum === rightSum){
            return x
        }
        currentSum += nums[x]
        x++
    }
    return -1
};


let input = [1,7,3,6,5,6]
let result = pivotIndex(input)
console.log('result ', result) // 3

const input2 = [2,1,-1]
const result2 = pivotIndex(input2)
console.log('result2', result2) // 0 

const input3 = [1]
const result3 = pivotIndex(input3)
console.log('result3', result3) // 0 

const input4 = []
const result4 = pivotIndex(input4)
console.log('result4', result4) // -1