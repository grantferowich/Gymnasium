/* 
Binary to String

CTCI 5.02

Successfully tested the function 03/03/2023.

Question: Given a real number between 0 and 1 (e.g., 0.72) that is passed in as a 
doulbe, print the binary representation. If the number cannot be 
represented accurately in binary with at most 32 characters,
print "ERROR."

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