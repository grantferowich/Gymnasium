#include <algorithm>
#include <cmath>
#include <vector>
#include <iostream>
#include <climits>
using namespace std;
/* 
485. Max Consecutive Ones
Developed on August 15, 2023

Easy
4.9K
439
Companies
Given a binary array nums, return the maximum number of 
consecutive 1's in the array.


Example 1:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 2 
*/

int maxConsecutiveOnes(vector<int>& vec){
    int rPtrInt = 0, currentCountInt = 0, ultimateCountInt = 0;
    while (rPtrInt < vec.size()){
        if (vec[rPtrInt] == 1){
            currentCountInt++;
            ultimateCountInt = max(currentCountInt, ultimateCountInt);
        } else {
            currentCountInt = 0;
        }
        rPtrInt++;
    }
    return ultimateCountInt;
}
int main(){
    vector<int> vec1 = { 1, 1, 0, 1, 1, 1 };
    int resultInt1 = maxConsecutiveOnes(vec1);
    cout << "Result 2: " << resultInt1 << endl; // expect 3;
    vector<int> vec2 = { 1, 0, 1, 1, 0, 1 };
    int resultInt2 = maxConsecutiveOnes(vec2);
    cout << "Result 2: " << resultInt2 << endl; // expect 2;
    return 0;
}