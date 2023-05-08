/* 
1100. Find K-Length Substrings With No Repeated Characters
Medium
Premium

Attempted May 07, 2023.
Successfully tested the function May 07, 2023. 

Given a string s and an integer k, return the number of substrings
in s of length k with no repeated characters.

Input 1
s = 'havefunonleetcode', k = 5
output: 6
Explanation: The six substrings are: 'havef',
'avefu', 'vefun', 'efuno, 'etcod', 'tcode'.

Expand the window from 0 to k-1
check if the word is unique 
move the window to the end of the string 

Input 2
s = 'home', k = 5
output: 0
-> k cannot be larger than substring

Input 3
str = 'wakeforest'
kInt = 4
output: 7

output: 'wake' + 1, akef +1, kefo +1, efor +1, fore +1, ores +1, rest +1 

1. Initialize a currentCharsMap. Initialize outputInt
2. Initialize two pointers at 0. 
3. Add chars by moving the right pointer until the left pointer minus the right pointer equals kInt.
4. Each time the right pointer moves add the char to the map, or, increase the value 
associate with the char by 1.
5. Initialize the valuesArr as the array of values from the current charMap. Initialize a variable called multiplesInt.
If a value is greater than 1 increment multiplesInt. After looping over valuesArr if multiplesInt equals 0 and valuesArr.length equals kInt
increment outputInt.
6. Move the the left pointer minus the right pointer is greater than kInt. 
7. Each time the left pointer moves decrease the associated value by 1, or, remove the char.
8. Return outputInt
*/

const findKLengthSubstrings = (str, kInt) => {
    
    let currentCharsMap = new Map();
    let outputInt = 0;
    let leftPtrInt = 0;
    let rightPtrInt = 0;
    let multiplesInt = 0;

    if (str.length < kInt){
        return 0
    }
    
    while (rightPtrInt < str.length){
        // expansion phase
        while (rightPtrInt - leftPtrInt < kInt){
            
            let rCharStr = str[rightPtrInt];
            
            if (currentCharsMap.has(rCharStr)){
                console.log(`rChar ${rCharStr}`)
                let frequencyInt = currentCharsMap.get(rCharStr);
                currentCharsMap.set(rCharStr, frequencyInt + 1);
                multiplesInt++;
            }

            if (!currentCharsMap.has(rCharStr)){
                currentCharsMap.set(rCharStr, 1);
            }

            rightPtrInt++;
        }

        if (multiplesInt === 0 && (rightPtrInt - leftPtrInt === kInt)){
            console.log(`rightPtrInt ${rightPtrInt}; leftPtrInt ${leftPtrInt}`)
            outputInt++;
        }

        // contraction 
        while (rightPtrInt - leftPtrInt >= kInt){
            let lChar = str[leftPtrInt];

            if (currentCharsMap.get(lChar) === 1){
                currentCharsMap.delete(lChar);
            }

            if (currentCharsMap.get(lChar) > 1){
                let frequencyInt = currentCharsMap.get(lChar);
                currentCharsMap.set(lChar, frequencyInt - 1);
                if (currentCharsMap.get(lChar) === 1){
                    multiplesInt--;
                }
            }

            leftPtrInt++;
        }
    }

    return outputInt;
}

/* Test */

const str1 = 'havefunonleetcode';
const k1Int = 5;

const str2 = 'home';
const k2Int = 5;

const str3 = 'wakeforest';
const k3Int = 4;

const result1Int = findKLengthSubstrings(str1, k1Int);
const result2Int = findKLengthSubstrings(str2, k2Int);
const result3Int = findKLengthSubstrings(str3, k3Int);

console.log(`Result 1: ${result1Int}`);
console.log(`Result 2: ${result2Int}`);
console.log(`Result 3: ${result3Int}`);

/* Test Results 

Result 1: 6
Result 2: 0
Result 3: 7

*/
