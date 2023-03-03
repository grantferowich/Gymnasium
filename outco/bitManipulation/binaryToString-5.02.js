/* 
Binary to String

CTCI 5.02

Input: 0.04, a decimalNumber
Output: 0.100

*/

const binaryToString = (decimalNumber) => {
    if (decimalNumber >= 1 || decimalNumber <= 0){
        return 'ERROR'
    }
    let numberAfterDecimalInt = parseInt(decimalNumber.toString().split(".")[1])
    let numberAfterDecimalStr = numberAfterDecimalInt.toString(2)
    return "0."+ numberAfterDecimalStr
}

/* TESTS */


const invalidData = binaryToString(-0.16) 
console.log('Output 1:', invalidData)
// Output: ERROR

const data = binaryToString(0.16) 
console.log('Output 2:', data)

const data3 = binaryToString(0.04) 
console.log('Output 3:', data3)