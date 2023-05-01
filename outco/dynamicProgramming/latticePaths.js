/*
Lattice Paths

Successfully tested the function 1/18/23.

USING PURE RECURSION COUNT THE NUMBER OF UNIQUE PATHS
TO TRAVEL FROM THE TOP LEFT CORNER TO THE BOTTOM RIGHT CORNER
OF A LATTICE OF M X N SQUARES VIA VERTICES. WHEN
MOVING THROUGH THE LATTICE, ONE CAN ONLY TRAVEL
TO THE ADJACENT CORNER ON THE RIGHT OR DOWN. 

INPUT: M, INTEGER (NUMBER OF ROWS OF SQUARES) 
INPUT: N, INTEGER (NUMBER OF COLUMNS)
OUTPUT: INTEGER, NUMBER OF UNIQUE PATHS FROM 0,0 TO M, N

Constraints
Runtime: O(2^M+N)
Aux: O(2^M+N) because the calls must be pushed to a function call stack. 

EDGE CASES: 

TEST CASES: 

1. (2,3)

0 __1__2__3
1|__|__|__|
2|__|__|__|

Expected Output: 10

The first lattice paths function was successfully tested on 12/10/22.
This function has a runtime of O(2^M+N)
*/

const { performance } = require("perf_hooks");
var t0 = performance.now();

const latticePaths = (row, col) => {
    // two base cases
    if (row < 0 || col < 0) {
        return 0;
    }
    if (row === 0 && col === 0 ){
        return 1; 
    }
    //recursive calls 
    let up = latticePaths(row - 1, col);
    let left = latticePaths(row, col - 1);
    return up + left;
}

console.log(latticePaths(2,3)) // 10
console.log(latticePaths(10,10)) // 184756 
console.log(latticePaths(15,15)) // 155117520 
// calling these three functions takes 4475.27 milliseconds. 

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");