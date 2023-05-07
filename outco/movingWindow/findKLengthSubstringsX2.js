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


Expand the window from 0 to k-1
check if the word is unique 
move the window to the end of the string 


s = 'home', k = 5
output: 0
-> k cannot be larger than substring
*/