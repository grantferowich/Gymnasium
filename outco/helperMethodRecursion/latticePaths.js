/*
LATTICE PATHS

USING PURE RECURSION COUNT THE NUMBER OF UNIQUE PATHS
TO TRAVEL FROM THE TOP LEFT CORNER TO THE BOTTOM RIGHT CORNER
OF A LATTICE OF M X N SQUARES VIA VERTICES. WHEN
MOVING THROUGH THE LATTICE, ONE CAN ONLY TRAVEL
TO THE ADJACENT CORNER ON THE RIGHT OR DOWN. 

INPUT: M, INTEGER (NUMBER OF ROWS OF SQUARES) 
INPUT: N, INTEGER (NUMBER OF COLUMNS)
OUTPUT: INTEGER, NUMBER OF UNIQUE PATHS FROM 0,0 TO M, N

CONSTRAINTS:


EDGE CASES: 



TEST CASES: 

1. (2,3)

0 __1__2__3
1|__|__|__|
2|__|__|__|

EXPECTED OUTPUT: 10





*/


// The first lattice paths function was successfully tested on 12/10/22.
// This function has a runtime of O(2^M+N)


// solution 1
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

// console.log(latticePaths(2,3)) // 10
// console.log(latticePaths(20,20)) // function takes a really, really long time


