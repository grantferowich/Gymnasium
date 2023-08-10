#include <array>
#include <cmath>
#include <iterator>
#include <string>
#include <vector>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <iostream>
#include <array>
#include <set>
using namespace std;
/* 
314 - Word Search

in C++

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
    bool traverse(vector<vector<char> >& matrix, const string& wordStr,
                int mInt, int nInt, int indexInt, int heightInt, int widthInt,
                unordered_set<string>& visitedSet){
        string keyStr = to_string(mInt) + "_" + to_string(nInt);
        if (mInt < 0 || nInt < 0 || mInt >= heightInt || nInt >= widthInt){
            return false;
        }
        if (matrix[mInt][nInt] == '\0' || matrix[mInt][nInt] != wordStr[indexInt] || visitedSet.count(keyStr) > 0){
            return false;
        }
        if (indexInt == wordStr.length() - 1 && matrix[mInt][nInt] == wordStr[wordStr.length() - 1]){
            return true;
        }
        visitedSet.insert(keyStr);
        bool upToF = traverse(matrix, wordStr, mInt - 1, nInt, indexInt + 1, heightInt, widthInt, visitedSet);
        bool downToF = traverse(matrix, wordStr, mInt + 1, nInt, indexInt + 1, heightInt, widthInt, visitedSet);
        bool leftToF = traverse(matrix, wordStr, mInt, nInt - 1, indexInt + 1, heightInt, widthInt, visitedSet);
        bool rightToF = traverse(matrix, wordStr, mInt, nInt + 1, indexInt + 1, heightInt, widthInt, visitedSet);
        visitedSet.erase(keyStr);
        return upToF || downToF || leftToF || rightToF;
    }

    bool wordSearch(vector<vector <char> >& matrix, const string& wordStr){
        int heightInt = matrix.size();
        int widthInt = matrix[0].size();
        unordered_set<string> visitedSet;
        for (int xInt = 0; xInt < heightInt; xInt++){
            for (int yInt = 0; yInt < widthInt; yInt++){
                if (matrix[xInt][yInt] == wordStr[0] && traverse(matrix, wordStr, xInt, yInt, 0, heightInt, widthInt, visitedSet)){
                    return true;
                }
            }
        }
        return false;
    }

    string converToFToString(bool ToF){
        if (ToF == 0){
            return "false";
        }
        if (ToF == 1){
            return "true";
        }
        return "";
    }
    int main(){
        vector<vector<char> > matrix1 = {
            {'A', 'B', 'C', 'E'},
            {'S', 'F', 'C', 'S'},
            {'A', 'D', 'E', 'E'}
        };
        string wordStr1 = "ABCB";
        bool resultToF1 = wordSearch(matrix1, wordStr1);
        string resultStr1 = converToFToString(resultToF1);
        cout << "Result 1: " << resultStr1 << endl;
        return 0;
    }
