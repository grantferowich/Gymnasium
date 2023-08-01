/**
 *
 * Unique
 *
 * Given an array/vector of integers, return an array/vector with all duplicates removed.*
 *
 * Parameters
 * Input: arr {array/vector of Integers}
 * Output: {array/vector of Integers}
 *
 * Constraints
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
 * [1, 1, 2, 2, 3, 3]' --> [1, 2, 3]
 * [1, 2, 3, 1, 2] --> [1, 2, 3]
 */

#include <array>
#include <cmath>
#include <iterator>
#include <string>
#include <vector>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <iostream>
#include <array>
using namespace std;

vector<int> unique(vector<int> vec){
    unordered_set<int> uniquesSet;
    for (int valueInt : vec){
        uniquesSet.insert(valueInt);
    }
    vector<int> uniquesVec;
    uniquesVec.reserve(uniquesSet.size());
    copy(uniquesSet.begin(), uniquesSet.end(), back_inserter(uniquesVec));
    return uniquesVec;
}   

void test(){
    vector<int> resultVec1 = unique({1, 1, 2, 2, 3, 3, 4, 4}); // expect 1,2,3,4,5
    cout << "Result vector 1: " << endl;
    for (int valueInt : resultVec1){
        cout << valueInt << " ";
    }
    vector<int> resultVec2 = unique({1, 2, 3, 1, 2}); // expect 1,2,3,
    cout << "\nResult vector 2: " << endl;
    for (int valueInt : resultVec2){
        cout << valueInt << " ";
    }
}

int main(){
    test();
    return 0;
}