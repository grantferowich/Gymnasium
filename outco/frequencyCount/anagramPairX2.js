/**
 *  Anagram Pair
 * 
 *  Given two strings, determine if the strings are anagrams of one another.
 * 
 *  Two words are anagrams of one another if they contain the same letters.
 *
 *  Parameters
 *  Input: str1 {String}
 *  Input: str2 {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *  With N as the length of the first string, and M as the length of the second string.
 *
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  "cat", "act" --> true
 *  "cat", "dog" --> false
 *  "racecar", "aaccrres" --> false
 * 
 *  initialize str1FrequencyMap<char,frequencyInt> and str2FrequencyMap<char,frequencyInt>
 *  loop over each key-value pair of str1FrequencyMap
 *  if the value is different from the value of the same key in str2FrequencyMap
 *      -> return false
 *  return true
 * 
 */
const anagramPair = (str1 = [], str2 = []) => {
    if (str1.length !== str2.length || str1.length === 0 && str2.length === 0){
        return false;
    }
    let str1FrequencyMap = new Map();
    let str2FrequencyMap = new Map();
    let xInt = 0;
    // initialize maps
    while (xInt < str1.length){
        let char1 = str1[xInt]
        let char2 = str2[xInt]
        // console.log(char1)
        // console.log(char2)
        if (str1FrequencyMap.has(char1)){
            let frequency1Int = str1FrequencyMap.get(char1)
            str1FrequencyMap.set(char1, frequency1Int + 1)
        }
        if (str1FrequencyMap.has(char2)){
            let frequency2Int = str2FrequencyMap.get(char2)
            str2FrequencyMap.set(char2, frequency2Int + 1)
        }
        if (!str1FrequencyMap.has(char1)){
            str1FrequencyMap.set(char1, 1)
        }
        if (!str2FrequencyMap.has(char2)){
            str2FrequencyMap.set(char2, 1)
        }
        xInt++
    }

    for (let [key, value] in str1FrequencyMap){
        // console.log(value)
        // console.log(str2FrequencyMap.get(key))
        
        if (str1FrequencyMap.get(key) !== str2FrequencyMap.get(key)){
            return false
        }
    }

    return true

}
/* TESTS */
const word1Str = 'wake'
const word2Str = 'forest'
const result1 = anagramPair(word1Str, word2Str)
console.log(`Result 1: ${result1}`)

const word3Str = 'cat'
const word4Str = 'act'
const result2 = anagramPair(word3Str, word4Str)
console.log(`Result 2: ${result2}`)

const word5Str = 'cat'
const word6Str = 'dog'
const result3 = anagramPair(word5Str, word6Str)
console.log(`Result 3: ${result3}`)

const word7Str = 'racecar'
const word8Str = 'aaccrres' 
const result4 = anagramPair(word7Str, word8Str)
console.log(`Result 4: ${result4}`)