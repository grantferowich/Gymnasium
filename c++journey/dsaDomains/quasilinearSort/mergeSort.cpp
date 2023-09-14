/**
 *  Homework - Quasilinear Sorts
 *  Developed on Friday August 25, 2023. 
 *
 *  Problem 1: Mergesort
 *
 *  Prompt:    Given an unsorted array/vector of integers, return the array/vector
 *             sorted using mergesort.
 *
 *  Input:     {Array/vector}
 *  Output:    {Array/vector}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 */

#include <vector>
#include <iostream>
#include <algorithm> // for copy()
#include <iterator>
#include <string>
using namespace std;

 // Worst Time Complexity:
 // Worst Total (Call Stack + Auxiliary) Space Complexity:
 // Average Time Complexity:
 // Average Total (Call Stack + Auxiliary) Space Complexity:
 // Stability:

vector<int> merge(vector<int>& leftVec, vector<int>& rightVec){
    vector<int> outputVec;
    int leftIndexInt = 0;
    int rightIndexInt = 0;

    while (leftIndexInt < leftVec.size() && rightIndexInt < rightVec.size()){
        if (leftVec[leftIndexInt] < rightVec[rightIndexInt]){
            outputVec.push_back(leftVec[leftIndexInt]);
            leftIndexInt++;
        } else {
            outputVec.push_back(rightVec[rightIndexInt]);
            rightIndexInt++;
        }
    }
    while (leftIndexInt < leftVec.size()){
        outputVec.push_back(leftVec[leftIndexInt]);
        leftIndexInt++;
    }
    while (rightIndexInt < rightVec.size()){
        outputVec.push_back(rightVec[rightIndexInt]);
        rightIndexInt++;
    }
    return outputVec;
}

vector<int> mergeSort(vector<int> inputVec) {
    if (inputVec.size() == 1){
        return inputVec;
    }
    int midPtrInt = inputVec.size() / 2;
    vector<int> leftVec(inputVec.begin(), inputVec.begin() + midPtrInt);
    vector<int> rightVec(inputVec.begin() + midPtrInt, inputVec.end());
    return merge(mergeSort(leftVec), mergeSort(rightVec));
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
    vector<int> vec1 = {12, 5, 23, 42, 8, 19, 27};
    vector<int> sortedVec1 = mergeSort(vec1);
    printVector(sortedVec1);
    return 0;
}