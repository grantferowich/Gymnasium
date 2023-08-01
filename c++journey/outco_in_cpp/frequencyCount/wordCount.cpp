/**
* Word Count
*
* Given a body of text, return a hash table of the frequency of each word.
*
* Parameters
* Input: sentence {string}
* Output: {unordered_map <string, int>}
*
* Constraints
*
* Capital and lower case versions of the same word should be counted is the same word.
*
* Remove punctuations from all words.
*
* Time: O(N)
* Space: O(N)
* Where N is the number of characters in the string.
*
* **Examples**
* 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
* 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
* 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
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
vector<string> splitString(string inputStr){
    istringstream iss(inputStr);
    vector<string> wordsVec;
    string word;
    while (iss >> word){
        wordsVec.push_back(word);
    }
    return wordsVec;
}
unordered_map<string, int> wordCount(string sentenceStr){
    unordered_map<string, int> wordMap;
    unordered_set<char> punctuationSet{ ';', '\'', ',',  '.', '!', '?' };
    string cleanSentenceStr;
    for (char character : sentenceStr){
        if (punctuationSet.find(character) == punctuationSet.end()){
            cleanSentenceStr += tolower(character);
        }
    }
    vector<string> wordsVec = splitString(cleanSentenceStr);
    for (string word : wordsVec){
        if (wordMap.find(word) != wordMap.end()){
            int frequencyInt = wordMap.count(word);
            wordMap[word] = frequencyInt + 1;
        }
        if (wordMap.find(word) == wordMap.end()){
            wordMap[word] = 1; 
        }
    }
    return wordMap;
}
void printMap(const unordered_map<string, int> wordMap){
    for (const auto& keyvalue : wordMap){
        cout << keyvalue.first << "=>" << keyvalue.second << endl;
    }
}
void test(){
    unordered_map<string, int> resultMap1 = wordCount("The cat and the hat.");
    cout << "Address of map1: " << &resultMap1 << endl;
    cout << "Result of map1: " << endl;
    printMap(resultMap1);
    unordered_map<string, int> resultMap2 = wordCount("As soon as possible.");
    cout << "Address of map2: " << &resultMap2 << endl;
    cout << "Result of map2: " << endl;
    printMap(resultMap2);
    unordered_map<string, int> resultMap3 = wordCount("It's a man, it's a plane, it's superman!");
    cout << "Address of map3: " << &resultMap3 << endl;
    cout << "Result of map3: " << endl;
    printMap(resultMap3);
}
int main(){
    test();
    return 0;
}