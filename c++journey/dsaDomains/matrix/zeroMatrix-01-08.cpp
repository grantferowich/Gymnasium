/* 
* Grant Ferowich
* Developed on Sept 28, 2023
* Cracking the Coding Interview
* Chapter 1, question 8
* Zero Matrix
* Write an algorithm such that if an 
* M x N matrix is 0, then its entire
* row and column are set to 0.

* Inputs: rowInt, colInt, vector<vector<int> > matrix
* output: matrix

*Example 1: 
* {{3, 5, 8},
*  {13, 21, 34}}
* input = 0, 0

* output: 
* {{0, 0, 0},
*  {0, 21, 34}}  
 */
 #include <iostream>
 #include <vector>
 #include <string>
 using namespace std;

class Solution{
    public:

    vector<vector<int> > zeroMatrix(int rowInt, int colInt, vector<vector<int> >& matrix){
        zeroRow(rowInt, matrix);
        zeroColumn(colInt, matrix);
        return matrix;

    }
    
    private:

    void zeroRow(int rowInt, vector<vector<int> >& matrix){
        for (int& valueInt: matrix[rowInt]){
            valueInt = 0;
        }
    }

    void zeroColumn(int colInt, vector<vector<int > >& matrix){
        for (auto& row: matrix){
            row[colInt] = 0;
        }
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
    vector<vector<int> > inputVec1 = {{3, 5, 8}, {13, 21, 34}};
    vector<vector<int> > outputVec1 = solutionX.zeroMatrix(0, 0, inputVec1);
    printMatrixWithCurlyBraces(outputVec1);
    return 0;
};