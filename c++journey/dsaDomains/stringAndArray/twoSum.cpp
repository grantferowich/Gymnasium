/* 

Grant Ferowich
Developed November 30, 2023. 

Two Sum

Given an array of numbers, and a target integer,
return the two numbers which sum together to equal the target.

If two numbers in the array do not sum together to
equal the target, return -1. 
 
Input 1: { 2 , 3, 5, 12}, 5
output: { 2, 3 }

Inputs: a vector of integers and an integer
output: a vector of integers

*/


#include <iostream>
#include <vector> 
using namespace std;

class Solution{
    vector<int> twoSum(vector<int> inputVec, int intX){

        return {}
    }
};

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
    Solution solutionX;
    vector<int> inputVec1 = { 2, 3, 5 };
    int intX1 = 5;
    vector<int> outputVec1 = solutionX.twoSum(inputVec1, intX1);
    printVector(outputVec1);
    return 0;
}