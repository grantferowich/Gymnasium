/* 
Decimal to Binary
input: a decimal integer
output: a bit integer
*/

const decimalToBinary = (decimal, length) => {
    let binaryStr = (decimal >>> 0).toString(2)

    while (binaryStr.length < length){
        binaryStr = '0' + binaryStr
    }

    return binaryStr
}

const data = decimalToBinary(61, 8) 
console.log('data', data) // data 111101

const data2 = decimalToBinary(43, 8)
console.log('data2', data2)
