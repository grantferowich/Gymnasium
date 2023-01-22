/* 
314 - Word Search
Given a matrix of characters a-z and a word,
return a boolean as to whether the word can be found within the matrix. 
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
- if the letter is the last letter in the word (return true)                    

*/