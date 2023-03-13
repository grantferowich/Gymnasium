/* 

Longest Substring Without Repeating Characters 

Medium

Given a string s, find the length of the longest 
substring without repeating characters.

Input: string
output: integer 


# Approaches
Sliding Windows: Fixed Size, Dynamic Size
2 ends: left = 0, right = length - 1 
    2-sum, sorted, binary search, palindrome
1 end: left = 0, right = 0


Test cases: 
s = 'abcabcbb'
output = 3

s = 'bbbbbb'
output = 1 

s = "pwwkew"
output = 3

Analysis 
longest substring: max
withour repeating letters: track letters
Map<Letter, Count>: count of each letter <= 1

final result: substring of s, leftPosition, rightPosition
    => s.substring(leftPosition, rightPosition)

how do we know if we have duplicates? 
    if new letter in the map is >= 1 
    dup = 0, dup++
    how to know when to move the two pointers? 
        when we find a duplicate, move left 
            while (dup !== 0) (move leftPointer)
        until there is no duplicate 

    hunting phase: keep adding letters
    catching up: shrinking to remove duplicates

    1. move right
    2. move left 
    3. compare with result
    4. return final result
*/

const longestSubstringWithoutRepeatingChars = (s) => {
        // letters, frequencies
    let charMap = new Map();
    // result 
    // let leftResult = 0;
    // let rightResult = 0;
    let len = 0
    // 2 pointers
    let leftPtr = 0;
    let rightPtr = 0;
    // to do : keep tack of duplicates
    let duplicate = 0;


    // 1. Move right 
    while ( rightPtr < s.length){
        let rChar = s[rightPtr]
        // add to map
        let frequency = charMap.has(rChar) ? charMap.get(rChar) : 0
        charMap.set(rChar, frequency + 1)
        // check if the char is a duplicate
        if (charMap.get(rChar) > 1){
            duplicate++;
        }
        // increment rightPtr
        rightPtr++;
        
        // 2. Move left when duplicate has been found 
        while (duplicate !== 0){
            let lChar = s[leftPtr];
            // if lChar is duplicate
            if (charMap.get(lChar) > 1){
                duplicate--
            }
            // update the charMap
            charMap.set(lChar, charMap.get(lChar) -1)
            if (charMap.get(lChar) === 0){
                charMap.delete(lChar)
            }
            leftPtr++ 
        }
        // when should we compare with result
        if (rightPtr - leftPtr > len){
            len = rightPtr - leftPtr
        }
    }
    return len
}

/* TESTS */

let s1 = 'abcabcbb'
console.log(longestSubstringWithoutRepeatingChars(s1))
// output = 3
 
let s2 = 'bbbbbb'
// output = 1 
console.log(longestSubstringWithoutRepeatingChars(s2))

let s3 = "pwwkew"
console.log(longestSubstringWithoutRepeatingChars(s3))
// output = 3