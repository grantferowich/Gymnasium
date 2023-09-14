/**
* Sort Digits
*
* Given an integer, sort the digits in ascending order and return the integer.
* Ignore leading zeros.
*
* Parameters
* Input: num {int}
* Output: {int}
*
* Constraints
* Do not convert the integer into a string or other data type.
*
* Time: O(N) where N is the number of digits.
* Space: O(1)
*
* Examples
* 8970 --> 789
* 32445 --> 23445
* 10101 --> 111


1. Initialize frequencyMap<char, int> and outputStr.
2. Convert input int into a string.
3. Build up frequencyMap by looping over the string.
4. Loop from 1 up through 9
5. If the map contains the number, append the number to outputStr.
6. Convert the outputStr to an integer.
7. Return the integer.
*/

#include <array>
#include <cctype>
#include <cmath>
#include <iterator>
#include <ostream>
#include <string>
#include <vector>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <iostream>
#include <array>
#include <sstream>
#include <cctype>
using namespace std;

int sortDigits(int intX){
    unordered_map<char, int> frequencyMap;
    string outputStr;
    string strX = to_string(intX);
    /* 
     * 1. Initialize frequencyMap<char, int> and outputStr.
     * 2. Convert input int into a string.
     * 3. Build up frequencyMap by looping over the string.
     */
    for (const char elementX : strX){
        if (frequencyMap.find(elementX) != frequencyMap.end()){
            frequencyMap[elementX] = frequencyMap[elementX] + 1;
        }
        if (frequencyMap.find(elementX) == frequencyMap.end()){
            frequencyMap[elementX] = 1;
        }
    }
    int iInt = 1;
    while (iInt < 10){
        char charX = static_cast<char>(iInt + '0');
        if (frequencyMap.find(charX) != frequencyMap.end()){
            while (frequencyMap[charX] > 0){
                outputStr += charX;
                frequencyMap[charX]--;
            }
        }
        iInt++;
    }
    int outputInt = stoi(outputStr);
    return outputInt;
}

void test(){
    int resultInt1 = sortDigits(8970);
    int resultInt2 = sortDigits(32445);
    int resultInt3 = sortDigits(10101);
    cout << "Result 1: " << resultInt1 << endl;
    cout << "Result 2: " << resultInt2 << endl;
    cout << "Result 3: " << resultInt3 << endl;
}

int main(){
    test();
    return 0;
}

/* 
Test results

Result 1: 789
Result 2: 23445
Result 3: 111

 */