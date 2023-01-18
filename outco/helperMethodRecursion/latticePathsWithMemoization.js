// Successfully tested the function 1/18/23.
var t0 = performance.now();

// solution 2
const latticePathsWithMemoization = (m, n) => {
    let cache = {};
    const traverse = (row, col) => {
        let key = row.toString() +"_"+col.toString();
        
        // valid path
        if (row === 0 && col === 0){
            return 1; 
        }

        // invalid path
        if (row < 0 || col < 0){
            return 0;
        }
        if (cache[key]) { return cache[key]}

        let up = traverse(row - 1, col);
        let left = traverse(row, col - 1);
        cache[key] = up + left; 
        return cache[key];
    }
    return traverse(m,n)
}
console.log('latticePathsWithMemoization')
console.log(latticePathsWithMemoization(2,3))
console.log(latticePathsWithMemoization(10,10))
console.log(latticePathsWithMemoization(15,15))
// Call to latticePathsWithTabulation took 3.22 milliseconds.

var t1 = performance.now();
console.log("Call to latticePathsWithTabulation took " + (t1 - t0) + " milliseconds.");