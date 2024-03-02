#include <cstdint>
#include <string>
#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

/* 
Smallest Difference
CTCI 16.06

Successfully tested the function on July 12, 2023.

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
        int int1 = 0;
        int int2 = 0;
        int smallestDifferenceInt = INT16_MAX;
        while (int1 < vec1.size()){
            int2 = 0;
            int intA = vec1[int1];
            while (int2 < vec2.size()){
                int intB = vec2[int2];
                int differenceInt1 = intA - intB;
                int differenceInt2 = intB - intA;
                if (differenceInt1 > 0 && differenceInt1 < smallestDifferenceInt){
                    smallestDifferenceInt = differenceInt1;
                }
                if (differenceInt2 > 0 && differenceInt2 < smallestDifferenceInt){
                    smallestDifferenceInt = differenceInt2;
                }
                int2++;
            }
            int1++;
        }
        return smallestDifferenceInt;
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