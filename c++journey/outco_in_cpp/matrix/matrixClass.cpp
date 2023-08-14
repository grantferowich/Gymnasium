/*
*  Homework - Matrices
*
*  Prompt: Create a Matrix class
*
*  The Matrix will take in the following input:
*
*               m:    {Integer} - represents the number of ROWS
*               n:    {Integer} - represent the number of COLUMNS
*
*  The Matrix will have the following properties:
*
*         storage:    {Array of Arrays of Integers} - stores of numbers within matrix
*               m:    {Integer} - represents the number of ROWS
*               n:    {Integer} - represent the number of COLUMNS
*
*  The Matrix will have the following methods:
*
*          isValid:   checks whether given coordinates are within the matrix
*
*                   Input:      i {Integer} - row index
*                   Input:      j {Integer} - column index
*                  Output:        {Boolean}
*
*                 Example:
*
*                 matrix->storage == [[0, 1, 2],
*                                    [3, 4, 5],
*                                    [6, 7, 8]]
*
*                 matrix->isValid(1, 1)
*
*                 result == true
*
*                 matrix->isValid(100, 1)
*
*                 result == false
*
*
*       initialize:   takes in a valid array/vector of arrayOfArrays, and
*
*                   Input: arrayOfArrays {Array/vector of Arrays/vectors of Integers}
*
*                  Output:        {undefined / void}
*
*                 Example:
*
*                 matrix->intitialize([[0, 1, 2],
*                                     [3, 4, 5],
*                                     [6, 7, 8]])
*
*
*                 result:
*
*                 matrix->storage == [[0, 1, 2],
*                                    [3, 4, 5],
*                                    [6, 7, 8]]
*
*                 matrix->m == 3
*
*                 matrix->n == 3
*
*
*            print:   optional method to print the contents of a matrix's storage
*                     prints each row of the matrix on a new line.
*
*                   Input: N/A {undefined / void}
*
*                  Output:        {undefined / void}
*
*                 Example:
*
*                 matrix->storage == [[0, 1, 2],
*                                    [3, 4, 5],
*                                    [6, 7, 8]]
*
*
*                 console:
*
*                 [0, 1, 2]
*                 [3, 4, 5]
*                 [6, 7, 8]
*
*
*           insert:   inserts an integer into the given coordinates
*                    returns true if insertion was successful
*                    returns false otherwise
*
*                   Input:      i {Integer}
*                   Input:      j {Integer}
*                   Input:    val {Integer}
*                  Output:        {Boolean}
*
*                 Example:
*
*                 matrix->storage == [[0, 1, 2],
*                                    [3, 4, 5],
*                                    [6, 7, 8]]
*
*                 matrix->insert(1, 1, 400)
*
*                 matrix->storage == [[0, 1, 2],
*                                    [3, 400, 5],
*                                    [6, 7, 8]]
*
*                 result == true
*
*
*                 matrix->insert(100, 1, 400)
*
*                 matrix->storage = [[0, 1, 2],
*                                   [3, 4, 5],
*                                   [6, 7, 8]]
*
*                 result == false
*
*
*         retrieve:   returns value stored at given coordinates
*                     returns -Infinity/INT_MIN if coordinates are invalid
*
*                   Input:      i {Integer} - row index
*                   Input:      j {Integer} - column index
*                  Output:        {Integer}
*
*                  Example:
*
*                  matrix->storage == [[0, 1, 2],
*                                     [3, 4, 5],
*                                     [6, 7, 8]]
*
*                  matrix->retrieve(1, 1)
*
*                  result == 4
*
*
*            scale:   multiplies every value in the matrix by some constant factor
*                     returns undefined / void
*
*                    Input:  factor {Integer} - amount each entry will be multiplied by
*                    Output:         {undefined}
*
*                   Example:
*
*                   matrix->storage == [[1, 1, 1],
*                                      [1, 1, 1],
*                                      [1, 1, 1]]
*
*                   matrix->scale(5)
*
*                   matrix->storage == [[5, 5, 5],
*                                      [5, 5, 5],
*                                      [5, 5, 5]]
*
*
*             fill:   sets every entry in the matrix equal to input value
*                     returns undefined / void
*
*                   Input:     val {Integer} - value to be inserted throughout matrix
*                  Output:         {undefined}
*
*                 Example:
*
*                 matrix->storage == [[0, 1, 2],
*                                    [3, 4, 5],
*                                    [6, 7, 8]]
*
*                 matrix->fill(1)
*
*                 matrix->storage == [[1, 1, 1],
*                                    [1, 1, 1],
*                                    [1, 1, 1]]
*
*
*          flatten:   returns an array/vector containing all the elements in the matrix if traversed row by row
*
*                   Input:      N/A
*                  Output:     {Array/vector of Integers}
*
*                 Example:
*
*                 matrix->storage == [[0, 1, 2],
*                                    [3, 4, 5],
*                                    [6, 7, 8]]
*
*                 matrix->flatten()
*
*                 result == [0, 1, 2, 3, 4, 5, 6, 7, 8]
*
*
*            slice:   returns a new Matrix representing a subset of the original matrix
*                     it's rows are bounded by the first two-element array input
*                     it's columns are bounded by the second two-element array input
*
*                     NOTE: If the rowRange or colRange is larger than the original matrix
*                           just return the bounds of the original matrix
*
*                     NOTE: Think about how much you'll have to offset insertions into the new matrix
*
*                    Input:      rowRange {Array of Two Integers}
*                    Input:      colRange {Array of Two Integers}
*                   Output:     {Matrix}
*
*                 Example:
*
*                 matrix->storage == [[0, 1, 2],
*                                    [3, 4, 5],
*                                    [6, 7, 8]]
*
*                 matrix->slice([0, 2], [0, 2])
*
*                 result == [[0, 1],
*                            [3, 4]]
*
*
*        transpose:   returns a new Matrix representing the transpose of the original matrix
*                     The transpose of a matrix is like flipping a matrix along its diagonal axis
*
*                     Link to Wikipedia:
*                     NOTE: if the original matrix was M x N, the new one will be N x M
*
*                    Input:      N/A
*                   Output:     {Matrix}
*
*                 matrix->storage == [[0, 1, 2],
*                                    [3, 4, 5]]
*
*                 matrix->transpose()
*
*                 result == [[0, 3],
*                            [1, 4],
*                            [2, 5]]
*
*
*
*         mulitply:   returns a new Matrix representing the matrix multiplication of original matrix
*                     by the input matrix
*
*                     Link to Wikipedia:
*                     NOTE: if the original matrix was M x N, the input one MUST be N x K
*                           the result matrix will then be M x K dimensions
*
*                    Input:      matrix {Matrix}
*                   Output:     {Matrix}
*
*                 matrix->storage == [[4, 1, 3],
*                                    [3, 2, 5]]
*
*                 matrix->multiply([[8, 9],
*                                  [7, 10],
*                                  [0, 6]])
*
*                 result == [[39, 64],
*                            [38, 77]]
*
*                 Reasoning:
*                          [[(4 * 8) + (1 * 7) + (3 * 0),    (4 * 9) + (1 * 10) + (3 * 6)],
*
*                           [(3 * 8) + (2 * 7) + (5 * 0),    (3 * 9) + (2 * 10) + (5 * 6)]]
*
*
*                      =>  [[32 + 7 + 0,   36 + 10 + 18],
*
*                           [24 + 14 + 0,  27 + 20 + 30]]
*
*
*                      =>  [[39, 64],
*                           [38, 77]]
*/


