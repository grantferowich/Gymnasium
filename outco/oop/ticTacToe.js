/* 
Create a game called Tic Tac Toe.

Class TicTacToe
    - currentPlayer 
    - number of rounds (the max number is the number of spaces on the board, 9)
    - a new board

Class Board
    - storage of places players can place Xs and 0s



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
}
class TicTacToe{
    constructor(){
        this.currentPlayer = 'X';
        this.numberOfRounds = 9;
        this.board = new Board()
    }
}