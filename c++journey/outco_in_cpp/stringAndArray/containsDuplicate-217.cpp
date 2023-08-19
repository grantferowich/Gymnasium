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
using namespace std;
/* 217. Contains Duplicate
Easy
10.4K
1.2K
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true */

bool containsDuplicate(vector<int> inputVec){
    unordered_map<int, int> frequencyMap;
    for (int valueInt : inputVec ){
        if (frequencyMap.find(valueInt) != frequencyMap.end()){
            frequencyMap[valueInt] = frequencyMap[valueInt] + 1;
        }
        if (frequencyMap.find(valueInt) == frequencyMap.end()){
            frequencyMap[valueInt] = 1;
        }
    }

    for (auto pair : frequencyMap){
        if (pair.second > 1){
            return true;
        }
    }
    return false;
}

string printToFToString(bool inputToF){
        if (inputToF == 1){
            return "true";
        }
        if (inputToF == 0){
            return "false";
        }
        return "false";
}

int main(){
    vector<int> inputVec1 = {1, 2, 3,1};
    vector<int> inputVec2 = {1, 2, 3, 4};
    vector<int> inputVec3 = {1, 1, 1, 3, 3, 4, 3, 2, 4, 2};
    bool resultToF1 = containsDuplicate(inputVec1);
    bool resultToF2 = containsDuplicate(inputVec2);
    bool resultToF3 = containsDuplicate(inputVec3);
    string resultStr1 = printToFToString(resultToF1);
    string resultStr2 = printToFToString(resultToF2);
    string resultStr3 = printToFToString(resultToF3);
    cout << "Result 1: " << resultStr1 << " (expected true)" << endl;
    cout << "Result 2: " << resultStr2 << " (expected false)" << endl;
    cout << "Result 3: " << resultStr1 << " (expected true)" << endl;
    return 0;   
}