#include <climits>
#include <string>
#include <vector>
#include <algorithm>
#include <iostream>
#include <typeinfo>
using namespace std;


class Matrix {
    public:

    Matrix(int m, int n) {
        this->m = m;
        this->n = n;
        this->storage = vector<vector<int> >(m, vector<int>(n));
    }

    int getM() {return this->m;}

    int getN() {return this->n;}

    vector<vector<int> > getStorage(){return this->storage;}

    void print() {
        int rowInt = 0;
        int colInt = 0;
        cout << "{" << endl;
        while (rowInt < storage.size()){
            colInt = 0;
            cout << "{";
            while (colInt < storage[0].size()){
                if (colInt < storage[0].size() - 1){
                    cout << to_string(storage[rowInt][colInt]) << ", ";
                }
                if (colInt == storage[0].size() -1){
                    cout << to_string(storage[rowInt][colInt]);
                }
                colInt++;
            }
            cout << "}" << endl;
            rowInt++;
        }
        cout << "}" << endl;
    }


    bool isValid(int iInt, int jInt) {
        if (iInt >= 0 || iInt < storage.size() || jInt >= 0 || jInt < storage[0].size()){
            return true;
        }
        return false;
    }


    void initialize(vector<vector<int> > arrayOfArrays) {
        this->storage = arrayOfArrays;
        this->m = arrayOfArrays.size();
        this->n = arrayOfArrays[0].size();
    }


