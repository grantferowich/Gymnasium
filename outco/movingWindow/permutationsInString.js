/* 
Permutations In String

Successfully tested the function 03/04/23.

Given two strings s1 and s2, return true 
if s2 contains a permutation of s1, or 
false otherwise.

In other words, return true if one of s1's 
permutations is the substring of s2.


 ## Brute force 
- create a map with str1's letters as the keys
and the frequency of each letter as the values
    - create idealMap
- initialize the window from 0 to str1.length - 1
- initialize tempWindowMap 
    -> each window will have a tempWindowMap
    -> at each iteration, check if the value of 
    each key in tempWindowMap equals the value of
    the same key in idealMap
- slide the window from str1.length - 1 to str2.length - 1

*/

const containsPermutation = (str1, str2) =>{

    let idealMap = new Map()
    let window = []
    let permutationsInt = str1.length

    for (let x = 0; x < str1.length; x++){
        let key = str1[x]
        if (idealMap.has(key)){
            let frequency = idealMap.get(key)
            idealMap.set(key, frequency+1)
        }
        if (!idealMap.has(key)){
            idealMap.set(key, 1)
        }
    }

    // initialize fixed-size window from 0 to str1.length-1
    for (let x = 0; x < str1.length; x++){
        let rChar = str2[x]
        window.push(rChar)
        if (idealMap.has(rChar) && idealMap.get(rChar) > 0){
            let value = idealMap.get(rChar);
            idealMap.set(rChar, value - 1)
            permutationsInt--
        }
    }
    
    if (permutationsInt === 0){
        return true
    }

    // move the window
    for (let x = str1.length; x < str2.length; x++){
        let char = str2[x]
        if (idealMap.has(char) && idealMap.get(char) > 0){
            let frequency = idealMap.get(char);
            idealMap.set(char, frequency - 1)
            permutationsInt--
        }
        window.push(char)
        let evictedValue = window.shift()
        if (idealMap.has(evictedValue)){
            let frequency = idealMap.get(char)
            idealMap.set(char, frequency + 1)
            permutationsInt++
        }
        if (permutationsInt === 0){
            return true
        }
    }
    return false;
}


/* TESTS */

const input1Str = 'ab'
const input2Str = 'eidbaooo'
const test1 = containsPermutation(input1Str, input2Str) 
console.log('Test 1:', test1)
// Test 1: true

const input3Str = 'ab'
const input4Str = 'eidboaoo'
const test2 = containsPermutation(input3Str, input4Str);
console.log('Test 2:', test2)
// Test 2: false

const input5Str = 'ab'
const input6Str = 'ba'
const test3 = containsPermutation(input5Str, input6Str);
console.log('Test 3:', test3)
// Test 3: true

