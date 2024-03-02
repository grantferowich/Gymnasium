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
    }
};

int main(){
    Solution solutionX;
   
    vector<int> inputVec1 = {1, 3, 5, 11, 2};
    vector<int> inputVec2 = {23, 127, 235, 19, 8};
    int outputInt1 = solutionX.smallestDifference(inputVec1, inputVec2);
    cout << "Output Int 1: " << outputInt1 << endl;
    
    vector<int> inputVec3 = { 1, 10, 100 };
    vector<int> inputVec4 = { 5, 50, 101 };
    int outputInt2 = solutionX.smallestDifference(inputVec3, inputVec4); 
    cout << "Output Int 2: " << outputInt2 << endl;
    
    return 0;
}