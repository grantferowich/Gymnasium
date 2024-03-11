/*
First Non-Repeat

Return the first character in the string
which is not a repeating character.

Input 1: 
inputStr1 = "aaaabcdebcdfg"
output = "e"
*/
#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;
char firstNonRepeat(string inputStr){
    if (inputStr.size() == 0){
        return '-';
    }
    unordered_map<char, int> charMap;
    for (char charX: inputStr){
        if (charMap.find(charX) != charMap.end()){
            int frequencyInt = charMap[charX];
            charMap[charX] = frequencyInt + 1;
        }
        if (charMap.find(charX) == charMap.end()){
            charMap[charX] = 1;
        }
    }
    for (char charX: inputStr){
        int frequencyInt = charMap[charX];
        if (frequencyInt == 1){
            return charX;
        }
    }
    return '-';
}
int main(){
    string inputStr1 = "aaaabcdebcdfg";
    string inputStr2 = "aaaa";
    char char1 = firstNonRepeat(inputStr1);
    char char2 = firstNonRepeat(inputStr2);
    cout << "The first non-repeat character is " << char1 << "." << endl;
    cout << "The second non-repeat character is " << char2 << "." << endl;
    return 0;
}