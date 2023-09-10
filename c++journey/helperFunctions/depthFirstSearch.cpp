#include <array>
#include <climits>
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

void depthFirstSearch(int rowInt, int colInt, vector<vector<int> > matrix, unordered_set<string> &vSet){
    // OOB
    if (rowInt < 0 || rowInt >= matrix.size() || colInt < 0 || colInt >= matrix[0].size()){
        return;
    }
    string keyStr = to_string(rowInt)+"_"+to_string(colInt);
    // already visited this 1
    if (vSet.find(keyStr) != vSet.end() && matrix[rowInt][colInt] == 1){
        return;
    }
    // not a 1
    if (matrix[rowInt][colInt] == 0){
        return;
    }
    vSet.insert(keyStr);
    depthFirstSearch(rowInt + 1, colInt, matrix, vSet);
    depthFirstSearch(rowInt - 1, colInt, matrix, vSet);
    depthFirstSearch(rowInt, colInt + 1, matrix, vSet);
    depthFirstSearch(rowInt, colInt - 1, matrix, vSet);
}