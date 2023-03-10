/* 
Pairwise Swap

Write a program to swap odd and even bits in an integer with
as few instructions as possible (e.g., bit 0 and bit 1 are swapped,
bit 2 and bit 3 are swapped, and so on.)

Test case 1: 
Input: 101, which is the same as 5
Output: 110, which is the same as 7

Note that the rightmost bit is bit 0, and second rightmost 
bit is bit 1, and so on.

Test case 2: 
Input: 110110
Output: 111001
Context: Bit 0 and bit 1 flip, since the two bits are different.
Bit 2 and bit 3 flip, since the two bits are different.
Bit 4 and bit 5 do not flip, since the bits are the same.


The algorithm for the pairwise swap function is obviously to 
loop over the input and swap the bits, one by one. However, 
the function will execute fewer instructions by only swapping 
the bits in cases where the bit values at bit x and bit x + 1 are different.
If the bits at x and x + 1 are the same, then continue to
the new pair of bits. The function will loop in O(N) time. 
The check will happen in O(1) time. The step where the bits are 
swapped will only occur in cases where the two bits are 0 and 1.
By XOR'ing the bits at x and x+1, and checking if the XOR'ed value is 1, 
the function will use a bitwise operator to determine whether or not to 
complete the swap.

Input: A binary number
Output: A binary number

Constraints:  
Edge case: The binary number is greater than 0.

*/

const pairwiseSwap = (binaryNumber) => {
    let binaryNumberStr = binaryNumber.toString(2)
    let binaryNumberArr = binaryNumberStr.split('')
    let x = binaryNumberArr.length - 1;

    while (x - 1 > 0){
        if (binaryNumberArr[x] !== binaryNumberArr[x-1]){
            let tempX = binaryNumberArr[x]
            let tempXminus1 = binaryNumberArr[x-1]
            binaryNumberArr[x] = tempXminus1
            binaryNumberArr[x-1] = tempX
        }
        x -= 2;
    }
    console.log('binaryNumberStr', binaryNumberStr)
    return binaryNumberArr.join('')
}

/* TESTS */

let data1 = pairwiseSwap(0b101)
console.log('Test 1:', data1)
// Expect 110 ✓

let data2 = pairwiseSwap(0b100110110)
console.log('Test 2:', data2)
// Expect 100110101 ✓

let data3 = pairwiseSwap(0b1110110)
console.log('Test 3:', data3)
// Expect 1111001 ✓