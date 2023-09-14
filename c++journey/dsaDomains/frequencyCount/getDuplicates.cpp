/**
*  Get Duplicates
*  
*  Given an array of values, return only the values that have duplicates in the
*  array
*
*  Parameters
*  Input: arr {int array}
*  Output: {List of ints}
*
*  Constraints
*  Time: O(N)
*  Space: O(N)
*
*  Examples
*  [1, 2, 4, 2] --> [2]
*  [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
*  [1, 2, 3, 4] --> []
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

/* 
* 1. Initialize frequencyMap<int, int> and outputVec<int, int>.
* 2. Loop over input vector to build up the frequency map.
* 3. Loop through the frequencyMap.
*       --> if the key's frequency is 2 or higher,
*       --> append the key to the outputVec.
* 4. Return the outputVec.
 */
vector<int> getDuplicates(vector<int> vecX){
    vector<int> outputVec;
    unordered_map<int, int> frequencyMap;
    for (const int intX : vecX){
        if (frequencyMap.find(intX) != frequencyMap.end()){
            frequencyMap[intX] = frequencyMap[intX] + 1;
        }
        if (frequencyMap.find(intX) == frequencyMap.end()){
            frequencyMap[intX] = 1;
        }
    }
    for (const auto keyValue : frequencyMap){
        if (keyValue.second >= 2){
            outputVec.push_back(keyValue.first);
        }
    }
    return outputVec;
}

void printVector(const vector<int>& vec){
    for (int valueInt : vec){
        cout << valueInt << " ";
    }
    cout << endl;
}

void test(){
    vector<int> resultVec1 = getDuplicates({1, 2, 4, 2}); // {2}
    vector<int> resultVec2 = getDuplicates({2, 2, 3, 3, 3, 3, 4}); // {2, 3}
    vector<int> resultVec3 = getDuplicates({1, 2, 3, 4}); // {}
    vector<int> resultVec4 = getDuplicates({1, 1, 5, 5, 8, 8}); // {1, 5, 8}
    cout << "Result 1: " << endl;
    printVector(resultVec1);
    cout << "Result 2: " << endl;
    printVector(resultVec2);
    cout << "Result 3: " << endl;
    printVector(resultVec3);
    cout << "Result 4: " << endl;
    printVector(resultVec4);
}   

int main(){
    test();
    return 0;
}
/* Test results
Result 1: 
2 
Result 2: 
3 2 
Result 3: 

Result 4: 
8 5 1  */