/* 49. Group Anagrams
Medium
17.1K
501
Companies
Given an array of strings strs, group the anagrams together.
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging 
the letters of a different word or phrase, typically
using all the original letters exactly once.

 

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]] 

*/
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    vector<vector<string> > groupAnagrams(vector<string>& strsVec) {
        
    }

};

int main(){
    Solution solutionX;
    vector<string> inputStr1 = {"eat","tea","tan","ate","nat","bat"};
    vector<vector<string> > outputVec1 = solutionX.groupAnagrams(inputStr1);
    
    return 0;
}