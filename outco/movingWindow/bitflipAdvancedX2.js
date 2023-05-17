/*
 *  Attempted the function May 16, 2023.
 *   
 * 
 *  BitFlip
 * 
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
 *  Initialize the leftPtrInt and rightPtrInt
 *  Expand while the number of flipped 1s is less than or equal to the input int
 *  Contract while the number of flipped 1s is greater than the input int 
 *  Keep track of resultLeftInt and resultRightInt
 *  
 * 
 */

const bitflipAdvanced = (arr, int) => {

    let flipBudgetInt = int;
    let leftPtrInt = 0;
    let rightPtrInt = 0;
    let countInt = 0;

    while (rightPtrInt < arr.length){
        
        if (arr[rightPtrInt] === 0){
            flipBudgetInt--;
        }

        rightPtrInt++
        
        while (flipBudgetInt < 0){
            if (arr[leftPtrInt] === 0){
                flipBudgetInt++;
            }

            leftPtrInt++
        }
        countInt = Math.max(countInt, rightPtrInt - leftPtrInt)        
    }

    return countInt;
}

/* Test */

const arr1 = [0,1,1,1,0,1,0,1,0,0];
const int1 = 2;

const arr2 = [0, 1, 0, 1, 0]
const int2 = 1

const arr3 = [0]
const int3 = 1;

const arr4 = [0];
const int4 = 0;

const resultInt1 = bitflipAdvanced(arr1, int1);
const resultInt2 = bitflipAdvanced(arr2, int2);
const resultInt3 = bitflipAdvanced(arr3, int3);
const resultInt4 = bitflipAdvanced(arr4, int4);

console.log(`Result 1: ${resultInt1}`);
console.log(`Result 2: ${resultInt2}`);
console.log(`Result 3: ${resultInt3}`);
console.log(`Result 4: ${resultInt4}`);

/* Test results */