/* 
392. Is Subsequence
Easy
** untested

Given two strings s and t, return true if s is a 
subsequence of t, or false otherwise.

A subsequence of a string is a new string
that is formed from the original string by 
deleting some (can be none) of the characters 
without disturbing the relative positions of 
the remaining characters. (i.e., "ace" is a 
subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

Return whether S is a subsequence of T
*/

const isSubsequence = (s, t) => {
    
    let x = 0 // points to t
    let y = 0 // points to s
    while ( x < s.length && y < t.length){
            if (s[y] === t[x]){
                y++
            }    
        x++
    }
    return y >= s.length -1 
}

/* TESTS */

let s = 'abc'
let t = 'abc'
let result = isSubsequence(s,t);
console.log('result', result) // true


let s2 = 'acb'
let t2 = 'axc'
let result2 = isSubsequence(s2,t2);
console.log('result2', result2) // false