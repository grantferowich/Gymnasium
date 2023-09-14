/**
*  Anagram Pair
*
*  Given two strings, determine if the strings are anagrams of one another.
*
*  Two words are anagrams of one another if they contain the same letters.
*
*  Parameters
*  Input: str1 {string}
*  Input: str2 {string}
*  Output: {bool}
*
*  Constraints
*  With N as the length of the first string, and M as the length of the second string.
*
*  Time: O(N)
*  Space: O(N)
*
*  Examples
*  "cat", "act" --> true
*  "cat", "dog" --> false
*  "racecar", "aaccrres" --> false
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
/* 
 * 1. Initialize two maps, frequencyMap1<char, int> and frequencyMap2<char, int>
 * 2. If the length of the two strings is not equal,
 *     --> Return false. 
 * 3. Loop over str1 and str2 to build up frequencyMap1 and frequencyMap2.
 * 4. Loop the chars of str1.
 *     --> If the values of the the char in 
 */
bool anagramPair(string str1, string str2){
    if (str1.length() != str2.length()){
        return false;
    }
    unordered_map<char, int> frequencyMap1;
    unordered_map<char, int> frequencyMap2;

    for (const char c : str1){
        if (frequencyMap1.find(c) != frequencyMap1.end()){
            frequencyMap1[c] = frequencyMap1[c] + 1;
        }
        if (frequencyMap1.find(c) == frequencyMap1.end()){
            frequencyMap1[c] = 1;
        }
    }
    for (const char c : str2){
        if (frequencyMap2.find(c) != frequencyMap2.end()){
            frequencyMap2[c] = frequencyMap2[c] + 1;
        }
        if (frequencyMap2.find(c) == frequencyMap2.end()){
            frequencyMap2[c] = 1;
        }
    }
    for (char c : str1){
        if (frequencyMap1[c] != frequencyMap2[c]){
            return false;
        }
    }
    return true;
}

void test(){
    bool result1ToF = anagramPair("act", "cat");  // 1
    cout << "Result 1: " << result1ToF << endl;
    bool result2ToF = anagramPair("cat", "dog"); // 0
    cout << "Result 2: " << result2ToF << endl;
    bool result3ToF = anagramPair("racecar", "aarrcces"); // 0
    cout << "Result 3: " << result3ToF << endl;
}

int main(){
    test();
    return 0;
}