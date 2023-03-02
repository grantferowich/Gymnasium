/* 

Set Bit

Set Bit updates the value at the xth index. 

input: a binary number, x.
output: updated binary number with a 1 at the xth location.
*/

const decimalToBinary = (decimal) => {
    let binaryStr = (decimal >>> 0).toString(2)
    while (binaryStr.length < 64){
        binaryStr = '0' + binaryStr
    }
    return binaryStr
}

const setBit = (num, x) => {
    let mask = 1 << x
    let output = num | mask
    return output
}

/* TESTS */

const binaryNum1 = setBit(0,2)
console.log('binaryNum:', binaryNum1)

const binaryNum2 = setBit(0,1)
console.log('binaryNum2:', binaryNum2)

const binaryNum3 = setBit(5,1) // 5 is 101, 1 is 10, the result is 111
console.log('binaryNum3:', binaryNum3)
console.log('binary number',decimalToBinary(binaryNum3))