/**
  * Character Mode
  * Developed on August 2, 2023.
  * Given a string, find the most frequent occurring letter(s) in the string
  *
  * Parameters
  * Input: string {string}
  * Output: {string}
  *
  * Constraints
  * If more than one letter is tied for the most frequent, return a string of all
  * the letters in one string.
  *
  * Upper case characters should count as lower case, and do not include spaces
  * ... as characters.
  *
  * Time: O(N)
  * Space: O(N)
  *
  * Examples
  * 'hello' --> 'l'
  * 'A walk in the park' --> 'ak'
  * 'noon' --> 'no'

  1. Initialize charMap<char, int>, string outputStr.
  2. Convert all characters to lower case.
  3. Loop over input str to build up charMap.
  4. Initialize mostFrequentChar; , mostFrequentInt = -Infinity; initialize -INFINITY.
  5. Loop over keys and values of charMap. 
        --> If the value is greater than mostFrequentInt, update mostFrequentInt.
  6. Loop over keys and values of charMap a second time.
        --> If the key's value is equal to the mostFrequentInt, append the char to outputStr.
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

string characterMode(string strX){

    // initialize charMap, outputStr
    unordered_map<char, int> charMap;
    string outputStr;

    char mostFrequentChar;
    double negInfinity = -INFINITY;
    double mostFrequentDbl = negInfinity;

    // Loop over inputStr to build up charMap
    for (char c : strX){
        c = tolower(c);
        if (charMap.find(c) != charMap.end()){
            charMap[c] = charMap[c] + 1;
        }
        if (charMap.find(c) == charMap.end() && c != ' '){
            charMap[c] = 1;
        }
        
    }

    /*  
     * 4. Loop over keys and values of charMap. 
     *       --> If the value is greater than mostFrequentInt, update mostFrequentInt.
    */
    for (auto& keyvalue : charMap){
        if (keyvalue.second > mostFrequentDbl){
            mostFrequentDbl = keyvalue.second;
        }
    }

    /*  
     * 5. Loop over keys and values of charMap a second time.
     *      -> If the key's value is equal to the mostFrequentInt, append the char to outputStr.
    */
    for (auto& keyvalue : charMap){
        if (keyvalue.second == mostFrequentDbl){
            outputStr += keyvalue.first;
        }
    }

    return outputStr;
}

void test(){
    string resultStr1 = characterMode("hello"); // "l"
    cout << "Result 1: " << resultStr1 << endl;
    string resultStr2 = characterMode("A walk in the park"); // "a"
    cout << "Result 2: " << resultStr2 << endl;
    string resultStr3 = characterMode("noon"); // "no"
    cout << "Result 3: " << resultStr3 << endl;
    string resultStr4 = characterMode("wake forest university"); // "e"
    cout << "Result 4: " << resultStr4 << endl;
}

int main(){
    test();
    return 0;
}