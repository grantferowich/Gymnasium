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
    constructor(n=5, b=3){
        this.nInt = n;
        this.bInt = b;
        // create n x n dimensional board
        this.storageArr = Array.from({length: this.nInt}, () => Array.from({length: this.nInt}, () => ''));
        this.bombCoordinatesArr = [];
    }

    // view the state
    printArr(){
        let xInt = 0;
        while (xInt < this.storageArr.length){
            console.log(this.storageArr[xInt])
            xInt++
        }
    }

    // helper method for updating class property, this.bombCoordinatesArr
    generateRandomCoordinateInt = () =>{
        return parseInt(Math.random() * this.nInt);
    }

    // helper method for updateing class property, this.bombCoordinatesArr
    convertMapToCoordinatesArr(bombMap){
        for (let [kInt,v] of bombMap){
            let coordinatesPair0Int = parseInt(kInt.split(',')[0])
            let coordinatesPair1Int = parseInt(kInt.split(',')[1])
            this.bombCoordinatesArr.push([coordinatesPair0Int, coordinatesPair1Int])
        }
    }
    
    // updates class property, this.bombCoordinatesArr
    generateBombCoordinatesArr(){
        let bombMap = new Map()
        let bombCountInt = 0
        // populate bombMap 
        while(bombCountInt < this.bInt){
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

    // utility method for updating class property, this.storageArr
    updateCellValue(row, col, val){
        return this.storageArr[row][col] = val;
    }
    
    // utility method for reading class property, this.storageArr
    getCellValue(row, col){
        // console.log(`row ${row}, col ${col}`)
        return this.storageArr[row][col]
    }
    
    // update class property, storageArr
    setBombsOnGridArr(){
        let x = 0;
        while (x < this.bombCoordinatesArr.length){
            let row = this.bombCoordinatesArr[x][0]
            let col = this.bombCoordinatesArr[x][1]
            this.updateCellValue(row, col, "*")
            x++
        }
    }

    // utility method for updating storageArr
    getBombCountOfCellInt(rowInt, colInt){
        // down, right, up, left, bottom right diag, bottom left diag, top left, top right
        let coordinatesArr = [[1, 0], [0, 1], [-1, 0], [0, -1], [ 1, 1], [1, -1], [-1, -1,], [-1, 1]];
        let countInt = 0;
        let x = 0;
        while (x < coordinatesArr.length){
            let rowCoordinateToCheckInt = rowInt + coordinatesArr[x][0];
            let colCoordinateToCheckInt = colInt + coordinatesArr[x][1];
            if (row >= 0 && row && this.nInt && col >= 0 && col < this.nInt){
                let cellValueToCheckStr = this.getCellValue(rowCoordinateToCheckInt, colCoordinateToCheckInt);
                if (cellValueToCheckStr === '*'){
                    countInt++;
                }
            }
            x++
        }
        return countInt
    }

    // calculate how many bombs are in the 8 spaces around a cell
    // iterate over each cell
    // if cell is NOT a cell where there are bombs
    // let num = getBombCountOfCell(row, col)
    // updateCellValue(row, col, num)
    setNumbersOnGrid(){
        for (let row = 0; row < this.nInt; row++){
            for (let col = 0; col < this.nInt; col++){
                let val = this.getBombCountOfCell(row, col)
                this.updateCellValue(row, col, val)
            }
        }
    }

}

let grid = new Grid(10, 3)
grid.generateBombCoordinates()
grid.setBombsOnGrid()
// grid.print()
grid.setNumbersOnGrid()
grid.print()
// console.log(grid.generateBombCoordinates())
// grid.setBombsOnGrid()