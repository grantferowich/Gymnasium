var t0 = performance.now();
// Successfully tested the function 1/18/23.
// given an x,y matrix size return the number of unique paths from the top 
// left of the matrix at 0,0 to x,y.

// latticePathsWithTabulation(2,3) = 10

// Use tabulation.
/**
 * 5 Steps of Tabulation
 * 1. Identify factors
 * 2. Create a table with incrementally increasing factors
 *      --> what is the smallest version?
 *      --> what is the eventual version?
 * 3. Determine formula.
 * 4. Create a foundation by filling out the first row.
 * 5. Fill out the rest of the table.
 * 
 * 
 * 
 * Input: (x,y) coordinates representing the row size and column size
 * Output: the number of unique paths from the 0,0 origin to x,y
 * 
 * Test case = (2,3) 
 * 
 * Diagram:
 *      0   1   2   3
 *    0 1   1   1   1
 * 
 *    1 1   2   3   4
 *  
 *    2 1   3   6   10
 * 
 * to find the number of unique paths from 0,0 to a,b: 
 * latticePaths(a,b) = latticePaths(a-1,b) + latticePaths(a,b-1)
 * */ 

function latticePathsWithTabulation(x, y) {
    // create foundation
    let table = new Array(x+1).fill(1);
    // console.log('table', table)
    // i is tracking the state of the y-axis (cols) or "table length"
    for (let i = 0; i < y; i++){
      // j is tracking the state of the x-axis (rows) or "height"
      for (let j = 0; j < x + 1; j++){
        if (j > 0)
          table[j] = table[j] + table[j-1];
      }
    }
    return table[x]
}

console.log(latticePathsWithTabulation(2,3)) // 10
console.log(latticePathsWithTabulation(10,10)) // 184756
console.log(latticePathsWithTabulation(15,15)) // 155117520 // this takes a really, really long time w/o tabulation or memoization
// Call to latticePathsWithTabulation took 3.0778751373291016 milliseconds.
var t1 = performance.now();
console.log("Call to latticePathsWithTabulation took " + (t1 - t0) + " milliseconds.");