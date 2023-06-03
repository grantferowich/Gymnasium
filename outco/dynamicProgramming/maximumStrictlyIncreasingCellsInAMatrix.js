/* 2713. Maximum Strictly Increasing Cells in a Matrix

Started on June 2, 2023 at 4:34pm.

Hard
Given a 1-indexed m x n integer matrix mat, 
you can select any cell in the matrix as your starting cell.

From the starting cell, you can move to any other cell 
in the same row or column, but only if the value of the 
destination cell is strictly greater than the value of 
the current cell. You can repeat this process as many 
times as possible, moving from cell to cell until you 
can no longer make any moves.

Your task is to find the maximum number of cells 
that you can visit in the matrix by starting from some cell.

Return an integer denoting the maximum number
of cells that can be visited.

Example 1:
Input: mat = [[3,1],
              [3,4]]
Output: 2
Explanation: The image shows how we can 
visit 2 cells starting from row 1, column 2.
It can be shown that we cannot visit more 
than 2 cells no matter where we start from, 
so the answer is 2.  

Why must you go find a strictly increasing value? 
Because if you could travel to equal values then 
there would be infinite loops, there would not 
be a terminating condition. 

Regarding dynamic programming:

1, recall optimal substructure
2, recall overlapping subproblems

Run time: O((M*N), max(M*N))
O(M^2*N), if M >N 
*/

const maximumStrictlyIncreasingCellsInAMatrix = (matrixArr) => {
    
}