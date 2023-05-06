/*
 *  BitFlip
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
 *  dynamic moving window
 *  while the flipBudgetInt is greater than 0
 *  store the windowSizeInt as rightPtrInt less leftPtrInt
 *  if the windowSizeInt is greater than ultimateInt set ultimateSizeInt to windowSizeInt
 *  move the rightPtrInt up
 * 
 *  while the flipBudgetInt is greater than flipsInt
 *  move the leftPtrInt up
 * 
 */

const bitflip = (arr, flipsInt) => {

    let flipBudgetInt = 0;
    let windowSizeInt = 0; 
    let ultimateInt = 0;
    let leftPtrInt = 0;
    let rightPtrInt = 0;

    while (rightPtrInt < arr.length){

        
        // expansion phase 
        if (arr[rightPtrInt] === 0){
            flipBudgetInt++;
        }
        
        // hunting phase
        while (flipBudgetInt > flipsInt){ 
            if (arr[leftPtrInt] === 0){
                flipBudgetInt--;
            }
            leftPtrInt++;
        }
        
        rightPtrInt++;
        windowSizeInt = rightPtrInt - leftPtrInt;
        ultimateInt = Math.max(windowSizeInt, ultimateInt);
        
    }

    return ultimateInt
}

/* Tests */
const arr1 = [0,1,1,1,0,1,0,1,0,0];
const int1 = 2;

const arr2 = [0];
const int2 = 1;

const arr3 = [0];
const int3 = 0;

const result1Int = bitflip(arr1, int1); // 7
const result2Int = bitflip(arr2, int2); // 1
const result3Int = bitflip(arr3, int3); // 0


console.log(`Result 1: ${result1Int}`)
console.log(`Result 2: ${result2Int}`)
console.log(`Result 3: ${result3Int}`)

/* Test Results */