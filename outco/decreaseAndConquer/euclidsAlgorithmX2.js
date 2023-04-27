/* 
Euclid's Algorithm

Successfully tested the function 03/17/2023.

// Given A and B take the difference of A and B to find the greatest common divisor.
// To find the GCD of 78 and 52 

// (A , B)
// (78, 52 ) 78 - 52 = 26
// (52, 26) 52 -26 = 26
// (26, 26) 26-26 = 0
// (26, 0)  ==> // return console.log(26)
// Euclid's algorithm states the GCD of (A, 0) will always be A. 

// if a is not larger than b
// swap A and B
// Complexity Analysis
// Time Complexity: O(logN)
// Space Complexity: O(1)
*/

const euclidsAlgorithm = (int1, int2) => {

}

/* TESTS */

const int1 = 78
const int2 = 52

const result1Int = euclidsAlgorithm(int1, int2)

console.log(`Result 1: ${result1Int}`)