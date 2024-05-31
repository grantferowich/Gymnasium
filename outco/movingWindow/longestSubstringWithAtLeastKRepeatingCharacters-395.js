/* 
395. Longest Substring with At Least K Repeating Characters

Started on Aug 5, 2023.

Medium
5.7K
455
Companies

Given a string s and an integer k, return the length of the longest 
substring of s such that the frequency of each character in this
substring is greater than or equal to k.

if no such substring exists, return 0.


Example 1:

Input: s = "aaabb", k = 3.
Output: 3.
Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.

Example 2:
Input: s = "ababbc", k = 2.

Output: 5.
Explanation: The longest substring is "ababb",
as 'a' is repeated 2 times and 'b' is repeated 3 times.

Example 3:
input string = "xababab", k = 2. 
Output: 6

1. Does the question ask me to implement a fixed-sized sliding window
 or a dynamically-sized sliding window?
 - Dynamically-sized.
2. Under what condition does the right pointer move?
 - When the frequency of each character is greater than or equal to k. 
3. When will the function read the temporary solution?
 - After each time the character at the right edge occurs at least k times. 
4. How will the function decide on the optimal solution?
 - By taking the max of the resultInt or right - left + 1. 
5. Under what condition does the left pointer move?
 - The left pointer moves if the frequency of the char at the right window's edge
 is less than k. When the right pointer points at x and the value is less than k,
 then the left pointer should jump to the position x + 1. 
6. Which category does the SWP fall under?
 - Fast, jump.

 string "ababxbb" k = 2 
 
 {
    "a" = 2,
    "b" = 4,
    "x" = 1 
 }

 1. Build up frequency map for the whole string called wholeStringMap.
 2. Initialize a map for tracking the frequency of characters in 
 the current window. 
 3. Expand while the window's right edge is in-bounds.
 4. Check the temporary solution at each move through the string:
    -> Is the value in the whole string map of the current char at least
    kInt?
    -> Is the value in the window's frequency map at least kInt?
 5.     If yes, the window is valid. The temporary solution can be read. 

 Get the min value of the characters in the window map
 If the min value is k or greater update the solution 

 When does the window contract? 
 The window contracts if the value at the left edge is NEVER part of a valid window. 
*/

const longestSubstringWithAtLeastKRepeatingCharacters = (string, kInt) => {
    let rightPtrInt = 0;
    let leftPtrInt = 0;
    let longestWindowInt = 0;
    let windowMap = new Map();
    let fullStringMap = new Map();
    let xInt = 0;
    while (xInt < string.length){
        let char = string[xInt];
        if (fullStringMap.has(char)){
            let windowInt = windowMap.get(char);
            fullStringMap.set(char, windowInt + 1);
        }
        if (!fullStringMap.has(char)){
            fullStringMap.set(char, 1);
        }
        xInt++;
    }
    while (rightPtrInt < string.length){
        let rightChar = string[rightPtrInt];
        if (windowMap.has(rightChar)){
            let windowInt = windowMap.get(rightChar);
            windowMap.set(rightChar, windowInt + 1);
        }
        if (!windowMap.has(rightChar)){
            windowMap.set(rightChar, 1);
        }
        
        let frequencyInt = Math.min(...windowMap.values());
        if (frequencyInt >= kInt){
            longestWindowInt = Math.max(longestWindowInt, rightPtrInt - leftPtrInt + 1);
        }
        
        while (leftPtrInt < rightPtrInt && fullStringMap.get(leftPtrInt) < kInt){
            let leftChar = string[leftPtrInt];
            let leftFreqInt = windowMap.get(leftChar);
            if (leftFreqInt === 0){
                windowMap.delete(leftChar)
            } else {
                windowMap.set(leftChar, windowMap.get(leftChar) - 1)
            }
            leftPtrInt++
        }
        //  When does the window contract? 
        rightPtrInt++;
    }
    return longestWindowInt;
}

/* Tests */
const str1 = "aaabb";
const kInt1 = 3;
const str2 = "ababbc";
const kInt2 = 2;
const str3 = "xababab" 
const kInt3 = 2; 
const str4 = "ababacb";
const kInt4 = 3;
const int1 = longestSubstringWithAtLeastKRepeatingCharacters(str1, kInt1); // 3
const int2 = longestSubstringWithAtLeastKRepeatingCharacters(str2, kInt2); // 5 
const int3 = longestSubstringWithAtLeastKRepeatingCharacters(str3, kInt3); // 6
const int4 = longestSubstringWithAtLeastKRepeatingCharacters(str4, kInt4); // 0
console.log('Result 1: ', int1);
console.log('Result 2: ', int2);
console.log('Result 3: ', int3);
console.log('Result 4: ', int4);
/* Test results 
Result 1:  3
Result 2:  5
Result 3:  0
Result 4:  0
*/