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
const anagramPair = (str1, str2) => {

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