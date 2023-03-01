/* 
Mask
*/

// utility method
const decimalToBinary = (decimal, length) => {
    let binaryStr = (decimal >>> 0).toString(2)
    while (binaryStr.length < length){
        binaryStr = '0' + binaryStr
    }
    return binaryStr
}



const maskA = decimalToBinary(1, 8)
console.log('maskA:', maskA)
// maskA: 00000001
const maskB = decimalToBinary(3,8)
console.log('maskB:', maskB)
// maskB: 00000011
const maskC = decimalToBinary(4,8)
console.log('maskC:', maskC)
// maskB: 00000100

const x = maskA << 3
// console.log('mask', mask)
