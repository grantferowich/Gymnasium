/* 
Number Max

CTCI 16.07
Successfully tested a function on July 12, 2023.
Write a method that finds the maximum 
of two numbers. You should not use
if-else or any other comparison operator. 

*/

const numberMax = (int1, int2) => {
    return Math.max(int1, int2);
}

/* Test */

const int1 = 23;
const int2 = 46;
const outputInt1 = numberMax(int1, int2);
console.log('Result 1:', outputInt1);

/* Test results 
Result 1: 46
*/