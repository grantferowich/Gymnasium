// Suppose a fox moves 2, 3, or 5 steps every time the fox jumps.
// Solve for the number of ways the fox can reach the Nth step, where N
// is an input parameter.

// Input: number, array
// Output: max number of unique paths
/**
 *                              (y)
 *                      # of steps to climb
 *   (x)               0    1   2   3   4   5   6   7   8   9   10
 * # of steps      __________________________________________________       
 * per jump     2 |   1    0   1    0   1   0    1   0   1   0    1
 *              3 |   1    0   1    1   1   2    2   3   4   5    7
 *              5 |   1    0   1    1   1   3    2   5   6   8    14
 *    
 *                                                             for y = 10
 *                                                  climbStairs(x - 3, y) + climbStairs(x - 4, y) +  
 *      
 * climbStairs(10) = 14 = climbStairs(9) + climbStairs(8)
 * climbStarits(9) = 8 = 
 * 
 * to solve for ()
 * 
 * 
 */

const climbStairs = (n, jumps) => {
    let steps = new Array(n+1).fill(1)


}

climbStairs(10,[2,3,5])