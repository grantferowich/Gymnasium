/* 
Minesweeper

Design and implment a text-based Minesweeper game.
Minesweeper is the classic single-player, game where an N x N 
grid has B mines (or bombs) hidden across the grid. The remaining cells are either
blank of have a number behind them. The numbers reflect the number of bombs
in the surrounding 8 cells. The user then uncovers a cell.
If it is a bomb, the player loses. If it is a number, the number is exposed. 
If it is a blank cell, this cell and all adjacent blank cells (up to and including
the surrounding numeric cells) are exposed. The player wins when all 
non-bomb cells are exposed. The player can also flag certain places as 
potential bombs. This doesn't affect game play, other than to block the user
from accidentally clicking a cell that is thought to have a bomb. 

State 0. Null State.

[['', '', '', '', '', '', ''],
['', '', '', '', '', '', '',],
['', '', '', '', '', '', ''],
['', '', '', '', '', '', ''],
['', '', '', '', '', '', ''],
['', '', '', '', '', '', '']
['', '', '', '', '', '', '']]


Initial fully exposed board with 3 bombs:
State 1. Initial state:
[['', 1, 1, 1, '', '', ''],
['', 1, *, 1, '', '', '',],
['', 2, 2, 2, '', '', ''],
['', 1, *, 1, '', '', ''],
['', 1, 1, 1, '', '', ''],
['', '', '', 1, 1, 1, '']
['', '', '', 1, *, 1, '']]

State 2: Visual State at start of game.

[['?', '?', '?', '?', '?', '?', '?'],
['?', '?', '?', '?', '?', '?', '?',],
['?', '?', '?', '?', '?', '?', '?'],
['?', '?', '?', '?', '?', '?', '?'],
['?', '?', '?', '?', '?', '?', '?'],
['?', '?', '?', '?', '?', '?', '?']
['?', '?', '?', '?', '?', '?', '?']]

State 3: User click on row 1, column 0

[['', 1, '?', '?', '?', '?', '?'],
['', 1, '?', '?', '?', '?', '?',],
['', 2, '?', '?', '?', '?', '?'],
['', 1, '?', '?', '?', '?', '?'],
['', 1, 1, 1, '?', '?', '?'],
['', '', '', 1, '?', '?', '?']
['', '', '', 1, '?', '?', '?']]

State 4: The user wins when everything other than the bombs has been exposed.


## The Grid Class: Functional Requirements
The Grid must be N x N dimensions.
The Grid must have B bombs. 
The Grid must place the bombs randomly throughout the n x n array.
There Grid must never place more than one bomb in a row.
The Grid must place a number in each cell indicating how many bombs are located in 
the surrounding 8 cells, or, if there are 0 bombs in the surrounding 8 cells, 
the Grid must place a '' in the cell. 


*/

class Grid{
    constructor(n=10, b=3){
        this.n = n;
        // create n x n dimensional board
        this.storage = Array.from({length: this.n}, () => Array.from({length: n}, () => ''));
    }


    print(){
        let x = 0
        while (x < this.storage.length){
            console.log(this.storage[x])
            x++
        }
    }
}

let grid = new Grid()
grid.print()