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
        this.storage = [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']]
    }

    printBoard(){
        
        process.stdout.write(' 0 1 2\n')
        process.stdout.write('  _ _ _\n')
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

    checkWinCondition(player){
        if (this.checkColumns(player) || this.checkDiagonals(player) || this.checkRows(player)){
            return true
        }
        return false
    }
    
    checkRows(player){
        for (let row = 0; row < this.storage.length; row++){
            if (this.storage[row][0] === player && this.storage[row][1] === player && this.storage[row][2] === player){
                return true
            }
        }
        return false;
    }
    
    checkColumns(player){
       for (let col = 0; col < this.storage[0].length; col++){
            if (this.storage[0][col] === player && this.storage[1][col] === player && this.storage[2][col] === player){
                return true
            }
       }
       return false;
    }

    checkDiagonals(player){
        // top left to bottom right
        if (this.storage[0][0] === player && this.storage[1][1] === player && this.storage[2][2] === player){
            return true;
        }
        // bottom left to top right
        if (this.storage[0][2] === player && this.storage[1][1] === player && this.storage[2][0] === player){
            return true;
        }
        return false;
    }
}

class Game{
    constructor(){
        this.currentPlayer = 'X';
        this.numberOfRounds = 9;
        this.board = new Board()
    }

    printCurrentPlayersTurn(){
        process.stdout.write(`It's ${this.currentPlayer}'s turn \n\n`)
    }

    printCurrentMove(row,col){
        process.stdout.write(`\nAn ${this.currentPlayer} was placed at row ${row}, column ${col}.`)
    }

    declareWinner(player){
        process.stdout.write(`\n${player} is the winner! \n`);
        process.exit();
    }

    decrementRounds(){
        this.numberOfRounds--;
    }

    declareTie(){
        process.stdout.write(`\nCat's game!`);
        process.exit();
    }

    switchPlayer(){
        if (this.currentPlayer === 'X'){
            this.currentPlayer = 'O';
        } else {
            this.currentPlayer = 'X';
        }
    }

    printCurrentPlayersTurn(){
        process.stdout.write(`It is now ${this.currentPlayer}'s turn.`)
    }

    printInvalidMove(){
        process.stdout.write('Invalid move. Give it another shot.')
    }

    playRound(row, col){
        // validate data
        if (this.board.canPlacePiece(row,col)){
            // update data
            this.board.placePiece(row, col, this.currentPlayer);
            // view
            this.board.printBoard();
            // view
            this.printCurrentMove(row, col)
            // check termination status
            let detectWinner = this.board.checkWinCondition(this.currentPlayer)
           
            if (detectWinner){
                this.declareWinner(this.currentPlayer)
            }
            // update state
            this.decrementRounds()
            if (!detectWinner && this.numberOfRounds <= 0){
                this.declareTie();
            }
            // change state again
            this.switchPlayer();
            // view stuff about state
            this.printCurrentPlayersTurn();
        } else {
            this.printInvalidMove();
        }
    }

    runGame(){
        process.stdout.write("Let's play Tic Tac Toe \n\n")
        process.stdout.write("To play Tic Tac Toe, input two numbers: row column \n ")
        process.stdout.write("For example: 0 0 \n\n")
        this.board.printBoard()
        this.printCurrentPlayersTurn()

        process.stdin.on("data", (data) => {
            let moves = data.toString().trim().split(" ")
            // ensure the data passed in from console is machine-readable
            let row = parseInt(moves[0])
            let col = parseInt(moves[1])

            process.stdout.write('\n');
            // call the gameplay function
            this.playRound(row, col)
        }) 
    }
}

// Instantiate class 
let game = new Game()

// Run the game
game.runGame()