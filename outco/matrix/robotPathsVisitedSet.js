/* 
*Robot Paths With A Visited Set*

Successfully tested the function 1/15/23.

The main differences between RobotPathsToggle.js and RobotPathsVisitedSet.js
consists in how the function tracks whether or not a position in the matrix has been visited.
RobotPathsVisitedSet(x) instantiates a set data structure and inserts values into the data structure.
RobotPathsToggle(x) manipulates the values of the matrix passed as a parameter into the function. 
RobotPathsVisitedSet(x) and RobotPathsToggle(x) had runtimes of 31,264.89 milliseconds and 3,979.51 milliseconds, respectively,
running the same three inputs.

The implementation of backtracking utilizing a set checks checks whether the set has the key to determine a position in the matrix 
that has already been visited. 
The implementation inserts the key into the set and then deletes the key from the set when the recursive calls have completed.

--> the visited check calls the set's has function.
--> instead of toggling a value to 1, call the set's add function to insert the key.
--> insert of toggling a value back to 0, call the set's delete function with the key passed in as an input parameter.
Complexity Analysis 
Time Complexity: O(4^N*M)
Space Complexity: O(N)
*/
const { performance } = require("perf_hooks");

var t0 = performance.now();

const robotPathsVisitedSet = (matrix) => {
    let result = 0;
    let visited = new Set();
    //base cases: 
        // oob
        // already visited
        // reach destination
    let totalColumns = matrix[0].length - 1;
    let totalRows = matrix.length  - 1;
    const traverse = (row, col) => {

        let key = row.toString() + "_" + col.toString();

        if (row < 0 || col < 0 || col > matrix[0].length - 1 || row > matrix.length - 1){
            // out of bounds
            return;
        }

        if (visited.has(key)){
            //already visitedd
            return;
        }

        let destination = totalRows.toString() + "_" + totalColumns.toString();
        if (key === destination){
            result++;
            return;
        }
        
        //toggle for tracking visited 
        visited.add(key)
        traverse(row+1,col);
        traverse(row-1,col);
        traverse(row, col-1);
        traverse(row, col+1);
        // toggle back
        visited.delete(key);
    }
    traverse(0,0)
    return result;
}

console.log(robotPathsVisitedSet([[ 0, 0, 0],[ 0, 0, 0]]));

console.log(robotPathsVisitedSet( [[ 0, 0, 0, 0], [ 0, 0, 0, 0], [ 0, 0, 0, 0]]))

console.log(robotPathsVisitedSet([[ 0, 0, 0, 0, 0, 0, 0, 0], [ 0, 0, 0, 0, 0, 0, 0, 0], [ 0, 0, 0, 0, 0, 0, 0, 0], [ 0, 0, 0, 0, 0, 0, 0, 0], [ 0, 0, 0, 0, 0, 0, 0, 0]]))


var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");