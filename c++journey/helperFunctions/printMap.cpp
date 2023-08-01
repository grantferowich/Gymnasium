#include <unordered_map>
#include <iostream>
#include <string>
using namespace std;
void printMap(const unordered_map<string, int> wordMap){
    for (const auto& keyvalue : wordMap){
        cout << keyvalue.first << "=>" << keyvalue.second << endl;
    }
}