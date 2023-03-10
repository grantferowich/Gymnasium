/* 
Next Number

CTCI 5.04

Successfully tested the function 03/09/2023.

Given a positive integer, print the next smallest and 
the next largest number that have the same number of 
1 bits in their binary representation.

Example 1
Input: 100
Output: 1000, 10

Example 2
Input: 101
Output: 1001, 11

*/

const getNextNumber = (binaryNumber) => {
    let x = binaryNumber;
    let x0 = 0;
    let x1 = 0;
    while (((x & 1) === 0) && (x !== 0)){
        x0++;
        x >>= 1;
    }

    while ((x & 1) === 1){
        x1++;
        x >>= 1;
    }

    if (x0 + x1 === 31 || x0 + x1 === 0){
        return -1; 
    }

    return (binaryNumber + (1 << x0) + (1 << (x1 - 1)) - 1).toString(2)
}


getPreviousNumber = (binaryNumber) => {
    let z = binaryNumber;
    let z0 = 0;
    let z1 = 0;
    while (((z & 1) === 0) && ( z !== 0)){
        z0++;
        z >>= 1;
    }

    while ((z & 1) === 1){
        z1++;
        z >>= 1;
    }

    if (z0 + z1 === 31 || z0 + z1 === 0){
        return -1
    }

    return (binaryNumber - (1 << z1) - (1 << (z0 -1)) + 1).toString(2)
}

/* TESTS */
let data1 = getNextNumber(0b100)
console.log('Test 1:', data1)

let data2 = getNextNumber(0b101)
console.log('Test 2:', data2)

let data3 = getNextNumber(0b1011111)
console.log('Test 3:', data3)

let data4 = getPreviousNumber(0b100)
console.log('Test 4:', data4)

let data5 = getPreviousNumber(0b101)
console.log('Test 5:', data5)

let data6 = getPreviousNumber(0b1011111)
console.log('Test 6:', data6)