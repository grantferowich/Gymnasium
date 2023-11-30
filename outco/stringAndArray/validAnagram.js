// Successfully tested the function 2/2/23.
/* 
Valid Anagram:

Input: two strings
output: true or false

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


*/

const isAnagram = function(s, t) {
    let counts1 = {}
    let counts2 = {}

    for (let x = 0; x < s.length; x++){
        let char = s[x];
        counts1[char] = counts1[char] + 1 || 1;
    }

    for (let x = 0; x < t.length; x++){
        let char = t[x];
        counts2[char] = counts2[char] + 1 || 1;
    }
    
    if (Object.keys(counts1).length !== Object.keys(counts2).length){
        return false;
    }
    for (let key in counts1){
        if (counts1[key] !== counts2[key]){
            return false;
        }
    }
    return true;
};

console.log(isAnagram('rat', 'dog')) // false
console.log(isAnagram('anagram', 'nagaram')) // true