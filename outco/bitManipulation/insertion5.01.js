/* 
Insertion

CTCI 5.01

Input: Two binary numbers, number i, number j
Output: One binary number

Example
N = 10000000000
M = 10011
i = 2 
j = 6
output = 10001001100.

The idea here is to 'insert' M into N. The given 
input seems to suggest the  desired result may 
be achieved by shifting M i times, and then setting the bits
in N. In other words, create a mask with M and i. Then, OR 
the result with N.

The correct answer here is basically the same as the answer
provided. McDowell proposes the additional step of first clearing
the bits from i to j. After the clearing procedure, McDowell agrees with 
my approach to shift M i times, then merge the N binary number with the 
M binary number implementing the OR operator.

Time complexity: O(1)
Space complexity: O(1)

*/

// helper method 
const decimalToBitNumber = (decimal) => {
    return parseInt(decimal.toString(2))
}

const insertion = (M, N, i, j) => {
    if ( i < 0 || i > 64) { return 0 }
    let mShifted = M << i
    console.log('m', decimalToBitNumber(M))
    // M = 10011
    // mShifted = 1001100
    console.log('mShifted:', decimalToBitNumber(mShifted))
    let allOnes = ~0
    console.log('allOnes', allOnes)
    // create mask to clear bits from i to j  
    let left = j < 63 ? (allOnes << (j + 1)) : 0
    let right = ((1 << i) - 1)
    let mask = left | right 
    let nCleared = N & mask
    return nCleared | mShifted;
}

/* TESTS */

const data = insertion(0b10011, 0b10000000000, 2, 6)
console.log('output:', parseInt(data.toString(2))) 
// output = 10001001100
//  output: 10001001100