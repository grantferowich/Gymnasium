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
/* 39. Combination Sum

Developed the function on August 10, 2023.
The function works fine locally.
The function encounters the following error on LeetCode:
Getting inconsistent results?
You might be using global/static variables or C/C++. 
The system executes all testcases using the same program instance. 
Global/static variables affect the program state from one test case to another.

Medium
17K
342
Companies
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:
Input: candidates = [2], target = 1
Output: [] */
class Solution {
    public:
        vector<vector<int> > combinationSum(vector<int>& inputVec, int& targetValueInt) {
            vector<vector<int> > resultMatrix;
            resultMatrix.clear();
            vector<int> buildVec;
            set<vector<int> > resultSet;
            generateCombination(inputVec, buildVec, resultSet, 0, targetValueInt, 0);
            for (const vector<int> vec : resultSet){
                resultMatrix.push_back(vec);
            }
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
        void generateCombination(vector<int>& inputVec, vector<int> buildVec, set<vector<int> >& resultSet, int currentSumInt, int targetValueInt, int depthInt){
            if (currentSumInt > targetValueInt){
                return;
            }
            if (depthInt >= inputVec.size()){
                return;
            }
            if (currentSumInt == targetValueInt){
                sort(buildVec.begin(), buildVec.end());
                resultSet.insert(buildVec);
                return;
            }
            int xInt = 0;
            while (xInt < inputVec.size()){
                int valueInt = inputVec[xInt];
                currentSumInt += valueInt;
                buildVec.push_back(valueInt);
                generateCombination(inputVec, buildVec, resultSet, currentSumInt, targetValueInt, depthInt);
                generateCombination(inputVec, buildVec, resultSet, currentSumInt, targetValueInt, depthInt + 1);
                buildVec.pop_back();
                currentSumInt -= valueInt;
                xInt++;
            }
        }
};

int main(){
    Solution solution;
    vector<int> inputVec1 = {2, 3, 6, 7};
    int targetValueInt1 = 7;
    vector<vector <int> > resultMatrix1 = solution.combinationSum(inputVec1, targetValueInt1);
    cout << "Solution 1: " << endl;
    solution.printMatrixWithCurlyBraces(resultMatrix1);
    vector<int> inputVec2 = {2, 3, 5};
    int targetValueInt2 = 8;
    vector<vector<int> > resultMatrix2 = solution.combinationSum(inputVec2, targetValueInt2);
    cout << "Solution 2: " << endl;
    solution.printMatrixWithCurlyBraces(resultMatrix2);
    vector<int> inputVec3 = {4,8,11,10,9,3,12,7,6};
    int targetValueInt3 = 25;
    vector<vector <int> > resultMatrix3 = solution.combinationSum(inputVec3, targetValueInt3);
    cout << "Solution 3: " << endl;
    solution.printMatrixWithCurlyBraces(resultMatrix3);
    return 0;
}