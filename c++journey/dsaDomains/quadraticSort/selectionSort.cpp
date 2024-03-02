#include <climits>
#include <cmath>
#include <vector>
#include <ctime>
#include <cstdlib>
#include <iostream>
#include <algorithm>
using namespace std;
/*  *  Problem 2: Selection Sort
 *
 *  Prompt:    Given an unsorted array/vector of integers, return the array/vector
 *             sorted using selection sort.
 *
 *  Input:     {Array/vector}
 *  Output:    {Array/vector}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 * */

void swap(vector<int> &inputVec, int xInt1, int xInt2){
    int value1Int = inputVec[xInt1];
    int value2Int = inputVec[xInt2];
    inputVec[xInt1] = value2Int;
    inputVec[xInt2] = value1Int;
}
// Time Complexity:
// Auxiliary Space Complexity:
vector<int> selection(vector<int> inputVec) {
  if (inputVec.size() == 0){
    return {};
  }
  int keyInt = 0;
  int xInt = 0;
  while (keyInt < inputVec.size()){
    xInt = keyInt;
    int minLocationInt;
    int minInt = INT_MAX;
    while (xInt < inputVec.size()){
        int currentValueInt = inputVec[xInt];
        if (currentValueInt < minInt){
        minInt = currentValueInt;
        minLocationInt = xInt;
        }
        xInt++;;
    }
    swap(inputVec, keyInt, minLocationInt);
    keyInt++;
  }
  return inputVec;
}

void printVector(const vector<int>& vec){
    cout << "{ ";
    int xInt = 0;
    while (xInt < vec.size()){
        int valueInt = vec[xInt];
        if (xInt < vec.size() - 1){
            cout << valueInt << ", ";
        } 
        if (xInt == vec.size() - 1){
            cout << valueInt;
        }
        xInt++;
    }
    cout << " }" << endl;
}

int main(){
    vector<int> inputVec1 = { 3, 9, 1, 4, 7};
    vector<int> inputVec2 = { 23, 13, 8, 5 };
    vector<int> inputVec3 = { 34, 55, 36, 2};
    vector<int> outputVec1 = selection(inputVec1);
    vector<int> outputVec2 = selection(inputVec2);
    vector<int> outputVec3 = selection(inputVec3);
    cout << "Result 1: " << endl;
    printVector(outputVec1); 
    cout << "Result 2: " << endl;
    printVector(outputVec2);
    cout << "Result 3: " << endl;
    printVector(outputVec3);
}