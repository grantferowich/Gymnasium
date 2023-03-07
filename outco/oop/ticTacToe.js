/* 
Create a game called Tic Tac Toe.

Class TicTacToe
    - currentPlayer 
    - number of rounds (the max number is the number of spaces on the board, 9)
    - a new board




    |-----------------------------|
    | class Board                 |
    |-----------------------------|
    |- this.storage               |
    |-----------------------------|
    |- printBoard()               |
    |- canPlacePiece(row,col)     |
    |- placePiece(row,col,player) |
    |- checkWinCondition(player)  |
    |- checkDiagonals(player)     |
    |- checkRows(player)          |
    |- checkColumns(player)       |
    |-----------------------------|
*/

class Board{
    constructor(){
        this.storage =[[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']]
    }

    printBoard(){
        process.stdout.write(' 0 1 2\n')
        process.stdout.write(' _ _ _\n')
        this.storage.forEach((line, row) => {
            process.stdout.write(`${row}`)
        })
    }
}
class TicTacToe{
    constructor(){
        this.currentPlayer = 'X';
        this.numberOfRounds = 9;
        this.board = new Board()
    }



    runGame(){
        process.stdout.write("Let's play Tic Tac Toe \n\n")
        process.stdout.write("To play Tic Tac Toe, input two numbers: row column \n ")
        process.stdout.write("For example: 0 0 \n\n")
        // new method

    }
}

// Instantiate class 
let game = new TicTacToe()

// Run the game
game.runGame()