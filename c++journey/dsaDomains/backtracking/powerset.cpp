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
Power Set  // 78 Subsets

CTCI 8.04

Write a method to return all subsets of a set.


input:  [1, 2, 3];
output: [ [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];

input: [0];
output: [ [], [0] ];

*/

class Solution {
public:
    vector<vector<int> > subsets(vector<int>& inputVec) {
        if (inputVec.size() == 0){
            return {};
        }
        vector<vector<int> >outputVec;
        generateSubsets(inputVec, {}, 0, outputVec);
        return outputVec;
    }
private: 
    void generateSubsets(vector<int>& inputVec, vector<int> buildVec, int depthInt, vector<vector<int> >& outputVec){
        if (depthInt > inputVec.size()){
            return;
        }
        if (find(outputVec.begin(), outputVec.end(), buildVec) == outputVec.end()){
            outputVec.push_back(buildVec);
        }
        generateSubsets(inputVec, buildVec, depthInt + 1, outputVec);
        int intX = inputVec[depthInt];
        buildVec.push_back(intX);
        generateSubsets(inputVec, buildVec, depthInt + 1, outputVec);

    }
};
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
int main(){
    Solution solution;
    vector<int> inputVec1 = {1, 2, 3};
    vector<vector<int> >resultMatrix1 = solution.subsets(inputVec1);
    printMatrixWithCurlyBraces(resultMatrix1);

}