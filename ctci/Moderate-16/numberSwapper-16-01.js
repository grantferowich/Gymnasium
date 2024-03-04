/* 
Number Swapper 
CTCI 16.01
Successfully tested the function on July 11, 2023.
Write a function to swap two numbers in place
(that is, without temporary variables.)

Suppose f = 100 (4)
suppose g = 101 (5)

at the end, f = 101, g = 100
1, 
f = f ^ g
f = 101 ^ 100
=> f = 001
g = 100

2, 
g = f ^ g
g = 001 ^ 100
g = 101
f = 001

3, 
f = f ^ g
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

const resultArr = numberSwapper(binaryNum1, binaryNum2);

const binaryNum3 = 100;
const binaryNum4 = 101;

const resultArr2 = numberSwapper(binaryNum3, binaryNum4);

const binaryNum5 = 0o10000;
const binaryNum6 = 0o01011;

const resultArr3 = numberSwapper(binaryNum5, binaryNum6);

console.log('Result 1: ', resultArr); // Expect 100, 101
console.log('Result 2: ', resultArr2); // Expect 101, 100
console.log('binaryNum5: ', binaryNum5);
console.log('binaryNum6: ', binaryNum6);
console.log('Result 3: ', resultArr3);
/* Test results 
Result 1:  [ 100, 101 ]
*/