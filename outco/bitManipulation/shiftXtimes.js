/* 
Shift X times

input: 1 shifted x times
output: binary representation 

Shifting right one spot is the same as doubling the value. 
    2 >> 1 => 4
    9 >> 1 => 18
    49 >> 1 => 98
    1 >> 1 => 2

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

const shift1 = 1 << 1
const shift2 = 1 << 2
const shift3 = 1 << 3
const shift4 = 1 << 4
const shift5 = 1 << 5
const shift6 = 1 << 6
console.log('shift1:', shift1)
console.log('shift2:', shift2)
console.log('shift3:', shift3)
console.log('shift4:', shift4)
console.log('shift5:', shift5)
console.log('shift6:', shift6)

console.log('shift 1 binary:', decimalToBinary(shift1, 32))
console.log('shift 2 binary:', decimalToBinary(shift2, 32))
console.log('shift 3 binary:', decimalToBinary(shift3, 32))
console.log('shift 4 binary:', decimalToBinary(shift4, 32))
console.log('shift 5 binary:', decimalToBinary(shift5, 32))
console.log('shift 6 binary:', decimalToBinary(shift6, 32))