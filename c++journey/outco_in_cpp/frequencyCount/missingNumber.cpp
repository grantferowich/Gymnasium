/*
* Missing Numbers
*
* Given range of 1 to N and an array/vector of unique integers that are within that
* range, return the missing integers not found in the array.
*
* Parameters
* Input: n {int}
* Input: arr {Array/vector of ints}
* Output: {Array/vector of ints}
*
* Constraints
* Time: O(N)
* Space: O(N)
*
* Examples
* `4, [1, 4, 2] --> [3]`
* `8, [4, 7, 1, 6] --> [2, 3, 5, 8]`
* `6, [6, 4, 2, 1] --> [3, 5]`
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

void printVector(const std::vector<int>& vec){
    for (int valueInt : vec){
        cout << valueInt << " ";
    }
    cout << endl;
}

vector<int> missingNumbers(int numInt, vector<int> vec){
    unordered_map<int, int> intMap;
    vector<int> outputVec;
    for (int valueInt : vec){
        if (intMap.find(valueInt) != intMap.end()){
            intMap[valueInt] = intMap[valueInt] + 1;
        }
        if (intMap.find(valueInt) == intMap.end()){
            intMap[valueInt] = 1;
        }
    }
    int gInt = 1;
    while (gInt <= numInt){
        if (intMap.find(gInt) == intMap.end()){
            outputVec.push_back(gInt);
        }
        gInt++;
    }
    return outputVec;
}

void test(){
    vector<int> resultVec1 = missingNumbers(4, { 1, 2, 4 }); // 3
    cout << "Result 1: " << endl;
    printVector(resultVec1);

    vector<int> resultVec2 = missingNumbers(8, { 4, 7, 1, 6 }); // 2, 3, 5, 8
    cout << "Result 2: " << endl;
    printVector(resultVec2);

    vector<int> resultVec3 = missingNumbers(6, { 6, 4, 2, 1 }); // 3, 5
    cout << "Result 3: " << endl;
    printVector(resultVec3);
}

int main(){
    test();
    return 0;
}

/* 
Test results

Result 1: 
3 
Result 2: 
2 3 5 8 
Result 3: 
3 5 

 */