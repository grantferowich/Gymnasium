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
/* 1929. Concatenation of Array
Easy

Developed and tested August 19, 2023. 

2.7K
315
Companies
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

 

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]
*/

vector<int> concatenationOfArray(vector<int> inputVector){
    vector<int> outputVector = inputVector;
    for (int valueInt: inputVector){
        outputVector.push_back(valueInt);
    }
    return outputVector;
}

void printVector(const vector<int>& vec){
    cout << "{ ";
    int xInt = 0;
    while (xInt < vec.size()){
        int valueInt = vec[xInt];
        if (xInt < vec.size() - 1){
            cout << valueInt << ", ";
        } 
        if (xInt == vec.size() - 1){
            cout << valueInt;
        }
        xInt++;
    }
    cout << " }" << endl;
}

int main(){
    vector<int> inputVec1 = {1, 2, 3, 5};
    vector<int> outputVec1 = concatenationOfArray(inputVec1);
    cout << "Result 1: ";
    printVector(outputVec1);
    return 0;
}