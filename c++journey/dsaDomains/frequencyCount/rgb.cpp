/**
 * RGB Set
 * Successfully tested and developed function on August 1, 2023.

 * Given a string of characters where each character is either 'r', 'g', or 'b',
 * determine the number of complete sets of 'rgb' that can be made with the
 * characters.
 *
 * Parameters
 * Input: str {string}
 * Output: {int}
 *
 * Constraints
 * Time: O(N)
 * Space: O(1)
 *
 * Examples
 * `'rgbrgb' --> 2`
 * `'rbgrbrgrgbgrrggbbbbrgrgrgrg' --> 7`
 * `'bbrr' --> 0`
 * * Approach
 1. Initialize a character map <char, int>;
 2. Count the number of rs, bs, and gs;
 3. Take the minimum number of charMap['r'], charMap['g'], charMap['b'];
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
using namespace std;
int rgb(string str){
    unordered_map<char, int> charMap;
    for (char c : str){
        if (charMap.find(c) != charMap.end()){
            charMap[c] = charMap[c] + 1;
        }
        if (charMap.find(c) == charMap.end()){
            charMap[c] = 1;
        }
    }
    int minimumInt = min(min(charMap['r'], charMap['g']), charMap['b']);
    return minimumInt;
}
void test(){
    int resultInt1 = rgb("rgbrgb");
    cout << "Result 1: " << resultInt1 << endl;
    int resultInt2 = rgb("rbgrbrgrgbgrrggbbbbrgrgrgrg");
    cout << "Result 2: " << resultInt2 << endl;
    int resultInt3 = rgb("bbrr");
    cout << "Result 3: " << resultInt3 << endl;
}
int main(){
    test();
    return 0;
}