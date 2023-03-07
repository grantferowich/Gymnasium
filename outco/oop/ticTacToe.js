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
    |- checkDiagonals(player)     | x
    |- checkRows(player)          | x
    |- checkColumns(player)       | x
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
            line.forEach((square) => {
                process.stdout.write(`|${square}`)
            })
            process.stdout.write('|')
            process.stdout.write(" - - -\n")
        })
        process.stdout.write('\n');
    }

    canPlacePiece(row, col){
        if (isNaN(row) || isNaN(col) || row > 2 || row < 0
        || col > 2 || col < 0
        || this.storage[row][col] === "X"
        || this.storage[row][col] === "O"){
            return false;
        }
        return true;
    }

    placePiece(row, col, player){
        this.storage[row][col] = player;
    }

    checkRows(player){

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
        this.board.printBoard()
    }

    checkWinCondition(player){
        if (this.checkColumns || this.checkDiagonals || this.checkRows){
            return true
        }
        return false
    }
    
    checkRows(player){
        for (let row = 0; row < this.board.length; row++){
            if (this.board[row][0] === player && this.board[row][1] === player && this.board[row][2] === player){
                return true
            }
        }
        return false;
    }
    
    checkColumns(player){
       for (let col = 0; col < this.board.length; col++){
            if (this.board[0][col] === player && this.board[1][col] === player && this.board[2][col] === player){
                return true
            }
       }
       return false;
    }

    checkDiagonals(player){
        // top left to bottom right
        if (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2]){
            return true;
        }
        // bottom left to top right
        if (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0]){
            return true;
        }
        return false;
    }
}

// Instantiate class 
let game = new TicTacToe()

// Run the game
game.runGame()