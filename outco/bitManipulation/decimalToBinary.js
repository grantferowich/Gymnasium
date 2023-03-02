/* 
Decimal to Binary

Input: a decimal integer
Output: a bit integer

Successfully tested the function 2/28/23.
*/

const decimalToBinary = (decimal) => {
    let binaryStr = (decimal >>> 0).toString(2)
    while (binaryStr.length < 64){
        binaryStr = '0' + binaryStr
    }
    return `${decimal} as a binary number: ${binaryStr}`
}

/*  TESTS */

const data = decimalToBinary(63) 
console.log(data)
const data2 = decimalToBinary(43)
console.log(data2)
const data3 = decimalToBinary(-3000000000000)
console.log(data3)
// note we see 32 even though the length passed in is 32
const data4 = decimalToBinary(-500)
console.log(data4)