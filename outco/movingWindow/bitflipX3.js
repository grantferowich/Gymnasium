/*
 *  BitFlip
 *
 *  Attempted May 09, 2023.
 *  Successfully tested the function May 9, 2023.
 * 
 *  Completed writing of the function and testing in under 25 minutes.
 * 
 *  Given an array of binary values (0 and 1) and N number of flips that
 *  can convert a 0 to a 1, determine the maximum number of consecutive 1's
 *  that can be made.
 *
 *  Input: arr {Array}
 *  Input: n {Integer}
 *  Output: Integer
 *
 *  Example: bitFlip([0,1,1,1,0,1,0,1,0,0], 2)
 *  Result: 7
 * 
 *  Input 2 
 *  arr = [1,1,0,1,1]
 *  kInt = 1 
 *  Output = 5
 * 
 * while there are fewer than n flips, expand
 * initialize right ptr and left ptr
 * 
 */

const bitflip = (arr, kInt) => {
    let rightPtrInt = 0;
    let leftPtrInt = 0;
    let maxLengthInt = 0;
    let togglesInt = 0;

    while (rightPtrInt < arr.length){
        if (arr[rightPtrInt] === 0) { togglesInt++};
        if (togglesInt > kInt) { 
            if (arr[leftPtrInt] === 0){
                togglesInt--;
            }
            leftPtrInt++;
        }
        rightPtrInt++;
        maxLengthInt = Math.max(maxLengthInt, rightPtrInt - leftPtrInt);
    }
    return maxLengthInt;

}
/* Tests */
const arr1 = [0,1,1,1,0,1,0,1,0,0];
const kInt1 = 2;
const arr2 = [1, 1, 0, 1, 1];
const kInt2 = 1;
const result1Int = bitflip(arr1, kInt1);
const result2Int = bitflip(arr2, kInt2);
console.log(`Result 1: ${result1Int}`);
console.log(`Result 2: ${result2Int}`);
/* Test results 
Result 1: 7
Result 2: 5
*/