/*
 * Letter Sort
 * 
 * Given a string of letters, return the letters in sorted order.
 * 
 * 
 * 
 * 
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `hello --> ehllo`
 * `whiteboard --> abdehiortw`
 * `one --> eno`
 * 
 * approach -> get the charCode of each letter
 * init a frequencyMap<charStr,frequencyInt>
 * init a charCodeMap<charStr, charCodeInt>
 * 
 */

#include <string>
#include <iostream>
using namespace std;

string letterSort(string inputStr){
    for (char charX: inputStr){
        charX = tolower(charX);
    }
    int letterArr[26] = { 0 };
    int xInt = 0;
    string outputStr = "";

    for (char charG: inputStr){
        int unicodeValueInt = static_cast<int>(charG) - 97;
        letterArr[unicodeValueInt]++;
    }

    int intG = 0;
 
    while (intG < 26){
        if (letterArr[intG] > 0){
            int charCodeInt = intG + 97;
            char charG = static_cast<char>(charCodeInt);
            outputStr += charG;
            letterArr[intG]--;
            if (letterArr[intG] > 0){
                intG--;
            }
        }
        intG++;
    }
    return outputStr;
};

int main(){
    string outputStr1 = letterSort("wakeforest");
    string outputStr2 = letterSort("hello");
    string outputStr3 = letterSort("one");
    cout << "OutputStr1: " << outputStr1 << endl;
    cout << "OutputStr2: " << outputStr2 << endl;
    cout << "OutputStr3: " << outputStr3 << endl;
    return 0;
}
