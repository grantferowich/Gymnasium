/*
 *  Homework - Matrices
 *
 * Attempted on May 18, 2023.
 * 
 *  Prompt: Create a Matrix class
 *
 *  The Matrix will take in the following input:
 *
 *               m:    {Integer} - represents the number of ROWS
 *               n:    {Integer} - represent the number of COLUMNS
 *
 *  The Matrix will have the following properties:
 *
 *         storage:    {Array of Arrays of Integers} - stores of numbers within matrix
 *               m:    {Integer} - represents the number of ROWS
 *               n:    {Integer} - represent the number of COLUMNS
 *
 *  The Matrix will have the following methods:
 *
 *          isValid:   checks whether given coordinates are within the matrix
 *
 *                   Input:      i {Integer} - row index
 *                   Input:      j {Integer} - column index
 *                  Output:        {Boolean}
 *
 *                 Example:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *                 matrix.isValid(1, 1)
 *
 *                 result == true
 *
 *                 matrix.isValid(100, 1)
 *
 *                 result == false
 *
 *
 *       initialize:   takes in a valid array of arrayOfArrays, and
 *
 *                   Input: arrayOfArrays {Array of Arrays of Integers}
 *
 *                  Output:        {undefined / void}
 *
 *                 Example:
 *
 *                 matrix.intitialize([[0, 1, 2],
 *                                     [3, 4, 5],
 *                                     [6, 7, 8]])
 *
 *
 *                 result:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *                 matrix.m == 3
 *
 *                 matrix.n == 3
 *
 *
 *            print:   optional method to print the contents of a matrix's storage
 *                     prints each row of the matrix on a new line.
 *
 *                   Input: N/A {undefined / void}
 *
 *                  Output:        {undefined / void}
 *
 *                 Example:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *
 *                 console:
 *
 *                 [0, 1, 2]
 *                 [3, 4, 5]
 *                 [6, 7, 8]
 *
 *
 *           insert:   inserts an integer into the given coordinates
 *                    returns true if insertion was successful
 *                    returns false otherwise
 *
 *                   Input:      i {Integer}
 *                   Input:      j {Integer}
 *                   Input:    val {Integer}
 *                  Output:        {Boolean}
 *
 *                 Example:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *                 matrix.insert(1, 1, 400)
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 400, 5],
 *                                    [6, 7, 8]]
 *
 *                 result == true
 *
 *
 *                 matrix.insert(100, 1, 400)
 *
 *                 matrix.storage = [[0, 1, 2],
 *                                   [3, 4, 5],
 *                                   [6, 7, 8]]
 *
 *                 result == false
 *
 *
 *         retrieve:   returns value stored at given coordinates
 *                     returns -Infinity / Integer.MIN_VALUE if coordinates are invalid
 *
 *                   Input:      i {Integer} - row index
 *                   Input:      j {Integer} - column index
 *                  Output:        {Integer}
 *
 *                  Example:
 *
 *                  matrix.storage == [[0, 1, 2],
 *                                     [3, 4, 5],
 *                                     [6, 7, 8]]
 *
 *                  matrix.retrieve(1, 1)
 *
 *                  result == 4
 *
 *
 *            scale:   multiplies every value in the matrix by some constant factor
 *                     returns undefined / void
 *
 *                    Input:  factor {Integer} - amount each entry will be multiplied by
 *                    Output:         {undefined}
 *
 *                   Example:
 *
 *                   matrix.storage == [[1, 1, 1],
 *                                      [1, 1, 1],
 *                                      [1, 1, 1]]
 *
 *                   matrix.scale(5)
 *
 *                   matrix.storage == [[5, 5, 5],
 *                                      [5, 5, 5],
 *                                      [5, 5, 5]]
 *
 *
 *             fill:   sets every entry in the matrix equal to input value
 *                     returns undefined / void
 *
 *                   Input:     val {Integer} - value to be inserted throughout matrix
 *                  Output:         {undefined}
 *
 *                 Example:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *                 matrix.fill(1)
 *
 *                 matrix.storage == [[1, 1, 1],
 *                                    [1, 1, 1],
 *                                    [1, 1, 1]]
 *
 *
 *          flatten:   returns an array containing all the elements in the matrix if traversed row by row
 *
 *                   Input:      N/A
 *                  Output:     {Array of Integers}
 *
 *                 Example:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *                 matrix.flatten()
 *
 *                 result == [0, 1, 2, 3, 4, 5, 6, 7, 8]
 *
 *
 *            slice:   returns a new Matrix representing a subset of the original matrix
 *                     it's rows are bounded by the first two-element array input
 *                     it's columns are bounded by the second two-element array input
 *
 *                     NOTE: If the rowRange or colRange is larger than the original matrix
 *                           just return the bounds of the original matrix
 *
 *                     NOTE: Think about how much you'll have to offset insertions into the new matrix
 *
 *                    Input:      rowRange {Array of Two Integers}
 *                    Input:      colRange {Array of Two Integers}
 *                   Output:     {Matrix}
 *
 *                 Example:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *                 matrix.slice([0, 2], [0, 2])
 *
 *                 result == [[0, 1],
 *                            [3, 4]]
 *
 *
 *        transpose:   returns a new Matrix representing the transpose of the original matrix
 *                     The transpose of a matrix is like flipping a matrix along its diagonal axis
 *
 *                     Link to Wikipedia:
 *                     NOTE: if the original matrix was M x N, the new one will be N x M
 *
 *                    Input:      N/A
 *                   Output:     {Matrix}
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5]]
 *
 *                 matrix.transpose()
 *
 *                 result == [[0, 3],
 *                            [1, 4],
 *                            [2, 5]]
 *
 *
 *
 *         mulitply:   returns a new Matrix representing the matrix multiplication of original matrix
 *                     by the input matrix.
 *
 *                     Link to Wikipedia:
 *                     NOTE: if the original matrix was M x N, the input one MUST be N x K
 *                           the result matrix will then be M x K dimensions
 *
 *                    Input:      matrix {Matrix}
 *                   Output:     {Matrix}
 *
 *                 matrix.storage == [[4, 1, 3],
 *                                    [3, 2, 5]]
 *
 *                 matrix.multiply([[8, 9],
 *                                  [7, 10],
 *                                  [0, 6]])
 *
 *                 result == [[39, 64],
 *                            [38, 77]]
 *
 *                 Reasoning:
 *                          [[(4 * 8) + (1 * 7) + (3 * 0),    (4 * 9) + (1 * 10) + (3 * 6)],
 *
 *                           [(3 * 8) + (2 * 7) + (5 * 0),    (3 * 9) + (2 * 10) + (5 * 6)]]
 *
 *
 *                      =>  [[32 + 7 + 0,   36 + 10 + 18],
 *
 *                           [24 + 14 + 0,  27 + 20 + 30]]
 *
 *
 *                      =>  [[39, 64],
 *                           [38, 77]]
 */

