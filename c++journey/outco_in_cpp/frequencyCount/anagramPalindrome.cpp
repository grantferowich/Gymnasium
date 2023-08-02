/* 
*  Anagram Palindrome
*  A palindrome is a word that is the same as its reversed. For example: "racecar"
*  and "noon" are palindromes because they match their reversed version
*  respectively. On the other hand, "cat" is not a palindrome because "cat"
*  does not equal "tac".
*
*  Parameters
*  Input: str {string}
*  Output: {bool}
*
*  Constraints
*
*  Assume the string only contains lowercase letters and no spaces.
*
*  Time: O(N)
*  Space: O(1)
*
*  Examples
*  `"carrace" --> true ("carrace" can be rearranged to "racecar")`
*  `"cat" --> false`
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
Anagram palindrome
1. Initialize a frequencyMap<char, int>
2. Built up the frequency map
3. count the number of key's with an odd value
4. If the number of keys with an odd value is greater than 1
return false.
5. Return true. 
 */
bool anagramPalindrome(string str){
    
    unordered_map<char, int> frequencyMap;
    for (char xChar : str){
        if (frequencyMap.find(xChar) != frequencyMap.end()){
            frequencyMap[xChar] = frequencyMap[xChar] + 1;
        }
        if (frequencyMap.find(xChar) == frequencyMap.end()){
            frequencyMap[xChar] = 1;
        }
    }
    int oddValuesInt = 0;
    for (auto keyValue : frequencyMap){
        if (keyValue.second % 2 != 0){
            oddValuesInt++;
        }
    }
    return oddValuesInt <= 1;
}

void test(){
    bool result1ToF = anagramPalindrome("carrace"); // 1
    cout << "Result 1: " << result1ToF << endl;
    bool result2ToF = anagramPalindrome("cat"); // 0
    cout << "Result 2: " << result2ToF << endl;
}

int main(){
    test();
    return 0;
}