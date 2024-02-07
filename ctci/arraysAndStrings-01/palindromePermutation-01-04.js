/* 
Palindrome Permutation
CTCI 1.04

Given a string, write a function to check if it is a permutation
of a palindrome. A palindrome is a word or phrase that is 
the same forwards and backwards. A permutation is a rearrangement 
of letters. The palindrome does not need to be limited to just
dictionary words. You can ignore casing and non-character letters.

const inputStr1 = "tact coa"
output: true (taco cat, atco cta)

Approach:
build up a char map where the keys are chars.
and each key's value is the frequency of the char.
Track number of odd frequencies.
Loop over the values.
If the number of odd frequencies is greater than 1 return false.
Return true.
*/

const palindromePermutation = (str) => {
    let charMap = new Map();
    let numberOfOddFrequenciesInt = 0;
    let xInt = 0;
    // remove spaces
    str = str.replaceAll(' ','');
    while (xInt < str.length){
        let char = str[xInt];
        if (charMap.has(char)){
            let frequencyInt = charMap.get(char);
            charMap.set(char, frequencyInt + 1);
        }
        if (!charMap.has(char)){
            charMap.set(char, 1);
        }
        xInt++
    }
    for (const [keyStr, valueInt] of charMap){
        if (valueInt % 2 !== 0){
            numberOfOddFrequenciesInt++;
        }
    }
    return numberOfOddFrequenciesInt <= 1;
}

/* Tests */

const str1 = "taco cat";
const resultToF1 = palindromePermutation(str1);

const str2 = "hannah";
const resultToF2 = palindromePermutation(str2);

const str3 = "hannahzx";
const resultToF3 = palindromePermutation(str3);

console.log('Result 1: ', resultToF1); // true
console.log('Result 2: ', resultToF2); // true
console.log('Result 3: ', resultToF3); // false 
/* Test results
Result 1:  true
Result 2:  true
Result 3:  false
*/