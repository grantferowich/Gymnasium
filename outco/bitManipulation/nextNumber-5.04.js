/* 
Next Number

CTCI 5.04

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

const nextNumber = (binaryNumber) => {

    let binaryStr = binaryNumber.toString(2)
    let nextLargest = binaryNumber << 1
    nextLargest = nextLargest.toString(2)
    let nextSmallest = binaryNumber >> 1
    nextSmallest = nextSmallest.toString(2)
    
    let result = `For ${binaryStr}, the next largest number is ${nextLargest} and the next smallest number is ${nextSmallest}.`
    return result
}

/* TESTS */
let data1 = nextNumber(0b100)
console.log('Test 1:', data1)

let data2 = nextNumber(0b101)
console.log('Test 2:', data2)

let data3 = nextNumber(0b1011111)
console.log('Test 3:', data3)