/* 

* is Substring
* dev March 9, 2024.
* Write a program to determine whether an input string is a substring of another
* input string. ( For example, "bat" is a substring of "abate", but not of "beat".) You
* may use any language you like.


* input: "ak" and "wake"
* output: true, ak is a substring of wake

* input: 'wakeforest' and 'wakeforestuniversity'
* output: true

* first, find a spot where the letter in the long word is the same as the first letter 
* in the short string. Then, iterate through the long word. At each iteration, check
* whether the letter at the index is the same as the letter in the shortWord.
*/
#include <iostream>
#include <string>
using namespace std;

class Solution{
    public:
    bool isSubstring(string shortStr, string longStr){
        int startInt = -1; 
        int xInt = 0;
        while (xInt < longStr.size()){
            if (longStr[xInt] == shortStr[0]){
                startInt = xInt; 
                break;
            }
            xInt++;
        }
        // didn't find the first letter of the 
        // shortStr in the longStr
        if (startInt == -1){
            return false;
        }
        string subWordStr = longStr.substr(startInt);
        xInt = 0;
        while (xInt < shortStr.size()){
            if (shortStr[xInt] != subWordStr[xInt]){
                return false;
            }
            xInt++;
        }
        return true;
    };
};

string printToFToString(bool inputToF){
        if (inputToF == 1){
            return "true";
        }
        if (inputToF == 0){
            return "false";
        }
        return "false";
}

int main(){
    Solution solutionX;
    string inputStr1 = "wake";
    string inputStr2 = "ak";
    bool result1ToF = solutionX.isSubstring(inputStr2, inputStr1);
    string outputStr1 = printToFToString(result1ToF);
    cout << "ak is a substring of wake? " << outputStr1 << "." << endl;

    string intputStr3 = "wake forest";
    string inputStr4 = "gr";
    bool result2ToF = solutionX.isSubstring(inputStr4, intputStr3);
    string outputStr2 = printToFToString(result2ToF);
    cout << "gr is a substring of wake forest? " << outputStr2 << "." << endl;

    string inputStr5 = "wake forest";
    string inputStr6 = "x";
    bool result3ToF = solutionX.isSubstring(inputStr6, inputStr5);
    string outputStr3 = printToFToString(result3ToF);
    cout << "x is a substring of wake forest? " << outputStr3 << "." << endl;
    
    string inputStr7 = "banana";
    string inputStr8 = "ana";
    bool result4ToF = solutionX.isSubstring(inputStr8, inputStr7);
    string outputStr4 = printToFToString(result4ToF);
    cout << "ana is a substring of banana? " << outputStr4 << "." << endl;

    return 0;
}