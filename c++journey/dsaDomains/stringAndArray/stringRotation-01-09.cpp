/* 
 * Grant Ferowich

 * Developed on Sept 28, 2023
 * Cracking the Coding Interview
 * Chapter 1, question 9: String Rotation

 * Assume you have a method isSubstring which
 * checks if one word is a substring of another.
 * Given two strings, str1 and str2, write
 * code to check if str2 is a rotation of str1 
 * using only one call to isSubstring.
 * E.g. "waterbottle" is a rotation of "erbottlewat."

 * First, check if the two strings are anagrams. 
 * If no, return false. 

 * 
 * 

 */

#include <iostream> 
#include <string>
#include <sys/types.h>
#include <unordered_map>
#include <vector>
#include <chrono>
#include <iomanip> 
#include <map>
using namespace std;

class Solution{
    public:
    bool stringRotation(string str1, string str2){
        int xInt = 0;
        while (xInt < str1.length()){
            char charX = str1.pop_back();
            // append charX to str1
            // if str1 === str2 return true
            xInt++;
        }

        return false;
    }
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
    string inputStr1 = "wakeforest";
    string inputStr2 = "stwakefore";
    bool outputToF1 = solutionX.stringRotation(inputStr1, inputStr2);
    cout << "stwakefore is a rotation of wakeforest? Expect true:" << printToFToString(outputToF1) << endl;
    return 0;
}