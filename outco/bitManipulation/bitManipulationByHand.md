## Intro
The following exercises demonstrate bit manipulation by hand.

## Bit Manipulation by hand

1. 0110 + 0010 = 1000
2. 0011 + 0010 = 0101
3. 0110 - 0011 = 0011
4. 1000 - 0110 = 0010
5. 0011 * 0101 = 1111 
6. 0011 * 0011 = 1001
7. 11001 >> 2 = 0011
8. 1101 ^ 0101 = 1000
9. 0110 + 0110 = 1100 // doubling // you can simply shift the 1's left 1 time to double the binary number
   1. 0110 + 0110 === 0110 << 1
10. 0100 * 0011 = 1100
    // 0100 * 0011 === 0011 << 2 === 1100
11. 1101 ^ (~1101) = 1111
12. 1011 & (~0 << 2) => 1001 & 1100 = 1000

## Bit Tricks 
On #9, 0110 + 0110 is the same as 0110 * 2, which is the same as << by 1. So, shifting 0110 left by one results in 1100. 

Trick 1: The shortcut for doubling a bit number is to shift the bits left by 1 position.

On #10, multiplying by 0100 is the same as multiplying by 4, which is the same as << 2. 

Trick #2: Multiplying by 0100 is the same as shifting the bits left by 2 spots. 

On 11, whenever you XOR a bit integer against the NOT version of the same integer, the result will be all 1s. 

Trick #3:  XOR'ing a value with its own negation always results in 1. 

On #12, the ~0 means the bit integer is 1111.

Trick #4: Applying the shift left operator twice on 1111 returns 1100. Completing an AND operation on those last two bits will always clear the last two bits, since 0 and anything else is always 0. 

## Bitwise notation
1. >> == shift right
2. >>> === logical right shift 
3. << == shift left
4. ^ == XOR
5. ~ == NOT
6. & == AND
7. | == or
   
## Binary representations
    Notice for an N-bit number the highest value which can be represented by 
    the binary represenation is 2^N-1. For a 4-bit number, the highest number which can be represented is 15.
- Bin  | Num
- 0000 = 0
- 0001 = 1
- 0010 = 2
- 0011 = 3
- 0100 = 4
- 0101 = 5
- 0110 = 6
- 0111 = 7
- 1000 = 8
- 1001 = 9
- 1010 = 10
- 1011 = 11
- 1100 = 12
- 1101 = 13
- 1110 = 14 
- 1111 = 15 

## Two's Complement and Negative Numbers    
    The two's complement of an N-bit number is the complement of the number with respect to 2^N. 

    The two's complement of 4 in a 4-bit number is 16-4 = 12, which is 1100. 

    The two's complement of 4 in a 3-bit number is 8 - 4= 4, which is 100. To write negative four with a signed 4-bit integer, the negative is written as a 1 by convention. Then to write negative four as a signed 4-bit integer, with the sign taking up the 4th spot, write 2^3 - 4, which is 100. Therefore, -4 is written as 1100. 

    The general formula for writing -X is 1+(2^N -1 -X). 
    E.g. -4 is 1+(2^3 - 4) == 1100.
    There are 4 bits, so N is 4, and 2^N-1 is 2^3. 
    
    The following list of numbers is the written representation of negative numbers as four-bit, signed integers.

Num  | Bin
1. 0   0000
2. -1  1111
3. -2  1110
4. -3  1101
5. -4  1100
6. -5  1011
7. -6  1010
8. -7  1001  

## Arithmetic Right Shift vs. Logical Right Shift

    The logical right shift operator (>>>) literally shifts the bits over 1 spot. The difference between the logical right shift operator and the arithmetic right shift operator consists in the treatment of the signed bit. 

    Logical right shift operations write a 0 to the signed bit, effectively converting negative numbers into positive numbers. 

    Arithmetic right shift operations similarly move the bits over. However, arithmetic right shift operations keep the same sign value when shifting. Arithmetic right shift operators divide a number by 2. Similarly, arithmetic left shift operators basically double a bit number. 

    Scenario 1. Applying Logical Right Shift Operator 
    
    8-bit integer.
    10110101 >>>  [-75]
    => 01011010  [90]

    Scenario 2. Applying the Arithmetic Right Shift Operator. 
    10110101 >> [-75]
    => 11011010 [-38]

