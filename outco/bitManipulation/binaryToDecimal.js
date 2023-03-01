/* 
Binary to Decimal
*/

const binaryToDecimal = (binaryStr) => {
    const num = parseInt(binaryStr, 2);
    return num
}


/* TESTS */
const binaryStr1 = '00000001';
const result1 = binaryToDecimal(binaryStr1)
console.log('result1', result1) // 1

const binaryStr2 = '00000101';
const result2 = binaryToDecimal(binaryStr2)
console.log('result2', result2) // 5