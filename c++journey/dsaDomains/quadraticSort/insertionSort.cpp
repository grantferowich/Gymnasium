/**
 *  Homework - Quadratic Sorts
 *
 *  Problem 1: Insertion Sort
 *
 *  Prompt:    Given an unsorted array/vector of integers, return the array/vector sorted
 *             using insertion sort.
 *
 *  Input:     {Array/vector}
 *  Output:    {Array/vector}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 *
 *
*/

#include <vector>
#include <ctime>
#include <cstdlib>
#include <iostream>
#include <algorithm>
using namespace std;

// Time Complexity:
// Auxiliary Space Complexity:

void swap(vector<int> &inputVec, int xInt1, int xInt2){
    int value1Int = inputVec[xInt1];
    int value2Int = inputVec[xInt2];
    inputVec[xInt1] = value2Int;
    inputVec[xInt2] = value1Int;
}
vector<int> insertion(vector<int> inputVec) {
  int xInt = 1;
  while (xInt < inputVec.size()){

    int yInt = xInt;
    while (yInt > 0 && inputVec[yInt] < inputVec[yInt - 1]){
        swap(inputVec, yInt, yInt -1);
        yInt--;
    }
    xInt++;
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
    vector<int> inputVec1 = {3, 9, 1, 4, 7};
    vector<int> outputVec1 = insertion(inputVec1);
    printVector(outputVec1);
    return 0;
}
