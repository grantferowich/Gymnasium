#include <array>
#include <cmath>
#include <iterator>
#include <string>
#include <vector>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <iostream>
#include <array>
#include <set>
using namespace std;
/* 
17. Letter Combinations of a Phone Number
Medium
Started development on August 11, 2023.

Given a string containing digits from 2-9 
inclusive, return all possible letter 
combinations that the number could represent. 
Return the answer in any order.

A mapping of digits to letters (just like on the 
telephone buttons) is given below. Note that 1 
does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"] */
class Solution {
public:
    vector<string> letterCombinations(string& inputStr) {
        if (inputStr.length() == 0){
            return {};
        } 
        unordered_map<char, string>digitsMap = {
                {'1', ""},
                {'2', "abc"}, 
                {'3', "def"},
                {'4', "ghi"},
                {'5', "jkl"},
                {'6', "mno"},
                {'7', "pqrs"},
                {'8', "tuv"},
                {'9', "wxyz"}, 
                {'0', ""}
        };
        vector<string>outputVec;
        traverse(digitsMap, outputVec, inputStr, "", 0);
        return outputVec;
    }
    void printVector(const std::vector<string>& vec){
        for (string valueStr : vec){
            cout << valueStr << " ";
        }
        cout << endl;
    }
private: 
    void traverse(unordered_map<char, string> digitsMap, vector<string>& outputVec, string inputStr, string buildStr, int depthInt){
        if (buildStr.length() == inputStr.length()){
            outputVec.push_back(buildStr);
            return;
        }
        if (depthInt >= inputStr.length()){
            return;
        }
        string digitsStr = digitsMap[inputStr[depthInt]];
        for (char characterX : digitsStr){
            string updatedString = buildStr + characterX;
            traverse(digitsMap, outputVec, inputStr, updatedString, depthInt + 1);
        }
    }
};

int main(){
    Solution solution;
    string inputStr1 = "23";
    vector<string> resultVec1 = solution.letterCombinations(inputStr1);
    solution.printVector(resultVec1);
    return 0;
}