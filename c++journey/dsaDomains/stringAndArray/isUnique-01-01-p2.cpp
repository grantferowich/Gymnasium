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
#include <algorithm>
#include <cstddef>
#include <iostream> 
#include <string>
#include <unordered_map>
#include <vector>
#include <chrono>
using namespace std;
using namespace std::chrono;

bool isUnique(string inputStr){  
    int xInt = 0;
    while (xInt < inputStr.size()){
        size_t foundInt = inputStr.find(inputStr[xInt]);
        if (foundInt < xInt){
            return false;
        }
        xInt++;
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