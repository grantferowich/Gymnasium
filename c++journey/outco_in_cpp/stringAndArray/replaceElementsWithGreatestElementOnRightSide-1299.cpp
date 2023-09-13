#include <climits>
#include <iostream>
#include <string> 
#include <vector>
#include <sstream>
using namespace std;
/* Right Side
Passed LeetCode tests on September 13, 2023
Easy

2.3K
227
Companies
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.
Example 2:

Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0. */

class Solution {
public:
    vector<int> replaceElements(vector<int>& inputVec) {
        int sizeInt = inputVec.size();
        vector<int> outputVec(sizeInt, -1);
        int xInt = inputVec.size() - 1;
        int maxInt = -1;
        while (xInt >= 0){
            outputVec[xInt] = maxInt;
            maxInt = max(maxInt, inputVec[xInt]);
            xInt--;
        }
        return outputVec;
    }
};


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
    Solution solutionX;
    vector<int> vec1 = {17,18,5,4,6,1};
    vector<int> outputVec1 = solutionX.replaceElements(vec1);
    
    cout << "Result 1: ";
    printVector(outputVec1);
    return 0;
}