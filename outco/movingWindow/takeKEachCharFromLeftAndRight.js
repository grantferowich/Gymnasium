/* 
2516.
Medium
Take K of Each Character from Left and Right


input: 'aabaaaacaabc', k
output: 8
find minimum number of moves when you can only take from the
right most side and left most side
 
input: string
 output: number

//recognition: sliding window front and back
// set up a charMap or hash with 'a' 'b' and 'c' having k as the value
// values must be k*2
// e.g. when k is 1, { 'a':2, 'b':2, 'c':2}

Input: s = "aabaaaacaabc", k = 2
Output: 8
Explanation: 
Take three characters from the left of s. You now have two 'a' characters, and one 'b' character.
Take five characters from the right of s. You now have four 'a' characters, two 'b' characters, and two 'c' characters.
A total of 3 + 5 = 8 minutes is needed.
It can be proven that 8 is the minimum number of minutes needed.


right        ]                
left           [                 
s     = 'a a b a a a a c a a b c'

map
"a": 8
"b": 
"c": 


k = 2  -- must have a, b and c each appear 2 times 

window 
window size:  4
s.length() = 12
result = s.legnth - windowSize
minResult = 8

whenever moving the left pointer




*/
