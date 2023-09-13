#include <iostream>
#include <string> 
#include <vector>
#include <sstream>
using namespace std;
/* 
Add to array form of integer
Developed Tues Sept 13, 2023.
Passed leetcode tests on Sept 13, 2023.
989. Add to Array-Form of Integer
Easy
3.3K
263
Companies
The array-form of an integer num is an array 
representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k,
return the array-form of the integer num + k.

 
Example 1:
Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

Example 2:
Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455

Example 3:
Input: num = [2,1,5], k = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021

*/

class Solution {
public:
    vector<int> addToArrayForm(vector<int>& inputVec, int kInt) {
       int carryInt = kInt;
       int xInt = inputVec.size() - 1;
       while (xInt >= 0 || carryInt > 0){
        if (xInt >= 0) {
            carryInt += inputVec[xInt];
            inputVec[xInt] = carryInt % 10;
        } else {
            inputVec.insert(inputVec.begin(), carryInt % 10);
        }
        carryInt /= 10;
        xInt--;
       }
       return inputVec;
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
    vector<int> inputVec1 = {1, 2, 0, 0};
    int aInt = 34;
    vector<int> outputVec1 = solutionX.addToArrayForm(inputVec1, aInt);

    vector<int> inputVec2 = { 2, 7, 4};
    int bInt = 181;
    vector<int> outputVec2 = solutionX.addToArrayForm(inputVec2, bInt);

    vector<int> inputVec3 = {2, 1, 5};
    int cInt = 806;
    vector<int> outputVec3 = solutionX.addToArrayForm(inputVec3, cInt);
    
    cout << "Result 1: ";
    printVector(outputVec1);
    cout << endl;

    cout << "Result 2: ";
    printVector(outputVec2);
    cout << endl;

    cout << "Result 3: ";
    printVector(outputVec3);
    cout << endl;
    return 0;
}