/* 
314 - Word Search

Successfully tested the function 1/22/23.

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
    let xCoordinate = 0;
    let yCoordinate = 0;
    let output;

    for (let x = 0; x < height; x++){
        for (let y = 0; y < width; y++){
            if (matrix[x][y] === word[0]){
                xCoordinate = x;
                yCoordinate = y;
            }
        }
    }
//     Terminate traversal: 
// - if letter is already visited (set to null)
// - if the next spot is out of bounds
// - if no more letters left to search for 
// - if the letter is the last letter in the word (return true)                    

    const traverse = (m, n, word, index) => {
      
        if ( m < 0 || n < 0 || m > height || n > width){
            return;
        }

        if (matrix[m][n] === null){
            return;
        }
        if (index === word.length - 1 && matrix[m][n] === word[word.length -1]){
            output = true;
            return;
        }
        
        if (matrix[m][n] === word[index]){
            let temp = matrix[m][n]
            matrix[m][n] = null;
            traverse(m - 1, n, word, index + 1);
            traverse(m + 1, n, word, index + 1);
            traverse(m, n - 1, word, index + 1);
            traverse(m, n + 1, word, index + 1);
            matrix[m][n] = temp;
        }
    }
    traverse(xCoordinate, yCoordinate, word, 0)
    return output === undefined ? false : output
}


console.log(wordSearch([['a', 'b', 'c', 'd'],
                        ['e', 'f', 'g', 'h'],
                        ['i', 'd', 'o', 'j'],
                        ['k', 'l', 'm', 'n']], 'dog')) // true

console.log(wordSearch([['t', 'a', 'c', 'd'],
                        ['e', 'f', 'g', 'h'],
                        ['i', 'd', 'o', 'j'],
                        ['k', 'l', 'm', 'n']], 'cat')) // true

console.log(wordSearch([['t']], 't')) // true

console.log(wordSearch([['t', 'a', 'c', 'd'],
                         ['e', 'f', 'g', 'h'],
                         ['i', 'd', 'o', 'j'],
                         ['k', 'l', 'm', 'n']], '1123132134')) // false