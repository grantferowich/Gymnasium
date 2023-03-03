/* 
Flip Bit to Win

Question: You have an integer and you can flip exactly one bit from a 0
to a 1. Write code to find the length of the longest sequence of 1s you could 
create.

Input: a decimal integer
Output: an integer

Example:
Input: 1775 ( or 11011101111)
Output: 8



*/

const flipBitToWin = (decimalNumber) => {
    let binaryNumber = decimalNumber.toString(2)
    return binaryNumber
}

let decimal = 1775
console.log(flipBitToWin(decimal)) // 8