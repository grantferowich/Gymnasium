// Suppose a fox moves 2, 3, or 5 steps every time the fox jumps.
// Solve for the number of ways the fox can reach the Nth step, where N
// is an input parameter.

// Input: number, array
// Output: max number of unique paths
/**
 *                      0          build
 *              /       \            \
 *             2        3             5 
 *         /  /  /     \ \ \        /  \  \    
 *        4 5 7        5 6 8       7   8  9
 *   / / / /  
 *  6 7 9
 * 
 * 
 * 
 * 
 *                              (y)
 *                      # of steps to climb
 *   (x)               0    1   2   3   4   5   6   7   8   9   10
 * # of steps      __________________________________________________       
 * per jump     2 |   1    0   1    0   1   0    1   0   1   0    1
 *              3 |   1    0   1    1   1   2    2   3   4   5    7
 *              5 |   1    0   1    1   1   3    2   5   6   8    14
 *    
 *                                                             
 * what is the formula for climbStairs(x) defined in terms of climbstairs(x-k, y) + climbStairs(x, y-j)?
 * 
 *      
 * climbStairs(10) = 14 = climbStairs(9) + climbStairs(8) // climbStairs(1,10) + 
 * climbStarits(9) = 8 = 
 * 
 * to solve for ()
 * 
 * 
 */

// The function with tabulation was not successfully tested as of 12/12/22. 
// A technical coaching session with Outco was requested 12/12/22 to cover this problem. 

// questions: How do you ascertain stepSum += steps[i-jumpSize] from the above table? 




const climbStairs = (n, jumps) => {
  let ways = 0;
    const traverse = (build) =>{
        if (build > n){
            return 0;
        }
        if (build === n){
            ways += 1;
            return
        }

        traverse(build + jumps[0])
        traverse(build + jumps[1])
        traverse(build + jumps[2])
    }
  traverse(0)
  return ways;
}

console.log(climbStairs(10,[2,3,5])) // 14