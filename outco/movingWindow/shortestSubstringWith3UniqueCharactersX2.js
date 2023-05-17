/*

302 - Shortest Substring With 3 Unique Characters
Given a string, return the shortest substring that has at least 3 unique characters, or false if there is no such string

Attempted May 11, 2023.
Successfully tested the function May 11, 2023.

Input: String
Output: String or ToF

Example
Input: aabaca => Output: bac
Input: abaacc => Output: baac
Input: abc => Output: abc
Input: aabb => Output: False
input: wake => output: wak. Ake works too, technically.
input: forest => output: fore, ores, rest all work

Constraints
N ~ Length of input string
K ~ Number of unique characters in input string

Time Complexity: O(N)
Auxiliary Space Complexity: O(K)
*/

const shortestSubstringWith3UniqueCharacters = (str) => {    
    let rightPtrInt = 0;
    let leftPtrInt = 0;
    let uniquesInt = 0;
    let charMap = new Map();
    let resultRightInt = Infinity;
    let resultLeftInt = 0;

    while (rightPtrInt < str.length){
        if (uniquesInt < 3){
            let rChar = str[rightPtrInt];
            let charCountInt = charMap.get(rChar) || 0
            if (charCountInt === 0){
                uniquesInt++;
            }
            charMap.set(rChar, (charMap.get(rChar) || 0) + 1)
            rightPtrInt++;
        }

        while (uniquesInt >= 3){
            if (rightPtrInt - leftPtrInt < resultRightInt - resultLeftInt){
                resultRightInt = rightPtrInt;
                resultLeftInt = leftPtrInt;
            }
            let lChar = str[leftPtrInt];
            let charCountInt = charMap.get(lChar) || 0
            if (charCountInt === 1){
                uniquesInt--;
            }
            charMap.set(lChar, charCountInt - 1)
            leftPtrInt++;
        }    
    }

    // console.log(`str ${str} result right ${resultRightInt} result left ${resultLeftInt}`);

    if (resultRightInt === Infinity && resultLeftInt === 0){
        return false
    } else {
        return str.slice(resultLeftInt, resultRightInt)
    }    
}

/* Tests */


const str1 = 'aabaca' 
const str2 = 'abaacc'
const str3 = 'abc'  // => Output: abc
const str4 = 'aabb' // => Output: False
const str5 = 'wake' // => output: wak. Ake works too, technically.
const str6 = 'forest' // => output: fore, ores, rest all work

const result1Str = shortestSubstringWith3UniqueCharacters(str1);
const result2Str = shortestSubstringWith3UniqueCharacters(str2);
const result3Str = shortestSubstringWith3UniqueCharacters(str3);
const result4Str = shortestSubstringWith3UniqueCharacters(str4);
const result5Str = shortestSubstringWith3UniqueCharacters(str5);
const result6Str = shortestSubstringWith3UniqueCharacters(str6);

console.log(`Result 1: ${result1Str}`);
console.log(`Result 2: ${result2Str}`);
console.log(`Result 3: ${result3Str}`);
console.log(`Result 4: ${result4Str}`);
console.log(`Result 5: ${result5Str}`);
console.log(`Result 6: ${result6Str}`);

/* Test results 

Result 1: bac
Result 2: baac
Result 3: abc
Result 4: false
Result 5: wak
Result 6: for

*/