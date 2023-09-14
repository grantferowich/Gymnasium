/* 
Is Unique
CTCI 1.01
Started development Sept 14, 2023

Determine if a string has all unique characters. 
What if you cannot use additional data structures?
 
- str1 = "wake"
- output1 = true

- str2 = "wake forest"
- output2 = false
why? There are two e characters.

*/
#include <iostream> 
#include <string>
#include <sys/types.h>
#include <unordered_map>
#include <vector>
#include <chrono>
using namespace std;
using namespace std::chrono;

bool isUnique(string inputStr){
    unordered_map<char, int> charMap;
    for (char xChar: inputStr){
        if (charMap.find(xChar) == charMap.end()){
            charMap[xChar] = 1;
        } else {
            int frequencyInt = charMap[xChar];
            charMap[xChar] = frequencyInt + 1;
        }
    }

    for (auto &pair: charMap){
        if (pair.second > 1){
            return false;
        }
    }
    return true;
}

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
    auto startTime = chrono::high_resolution_clock::now();
    string inputStr1 = "wake";
    bool outputToF1 = isUnique(inputStr1);
    string outputStr1 = printToFToString(outputToF1);
    cout << "Result 1: " << outputStr1 << ". Expect true." << endl;

    string inputStr2 = "wake forest";
    bool outputToF2 = isUnique(inputStr2);
    string outputStr2 = printToFToString(outputToF2);
    cout << "Result 2: " << outputStr2 << ". Expect false." << endl;
    auto endTime = chrono::high_resolution_clock::now();
    auto duration = chrono::duration_cast<chrono::microseconds>(endTime - startTime);
    cout << "Execution time: " << duration.count() << " microseconds." << endl;
    return 0;
}

 