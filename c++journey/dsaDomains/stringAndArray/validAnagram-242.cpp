/* 242. Valid Anagram
Easy
10.6K
330
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false */
#include <iostream>
#include <string> 
#include <unordered_map>
#include <vector> 
using namespace std;
class Solution {
public:
    bool isAnagram(string str1, string str2) {
        unordered_map<char, int> charMap1, charMap2;
        for (char xChar: str1){
            if (charMap1.find(xChar) == charMap1.end()){
                charMap1[xChar] = 1;
            } else {
                int frequencyInt = charMap1[xChar];
                charMap1[xChar] = frequencyInt + 1;
            }
        }

        for (char yChar: str2){
            if (charMap2.find(yChar) == charMap2.end()){
                charMap2[yChar] = 1;
            } else {
                int frequencyInt = charMap2[yChar];
                charMap2[yChar] = frequencyInt + 1;
            }
        }
        for (char xChar: str1){
            if (charMap1[xChar] != charMap2[xChar]){
                return false;
            }
        }
        return true;
    }
};

int main(){
    Solution solutionX;
    string inputStr1 = "anagram";
    string inputStr2 = "nagaram";
    bool outputToF1 = solutionX.isAnagram(inputStr1, inputStr2);
    cout << "Result 1: " << outputToF1 << ". Expect 1." << endl;
    return 0;
}