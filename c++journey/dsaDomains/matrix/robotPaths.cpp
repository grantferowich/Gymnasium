
#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
#include <unordered_set>
using namespace std;


/*
 *  Problem 1:  Robot Paths
 *
 *  Developed on Sept. 22, 2023.
 * 
 *  Prompt:   Given a matrix of zeroes, determine how many unique paths exist
 *            from the top left corner to the bottom right corner
 *
 *  Input:    An Array of Array of ints (matrix)
 *  Output:   int
 *
 *  Example:  matrix = [[0,0,0,0],
 *                      [0,0,0,0],
 *                      [0,0,0,0]]
 *
 *            robotPaths(matrix) = 38
 *
 *
 *            matrix = [[0,0,0],
 *                      [0,0,0]]
 *
 *            robotPaths(matrix) = 4
 *
 *  Note:     From any point, you can travel in the four cardinal directions
 *            (north, south, east, west). A path is valid as long as it travels
 *            from the top left corner to the bottom right corner, does not go
 *            off of the matrix, and does not travel back on itself
 */

 class Solution{
   public:

   void depthFirstSearch(int rowInt, int colInt, vector<vector<int> > &matrix, unordered_set<string> &vSet, int &outputInt){
    if (rowInt == matrix.size() - 1 && colInt == matrix[0].size() - 1){
      outputInt++;
      return;
    }
    // OOB
    if (rowInt < 0 || rowInt >= matrix.size() || colInt < 0 || colInt >= matrix[0].size()){
        return;
    }
    string keyStr = to_string(rowInt)+"_"+to_string(colInt);
    // already visited this 1
    if (vSet.find(keyStr) != vSet.end()){
        return;
    }
    
    vSet.insert(keyStr);
    depthFirstSearch(rowInt + 1, colInt, matrix, vSet, outputInt);
    depthFirstSearch(rowInt - 1, colInt, matrix, vSet, outputInt);
    depthFirstSearch(rowInt, colInt + 1, matrix, vSet, outputInt);
    depthFirstSearch(rowInt, colInt - 1, matrix, vSet, outputInt);
    vSet.erase(keyStr);
    }

    int robotPaths(vector<vector<int> > matrix){
      int outputInt = 0;
      unordered_set<string> visitedSet;
      depthFirstSearch(0, 0, matrix, visitedSet, outputInt);
      return outputInt;
    }
 };
 
 int main(){
    Solution solutionX;
    vector<vector<int> > inputVec1 = {{0,0,0}, {0,0,0}};
    vector<vector<int> > inputVec2 = {{0,0,0,0},{0,0,0,0},{0,0,0,0}};
    int outputInt1 = solutionX.robotPaths(inputVec1);
    cout << "Result 1: " << outputInt1 << ". Expect 4." << endl;
    int outputInt2 = solutionX.robotPaths(inputVec2);
    cout << "Result 2: " << outputInt2 << ". Expect 38. " << endl;
    return 0;
 }