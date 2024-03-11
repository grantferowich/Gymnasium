/* 
287. Find the Duplicate Number

Successfully tested the solution on July 8, 2023.
Leetcode URL: https://leetcode.com/problems/find-the-duplicate-number/submissions/989270329/
Medium
19.8K
3.1K
Companies
Given an array of integers nums containing n + 1 integers
 where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums,
 return this repeated number.

You must solve the problem without modifying the array 
nums and uses only constant extra space.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

The approach here is to store all integers as keys in a map.
Then store the frequency of each integer as each key's value.
Then return the key whose frequency is 2. 
*/

#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

int findTheDuplicateNumber(vector<int> vec){
    unordered_map<int, int> intMap;
    int xInt = 0;
    while (xInt < vec.size()){
        int elementInt = vec[xInt];
        if (intMap.find(elementInt) != intMap.end()){
            int frequencyInt = intMap[elementInt];
            intMap[elementInt] = frequencyInt + 1;
        }
        if (intMap.find(elementInt) == intMap.end()){
            intMap[elementInt] = 1;
        }
        xInt++;
    }
    for (auto pair: intMap){
        if (pair.second >= 2){
            return pair.first;
        }
    }
    return -1;
}

int main(){
    vector<int> inputVec1 = { 0, 1, 2, 3, 4, 5, 5 };
    vector<int> inputVec2 = { 1, 3, 4, 2, 2 };
    vector<int> inputVec3 = { 3, 1, 3, 4, 2 };
    vector<int> inputVec4 = { 2, 2, 2, 2, 2 };
    int outputInt1 = findTheDuplicateNumber(inputVec1);
    int outputInt2 = findTheDuplicateNumber(inputVec2);
    int outputInt3 = findTheDuplicateNumber(inputVec3);
    int outputInt4 = findTheDuplicateNumber(inputVec4);

    cout << "The duplicate in { 0, 1, 2, 3, 4, 5, 5 } is " << outputInt1 << "." << endl;
    cout << "The duplicate in { 1, 3, 4, 2, 2 } is " << outputInt2 << "." << endl;
    cout << "The duplicate in { 3, 1, 3, 4, 2 } is " << outputInt3 << "." << endl;
    cout << "The duplicate in { 2, 2, 2, 2, 2 } is " << outputInt4 << "." << endl;
    return 0;
}