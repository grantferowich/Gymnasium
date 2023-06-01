/* 
Longest Substring With At Most 2 Unique Characters

Sliding window problem

Started engineering on June 1, 2023 at 4pm.
Successfully completed tested of the function at 4:39 pm on June 1, 2023.

str1 = "eceba"
output: 3
why? "ece"

str = "ebcdedgeecba"

fast (runner): 0 1 2
slow (catcher): 0
temp: 'bc'
result: 3
why? 'ded', 'gee', 'eec' 

Expand while there are less than or equal to two distinct characters (move fastPtrInt)
Contract while there are more than two distinctcharacters (move slowPtrInt)

*/

const longestSubstringWithAtMost2UniqueCharacters = (str) => {
    let rPtrInt = 0;
    let lPtrInt = 0;
    let resultInt = -Infinity;
    let charMap = new Map();

    while (rPtrInt < str.length){
        let rChar = str[rPtrInt];
        let frequencyInt = charMap.get(rChar);
        charMap.set(rChar, ((frequencyInt + 1) || 0));

        if (charMap.size > 2){
            let lChar = str[lPtrInt];
            let frequencyInt = charMap.get(lChar);
            if (frequencyInt === 0){
                charMap.delete(lChar)
            }
            if (frequencyInt !== 0){
                charMap.set(lChar, frequencyInt - 1)
            }
            lPtrInt++
        }

        // update
        if (rPtrInt - lPtrInt + 1 > resultInt){
            resultInt = rPtrInt - lPtrInt + 1
        }
        
        rPtrInt++
    }
    return resultInt;
}

/* Test */

const str1 = 'grant';
const str2 = 'wakeforest';
const str3 = 'mill';
const str4 = 'eceba';

const result1Int = longestSubstringWithAtMost2UniqueCharacters(str1);
const result2Int = longestSubstringWithAtMost2UniqueCharacters(str2);
const result3Int = longestSubstringWithAtMost2UniqueCharacters(str3);
const result4Int = longestSubstringWithAtMost2UniqueCharacters(str4);

console.log(`Result 1: ${result1Int}`);
console.log(`Result 2: ${result2Int}`);
console.log(`Result 3: ${result3Int}`);
console.log(`Result 4: ${result4Int}`);

/* Test result 

Result 1: 2
Result 2: 2
Result 3: 3
Result 4: 3

*/