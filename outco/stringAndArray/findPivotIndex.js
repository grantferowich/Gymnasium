/* 
724. Find Pivot Index
Easy

Time complexity: O(n)
Space complexity O(1)
Successfully tested the function on 07/08/23.

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly
to the left of the index is equal to the sum of all the numbers strictly
to the index's right.

If the index is on the left edge of the array, 
then the left sum is 0 because there are no elements to the left. 
This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/


const pivotIndex = function(numsArr) {
    if (numsArr.length === 0){
        return -1;
    }
    if (numsArr.length === 1){
        return 0
    }

    let xInt = 1
    let rightSumInt = 0
    let leftSumInt = 0
    //
    while (xInt < numsArr.length){
        rightSumInt += numsArr[xInt];
        xInt++
    }
    xInt = 0
    while (xInt < numsArr.length){
        if (leftSumInt === rightSumInt){
            return xInt
        }
        leftSumInt += numsArr[xInt];
        rightSumInt -= numsArr[xInt + 1];
        xInt++
    }
    return -1
};

/* Test */

let input = [1,7,3,6,5,6]
let result = pivotIndex(input)
console.log('First result: ', result) // 3

const input2 = [2,1,-1]
const result2 = pivotIndex(input2)
console.log('Second result:', result2) // 0 

const input3 = [1]
const result3 = pivotIndex(input3)
console.log('Third result:', result3) // 0 

const input4 = []
const result4 = pivotIndex(input4)
console.log('Fourth result:', result4) // -1

/* Test result 

First result:  3
Second result: 0
Third result: 0
Fourth result: -1


*/