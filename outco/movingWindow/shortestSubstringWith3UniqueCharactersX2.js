/*

302 - Shortest Substring With 3 Unique Characters
Given a string, return the shortest substring that has at least 3 unique characters, or false if there is no such string

Input: String
Output: String or ToF

Example
Input: aabaca => Output: bac
Input: abaacc => Output: baac
Input: abc => Output: abc
Input: aabb => Output: False
input: wake => output: wak. Ake works too, technically.
input: forest => output: fore, ores, rest all work

Constraints
N ~ Length of input string
K ~ Number of unique characters in input string

Time Complexity: O(N)
Auxiliary Space Complexity: O(K)


Initialize a variable called uniquesInt. 
Initialize rightPtrInt, leftPtrInt, resultRightInt, and resultLeftInt.
Loop over the string while the rightPtrInt is less than the string length.
Expand the window while the number of unique characters in the string is less than 3.
Contract the window while the number of unique characters in the string is greater than 3.
return the string sliced from the resultLeftInt to the resultRightInt.

*/

const shortestSubstringWith3UniqueCharacters = (str) => {

}

/* Tests */


const str1 = 'aabaca' 
const str2 = 'abaacc'
const str3 = 'abc'  // => Output: abc
const str4 = 'aabb' // => Output: False
const str5 = 'wake' // => output: wak. Ake works too, technically.
const str6 = 'forest' // => output: fore, ores, rest all work

const result1Str = shortestSubstringWith3UniqueCharacters(str1);
const result2Str = shortestSubstringWith3UniqueCharacters(str2);
const result3Str = shortestSubstringWith3UniqueCharacters(str3);
const result4Str = shortestSubstringWith3UniqueCharacters(str4);
const result5Str = shortestSubstringWith3UniqueCharacters(str5);
const result6Str = shortestSubstringWith3UniqueCharacters(str6);

console.log(`Result 1: ${result1Str}`);
console.log(`Result 2: ${result2Str}`);
console.log(`Result 3: ${result3Str}`);
console.log(`Result 4: ${result4Str}`);
console.log(`Result 5: ${result5Str}`);
console.log(`Result 6: ${result6Str}`);

/* Test results */