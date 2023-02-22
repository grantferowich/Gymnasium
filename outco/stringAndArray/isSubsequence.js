/* 
392. Is Subsequence
Easy
Successfully tested the function 2/22/23.

Given two strings s and t, return true if s is a 
subsequence of t, or false otherwise.



A subsequence of a string is a new string
that is formed from the original string by 
deleting some (can be none) of the characters 
without disturbing the relative positions of 
the remaining characters. (i.e., "ace" is a 
subsequence of "abcde" while "aec" is not).

s is always shorter than t, assume

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

*/

const isSubsequence = (s, t) => {
    let x = 0 // points to s
    let y = 0 // points to t
    while (x < s.length && y < t.length){
            if (s[x] === t[y]){
                x++
            }    
        y++
    }
    return x >= s.length
}

/* TESTS */

let s = 'abc'
let t = 'abc'
let result = isSubsequence(s,t);
console.log('result', result) // true


let s2 = 'axc'
let t2 = 'axb'
let result2 = isSubsequence(s2,t2);
console.log('result2', result2) // false

let s3 = 'axc'
let t3 = 'ahbgdc'
let result3 = isSubsequence(s3,t3);
console.log('result3', result3) // false