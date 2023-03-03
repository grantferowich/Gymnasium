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
*/

const insertion = (M, N, i, j) => {

}

/* TESTS */

const data = insertion(10011, 10000000000, 2, 6)
console.log('data:', data)