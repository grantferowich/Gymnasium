#include <iostream> 
#include <string>
#include <sys/types.h>
#include <unordered_map>
#include <vector>
#include <chrono>
#include <iomanip> 
#include <stack>
using namespace std;
using namespace std::chrono;
/* 
 * Grant Ferowich
 * September 22, 2023
 * Rotate Matrix
 * CTCI 1.07
 * Given an image represented by an N x N
 * matrix, where each pixel in the image is 
 * represented by an integers, write a method
 * to rotate the image by 90 degrees.

 *input 1:
 {{1, 2, 3},            {{7, 4, 1},                      
  {4, 5, 6},    =>       {8, 5, 2},
  {7, 8, 9}}             {9, 6, 3}}
 */
class Solution{
    public: 
     vector<vector<string> > rotateMatrix(vector<vector<int> > inputVec){

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
    
    Solution solutionX;
    vector<vector<int> > inputVec1 = {{1, 2, 3},
                                      {4, 5, 6},     
                                      {7, 8, 9}};
    vector<vector<int> > outputVec1 = solutionX.rotateMatrix(inputVec1);

    return 0;
}

