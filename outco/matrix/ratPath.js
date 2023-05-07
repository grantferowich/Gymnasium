/* 

Rat Path

Successfully tested the function 1/22/23
The function uses backtracking and recursion

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
(x + 1, y) and (y + 1, x)
the rat only travels on 0s


base cases: 
arrived at end of the maze
cannot travel to a cell because 1 (path is blocked)
out of bounds

** note: you have to use backtracking like you did in robot paths
*/

const ratPath = (matrix) => {

    let xTarget = matrix.length;
    let yTarget = matrix[0].length;
    let path = [];
    let output;

    const travel = (row, col) => {
        
        if (row < 0 || col < 0 || row >= xTarget || col >= yTarget){
            return;
        }

        if (row === xTarget - 1 && col === yTarget - 1){
            path.push([row, col]);
            output = [...path];
            return;
        }

        if (matrix[row][col] === 0){
            path.push([row,col]);
            matrix[row][col] = 1;
            travel(row + 1, col);
            travel(row, col + 1);
            path.pop();
        }

    }

    travel(0,0);
    return output === undefined ? [ -1 , -1 ] : output
}

/* Tests  */

const input1Arr = [[0, 0, 0, 1],
                [0, 1, 0, 1],
                [0, 1, 0, 0],
                [0, 0, 1, 0]]   

const result1Arr = ratPath(input1Arr);

const input2Arr = [[0, 0, 0, 1],
                   [0, 1, 0, 1],
                   [0, 1, 1, 1],
                   [0, 0, 1, 0]]

const result2Arr = ratPath(input2Arr);

const input3Arr = [[0, 0, 0, 0]]

const result3Arr = ratPath(input3Arr);

const input4Arr = [[ 0 ],
                   [ 0 ], 
                   [ 0 ], 
                   [ 0 ]]

const result4Arr = ratPath(input4Arr);

console.log(result1Arr)
console.log(result2Arr)
console.log(result3Arr)
console.log(result4Arr)

/* Test Results 

Result 1: [[ 0, 0 ], 
           [ 0, 1 ],
           [ 0, 2 ],
           [ 1, 2 ],
           [ 2, 2 ],
           [ 2, 3 ],
           [ 3, 3 ]]

Result 2: [-1, -1]

Result 3: [[ 0, 0 ],
           [ 0, 1 ],
           [ 0, 2 ],
           [ 0, 3 ]]

Result 4: [[ 0, 0 ], 
           [ 1, 0 ], 
           [ 2, 0 ],
           [ 3, 0 ]]

*/