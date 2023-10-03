/* 
Grant Ferowich 
October 1, 2023.
string reversal algorithm
For a given code "wake"  return the word reversed "ekaw."
The approach is to initialize a pointer at the last letter 
in the input string and then decrement the index of the pointer.
So with "wake" the pointer would start at "e" with an index of 3 using 
0-based indexing with the input string. While the pointer's index is still valid for the 
input string then append that character to the resulting reversed string. To show the pointer's index, the pointer has
to be greater than 0. Eventually the pointer's index will be LESS THAN than 0, which causes the 
loop to terminate and the program to end. Log the reversed string to the console. In effect, the loop has enabled the machine to efficiently 
work through a process with a runtime of O(N), since the loop will iterate over every character in the input.
The purpose of the functions written in C++ are achieved. The string has been printed to the console in reverse.

Input: "Google"
Output: "elgooG"

Input: "home"
Output: "emoh"

Input: "green"
Output: "neerg"

Input: "x*752"
Output: "257*x"


 */
#include <iostream>
#include <string>
using namespace std;

class Solution{
    public:
    string stringReversalAlgorithm(string inputStr){
        int gInt = inputStr.size() - 1;
        string outputStr = "";
        while (gInt >= 0){
            char xChar = inputStr[gInt];
            outputStr += xChar;
            gInt--;
        }
        return outputStr;
    }
};

int main(){
    Solution solutionX;
    string inputStr1 = "x*752";
    string inputStr2 = "green";
    string inputStr3 = "home";
    string inputStr4 = "Google";
    string outputStr1  = solutionX.stringReversalAlgorithm(inputStr1);
    string outputStr2  = solutionX.stringReversalAlgorithm(inputStr2);
    string outputStr3  = solutionX.stringReversalAlgorithm(inputStr3);
    string outputStr4  = solutionX.stringReversalAlgorithm(inputStr4);
    cout << "Result 1: " << outputStr1 << endl;
    cout << "Result 2: " << outputStr2 << endl;
    cout << "Result 3: " << outputStr3 << endl;
    cout << "Result 4: " << outputStr4 << endl;
    return 0;
    }

/* Results
October 1, 2023

Result 1: 257*x
Result 2: neerg
Result 3: emoh
Result 4: elgooG


 */