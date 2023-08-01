/* 
*  Split String
* 'The cat and the hat.' 
* 'As soon as possible.' 
* 'It's a man, it's a plane, it's superman!' 
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

void printVector(const std::vector<string>& vec){
    for (string valueStr : vec){
        cout << valueStr << " ";
    }
    cout << endl;
}

int main(){
    vector<string> resultStr1 = splitString("Wake Forest University.");
    cout << "Result 1: " << endl;
    printVector(resultStr1);
    return 0;
}