#include <climits>
#include <cstdint>
#include <string>
#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

/* 

Smallest Difference
CTCI 16.06

Dev on March 1, 2024.

Given two arrays of integers, compute the pair of values (one value in each array)
with the smallest (non-negative) difference. Return the difference.

inputArr1 = [1, 3, 5, 11, 2]
inputArr2 = [23, 127, 235, 19, 8]
Output: 3
Smallest difference is 3. (11 - 8)

inputArr3 = [1, 10, 100]
inputArr4 = [5, 50, 101]
Output: 1
*/

class Solution{
    public:
    
    int smallestDifference(vector<int> vec1, vector<int> vec2){
        // sort the two vectors
        // loop while ptr1 is less than vec1.size 
        // and while ptr2 is less than vec2.size
        // if the element at ptr1 is less than the element at ptr2
        // then move ptr1
        // else move ptr2
        sort(vec1.begin(), vec1.end());
        sort(vec2.begin(), vec2.end());
        int ptr1 = 0;
        int ptr2 = 0;
        int smallestDifferenceInt = INT_MAX;
        while (ptr1 < vec1.size() && ptr2 < vec2.size()){
            int differenceInt = abs(vec1[ptr1] - vec2[ptr2]);
            smallestDifferenceInt = min(differenceInt, smallestDifferenceInt);
            if (vec1[ptr1] < vec2[ptr2]){
                ptr1++;
            } else {
                ptr2++;
            }
        }
        return smallestDifferenceInt;
    };
};

int main(){
    Solution solutionX;
    vector<int> inputVec1 = {1, 3, 5, 11, 2};
    vector<int> inputVec2 = {23, 127, 235, 19, 8};
    int outputInt1 = solutionX.smallestDifference(inputVec1, inputVec2);
    cout << "Output Int 1 QL: " << outputInt1 << endl;
    vector<int> inputVec3 = { 1, 10, 100 };
    vector<int> inputVec4 = { 5, 50, 101 };
    int outputInt2 = solutionX.smallestDifference(inputVec3, inputVec4);
    cout << "Output Int 2 QL: " << outputInt2 << endl;
    return 0;
}