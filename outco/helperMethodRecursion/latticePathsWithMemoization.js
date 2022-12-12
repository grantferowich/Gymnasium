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
console.log(latticePathsWithMemoization(30,30))

var t1 = performance.now();
console.log("Call to latticePathsWithTabulation took " + (t1 - t0) + " milliseconds.");