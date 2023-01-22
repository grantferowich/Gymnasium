/* 
215 - Search a 2D matrix
Successfully tested the function 1/22/23.
Complexity analysis
Time complexity: O(MN)
Space complexity: O(1)

Write an efficient algorithm that searches for a value in an M x N matrix. 
This matrix has the following properties:

Integers in each row are sorted from left to right
The first integer of each row is greater than the last integer of the previous row.
Input: Matrix of Integers, Target Integer
Output: Boolean


*/

const search2DMatrix = (matrix, target) => {
    let height = matrix.length;
    let width = matrix[0].length;

    for (let x = 0; x < height; x++){
        for (let y = 0; y < width; y++){
            if (matrix[x][y] === target){
                return true
            }
        }
    }
    return false
}

console.log(search2DMatrix([[ 1 , 1 , 2 , 3 ],
            [ 5, 8, 13 , 21 ],
            [ 34, 55, 89, 154]], 21))

// return true
console.log(search2DMatrix([[ 1 , 1 , 2 , 3 ],
                [ 5, 8, 13 , 21 ],
                [ 34, 55, 89, 154]], 23))
// return false
        