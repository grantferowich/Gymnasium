/**
 * Successfully tested the function 1/18/23. 
 * Given a rectangular matrix containing only the values “0” and “1”, 
 * where the values of “1” always appear in the form of a rectangular island and the islands
 * are always separated row-wise and column-wise by at least one line of “0”s, 
 * count the number of islands in the given matrix. 
 * Note that the islands can diagonally adjacent.
 * 
 * 
 * Input: [[1, 1, 0, 1],
           [1, 1, 0, 1],
           [0, 0, 1, 0],
           [0, 0, 1, 0]]

Output: 3

Input: [[1, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 0, 1]]
 *       
 * Output: 3
 * 
 * 
 * input: a matrix filled with 0s and 1s
 * output: a number
 * constraints: O(MN) runtime
 * O(1) space complexity
 * 
 * 
 * 
 * ideas: 
 * traverse with depth first search
 * count top left 1's => counting islands
 * each time you find a top left corner increment the count
 * define a rectangle island as a 1 which has 0s above and to the left or out of bounds above and to the left
 * characterize the island to the left as matrix[x-1][y]
 * characterize the island above as matrix[x][y-1]
 * 
 *  */ 

const rectangleIslands = (matrix) => {
    let rectangleIslands = 0
    for (let x = 0; x < matrix.length; x++){
        for (let y = 0; y < matrix[0].length; y++){
            if (matrix[x][y] === 1){
                // left check
                if (((x - 1) < 0 || matrix[x-1][y] === 0) && ((y - 1) < 0 || matrix[x][y-1] === 0)){
                    // top check

                        rectangleIslands++
                   
                }
            }
        }
    }

    return rectangleIslands
}

console.log(rectangleIslands([[1, 1, 0, 1],
    [1, 1, 0, 1],
    [0, 0, 1, 0],
    [0, 0, 1, 0]])) // 3

console.log(rectangleIslands([])) // 0
console.log(rectangleIslands([[1,0,1]])) // 2
console.log(rectangleIslands([[1, 1, 0, 1],
                              [1, 1, 0, 1],
                              [0, 0, 1, 0],
                              [0, 0, 1, 0],
                              [1, 1, 0, 0],
                              [1, 1, 0, 0]])) // 4