/* 201 - Longest Substring Without Repeating Characters
Given a string s, find the longest substring without repeating characters.

Input: String
Output: String
Example
Input: abcabcbb      =>	Output: abc
Input: bbbbb	 	=>	Output: b
Input: pwwkew		=>	Output: wke
Constraints
N ~ Length of input string
K ~ Number of unique characters in input string

Time Complexity: O(N)
Auxiliary Space Complexity: O(K) 

Dynamic moving window problem 
Initialize two pointers at 0 and 0 called leftPtrInt and rightPtrInt
Initialize currentCharMap
Initialize outputStr 
If the char at str[rightPtrInt] is not in the currentCharMap then keep expanding
    Expand by adding the rCharStr to outputStr
    Expand by incrementing rightPtrInt
If the char at str[rightPtrInt] is already in the currentCharMap then contract
    Contract by reinstantiating the start of the outputStr at the rightPtrInt
    Contract by incrementing leftPtrInt
return 
*/

const longestSubstringWithoutRepeatingCharacters = (str) => {
    


}

/* Tests */


/* Test results */