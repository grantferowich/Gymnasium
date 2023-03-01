/* 
Shift X times

input: 1 shifted x times
output: binary representation 
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
// expect: 00000001 => 00000010
console.log('x decimal:', x)
// x decimal: 2
console.log('x binary:', decimalToBinary(x, 32))
// x binary: 00000000000000000000000000000010