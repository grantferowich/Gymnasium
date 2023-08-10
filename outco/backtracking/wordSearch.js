/* 
314 - Word Search

Successfully tested the function 1/22/23.
Developed and finished testing on LeetCode on August 10, 2023.

Complexity Analysis:
Where M = matrix height, N = matrix width, L = length of word
Time Complexity: O(MN * 4^L)
Auxiliary Space Complexity: O(MN)

Given a matrix of characters a-z and a word,
return true or false about whether the word can be found within the matrix. 
Words can only be built from adjacent letters (up, down, left, right), but not diagonals.
Same elements cannot be used multiple times in the same word.

Input:

[['a', 'b', 'c', 'd'],
 ['e', 'f', 'g', 'h'],
 ['i', 'd', 'o', 'j'],
 ['k', 'l', 'm', 'n']]

'dog'

Output: true
loop until finding the first letter
pass coordinates to traverse helper method
helper method checks ( x + 1, y ) (right), ( x - 1, y) (left), ( x, y + 1 ) (down), ( x , y - 1 ) (up)
for second letter...all remaining letters recursively

Terminate traversal: 
- if letter is already visited (set to null)
- if the next spot is out of bounds
- if no more letters left to search for 
- if the letter is the last letter in the word (return true)                    

recursive tree
                   'd'
            /     /   \    \
          'o'   'i'   'l'  'f'
       select o...


*/

const wordSearch = (matrix, word) => {
    let height = matrix.length;
    let width = matrix[0].length;
    // < string, true or false >
    let visitedSet = new Set();
//     Terminate traversal: 
// - if letter is already visited (set to null)
// - if the next spot is out of bounds
// - if no more letters left to search for 
// - if the letter is the last letter in the word (return true)                    

    const traverse = (m, n, word, index) => {
        let keyStr = m + "_" + n;
        // console.log('keyStr', keyStr)
        if (m < 0 || n < 0 || m >= height || n >= width){
            return false;
        }
        if (matrix[m][n] === null || matrix[m][n] !== word[index] || visitedSet.has(keyStr)){
            return false;
        }
        if (index === word.length - 1 && matrix[m][n] == word[word.length - 1]){
            return true;
        }

            // let temp = matrix[m][n];
            // matrix[m][n] = null;
            visitedSet.add(keyStr);
            let upToF = traverse(m - 1, n, word, index + 1);
            let downToF = traverse(m + 1, n, word, index + 1);
            let leftToF = traverse(m, n - 1, word, index + 1);
            let rightToF = traverse(m, n + 1, word, index + 1);
            
            // matrix[m][n] = temp;
            let resultToF = upToF || downToF || leftToF || rightToF;
            visitedSet.delete(keyStr);
            return resultToF;
            
        
    }
    // traverse(xCoordinate, yCoordinate, word, 0)
    // return output;
    for (let x = 0; x < height; x++){
        for (let y = 0; y < width; y++){
            if (matrix[x][y] === word[0] && traverse(x, y, word, 0)){
                return true
            }
        }
    }
    return false;
}


console.log(wordSearch([['a', 'b', 'c', 'd'],
                        ['e', 'f', 'g', 'h'],
                        ['i', 'd', 'o', 'j'],
                        ['k', 'l', 'm', 'n']], 'dog')); // true

console.log(wordSearch([['t', 'a', 'c', 'd'],
                        ['e', 'f', 'g', 'h'],
                        ['i', 'd', 'o', 'j'],
                        ['k', 'l', 'm', 'n']], 'cat')); // true

const matrix3 = [["A","B","C","E"],
                 ["S","F","C","S"],  
                 ["A","D","E","E"]];
const word3 = "ABCCED";
const resultToF3 = wordSearch(matrix3, word3);
console.log('Result 3: ', resultToF3); // expect true


const matrix4 = [["C","A","T","E"],
                 ["S","B","M","S"],  
                 ["G","D","E","E"]];
const word4 = "CAT"
const resultToF4 = wordSearch(matrix4, word4); // expect true
console.log("Result 4: ", resultToF4)

const matrix5 = [["A","B","C","E"],
                 ["S","F","C","S"],
                 ["A","D","E","E"]];
const word5 = "ABCB";
const resultToF5 = wordSearch(matrix5, word5);
console.log("Result 5: ", resultToF5) // expect false;

console.log(wordSearch([['t']], 't')) // true

console.log(wordSearch([['t', 'a', 'c', 'd'],
                         ['e', 'f', 'g', 'h'],
                         ['i', 'd', 'o', 'j'],
                         ['k', 'l', 'm', 'n']], '1123132134')) // false


console.log(wordSearch([['t', 'a', 'c', 'd'],
['e', 'f', 'g', 'h'],
['i', 'd', 'o', 'j'],
['k', 'l', 'm', 'n']], 'g2')) // false