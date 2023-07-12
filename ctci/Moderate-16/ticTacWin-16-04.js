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
right vertical: matrix[0][2], matrix[1][2], matrix[2][2]
Right to left diagonal: matrix[0][0], matrix[1][1], matrix[2][2]
left to right diagonal: matrix[2][0], matrix[1][1], matrix[0][2]

// loop over the array of winning combinations
// if each element in the combination is equal to the player symbol str
// return true

outside the loop return false
*/

const ticTacWin = (playerSymbolStr, matrix) => {
    if (playerSymbolStr !== "x" && playerSymbolStr !== "o"){
        return "invalid player symbol"
    }
    if (matrix.length === 0){
        return "invalid game board"
    }
    let winningMovesArr = [
        [matrix[0][0], matrix[0][1], matrix[0][2]],
        [matrix[1][0], matrix[1][1], matrix[1][2]],
        [matrix[2][0], matrix[2][1], matrix[2][2]],
        [matrix[0][0], matrix[1][0], matrix[2][0]],
        [matrix[0][1], matrix[1][1], matrix[2][1]],
        [matrix[0][2], matrix[1][2], matrix[2][2]],
        [matrix[0][0], matrix[1][1], matrix[2][2]],
        [matrix[2][0], matrix[1][1], matrix[0][2]]
    ]
    let rowInt = 0;
    while (rowInt < winningMovesArr.length){
            if (playerSymbolStr === winningMovesArr[rowInt][0] && 
                playerSymbolStr === winningMovesArr[rowInt][1] && 
                playerSymbolStr === winningMovesArr[rowInt][2]){
                    return true
            }
        rowInt++
    }
    return false
}

/* TESTS */

const playerSymbolStr1 = "x";
const matrix1 = [["x", "x", "x"],
                 ["", "o", "o" ],
                 ["", "", ""   ]];
const playerSymbolStr2 = "o"
const playerSymbolStr3 = "23"




const result1ToF = ticTacWin(playerSymbolStr1, matrix1);
console.log('Result 1: Player X won', result1ToF);

const result2ToF = ticTacWin(playerSymbolStr2, matrix1);
console.log('Result 2: Player X won', result2ToF);


const result3ToF = ticTacWin(playerSymbolStr3, matrix1);
console.log('Result 3: Player X won', result3ToF);

/* Test results 

Result 1: Player X won true
Result 2: Player X won false
Result 3: Player X won invalid player symbol

*/