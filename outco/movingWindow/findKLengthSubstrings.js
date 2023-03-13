/* 
1100. Find K-Length Substrings With No Repeated Characters
Medium
Premium

Given a string s and an integer k, return the number of substrings
in s of length k with no repeated characters.


s = 'havefunonleetcode', k = 5
output: 6
Explanation: The six substrings are: 'havef',
'avefu', 'vefun', 'efuno, 'etcod', 'tcode'.


s = 'home', k = 5
output: 0
-> k cannot be larger than substring
*/

const findKLengthSubstrings = (inputStr, kInt) => {



}

/* TESTS */

let result1 = findKLengthSubstrings('havefunonleetcode', 5)
console.log('Test 1:', result1)

let result2 = findKLengthSubstrings('home', 5)
console.log('Test 2:', result2)
