/* 
Binary Fraction Maker

I originally wrote this function for question 5.02 in
Cracking the Coding Interview.

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