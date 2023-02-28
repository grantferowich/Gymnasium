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
9. 0110 + 0110 = 1100
10. 0100 * 0011 = 1100
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
2. << == shift left
3. ^ == XOR
4. ~ == NOT
5. & == AND
6. | == or
   
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