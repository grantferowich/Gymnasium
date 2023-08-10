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
/*
*  Problem: Lattice Paths (Dynamic Programming Approach)
*
*  Prompt:    Count the number of unique paths to travel from the top left
*             to the bottom right of a lattice of squares.
*
*             NOTE: You are traveling along the **EDGES** of the lattice
*
*  Input:     An integer N (which is the width of the lattice)
*             An integer M (which is the height of the lattice)
*
*  Output:    An integer (which represents the number of unique paths)
*
*  Example:   input: 2
*
*             (2 x 3 lattice of squares)
*              __ __ __
*             |__|__|__|
*             |__|__|__|
*
*             output: 10 (number of unique paths from top left corner to bottom
*                     right)
*
*             Diagram:
*
*             1__1__1__1
*             |  |  |  |
*             1__2__3__4
*             |  |  |  |
*             1__3__6__10
*
*  Notes:     What is the time and auxilliary space complexity of your solution?
*
*             When moving through the lattice, you can only move either down or
*             to the right.
*
*             You did this problem before with recursion. Try implementing it
*             now with dynamic programming!
*
*  Resources:
*    1: https://projecteuler.net/problem=15
*    2: https://en.wikipedia.org/wiki/Lattice_path
*
*/

int traverse(int rowInt, int mInt, int colInt, int nInt, unordered_map<string, int>& cacheMap){

    string keyStr = to_string(rowInt) + "_" + to_string(colInt);
    if (rowInt < 0 || colInt < 0 || rowInt > mInt || colInt > nInt){
        return 0;
    }
    if (rowInt == mInt && colInt == nInt){
        return 1;
    }
    if (cacheMap.find(keyStr) != cacheMap.end()){
        return cacheMap[keyStr];
    }
    int rightInt = traverse(rowInt, mInt, colInt + 1, nInt, cacheMap);
    int downInt = traverse(rowInt + 1, mInt, colInt, nInt, cacheMap);
    cacheMap[keyStr] = rightInt + downInt;
    return cacheMap[keyStr];
}

// Time Complexity:
// Auxiliary Space Complexity:
int latticePaths(int mInt, int nInt) {
  unordered_map<string, int> cacheMap;
  return traverse(0, mInt, 0, nInt, cacheMap);
}

int main(){
    int resultInt1 = latticePaths(2, 3);
    cout << "Result 1: " << resultInt1 << endl;
    return 0;
}