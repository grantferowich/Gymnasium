/* 
Pond Sizes
CTCI 16.19

Started engineering on July 19, 2023. 

july 31 6:30pacific time.

You have an integer matrix representing a plot of land, 
where the value at that location represents the height
above sea level. A value of zero indicates water. A 
pond is a region of water connected vertically, 
horizontally, or diagonally. The size of the pond is 
the total number of connected water cells. Write a method
to compute the sizes of all ponds in the matrix. 

Example

[[0, 2, 1, 0],
 [0, 1, 0, 1],
 [1, 1, 0, 1],
 [0, 1, 0, 1]]

 Output
 2, 4, 1 (in any order)

What: Depth first search 
When to initiate dfs?
 If the number is greater than 0, 
 AND, 
 the present cell has not been visited.
How to recurse? Up, down, left, right, 
up-right diagonal, up-left diagonal,
down-right diagonal, down-left diagonal. 

Only include the cell in the present pond if the 
cell has NOT been visited, is in-bounds, and has the same height
as the cell where the dfs started. 

input: a matrix
output: an array
*/

const pondSizes = (matrix) => {

    let outputArr = []
    let visitedSet = new Set();
    
    const dfs = (rowInt, colInt, heightInt) => {
        let keyStr = rowInt.toString() + "_" + colInt.toString()
        // already visited
        if (visitedSet.has(keyStr)){
            return 0;
        }
        // if oob
        if (rowInt < 0 || colInt < 0 || rowInt >= matrix.length || colInt >= matrix[0].length){
            return 0;
        }

        // if sea level is different
        if (matrix[rowInt][colInt] !== heightInt){
            return 0;
        }

        // if currentHeightInt === heightInt 
        // then increment heightInt
        if (matrix[rowInt][colInt] === heightInt && !visitedSet.has(keyStr)){
            visitedSet.add(keyStr)
            let upRightInt = dfs(rowInt - 1, colInt + 1,  heightInt);
            let upLeftInt = dfs(rowInt - 1, colInt - 1,  heightInt);
            let upInt = dfs(rowInt - 1, colInt, heightInt);
            let leftInt = dfs(rowInt, colInt - 1, heightInt);
            let rightInt = dfs(rowInt, colInt + 1, heightInt);
            let downInt = dfs(rowInt + 1, colInt, heightInt);
            let downRightInt = dfs(rowInt + 1, colInt + 1, heightInt);
            let downLeftInt = dfs(rowInt + 1, colInt - 1, heightInt);
            let valueInt = upRightInt + upLeftInt + upInt + leftInt + rightInt + downInt + downRightInt + downLeftInt + 1
            console.log('valueInt', valueInt)
            return valueInt
        }
        
       
    }

    let iInt = 0;
    let jInt = 0;
    while (iInt < matrix.length){
        jInt = 0;
        while (jInt < matrix[0].length){
            let keyStr = iInt.toString() + "_" + jInt.toString();
            if (matrix[iInt][jInt] > 0 && !visitedSet.has(keyStr)){
                visitedSet.add(keyStr)
                let heightInt = matrix[iInt][jInt]
                console.log('heightInt,', heightInt)
                let int = dfs(iInt, jInt, 1, heightInt) + 1
                console.log('int', int)
                outputArr.push(int);
            }
            
            jInt++
        }
        iInt++
    }
    return outputArr
}

/* Tests */
const matrix1 = [[0, 2, 1, 0],
                 [0, 1, 0, 1],
                 [1, 1, 0, 1],
                 [0, 1, 0, 1]];    
const outputArr1 = pondSizes(matrix1);   

console.log('Result 1:', outputArr1)