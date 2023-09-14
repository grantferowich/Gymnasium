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
/* 219. Contains Duplicate II
Easy

Developed and tested the function on August 19, 2023.
5.3K
2.8K
Companies
Given an integer array nums and an integer k, 
return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false */

bool containsDuplicateII(vector<int> inputVec, int kInt){

    unordered_map<int, int> frequencyMap;
    for (int valueInt: inputVec){
        if (frequencyMap.find(valueInt) != frequencyMap.end()){
            frequencyMap[valueInt] = frequencyMap[valueInt] + 1;
        }
        if (frequencyMap.find(valueInt) == frequencyMap.end()){
            frequencyMap[valueInt] = 1;
        }
    }

    int xInt = 0;
    while (xInt < inputVec.size()){
        int valueInt = inputVec[xInt];
        if (frequencyMap[valueInt] > 1){
         int gInt = 0;
         while (gInt < inputVec.size()){
            if (abs(gInt - xInt) <= kInt && inputVec[xInt] == inputVec[gInt] && gInt != xInt){
                return true;
            }
            gInt++;
         }   
        }
        xInt++;
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
    vector<int> inputVec1 = {1, 2, 3, 1};
    int kInt1 = 3;
    vector<int> inputVec2 = {1, 0, 1, 1};
    int kInt2 = 1;
    vector<int> inputVec3 = {1, 2, 3, 1, 2, 3};
    int kInt3 = 2;
    bool resultToF1 = containsDuplicateII(inputVec1, kInt1);
    bool resultToF2 = containsDuplicateII(inputVec2, kInt2);
    bool resultToF3 = containsDuplicateII(inputVec3, kInt3);
    string resultStr1 = printToFToString(resultToF1);
    string resultStr2 = printToFToString(resultToF2);
    string resultStr3 = printToFToString(resultToF3);
    cout << "Result 1: " << resultStr1 << endl;
    cout << "Result 2: " << resultStr2 << endl;
    cout << "Result 3: " << resultStr3 << endl;
    return 0;
}