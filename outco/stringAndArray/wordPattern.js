/* 
Word Pattern

Easy


Successfully tested the function 04/04/2023.

Given a pattern and a string s, find if
s follows the same pattern.

Here follow means a full match, such that 
there is a bijection between a letter in 
pattern and a non-empty word in s.


Example 1
patternStr = 'abba'
inputStr = 'dog cat cat dog'
output: true

approach: 
1) init charMap
charMap = {
    a => dog
    b => cat
}
2) loop over pattern str to generate str
3) compare str with inputStr

Example 2 
patternStr = 'abba'
str = 'dog cat cat turtle'
output false

*/

const wordPattern = (patternStr, inputStr) => {
    let charMap = new Map();
    let inputArr = inputStr.split(' ');
    // if (patternStr.length !== inputArr.length){
    //     return false;
    // }
    let xInt = 0;
    while (xInt < patternStr.length){
        let patternChar = patternStr[xInt];

        let inputWordStr = inputArr[xInt];
        if (charMap.has(inputWordStr)){
            continue
        }

        if (!charMap.has(patternChar)){
            let valuesArr = Array.from(charMap.values())
            if (!valuesArr.includes(inputWordStr)) {
                charMap.set(patternChar, inputWordStr);
            }
            
        } 
        xInt++
    }

    xInt = 0;
    let newStrArr = []
    while (xInt < patternStr.length){
        patternChar = patternStr[xInt]
        let wordStr = charMap.get(patternChar)
        newStrArr.push(wordStr)
        xInt++
    }
    let newStr = newStrArr.join(' ')
    return newStr === inputStr
}

/* TESTS */

let patternStr1 = 'abba'
let inputStr1 = 'dog cat cat dog'
let result1 = wordPattern(patternStr1, inputStr1)
console.log(`Result 1 ${result1}`)

const patternStr2 = 'abba'
const inputStr2 = 'dog cat cat turtle'
const result2 = wordPattern(patternStr2, inputStr2)
console.log(`Result 2 ${result2}`)

const patternStr3 = 'abba'
const inputStr3 = 'dog dog dog dog'
const result3 = wordPattern(patternStr3, inputStr3)
console.log(`Result 3 ${result3}`)
