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
#include <set>
using namespace std;
/* 
46. Permutations

developed the function and tested the function on August 9, 2023.

Medium
17.4K
277
Companies
Given an array nums of distinct integers,
return all the possible permutations. 
You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],
        [2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]] 
*/

class Solution {
public:
    vector<vector<int> > permute(vector<int> inputVec) {
        vector<vector<int> > resultMatrix;
        vector<int> buildVec;
        generatePermutations(inputVec, buildVec, resultMatrix);
        return resultMatrix;
    }

    void printMatrixWithCurlyBraces(const vector< vector<int> >& matrix) {
        cout << "{";
        for (size_t i = 0; i < matrix.size(); ++i) {
            cout << "{";
            for (size_t j = 0; j < matrix[i].size(); ++j) {
                cout << matrix[i][j];
                if (j != matrix[i].size() - 1) {
                    cout << ", ";
                }
            }
            cout << "}";
            if (i != matrix.size() - 1) {
                cout << ", ";
            }
        }
        cout << "}" << endl;
    }
private:
    void generatePermutations(vector<int>& inputVec, vector<int>& buildVec, vector<vector<int> >& matrix){
        if (buildVec.size() == inputVec.size()){
            
            matrix.push_back(buildVec);
            return;
        }
        int xInt = 0;
        set<int> usedElementsSet;
        while (xInt < inputVec.size()){
            if (find(buildVec.begin(), buildVec.end(), inputVec[xInt]) == buildVec.end()){
            buildVec.push_back(inputVec[xInt]);  
            generatePermutations(inputVec, buildVec, matrix);
            buildVec.pop_back();
            }
            
            xInt++;
        }
    }
};
int main(){
    Solution solution;
    vector<vector<int> > resultMatrix1 =  solution.permute({1 , 2, 3});
    solution.printMatrixWithCurlyBraces(resultMatrix1);
    return 0;
}