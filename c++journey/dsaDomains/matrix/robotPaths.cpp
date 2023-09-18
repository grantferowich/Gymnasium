
#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


/*
 *  Problem 1:  Robot Paths
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
    int robotPaths(vector<vector<int> > matrix){

    }

 };
 int main(){
    Solution solutionX;
    vector<vector<int> > inputVec1 = {{0,0,0}, {0,0,0}};
    vector<vector<int> > inputVec2 = {{0,0,0,0},{0,0,0,0},{0,0,0,0}};
    int outputInt1 = solutionX.robotPaths(inputVec1);
    cout << "Result 1: " << outputInt1 << ". Expect 8." << endl;

    int outputInt2 = solutionX.robotPaths(inputVec2);
    cout << "Result 2: " << outputInt2 << ". Expect 38. " << endl;
    return 0;
 }