/**
  * Letter Sort
  *
  * Given a string of lowercase letters, return the letters in sorted order.
  *
  * Parameters
  * Input: str {string}
  * Output: {string}
  *
  * Constraints
  * Time: O(N)
  * Space: O(N)
  *
  * Examples
  * `hello --> ehllo`
  * `whiteboard --> abdehiortw`
  * `one --> eno`

  So initialize an charArray with 26 characters filled with 0s.
  Loop over the input string.
  Find the index to update by doing the Unicode value less 26.
  Increment the number at the index by 1.
  Loop through the 
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

void printVector(const vector<int>& vec){
    for (int valueInt : vec){
        cout << valueInt << " ";
    }
    cout << endl;
}

string letterSort(string wordStr){
    vector<int> alphabetVec(26, 0);
    string outputStr;
    for (char elementChar : wordStr){
        elementChar = tolower(elementChar);
        // get the unicode of the element
        int unicodeInt = static_cast<int>(elementChar);
        // increment the value at the index given by the unicode value - 95;
        int indexInt = unicodeInt - 95;
        alphabetVec[indexInt] += 1;
    }
    printVector(alphabetVec);
    int gInt = 0;
    for (int valueInt : alphabetVec){
        while (valueInt > 0){
            // convert unicode int to character
            char charX = static_cast<char>(gInt + 95);
            outputStr += charX;
            valueInt--;
        }
        gInt++;
    }
    
    return outputStr;
}

void test(){
    string resultStr1 = letterSort("hello");
    cout << "Result 1: " << resultStr1 << endl;
    string resultStr2 = letterSort("whiteboard");
    cout << "Result 2: " << resultStr2 << endl;
    string resultStr3 = letterSort("one");
    cout << "Result 3: " << resultStr3 << endl;
    string resultStr4 = letterSort("wake forest");
    cout << "Result 4: " << resultStr4 << endl;
}

int main(){
    test();
    return 0;
}