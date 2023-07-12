/* 
Tic Tac Win
CTCI 16.04

Design an algorithm to figure out if someone has 
won a game of Tic Tac Toe or not.

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
right vertical: matrix[]
*/

const ticTacWin = (playerSymbolStr, matrix) => {
    if (matrix.length === 0){
        return "invalid game board"
    }


}

/* TESTS */

const playerSymbolStr1 = "x";
const matrix1 = [["x", "x", "x"],
                ["", "o", "o" ],
                ["", "", ""   ]];
const result1ToF = ticTacWin(playerSymbolStr1, matrix1);
console.log('Result 1: Player X won', result1ToF);