class Matrix{

    constructor(mInt, nInt){
        this.mInt = mInt;
        this.nInt = nInt;
        this.storage = Array(this.mInt)
        let xInt = 0
        while (xInt < mInt){
            this.storage[xInt] = Array(this.nInt)
            xInt++
        }
    }

    isValid(iInt, jInt){
        if (iInt < 0 || jInt < 0 || iInt > this.mInt || jInt > this.nInt){
            return false
        }
        return true;
    }

    print(){
        console.log(this.storage)
    }

    insert(iInt, jInt, valueInt){
        
        if (this.isValid(iInt, jInt)){
            this.storage[iInt][jInt] = valueInt;
            return true;
        }

        if (!this.isValid(iInt, jInt)){
            return false;
        } 
    }

    retrieve(iInt, jInt){
        if (this.isValid(iInt, jInt)){
            return this.storage[iInt][jInt];
        }
        if (!this.isValid(iInt, jInt)){
            return -Infinity;
        }
    }

    fill(valueInt){
        let xInt = 0;
        let yInt = 0;
        while (xInt < this.mInt){
            yInt = 0;
            while (yInt < this.nInt){
                if (this.isValid(xInt, yInt)){
                    this.insert(xInt, yInt, valueInt)
                }
                yInt++;
            }
            xInt++;
        }
    }

