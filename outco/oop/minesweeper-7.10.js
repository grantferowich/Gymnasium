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

## class methods
generateBombCoordinates()
        - basically, we want to generate three unique coordinate pairs
        - generate the coords as a string and set the string as a key in a bombMap<string, ToF>
        - loop from 0 to b -1
        - generate two random numbers between 0 and n-1
        - concat the numbers to create a string
        - if the bombMap does not contain the string, add the string to the map

*/

class Grid{
    constructor(n=10, b=3){
        this.n = n;
        this.b = b;
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

    generateRandomCoordinateInt = () =>{
        return parseInt(Math.random() * 10);
    }

    convertMapToCoordinatesArr(bombMap){
        let bombCoordinatesArr = [];
        for (let [k,v] of bombMap){
            let coordinatesPair0Int = parseInt(k.split(',')[0])
            let coordinatesPair1Int = parseInt(k.split(',')[1])
            bombCoordinatesArr.push([coordinatesPair0Int, coordinatesPair1Int])
        }
        return bombCoordinatesArr;
    }
    
    generateBombCoordinates(){
        let bombMap = new Map()
        let bombCountInt = 0
        // populate bombMap 
        while(bombCountInt < this.b){
            const rowInt = this.generateRandomCoordinateInt()
            const colInt = this.generateRandomCoordinateInt()
            let coordinatePairStr = rowInt.toString() + ',' + colInt.toString()
            if (!bombMap.has(coordinatePairStr)){
                // add new coords to map
                bombMap.set(coordinatePairStr, true)
                bombCountInt++
            }
        }
        // get an array of arrays out of the bombMap
        return this.convertMapToCoordinatesArr(bombMap)
    }

    // setBombsOnGrid(){
    //     const coordinatesArr = this.generateBombCoordinates
    //     // console.log('coordinatesArr', coordinatesArr)
    //     // for (let row = 0; row < this.n; row++){
    //     //     for (let col = 0; col < this.n; col++){

    //     //     }
    //     // }
    // }
}

let grid = new Grid(10, 3)
// grid.print()
console.log(grid.generateBombCoordinates()
// grid.setBombsOnGrid()