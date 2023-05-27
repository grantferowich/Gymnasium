/* 

Rat Path

Started engineering the function on May 26, 2023.


Complexity analysis:
Time complexity: O(2^MN)
Space complexity: O(N)

Given a maze, represented by a matrix of bits (values 0 and 1), a rat must find a path from index [0][0] to [n-1][m-1].
The rat can only travel to the right or down, and can only travel on 0 values. 1 values represent walls.

Input:   [[0, 0, 0, 1],
          [0, 1, 0, 1],
          [0, 1, 0, 0],
          [0, 0, 1, 0]]

Output:  [[0, 0],
          [0, 1],
          [0, 2],
          [1, 2],
          [2, 2],
          [2, 3],
          [3, 3]]

// depth first search
// store coords of successful path in an output accumulator array
// the rat only goes down and to the left (binary decision)
(x + 1, y) and (x, y + 1)
the rat only travels on 0s


base cases: 
arrived at end of the maze
cannot travel to a cell because 1 (path is blocked)
out of bounds

** note: you have to use backtracking like you did in robot paths
*/

const ratPath = (gridArr) => {

    let rowDestinationInt = gridArr.length;
    let colDestinationInt = gridArr[0].length;
    let pathArr = [];
    let visitedMap = new Map();
    

    const traverse = (iInt, jInt) => {
        // destination
        if (iInt === rowDestinationInt && jInt === colDestinationInt){
            pathArr.push([iInt, jInt]);
            return
        }
        // out of bounds
        if (iInt < 0 || iInt >= rowDestinationInt || jInt < 0 || jInt >= colDestinationInt){
            return 
        }

        console.log(`iInt ${iInt}; jInt ${jInt}`);

        if (gridArr[iInt][jInt] === 1){
            return 
        }

        if (gridArr[iInt][jInt] === 0){
            pathArr.push([iInt, jInt]);
            visitedMap.set(`${iInt}_${jInt}`, true);
            traverse(iInt + 1, jInt);
            traverse(iInt, jInt + 1);
            visitedMap.delete(`${iInt}_${jInt}`);
        }
    }

    traverse(0, 0, visitedMap)
    return pathArr
}

/* Tests */

const gridArr1 = [[0, 0, 0, 1],
                  [0, 1, 0, 1],
                  [0, 1, 0, 0],
                  [0, 0, 1, 0]]

const resultArr1 = ratPath(gridArr1);

console.log('Result 1:', resultArr1)

/* Tests results 

Result 1: [
  [ 0, 0 ], [ 1, 0 ],
  [ 2, 0 ], [ 3, 0 ],
  [ 3, 1 ], [ 0, 1 ],
  [ 0, 2 ], [ 1, 2 ],
  [ 2, 2 ], [ 2, 3 ],
  [ 3, 3 ]
]

*/