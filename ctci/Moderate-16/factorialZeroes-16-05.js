/* 
Factorial Zeroes
CTCI 16.05

Partially tested as of July 12, 2023.

Write an algorithm which computes the number of trailing 
zeroes in n! factorial. 

const input = 5
output: 1
why? 5! is 120. There is one zero trailing the last
non-zero integer.

const input = 8
output: 1
why? 8! is 40320. There is one zero trailing the last non-zero
integer.
*/

const factorialZeroes = (int) => {

    let productInt = 1
    const computeIntFactorial = (int) => {
        if (int === 1){
            return
        }
        productInt *= int;
        computeIntFactorial(int - 1);
    }
    computeIntFactorial(int)
    let trailingZeroesInt = 0
    let productStr = productInt.toString()
    let zeroLocationInt = productStr.length - 1
    while (zeroLocationInt > -1){
        if (productStr[zeroLocationInt] === "0"){
            trailingZeroesInt++
        }
        if (productStr[zeroLocationInt] !== "0"){
            return trailingZeroesInt
        }
        zeroLocationInt--;
    }
}

/* Tests */

const inputInt1 = 5
const outputInt = factorialZeroes(inputInt1)
console.log('Result 1: ', outputInt)

const inputInt2 = 8
const outputInt2 = factorialZeroes(inputInt2)
console.log('Result 2: ', outputInt2)

/* Test results 

Result 1: 1
Result 2: 1

*/