/* 
Lattice Paths

Attempted on May 3, 2023.
Successfully tested the function May 3, 2023.

Input: two integers, m and n
output: one integer

Count the number of unique paths from 0,0 to m,n

Init a hash map to store the key during each recursive call
perform backtracking by pushing a key to the hash at the start of each 
recursive call sequence and then deleting the key

End case
if both of the coordinates passed to the recursive function === m and n,
return 1

if either of he coordinates passed to the recursive function are less than 0,
return 0 

In avoid duplicate work, check if there is a value for the current key during 
each recursive call. Return the value if the value exists in the hash map. 

call the recursive function. Ensure the parameters passed to the function call are (0, 0).


Remember to diagram the function ! 
*/

const latticePaths = (mInt, nInt) => {
    let cacheHM = {}
    
    const traverse = (rowInt, colInt) => {
        let keyStr = rowInt + '_' + colInt
        console.log(keyStr)
        if (rowInt > mInt || colInt > nInt){
            return 0
        }

        if (rowInt === mInt && colInt === nInt){
            return 1
        }

        if (cacheHM[keyStr]){
            return cacheHM[keyStr]
        }

        let leftInt = traverse(rowInt, colInt + 1)
        let upInt = traverse(rowInt + 1, colInt)
        cacheHM[keyStr] = leftInt + upInt
        return cacheHM[keyStr]
        
    }

    return traverse(0, 0)
}

const m1Int = 2
const n1Int = 3

const result1Int = latticePaths(m1Int, n1Int)

console.log(`Result 1: ${result1Int}`)