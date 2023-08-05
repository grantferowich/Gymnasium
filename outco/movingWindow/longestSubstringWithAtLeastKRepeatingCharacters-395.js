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

1. Does the question ask me to implement a fixed-sized sliding window
 or a dynamically-sized sliding window?
 - Dynamically-sized.
2. Under what condition does the right pointer move?
 - When the frequency of each character is less than k.
3. When will the function read the temporary solution?
 - When the frequency of each character within the window is 
 at least k. 
4. How will the function decide on the optimal solution?
 - If the temporary solution is longer than the current optimal solution,
 update the optimal solution.
5. Under what condition does the left pointer move?
 - The left pointer moves if the frequency of char at the left window
  edge is less than k.
6. Which category does the SWP fall under?
 - Fast, slow.



*/

const longestSubstringWithAtLeastKRepeatingCharacters = (string, kInt) => {
    let rightPtrInt = 0;
    let leftPtrInt = 0;
    let longestWindowInt = 0;
    let frequencyMap = new Map();
    let windowArr = [];
    let currentMinFrequencyInt = 1;
    while (rightPtrInt < string.length){
       
        if (frequencyMap.has(string[rightPtrInt])){
            let frequencyInt = frequencyMap.get(string[rightPtrInt]);
            frequencyMap.set(string[rightPtrInt], frequencyInt + 1);
        }
        if (!frequencyMap.has(string[rightPtrInt])){
            frequencyMap.set(string[rightPtrInt], 1);
        }
        windowArr.push(string[rightPtrInt]);
        let xInt = 0; 
        while (xInt < windowArr.length){
            let frequencyInt = frequencyMap.get(windowArr[xInt]);
            if (frequencyInt < currentMinFrequencyInt){
                currentMinFrequencyInt = frequencyInt;
            }
            xInt++;
        }
        if (currentMinFrequencyInt >= kInt){
            longestWindowInt = rightPtrInt - leftPtrInt + 1;
        }

        rightPtrInt++;
    }

    return longestWindowInt
}

/* Tests */
const str1 = "aaabb";
const kInt1 = 3;
const str2 = "ababbc";
const kInt2 = 2;
const str3 = "xababab" 
const kInt3 = 2; 
const int1 = longestSubstringWithAtLeastKRepeatingCharacters(str1, kInt1);
const int2 = longestSubstringWithAtLeastKRepeatingCharacters(str2, kInt2);
const int3 = longestSubstringWithAtLeastKRepeatingCharacters(str3, kInt3);
console.log('Result 1: ', int1);
console.log('Result 2: ', int2);
console.log('Result 3: ', int3);
/* Test results */

