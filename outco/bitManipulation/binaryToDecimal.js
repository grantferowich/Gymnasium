/* 
Binary to Decimal

Successfully tested the function 3/1/23.
*/

const binaryToDecimal = (binaryStr) => {
    const num = parseInt(binaryStr, 2);
    return num
}

/* TESTS */
const binaryStr1 = '00000001';
const result1 = binaryToDecimal(binaryStr1)
console.log('result 1:', result1) // result 1: 1

const binaryStr2 = '00000101';
const result2 = binaryToDecimal(binaryStr2)
console.log('result 2:', result2) // result 2: 5

const binaryStr3 = '00011101';
const result3 = binaryToDecimal(binaryStr3)
console.log('result 3:', result3) // result 2 29

