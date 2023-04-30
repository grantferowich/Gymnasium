/*
 *  Homework - Dynamic Programming
 *
 *  Instructions: Dynamic programming takes a lot of practice to recognize as
 *                well as develop algorithms. Thus we will be working on a few
 *                different problems using dynammic programming.
 *
 *                As a reminder, here are the two dynamic programing approaches:
 *
 *      			(1) Overlapping subproblems - Memoization
 *      				  Recursion sometimes call subproblems repeatedly. These repeated
 *                calls lead to inefficient computations and an exponential time
 *                complexity.
 *
 *      			(2) Optimal substructure - Tabulation
 *      					The solution of a larger problem can be solved using
 *      					solutions of its subproblems.
 *
 *  Problem: Lattice Paths (Dynamic Programming Approach)
 *
 *  Prompt:    Count the number of unique paths to travel from the top left
 *             to the bottom right of a lattice of squares.
 *
 *             NOTE: You are traveling along the **EDGES** of the lattice
 *
 *  Input:     An integer N (which is the width of the lattice)
 *             An integer M (which is the height of the lattice)
 *
 *  Output:    An integer (which represents the number of unique paths)
 *
 *  Example:   input: 2
 *
 *             (2 x 3 lattice of squares)
 *              __ __ __
 *             |__|__|__|
 *             |__|__|__|
 *
 *             output: 10 (number of unique paths from top left corner to bottom
 *                     right)
 *
 *             Diagram:
 *
 *             1__1__1__1
 *             |  |  |  |
 *             1__2__3__4
 *             |  |  |  |
 *             1__3__6__10
 *
 *  Notes:     What is the time and auxilliary space complexity of your solution?
 *
 *             When moving through the lattice, you can only move either down or
 *             to the right.
 *
 *             You did this problem before with recursion. Try implementing it
 *             now with dynamic programming!
 *
 *  Resources:
 *    1: https://projecteuler.net/problem=15
 *    2: https://en.wikipedia.org/wiki/Lattice_path
 *
 * 
 *  input given as rows, cols 
 * 
 *          rows (-->) 
 *         
 * cols   1 _ 1 _ 1 _ 1
 *  |       
 *  |     1 _ 2 _ 3 _ 4 
 *  v      
 *        1 _ 3 _ 6 _ 10
 *       
 * 
 * 1. Identify factors - row, col
 *    
 * 2. Create a table - see above
 *        what is the smallest version? 0,0.
 *        The starting case is 0,0 where the number of ways to reach 0,0 is 1.
 *        what is the eventual version? 2 rows, 3 cols.
 *        The eventual case are the given coordinates rows x, cols y
 *    
 * 3. Determine formula - 
 *        for coordinates a,b
 *        sum a-1 and b-1 to produce the number of ways to reach a,b
 * 
 * 4. Create the foundation. Create the first row -  
 *       For row 0 -- fill with 1s. specifically, fill n+1 columns with 1s. 
 * 
 * 5. Fill out the rest of the table.
 *        Loop over 0 to column times (0 3)
 *               
 *            paths(0,0) = 1
 *            paths(0,1) = 1
 *            paths(1,0) = 1 = paths(0,0) + paths(0,-1) = 1 + 0
 *            paths(2,0) = 1 
 *            paths(0,2) = 1
 *            paths(0,3) = 1
 *            paths(1,1) = paths(0,1) + paths(1,0) = 1 + 1 = 2
 *            paths(2,1) = paths(0,2) + paths(1,1) = 1 + 2 = 3
 *            paths(1,2) = paths(1,1) + paths(2,0) = 2 + 1 = 3
 *            paths(2,2) = paths(2,1) + paths(1,2) = 3 + 3 = 6
 * 
 * Base Case: Out of bounds, already visited
 * Destination: row and col === rows and cols
 * 
 */

// const latticePaths = (rows, cols) => {
//     let cache = {}

//     const traverse  = (row, col) => {
//         let key = row.toString() + "_" + col.toString()
        
        
//          // destination
//          if (row === 0 && col === 0){
//             return 1 
//         }

//         // oob
//         if (row < 0 || col < 0 ){
//             return 0 
//         }

//         if (cache[key]){
//             return cache[key]
//         }

//         let up = traverse(row - 1, col)
//         let left = traverse(row, col - 1)
//         cache[key] = up + left
//         return cache[key]

//     }
//     return traverse(rows,cols)
// }

/* TESTS */

const rows1Int = 3
const cols1Int = 2

const result1Int = latticePaths(2, 3)

console.log(`Result 1: ${rows1Int}`)

/* TEST RESULTS */