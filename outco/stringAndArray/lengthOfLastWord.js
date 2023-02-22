/* 

58. Length of Last Word
Easy

Successfully tested the function 2/22/23. 

Given a string s consisting of words and spaces, 
return the length of the last word in the string.

A word is a maximal substring
 consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 */
const lengthOfLastWord = (s) =>{
    s = s.trim()
    let array = s.split(" ")
    return array[array.length - 1].length
}

let input = ''
let result = lengthOfLastWord(input)
console.log('result ', result) // 0

let input1 = 'wake forest'
let result1 = lengthOfLastWord(input1)
console.log('result1 ', result1) // 6

let input2 = 'wake forest      '
let result2 = lengthOfLastWord(input2)
console.log('result2 ', result2) // 6

let input3 = 'hello world'
let result3 = lengthOfLastWord(input3)
console.log('result3 ', result3) // 5
