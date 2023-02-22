/* 49. Group Anagrams
Medium

Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the 
letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

Input: strs = ['hannah', 'hannah']
output: [['hannah', 'hannah']]


Go through the first word in the array.
Generate a char map, with chars as keys and frequencies as values.
Init storage array.

First, we want to count up the letters for a particular anagram.
Next, we want to check each new word against the set of anagrams. 
If the new word contains the same chars with the same frequencies as an existing 
anagram, then append the word to the subarray with the same anagram.
If the new word does not contain the same chars with the same frequencies as a previous anagram,
then generate a char map for that word, push the char map to the array of anagram types.

The main state variable is the output array, which contains arrays of the input words, grouped by anagram.
The second state variable is the array of previous anagrams.

Complexity Analysis 
Time Complexity: O(N^2) in the worst case
Space Complexity: O(N)
*/

const charMapMaker = (string) => {
    let counts = new Map();
    let x = 0;
    while ( x < string.length ){
        let char = string[x]
        if (counts.has(char)){ 
            let v = counts.get(char)
            v += 1;
            counts.set(char, v)
        }
        if (!counts.has(char)){
            counts.set(char, 1)
        }
        x++
    }
    return counts
}

const groupAnagrams = (arrayOfStrings) =>{
    
    let anagram = [];
    for (let x = 0; x < arrayOfStrings; x++)
    let map = charMapMaker(arrayOfStrings[0]);
    anagram.push(map)



}

/* TESTS */

strs = [""]
let result = groupAnagrams(strs)
console.log(result)
// Output: [[""]]

strs2= ["eat","tea","tan","ate","nat","bat"]
let result2 = groupAnagrams(strs2)
console.log('result3', result2)
// Output2: [["bat"],["nat","tan"],["ate","eat","tea"]]

strs3 = ["a"]
let result3 = groupAnagrams(strs3)
console.log('result3', result3)
// Output: [["a"]]

strs4 = ['hannah', 'hannah']
let result4 = groupAnagrams(strs4)
console.log('result4', result4)
// output: [['hannah', 'hannah']]
