/**
 * Missing Number
 *
 * Given range of 1 to N and an array of unique integers that are within that
 * range, return the missing integers not found in the array
 *
 * Parameters
 * Input: n {Integer}
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `4, [1, 4, 2] --> [3]`
 * `8, [4, 7, 1, 6] --> [2, 3, 5, 8]`
 * `6, [6, 4, 2, 1] --> [3, 5]`
 * 
 * loop over the array
 * 
 * init a fixedArray of size maxInt, fill with 0s
 * loop over the array
 * declare each array element as elementInt
 * set the fixedArray at the elementInt to 1
 * loop over the fixedArray from 1 to the fixedArray end, xInt 
 * if the fixedArray[xInt] === 0, push xInt to outputArr
 * return outputArr
 */

const missingNumber = (maxInt, arr) => {

    let xInt = 0;
    let fixedArr = Array(maxInt+1).fill(0);
    let outputArr = [];

    while (xInt < arr.length){
        let elementInt = arr[xInt];
        fixedArr[elementInt] = 1;
        xInt++;
    }
    xInt = 0;

    while (xInt < fixedArr.length){
        if (fixedArr[xInt] === 0 && xInt !== 0){
            outputArr.push(xInt);
        }
        xInt++;
    }

    return outputArr;
}

const arr1 =  [1, 4, 2]; // --> [3]
const maxInt1 = 4;
const result1 = missingNumber(maxInt1, arr1)
console.log(`Result 1: ${result1}`)

const arr2 =  [4, 7, 1, 6]; // --> [2, 3, 5, 8]
const maxInt2 = 8;
const result2 = missingNumber(maxInt2, arr2)
console.log(`Result 2: ${result2}`)

const arr3 = [6, 4, 2, 1] // --> [3, 5]
const maxInt3 = 6;  
const result3 = missingNumber(maxInt3, arr3)
console.log(`Result 3: ${result3}`)

