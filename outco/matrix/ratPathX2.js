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
(x + 1, y) and (y + 1, x)
the rat only travels on 0s


base cases: 
arrived at end of the maze
cannot travel to a cell because 1 (path is blocked)
out of bounds

** note: you have to use backtracking like you did in robot paths
*/