#include <vector>
#include <ctime>
#include <cstdlib>
#include <iostream>
#include <algorithm>
using namespace std;
/*  
 *  Problem 3: Bubble Sort
 *
 *  Prompt:    Given an unsorted array/vector of integers, return the array/vector
 *             sorted using bubble sort.
 *
 *  Input:     {Array/vector}
 *  Output:    {Array/vector}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 */

void swap(vector<int> &inputVec, int xInt1, int xInt2){
    int value1Int = inputVec[xInt1];
    int value2Int = inputVec[xInt2];
    inputVec[xInt1] = value2Int;
    inputVec[xInt2] = value1Int;
}
// Time Complexity:
// Auxiliary Space Complexity:
vector<int> bubble(vector<int> inputVec) {
    if (inputVec.size() == 0){
        return {};
    }
    bool swappedToF = true;
    while (swappedToF){
        swappedToF = false;
        int startPtrInt = 0;
        int endPtrInt = inputVec.size() - 1;
        while (startPtrInt < endPtrInt){
            if (inputVec[startPtrInt] > inputVec[startPtrInt + 1]){
                swap(inputVec, startPtrInt, startPtrInt + 1);
                swappedToF = true;
            }
            startPtrInt++;
        }
        endPtrInt--;
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
    vector<int> inputVec2 = { 23, 13, 8, 5};
    vector<int> inputVec3 = {34, 55, 36, 2};
    vector<int> outputVec1 = bubble(inputVec1);
    vector<int> outputVec2 = bubble(inputVec2);
    vector<int> outputVec3 = bubble(inputVec3);
    printVector(outputVec1);
    printVector(outputVec2);
    printVector(outputVec3);
    return 0;
}