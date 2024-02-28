/* 
Grant Ferowich
String Compression
Developed on Sept 15, 2023
Cracking the Coding Interview
Ch. 1 problem 6

- input = "aabcccccdd"
- output = "a2b1c5d2"
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
using namespace std::chrono;

class Solution{
    public:
    string stringCompression(string inputStr){
        string outputStr;
        map<char, int> charMap;
        for (char xChar: inputStr){
            if (charMap.find(xChar) == charMap.end()){
                charMap[xChar] = 1;
            } else {
                int frequencyInt = charMap[xChar];
                charMap[xChar] = frequencyInt + 1;
            }
        }
        for (auto pair : charMap){
            outputStr += pair.first;
            outputStr += to_string(pair.second);
        }
        return outputStr;
    }
};

int main(){
    Solution solutionX;
    string inputStr1 = "aabcccccdd";
    string outputStr1 = solutionX.stringCompression(inputStr1);
    cout << "Result 1: " << outputStr1 << ". Expect a2b1c5d2." << endl;

    string inputStr2 = "aaaa";
    string outputStr2 = solutionX.stringCompression(inputStr2);
    cout << "Result 2: " << outputStr2 << ". Expect a4." << endl;
    return 0;
}