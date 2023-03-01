/* 
Decimal to Binary

input: a decimal integer
output: a bit integer

Successfully tested the function 2/28/23.
*/

const decimalToBinary = (decimal, length) => {
    let binaryStr = (decimal >>> 0).toString(2)
    while (binaryStr.length < length){
        binaryStr = '0' + binaryStr
    }
    return binaryStr
}


/*  TESTS */

const data = decimalToBinary(63, 8) 
console.log('data', data) // data 111101

const data2 = decimalToBinary(43, 8)
console.log('data2', data2) //  data2 00101011

const data3 = decimalToBinary(-3000000000000, 8)
console.log('data3', data3) 
console.log('data3.length', data3.length) // 32 
// note we see 32 even though the length passed in is 32

const data4 = decimalToBinary(-3000000000000, 32)
console.log('data4', data4) 
console.log('data4.length', data4.length) // 32 

