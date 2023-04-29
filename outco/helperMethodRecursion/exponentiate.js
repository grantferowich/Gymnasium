/*
 * 2f. Given a base and an exponent, create a function to find the power
 *
 * Successfully tested the function April 29, 2023.
 * 
 * Input:   base {Integer}
 * Input:   exponent {Integer}
 * Output:  {Integer}
 *
 * Example: power(3, 4) => 81
 *
 * 1 --> 3 --> 9 --> 27 --> 81
 */

const exponentiate = (baseInt, exponentInt) => {
    let resultInt = 1
    const multiply = (numInt, powerInt) => {
        if (powerInt === exponentInt) {
            return numInt * baseInt
        }
        resultInt = resultInt * baseInt
        multiply(resultInt, powerInt+1)
    }
    multiply(baseInt, 0)
    return resultInt 
}

/* TESTS */

const baseInt1 = 3
const exponentInt1 = 4

const resultInt1 = exponentiate(baseInt1, exponentInt1)

console.log(`Result 1: ${resultInt1}`)

/* TEST RESULTS */