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
#include <type_traits>
using namespace std;
/**
 * 2e. Flatten a two dimensional integer array/vector using Helper Method of Recursion
 *
 * Input:   two-dimensional int Array/vector
 * Output:  Array/vector of ints
 *
 * Example: vector matrix{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
 *          Flatten.compute(matrix) =>
 *          {1, 2, 3, 4, 5, 6, 7, 8, 9}
 */
void flatten(vector<vector<int> >& matrix, vector<int>& resultVec){
    for (const vector<int>& row : matrix){
        for (const int valueInt : row){
            resultVec.push_back(valueInt);
        }
    }
}
vector<int> compute(vector<vector<int> > matrix){
    vector<int> outputVec;
    flatten(matrix, outputVec);
    return outputVec;
}
void printVector(const vector<int>& vec){
    for (int valueInt : vec){
        cout << valueInt << " ";
    }
    cout << endl;
}
int main(){
    vector<int> resultVec1 = compute({{1, 2, 3}, {4, 5, 6}, {7, 8, 9}});
    printVector(resultVec1);
    return 0;
}