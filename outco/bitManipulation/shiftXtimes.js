/* 
Shift X times

input: 1 shifted x times
output: binary representation 

Shifting right one spot is the same as doubling the value. 
    2 >> 1 => 4
    9 >> 1 => 18
    49 >> 1 => 98

*/

// helper 
const decimalToBinary = (decimal, length) => {
    let binaryStr = (decimal >>> 0).toString(2)
    while (binaryStr.length < length){
        binaryStr = '0' + binaryStr
    }
    return binaryStr
}

const x = 1 << 1
console.log('x decimal:', x)
// x decimal: 2

// expect: 00000001 => 00000010
console.log('x binary:', decimalToBinary(x, 32))
// x binary: 00000000000000000000000000000010

const y = 1 << 3 
console.log('y decimal:', y)
// y decimal: 8

// expect: 00000001 => 00001000
console.log('y binary:', decimalToBinary(y, 32))
// y binary: 00000000000000000000000000001000

const z = 9 << 1
console.log('z decimal:', z)

const a = 49 << 1
console.log('a decimal:', a)
// a decimal: 98

console.log('a binary:', decimalToBinary(a, 32))
// a binary: 00000000000000000000000001100010