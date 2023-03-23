/* 
Paint Fill

CTCI 8.10

Successfully tested the function 03/23/23.

Implement the "paint fill" function that one might see on many image editing programs.
That is, given a screen (represented by a two-dimensional array of colors), a point, and a new color,
fill in the surrounding area until the color changes from the original color.

inputs: gridArr, rowInt, colInt, newColorStr
output: gridArr

*/

const paintFill = (gridArr, rowInt, colInt, newColorStr) => {

    const traverse = (rInt, cInt) => {
        if (rInt < 0 || rInt >= gridArr.length || cInt < 0 || cInt >= gridArr[0].length){
            return
        }

        // already updated the color
        if (gridArr[rInt][cInt] === newColorStr) {
            return
        }

        gridArr[rInt][cInt] = newColorStr;
        traverse(rInt - 1, cInt)
        traverse(rInt, cInt - 1)
        traverse(rInt + 1, cInt)
        traverse(rInt, cInt + 1)
    }

    traverse(rowInt, colInt, newColorStr)
    return gridArr
}

/* TESTS */
const greenGridArr = new Array(10).fill('').map(() => new Array(10).fill('green'))
const blackGridArr = new Array(10).fill('').map(() => new Array(10).fill('black'))

// green grid -> gold grid
const test1 = paintFill(greenGridArr, 1, 1, 'gold')
console.log('Test 1:', test1)
// Expect all cells to be gold ✓

// black grid -> silver grid
let test2 = paintFill(blackGridArr, 1, 1, 'silver')
console.log('Test 2:', test2)
// expect all cells to be silver ✓