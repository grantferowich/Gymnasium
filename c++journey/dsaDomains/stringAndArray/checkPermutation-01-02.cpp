/* 
Grant Ferowich
Cracking the Coding Interview: Chapter 1, problem 2. 
Started development on September 14, 2023.


Given two strings, write a method to decide if one is a 
permutation of the other.

- str1: racecar
- str2: racecad
- output 1: false

- str1: racecar
- str2: aaccerr
- output 2: false

 */
#include <iostream> 
#include <string>
#include <sys/types.h>
#include <unordered_map>
#include <vector>
#include <chrono>
#include <iomanip> 
using namespace std;
using namespace std::chrono;

class Solution{
    public:
    bool checksPermutation(string str1, string str2){
        unordered_map<char, int> charMap1, charMap2;
        for (char xChar: str1){
            if (charMap1.find(xChar) == charMap1.end()){
                charMap1[xChar] = 1;
            } else {
                int frequencyInt = charMap1[xChar];
                charMap1[xChar] = frequencyInt + 1;
            }
        }
        for (char xChar: str2){
            if (charMap2.find(xChar) == charMap2.end()){
                charMap2[xChar] = 1;
            } else {
                int frequencyInt = charMap2[xChar];
                charMap2[xChar] = frequencyInt + 1;
            }
        }
        for (auto pair:charMap1){
            char keyChar = pair.first;
            if (charMap1[keyChar] != charMap2[keyChar]){
                return false;
            }
        }
        return true;
    }
        string checksResult(string str1, string str2){
        bool permutationToF = checksPermutation(str1, str2);
        return printToFToString(permutationToF);
    }
    private:
        string printToFToString(bool inputToF){
            if (inputToF == 1){
                return "true";
            }
            if (inputToF == 0){
                return "false";
            }
            return "false";
    }
};


int main(){
    Solution solutionX;
    string inputStr1 = "racecar";
    string inputStr2 =  "racecad";
    string resultStr1 = solutionX.checksResult(inputStr1, inputStr2);
    cout << "Result 1: " << resultStr1 << ". Expected false." << endl;


    string inputStr3 = "racecar";
    string inputStr4 = "aaccerr";
    string resultStr2 = solutionX.checksResult(inputStr3, inputStr4);
    cout << "Result 2: " << resultStr2 << ". Expect true." << endl;
    
    return 0;
 }