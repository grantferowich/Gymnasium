/* 
* Grant Ferowich
* Cracking the coding interview: Chapter 1, problem 4.
* Given a string, write a function to check if it is a permutation
* of a planindrome
 
- inputStr1 = "Tact coa"
- outputToF1 = true;
Why? taco cat is a palindrome and can be formed by 
a permutation of the inputStr1. 

A palindrome can have at most 1 unique integer. 
If two characters have an odd number of frequencies,
the string is not a permutation of a palindrome. 
 */
 #include <cctype>
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
    bool palindromePermutation(string inputStr){
        for (char& xChar:inputStr){
            xChar = tolower(xChar);
        }
        int uniquesInt = 0;
        unordered_map<char, int> charMap;
        // build up frequency map 
        for (char xChar: inputStr){
            if (charMap.find(xChar) == charMap.end()){
                charMap[xChar] = 1;
            } else {
                int frequencyInt = charMap[xChar];
                charMap[xChar] = frequencyInt + 1;
            }
        }
        charMap.erase(' ');
        for (auto pair: charMap){
            char keyChar = pair.first;
            if (charMap[keyChar] % 2 != 0){
                uniquesInt++;
            }
        }
        return uniquesInt < 2;
    }

    string resultStr(string inputStr){
        bool resultToF = palindromePermutation(inputStr);
        return printToFToString(resultToF);
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
        void printMap(unordered_map<char, int> inputMap){
            for (const auto& pair: inputMap) {
            cout << "Key: " << pair.first << ", Value: " << pair.second << std::endl;
    }
        }
};
int main(){
    Solution solutionX;
    string inputStr1 = "Tact coa";
    cout << "Result 1: " << solutionX.resultStr(inputStr1) << ". Expect true." << endl;

    string inputStr2 = "hannah";
    cout << "Result 2: " << solutionX.resultStr(inputStr2) << ". Expect true." << endl;

    string inputStr3 = "jake";
    cout << "Result 3: " << solutionX.resultStr(inputStr3) << ". Expect false." << endl;

    return 0;
}