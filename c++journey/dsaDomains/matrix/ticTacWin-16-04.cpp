#include <climits>
#include <string>
#include <vector>
#include <algorithm>
#include <iostream>
#include <typeinfo>
using namespace std;

/* 
Tic Tac Win
CTCI 16.04

Design an algorithm to figure out if someone has 
won a game of Tic Tac Toe or not.
Runtime: O(1)
Auxiliary space complexity: O(1)

Input: players symbol: "x" or "o", 3 x 3 matrix
Output: true or false

playerSymbolStr1 = "x"
matrix = [["x", "x", "x"],
          ["", "o", "o" ],
          ["", "", ""   ]]
        
output: true

The approach here is to look at the player Symbol string,
and then compare that with each type of winning combination.
The winning combinations are 

Top horizontal: matrix[0][0], matrix[0][1], matrix[0][2]
middle horizontal: matrix[1][0], matrix[1][1], matrix[1][2]
lower horizontal: matrix[2][0], matrix[2][1], matrix[2][2]
left vertical: matrix[0][0], matrix[1][0], matrix[2][0]
middle vertical: matrix[0][1], matrix[1][1], matrix[2][1]
right vertical: matrix[0][2], matrix[1][2], matrix[2][2]
Right to left diagonal: matrix[0][0], matrix[1][1], matrix[2][2]
left to right diagonal: matrix[2][0], matrix[1][1], matrix[0][2]

loop over the array of winning combinations
if each element in the combination is equal to the player symbol str
return true

outside the loop return false
*/

class Solution{
    public: 
    bool ticTacWin(string playerStr, vector<vector<string> > matrix){
        if (playerStr != "x" && playerStr != "X" &&
            playerStr != "o" && playerStr != "O"){
            return false;
        }

        if (matrix.size() != 3){
            return false;
        }

        vector<vector<string> > winningCombinationsVec = {
            { matrix[0][0], matrix[0][1], matrix[0][2] },
            { matrix[1][0], matrix[1][1], matrix[1][2] },
            { matrix[2][0], matrix[2][1], matrix[2][2] },
            { matrix[0][0], matrix[1][0], matrix[2][0] },
            { matrix[0][1], matrix[1][1], matrix[2][1] },
            { matrix[0][2], matrix[1][2], matrix[2][2] },
            { matrix[0][0], matrix[1][1], matrix[2][2] },
            { matrix[2][0], matrix[1][1], matrix[0][2] }
        };

        int rowInt = 0;
        while (rowInt < winningCombinationsVec.size()){
            if (playerStr == winningCombinationsVec[rowInt][0] && 
                playerStr == winningCombinationsVec[rowInt][1] && 
                playerStr == winningCombinationsVec[rowInt][2]
                ){
                return true;
            }
            rowInt++;
        }
        return false;
    };

};

string printToFToString(bool inputToF){
        if (inputToF == 1){
            return "true";
        }
        if (inputToF == 0){
            return "false";
        }
        return "false";
}

int main(){
    Solution solutionX;
    string xPlayerStr = "x";
    string oPlayerStr = "o";
    vector<vector<string > > matrix0 = {
        { "x", "x", "o" },
        { "", "x", "o" },
        { "", "o", "x"}
    };

    bool outputXWonMatrix0ToF = solutionX.ticTacWin(xPlayerStr, matrix0);
    string output1Str = printToFToString(outputXWonMatrix0ToF);
    cout << "X won matrix 0? (Expect true.) " << output1Str << endl;

    bool output2ToF = solutionX.ticTacWin(oPlayerStr, matrix0);
    string output2Str = printToFToString(output2ToF);
    cout << "O won matrix 0? (Expect false.) " << output2Str << endl;

    return 0;
}