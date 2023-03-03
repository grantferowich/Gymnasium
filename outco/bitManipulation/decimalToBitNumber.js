/* 
Decimal To Bit Number

Input: Decimal number
Output: Bit number

Successfully tested the function 3/2/23
*/


const decimalToBitNumber = (decimal) => {
    return parseInt(decimal.toString(2))
}

console.log(decimalToBitNumber(5)) // 101
console.log(decimalToBitNumber(0)) // 0
console.log(decimalToBitNumber(-1)) // 0
