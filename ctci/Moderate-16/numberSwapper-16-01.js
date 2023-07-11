/* 
Number Swapper 

Successfully tested the function on July 11, 2023.

CTCI 16.01


Write a function to swap two numbers in place (that is, without temporary variables.)

Suppose f = 100 (4)
suppose g = 101 (5)

at the end, f = 101, g = 100
1, f = f ^ g
f = 101 ^ 100
=> f = 001
g = 100

2, g = f ^ g
g = 001 ^ 100
g = 101
f = 001

3, f = f ^ g
f = 001 ^ 101
f = 100
f is now 100, 
g is now 101

*/

const numberSwapper = (iInt, jInt) => {
    iInt = iInt ^ jInt;
    jInt = iInt ^ jInt;
    iInt = iInt ^ jInt;
    return [iInt, jInt];
}

/* Test */
const binaryNum1 = 101
const binaryNum2 = 100

let resultArr = numberSwapper(binaryNum1, binaryNum2);

console.log('Result 1: ', resultArr) // Expect 100, 101

/* Test results 
Result 1:  [ 100, 101 ]
*/