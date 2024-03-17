/* 
* Pig latin translation uses the following rules:
* - for words that start with a vowel, add 'yay' to the end
* - for words that start with a nonvowel,
* move all letters before the first vowel to the end of the word and add 'ay'

* input: a word
* output: a word 
* constraints: O(N) run time, O(N) space complexity
* edge cases: return "" for empty strings

* 
*/
#include <vector> 
#include <iostream>
using namespace std;

string pigLatin(string inputStr){
    string vowelsStr = "aeiouy";
    // words which start with vowel
    for (char &charG: vowelsStr){
        // cout << "inputStr..." << inputStr << endl;
        // cout << "charG.." << charG << endl;
        // cout << "inputStr[0].." << inputStr[0] << endl;
        if (charG == inputStr[0]){
            // add 'yay' to the end
            return inputStr+"yay";
        }
    }
    // words which start with consonant
    int intG = 0;
    while (intG < inputStr.size()){
        for (char charG: vowelsStr){
            // found the first vowel
            if (inputStr[intG] == charG){
                // chop the string from the start until the letter before the first
                // consonant
                string fragmentStr = inputStr.substr(0, intG);
                // chop the string from the vowel to the end of the string
                string mainStr = inputStr.substr(intG);
                // append the fragment to the main string with "ay"
                return mainStr + fragmentStr + "ay";
            }
        }
        intG++;
    }
    return "";
}

int main(){
    string inputStr1 = "apple";
    string inputStr2 = "";
    string inputStr3 = "eat";
    string inputStr4 = "banana";
    string inputStr5 = "trash";
    string inputStr6 = "yellow";
    string inputStr7 = "why";

    string outputStr1 = pigLatin(inputStr1);
    string outputStr2 = pigLatin(inputStr2);
    string outputStr3 = pigLatin(inputStr3);
    string outputStr4 = pigLatin(inputStr4);
    string outputStr5 = pigLatin(inputStr5);
    string outputStr6 = pigLatin(inputStr6);
    string outputStr7 = pigLatin(inputStr7);

    cout << "Output str 1: " << outputStr1 << endl;
    cout << "Output str 2: " << outputStr2 << endl;
    cout << "Output str 3: " << outputStr3 << endl;
    cout << "Output str 4: " << outputStr4 << endl;
    cout << "Output str 5: " << outputStr5 << endl;
    cout << "Output str 6: " << outputStr6 << endl;
    cout << "Output str 7: " << outputStr7 << endl;
    return 0;
}