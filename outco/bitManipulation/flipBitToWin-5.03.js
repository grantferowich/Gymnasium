/* 
Flip Bit to Win

Successfully tested the function 3/23/23.

Question: You have an integer and you can flip exactly one bit from a 0
to a 1. Write code to find the length of the longest sequence of 1s you could 
create.

Input: a decimal integer
Output: an integer

Example:
Input: 1775 ( or 11011101111)
Output: 8

Complexity analysis
Time complexity: O(N)
Space complexity: O(1)

*/

const flipBitToWin = (decimalNumber) => {
    let binaryNumber = decimalNumber.toString(2);
    console.log('binaryNumber:', binaryNumber)
    let maxCount = -Infinity;
    let flipBudget = 1;
    let lPtr = 0;
    let rPtr = 0
    let result = 0
    
    while (rPtr < binaryNumber.length){
        // hunt phase 
        if (binaryNumber[rPtr] !== "1"){
            flipBudget--;
        }
        // catch up phase
        if (flipBudget < 0){
            result = rPtr - lPtr;
            maxCount = Math.max(maxCount, result)
            while (binaryNumber[lPtr] !== "0"){
                lPtr++
            } 
            lPtr++
            flipBudget++
        }
        rPtr++
    }
    return Math.max(maxCount, rPtr-lPtr + flipBudget) 
}

/*  TESTS */

const decimal = 1775
console.log(flipBitToWin(decimal)) // 8

const decimal2 = 7
console.log(flipBitToWin(decimal2)) // 4

const decimal3 = 6
console.log(flipBitToWin(decimal3)) // 3