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

Initial fully exposed board with 3 bombs:
[['', 1, 1, 1, '', '', ''],
['', 1, *, 1, '', '', '',],
['', 2, 2, 2, '', '', ''],
['', 1, *, 1, '', '', ''],
['', 1, 1, 1, '', '', ''],
['', '', '', 1, 1, 1, '']
['', '', '', 1, *, 1, '']]




*/

class Grid{
    constructor(n=10){
        this.n = n;
        // create n x n dimensional board
        this.storage = Array.from({length: this.n}, () => Array.from({length: n}));
    }
}

let grid = new Grid()
console.log(grid.storage)