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