/* 

Contiguous Sequence
CTCI 16.17

Dev March 4, 2024. 

You are given an array of integers (both
positive and negative). Find the 
contiguous sequence with the largest sum.
Return the sum.

Input 1
const arr1 = [2, -8, 3, -2, 4, -10]
output: [3, -2, 4] // 5

*/

#include <cstdint>
#include <iostream>
#include <vector>
using namespace std;

class Solution{
    public: 
    int contiguousSum(vector<int> vec){
        int localSumInt = INT_MIN;
        int maxSumInt = INT_MIN;
        int xInt = 0;
        while (xInt < vec.size()){
            localSumInt = max(vec[xInt], localSumInt+vec[xInt]);
            maxSumInt = max(maxSumInt, localSumInt);
            xInt++;
        }
        return maxSumInt;
    }
};

int main(){
    Solution solutionX;
    vector<int> vec1 = { 2, -8, 3, -2, 4, -10};
    int outputInt1 = solutionX.contiguousSum(vec1);
    cout << "Output Int 1: (expect 5): " << outputInt1 << endl;
    return 0;
}