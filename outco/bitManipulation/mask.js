/* 
Mask

Successfully tested some masked values 3/01/23. 
A note on 32-bit integers in JavaScript (courtesy of ChatGPT)
However, when performing bitwise operations such as shifting or manipulating individual bits, 
JavaScript does convert numbers to 32-bit signed integers. 
This is because JavaScript uses the ECMAScript specification, 
which defines bitwise operations on 32-bit signed integers.

So, while JavaScript uses 64-bit floating-point numbers to represent numbers in general,
it does use 32-bit signed integers for bitwise operations.

*/

// utility method
const decimalToBinary = (decimal, length) => {
    let binaryStr = (decimal >>> 0).toString(2)
    while (binaryStr.length < length){
        binaryStr = '0' + binaryStr
    }
    return binaryStr
}



const maskA = decimalToBinary(1, 32)
console.log('maskA:', maskA)
// maskA: 00000001

const maskB = decimalToBinary(3,32)
console.log('maskB:', maskB)
// maskB: 00000011

const maskC = decimalToBinary(4,32)
console.log('maskC:', maskC)
// maskB: 00000100

const maskD = decimalToBinary(-4,32)
console.log('maskD:', maskD)
console.log(maskD.length)

const x = maskA << 3
// console.log('mask', mask)
