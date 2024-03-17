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

    return "";
}

int main(){
    string inputStr1 = "apple";
    string inputStr2 = "";
    string inputStr3 = "eat";
    string inputStr4 = "banana";
    string inputStr5 = "trash";
    string outputStr1 = pigLatin(inputStr1);
    string outputStr2 = pigLatin(inputStr2);
    string outputStr3 = pigLatin(inputStr3);
    string outputStr4 = pigLatin(inputStr4);
    string outputStr5 = pigLatin(inputStr5);
    cout << "Output str 1: " << outputStr1 << endl;
    cout << "Output str 2: " << outputStr2 << endl;
    cout << "Output str 3: " << outputStr2 << endl;
    cout << "Output str 4: " << outputStr2 << endl;
    cout << "Output str 5: " << outputStr2 << endl;
    return 0;
}