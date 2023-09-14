/* 
* Make combined matrix 
July 31, 2023
Time complexity: 
Space complexity: 
*/

#include <iostream>
#include <vector>
using namespace std;

vector<vector<int> > makeCombinedMatrix(vector<int> vec1, vector<int> vec2){
    vector<vector<int> > matrix(vec1.size(), vector<int>(vec2.size(), 0));
    int xInt = 0;
    while (xInt < vec1.size()){
        int yInt = 0;
        while (yInt < vec2.size()){
            matrix[xInt][yInt] = vec1[xInt] + vec2[yInt];
            yInt++;
        }
        xInt++;
    }
    return matrix;
}

int main(){
    vector< vector<int> > matrix1 = makeCombinedMatrix({ 1, 1, 2 }, 
                                                       { 5, 8, 13});
    cout << "Result 1: " << endl;
    for (const vector<int> row : matrix1){
        for (int number : row){
            cout << number << " ";
        }
        cout << endl;
        
    }
    return 0;
}

/* Test result

Result 1: 
6 9 14 
6 9 14 
7 10 15 

 */