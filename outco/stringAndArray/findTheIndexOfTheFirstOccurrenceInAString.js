/* 28. Find the Index of the First Occurrence in a String

Successfully tested the function June 28, 2023. 


Easy
3.8K
207
Companies
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1. */

const findTheNeedle = (haystackStr, needleStr) => {
    if (haystackStr.includes(needleStr)){
        return haystackStr.indexOf(needleStr[0])
    }
    return -1;

}

/* Test */
const haystackStr1 = "sadbutsad";
const needleStr1 = "sad";

const haystackStr2 = "leetcode";
const needleStr2 = "leeto"

const haystackStr3 = "mississippi"
const needleStr3 = "issipi"

const resultInt1 = findTheNeedle(haystackStr1, needleStr1); // 0 
const resultInt2 = findTheNeedle(haystackStr2, needleStr2); // 1
const resultInt3 = findTheNeedle(haystackStr3, needleStr3); // 4
 
console.log('Result 1:', resultInt1)
console.log('Result 2:', resultInt2)
console.log('Result 3:', resultInt3)

/* Test result 

Result 1: 0
Result 2: -1
*/