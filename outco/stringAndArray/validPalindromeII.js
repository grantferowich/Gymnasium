/* 
680. Valid Palindrome II
Easy
7.3K
375
Companies
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:
Input: s = "aba"
Output: true

Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:
Input: s = "abc"
Output: false

if there are there 2 or more characters with a unique number of
occurrences return false
The argument is that in a normal palindrome there can be at most one
character with a unique frequency.
In this palindrome, we can delete up to one character.
Therefore, the reasoning goes that if there are more than 2 characters
with an odd frequency return false.
If there are 2 or fewer characters with an odd frequency return true. 
 */

const validPalindromeII = (str = "") => {
    if (str.length === 0){
        return false
    }
    if (str.length === 1){
        return true;
    }

    let charMap = new Map();
    let oddsCounterInt = 0;
    // populate char map
    let xInt = 0;
    while (xInt < str.length){
        let char = str[xInt];
        if (charMap.has(char)){
            let frequencyInt = charMap.get(char);
            charMap.set(char, frequencyInt + 1)
        }
        if (!charMap.has(char)){
            charMap.set(char, 1)
        }
        xInt++;
    }

    for ([keyStr, valueInt] of charMap){
        if (valueInt % 2 !== 0){
            oddsCounterInt++
        }
    }

    return oddsCounterInt <= 2
}

/* Tests */
const str1 = "aba";
const str2 = "abca";
const str3 = "abc";
const str4 = "wake";

const resultToF1 = validPalindromeII(str1);
const resultToF2 = validPalindromeII(str2);
const resultToF3 = validPalindromeII(str3);
const resultToF4 = validPalindromeII(str4);

console.log('Result 1: ', resultToF1); // true
console.log('Result 2: ', resultToF2); // true
console.log('Result 3: ', resultToF3); // false
console.log('Result 4: ', resultToF4); // false
/* Test results */