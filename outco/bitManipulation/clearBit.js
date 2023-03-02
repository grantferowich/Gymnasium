/* 
Clear Bit

Clear bit's function is to set the bit at the x'th position to 0.

Successfully tested Clear Bit 3/2/23.

Input 1
Suppose the input is 5, a.k.a. 101 in binary.
101 = 5

What would clearBit(5,2) return?

The bit in the third bit slot would be cleared.

101 => 001 
5 => 1

Input 2
Suppose the input is 10101. In decimal terms 10101 is 21.

clearBit(21,2) returns 10001, or, 17. 

*/

const clearBit = (num, x) => {
    let mask = ~(1 << x)
    let output = num & mask
    return output
}

const data1 = clearBit(5,2)
console.log('data1:', data1) // 1

const data2 = clearBit(21,2) 
console.log('data2:', data2) // 17

const data3 = clearBit(5,0)
console.log('data3:', data3) // 1