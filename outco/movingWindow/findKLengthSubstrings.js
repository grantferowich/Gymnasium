/* 
1100. Find K-Length Substrings With No Repeated Characters
Medium
Premium

Given a string s and an integer k, return the number of substrings
in s of length k with no repeated characters.


s = 'havefunonleetcode', k = 5
output: 6
Explanation: The six substrings are: 'havef',
'avefu', 'vefun', 'efuno, 'etcod', 'tcode'.


Expand the window from 0 to k-1
check if the word is unique 
move the window to the end of the string 


s = 'home', k = 5
output: 0
-> k cannot be larger than substring
*/

const isUnique = (wordStr) => {
    let frequencyMap = new Map()
    for (let x = 0; x < wordStr.length; x++){
        let char = wordStr[x]
        if (frequencyMap.has(char)){
            return false
        }
        frequencyMap.set(char, true)
    }
    return true
}

const findKLengthSubstrings = (inputStr, kInt) => {

    if (kInt > inputStr.length){
        return 0
    }

    let windowArr = [];
    let uniqueSubstringArr = [];
    // initialize window from 0 to k
    
    for (let x = 0; x < kInt; x++){
        windowArr.push(inputStr[x])
    }

    for (let x = kInt; x < inputStr.length+1; x++){
        let isUniqueToF = isUnique(windowArr.join(''))
        if (isUniqueToF){
            uniqueSubstringArr.push(windowArr.join(''))
        }
        windowArr.push(inputStr[x])
        windowArr.shift()
    }
    console.log('uniqueSubstringArr', uniqueSubstringArr)
    return uniqueSubstringArr.length
}

/* TESTS */

let subResult1 = isUnique('axx')
console.log('subResult1', subResult1)
// false ✓

let subResult2 = isUnique('abc')
console.log('subResult2', subResult2)
// true ✓

let result1 = findKLengthSubstrings('havefunonleetcode', 5)
console.log('Test 1:', result1)
// output: 6
// Explanation: The six substrings are: 'havef',
// 'avefu', 'vefun', 'efuno, 'etcod', 'tcode'.

let result2 = findKLengthSubstrings('home', 5)
console.log('Test 2:', result2)