    scale(factorInt){
        let xInt = 0;
        let yInt = 0;
        while (xInt < this.mInt){
            yInt = 0
            while (yInt < this.nInt){
                let valueInt = this.retrieve(xInt, yInt)
                this.insert(xInt, yInt, valueInt * factorInt)
                yInt++
            }
            xInt++
        }
    }

    flatten(){
        let arr = []
        let xInt = 0;
        let yInt = 0;
        while (xInt < this.mInt){
            yInt = 0;
            while (yInt < this.nInt){
                if (this.isValid(xInt, yInt)){
                    let valueInt = this.retrieve(xInt, yInt);
                    arr.push(valueInt);
                }
                yInt++;
            }
            xInt++;
        }
        return arr;
    }

    slice(rowRangeInt, colRangeInt){
        if (!this.isValid(rowRangeInt, colRangeInt)){
            return this.storage
        }

        let minRowInt = rowRangeInt[0];
        let maxRowInt = rowRangeInt[1];
        let minColInt = colRangeInt[0];
        let maxColInt = colRangeInt[1];

        let newMatrix = Array(maxRowInt)
        let iInt = 0
        while (iInt < newMatrix.length){
            newMatrix[iInt] = Array(maxColInt);
            iInt++
        }

        let xInt = minRowInt;
        let yInt = minColInt;
        while (xInt < maxRowInt){
            yInt = minColInt
            while (yInt < maxColInt){
                console.log(`xInt ${xInt} yInt ${yInt}`)
                let valueInt = this.retrieve(xInt, yInt);
                newMatrix[xInt][yInt] = valueInt;
                yInt++
            }
            xInt++
        }
        return newMatrix
    }

}

const matrix1 = new Matrix(3, 3)
// console.log(matrix1) // successfully tested constructor function on May 18, 2023
console.log(matrix1.isValid(4,4)) // successfully tested isValid(iInt, jInt) on May 18, 2023
console.log(matrix1.isValid(0,1)) // successfully tested isValid(iInt, jInt) on May 18, 2023
// console.log(matrix1.print()) // successfully tested print() on May 18, 2023
matrix1.insert(0, 1, 23) 
// console.log(matrix1.print()) // successfully tested insert(iInt, jInt, valueInt)
console.log(matrix1.insert(100, 100, 12)) // successfully tested insert(iInt, jInt, valueInt)
console.log(matrix1.retrieve(0, 1)) // successfully tested retrieve(0, 1) on May 18, 2023
// console.log(matrix1.fill(1)) 
// console.log(matrix1.scale(5)) //
// console.log(matrix1.print()) // successfully tested fill(valueInt) on May 18, 2023
// console.log(matrix1.flatten()) // succcessfully tested flatten() on May 18, 2023
// successfully tested scale(factorInt) on May 19, 2023
matrix1.insert(0, 0, 11)
matrix1.insert(0, 2, 34)
matrix1.insert(1, 0, 3)
matrix1.insert(1, 1, 5)
matrix1.insert(1, 2, 8)
matrix1.insert(2, 0, 13)
matrix1.insert(2, 1, 21)
matrix1.insert(2, 2, 55)
console.log('matrix1')
matrix1.print()
console.log('matrix slice')
console.log(matrix1.slice([0,2], [0,2])) // successfully tested slice(rowRangeInt, colRangeInt) on May 19, 2023



