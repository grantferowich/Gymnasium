/* 
Master Mind

CTCI 16.15
Started engineering on July 14, 2023.

The game of Master Mind is played as follows: 

The computer has four slots, and each slot will contain a ball
that is red (R), yellow (Y), green (G), or blue (B). For example,
the computer might have RGGB (slot 1 is red, slots 2 and 3 are green, 
slot 4 is blue.)

You, the user, are trying to guess the solution. You might, for example,
guess YRGB. When you guess the correct color for the correct slot, you 
get a "hit." If you guess a color that exists but is in the wrong 
slot, you get a "psuedo-hit." Note that a slot that is a hit can never 
count as a psuedo-hit. 

For example, if the actual solution is RGBY and you guess GGRR, you have
one hit and one psuedo-hit. 

Write a method that, given a guess and a solution, returns the number of hits
and pseudo-hits. 

Approach
1. Store the actual characters and their frequencies in a map.
2. Store the guess characters and their frequencies in a map. 
3. Loop over the characters of the guess map.
    4. Track totalMatchesInt.
    5. Let matchInt be the minimum of the guess key's valueInt, 
    and the actualMap.get(keyStr) value integer.
    6. Increment totalMatchesInt by matchInt.
7. Track hitsInt.
8. Loop from 0 to 4.
    9. if guessStr[xInt] === actualStr[xInt], increment hitsInt
    and decrement totalHitsInt.
10. Return hits: ${hitsInt} : psuedo-hits: ${totalHitsInt}

Test 1
actualStr = 'RGBY'
guessStr = 'GGRR'
Output: 1 hit, 1 psuedohit
*/

const masterMind = (actualStr, guessStr) => {



}

/* Test */
const actualStr1 = 'RGBY';
const guessStr1 = 'GGRR';
const actualStr2 = 'YYYY';
const guessStr2 = 'YGBR'
const actualStr3 = 'YGRB';
const guessStr3 =  'RYBG';
const result1Str = masterMind(actualStr1, guessStr1) // 1 hit(s), 1 psuedo-hit(s)
const result2Str = masterMind(actualStr2, guessStr2) // 1 hit(s), 0 psuedo-hit(s)
const result3Str = masterMind(actualStr3, guessStr3) // 0 hit(s), 4 psuedo-hit(s)
/* Test results 

*/
