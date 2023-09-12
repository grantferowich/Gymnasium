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
using namespace std;
/* 
CAESAR'S CIPHER
successfully tested the function 1/10/23
Given a string and an integer k
return a string 

the function should re-assign each letter by k places in the alphabet
when the input is apple and k is 2 then "a" becomes "c" in the cipher
p becomes r
l become n
e becomes g
for the input apple the expected output is crrng

Complexity Analysis
Time Complexity: O(N).
The amount of time the function will take to 
encrypt a word increases linearly as the input size grows.
Space Complexity: O(N). As the size of the input grows the length of the encrypted word
which must be returned grows.

console.log(caesarCipher("apple", 2)); // => "crrng" :D
console.log(caesarCipher("bootcamp", 2)); // => "dqqvecor" :D
console.log(caesarCipher("zebra", 4)); // => "difve"
 */

string caesarsCipher(string inputStr, int intX){
    const string alphabetStr = "abcdefghijklmnopqrstuvwxyz";
    string encryptedWordStr = "";
    for (char charX: inputStr){
        int oldIndexInt = alphabetStr.find(charX);
        int newIndexInt = (oldIndexInt + intX) % 26;
        char newLetterChar = alphabetStr[newIndexInt];
        encryptedWordStr += newLetterChar;
    }
    return encryptedWordStr;
}

int main(){
    string inputStr1 = "apple";
    int int1 = 2;
    string inputStr2 = "wake forest";
    int int2 = 3;
    string inputStr3 = "chicago";
    int int3 = 4;
    string outputStr1 = caesarsCipher(inputStr1, int1);
    string outputStr2 = caesarsCipher(inputStr2, int2);
    string outputStr3 = caesarsCipher(inputStr3, int3);
    cout << "Result 1: " << outputStr1 << endl;
    cout << "Result 2: " << outputStr2 << endl;
    cout << "Result 3: " << outputStr3 << endl;
    return 0;
}

