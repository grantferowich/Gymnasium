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
using namespace std;
/**
 * 2d. Given an array/vector of positive integers, create an array/vector of two-item integer
 *     arrays/vectors (two dimensional integer array/vector) using Helper Method Recursion
 *
 * Input:   Array/vector of int
 * Output:  two-dimensional int Array/vector
 *
 * Example: vector<int> nums{1, 2, 3, 4, 5, 6};
 *          ArrayPairs.compute(nums)  =>
 *          {{1,2}, {3,4}, {5,6}}
 *
 * Example: vector<int> nums2{1, 2, 3, 4, 5};
 *          ArrayPairs.compute(nums2)  =>
 *          {{1,2}, {3,4}, {5, -1}}
 */
class ArrayPairs {
    public:
      vector< vector<int> > compute(vector<int> vec) {
        return traverse( vec, 0, {});
      }
    private: 
        vector< vector <int> > traverse(vector<int> inputVec, int indexInt, vector<vector<int> > outputVec ){
            if (indexInt >= inputVec.size()){
                return outputVec;
            }
            vector<int> tuple = {inputVec[indexInt], inputVec[indexInt + 1]};
            outputVec.push_back(tuple);
            return traverse(inputVec, indexInt + 2, outputVec);
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
    ArrayPairs arrayPairsInstance;
    vector< vector<int> > matrix1 = arrayPairsInstance.compute({1, 2, 3, 4, 5});
    printMatrixWithCurlyBraces(matrix1);
    vector< vector<int> > matrix2 = arrayPairsInstance.compute({1, 2, 3, 4, 5, 6});
    printMatrixWithCurlyBraces(matrix2);
    return -1;
}