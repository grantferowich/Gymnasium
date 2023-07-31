/* 
* Most Frequent Occurrence
* 
* 
* 
* 
* Input string: "hello"
* Output char: "l"
* 
* Input string: "wake forest"
* Output char: "e" 
*
* Approach: 
* 1. Initialize the character map.
* 2. Loop over the input string.
* 3. If the character is in the character map.
*   ---> 4. Increment the frequency integer value.
* 5. If the character is not in the frequency map.
*   ---> 6. Set the frequency integer value to be 1, set the key as the character.
* 7. Set the first character in the string to be the mostFrequentChar.
* 8. Set the the mostFrequentInteger to be the frequency of the first character in the string.
* 9. Loop through the character map.
*   --> 10. If the integer value is greater than the mostFrequentInteger,
*       then set the mostFrequentChar to be the present character.
* 11. Return the mostFrequentChar.
* 
* time complexity: O(N) where n is the length of the str param
* space complexity: O(c) where c is the number of characters in the str
*/
#include <string>
#include <iostream>
#include <unordered_map>
using namespace std;
char mostFrequentOccurrence(const string& str){
    char mostFrequentChar;
    int mostFrequentInt;
    unordered_map<char, int> charMap;
    for (char character : str){
        // increment the frequency
        if (charMap[character] > 0){
            int valueInt = charMap[character];
            charMap[character] = valueInt + 1;
        }
        // set the frequency to be 1
        if (charMap[character] == 0){
            charMap[character] = 1;
        }
    }
    mostFrequentChar = str[0];
    mostFrequentInt = charMap.count(str[0]);
    for (const auto& kvp : charMap) {
        const char& keyChar = kvp.first;
        int frequencyInt = kvp.second;
        if (frequencyInt > mostFrequentInt){
            mostFrequentChar = keyChar;
        }
    }
    return mostFrequentChar;
}
void test(){
    char resultChar1 = mostFrequentOccurrence("hello");
    char resultChar2 = mostFrequentOccurrence("wake forest");
    cout << "Result 1: " << resultChar1 << endl;  // l
    cout << "Result 2: " << resultChar2 << endl;  // e
}
int main(){
    test();
    return 0;
}
/* Test results
Result 1: l
Result 2: e
*/