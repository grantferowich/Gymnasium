/* 
Binary Fraction Maker

*I originally wrote this function for question 5.02 in
Cracking the Coding Interview.* 

input: a number between 0 and 1 
output: a binary representation of the number 

Every decimal between 0 and 1 may be represented as
the binary representation of the number * 100, 
which produces the numerator of the final result.
The denominator of the final result is given by the binary
representation of 100, which is 1100100.

Successfully tested the function 03/03/23.

*/

const binaryToString = (binaryNumber) => {
    let denominator = 100;
    denominator = parseInt(denominator.toString(2))
    
    let numerator = binaryNumber*100
    numerator = parseInt(numerator.toString(2))
    return numerator + "/" + denominator
}

/* TESTS */

const data = binaryToString(0.16) 
console.log('Output:', data)
// Output = 10000/1100100