    bool insert(int iInt, int jInt, int valueInt) {
        bool isPositionValidBool = isValid(iInt, jInt);
        if (isPositionValidBool){
            storage[iInt][jInt] = valueInt;
            return true;
        }
        return false;
    }


    int retrieve(int iInt, int jInt) {
        bool isPositionedValidBool = isValid(iInt, jInt);
        if (isPositionedValidBool){
            return storage[iInt][jInt];
        }
        return INT_MIN;
    }


    void scale(int factorInt) {
        int rowInt = 0;
        int colInt = 0;
        while (rowInt < storage.size()){
            colInt = 0;
            while (colInt < storage[0].size()){
                int valueInt = retrieve(rowInt, colInt);
                int newValueInt = valueInt * factorInt;
                insert(rowInt, colInt, newValueInt);
                colInt++;
            }
            rowInt++;
        }
    }


    void fill(int valueInt) {
        int rowInt = 0;
        int colInt = 0;
        while (rowInt < storage.size()){
            colInt = 0;
            while (colInt < storage[0].size()){
                insert(rowInt, colInt, valueInt);
                colInt++;
            }
            rowInt++;
        }
    }


    vector<int> flatten() {
      int rowInt = 0;
      int colInt = 0;
      vector<int> outputVec;
      while (rowInt < storage.size()){
        colInt = 0;
        while (colInt < storage[0].size()){
            int valueInt = storage[rowInt][colInt];
            outputVec.push_back(valueInt);
            colInt++;
        }
        rowInt++;
      }
      return outputVec;
    }

    Matrix *slice(vector<int> rowRange, vector<int> colRange) {
    
    int rowStartInt = rowRange[0];
    int rowEndInt = rowRange[1];
    int colStartInt = colRange[0];
    int colEndInt = colRange[1];
    int rowsInt = rowEndInt - rowStartInt;
    int colsInt = colEndInt - colStartInt;
    Matrix* matrix = new Matrix(rowsInt, colsInt);

    int xInt = rowStartInt;
    int yInt = colStartInt;
    while (xInt < rowEndInt){
        yInt = colStartInt;
        while (yInt < colEndInt){
            int valueInt = storage[xInt][yInt];
            matrix->insert(xInt - rowStartInt, yInt - colStartInt, valueInt);
            yInt++;
        }
        xInt++;
    }
    return matrix;
    }


    Matrix *transpose() {
    //YOUR WORK HERE
    return NULL;
    }


    Matrix *multiply(Matrix *matrix) {
    //YOUR WORK HERE
    return NULL;
    }

    private:
    int m,n;
    vector<vector<int> > storage;

};

string converToFToString(bool ToF){
    if (ToF == 0){
        return "false";
    }
    if (ToF == 1){
        return "true";
    }
    return "";
}

void printVector(const vector<int>& vec){
    cout << "{ ";
    int xInt = 0;
    while (xInt < vec.size()){
        int valueInt = vec[xInt];
        if (xInt < vec.size() - 1){
            cout << valueInt << ", ";
        } 
        if (xInt == vec.size() - 1){
            cout << valueInt;
        }
        xInt++;
    }
    cout << " }" << endl;
}

int main(){
    Matrix matrix1(3, 3);
    matrix1.initialize({
        {1, 2, 3}, 
        {6, 7, 8},
        {8, 11, 21} 
    });
    matrix1.print();
    bool isValidBool1 = matrix1.isValid(1, 1);
    string isValidStr1 = converToFToString(isValidBool1);
    cout << "Are the coordinates [ 1, 1 ]  valid? " << isValidStr1 << endl;
    bool isValidBool2 = matrix1.isValid(-1, -1);
    string isValidStr2 = converToFToString(isValidBool2);
    cout << "Are the coordiantes [ -1, -1 ] valid? " << isValidStr2 << endl;
    matrix1.insert(1, 1, 23);
    matrix1.print();
    int retrievedInt = matrix1.retrieve(1, 2);
    cout << "The value at [1, 2] is 8? " << retrievedInt << endl;
    matrix1.scale(2);
    matrix1.print();
    Matrix matrix2(3, 3);
    matrix2.initialize({
        {1, 2, 3, 9},
        {4, 5, 6, 12}, 
        {8, 9, 10, 20},
        {31, 34, 55, 88}
    });
    // matrix2.fill(7);
    matrix2.print();
    // vector<int> flatVec = matrix2.flatten();
    // printVector(flatVec);
    Matrix* matrix3 = matrix2.slice({0,2}, {0, 2});
    matrix3->print();
    return 0;
}