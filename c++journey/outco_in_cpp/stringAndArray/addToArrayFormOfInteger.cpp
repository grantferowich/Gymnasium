#include <iostream>
#include <string> 
#include <vector>
#include <sstream>
using namespace std;
/* 
Add to array form of integer
Developed Tues Sept 12, 2023.
This solution does not work for sympototically large numbers.

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
        long long gInt = 0;
        vector<int> outputVec;
        for (int valueInt: inputVec){
            gInt = gInt * 10 + valueInt;
        }   
        long long outputInt = gInt + kInt;
        
        while (outputInt > 0){
            // grab the digit in the one spot
            int digit = outputInt % 10;
            outputVec.insert(outputVec.begin(), digit);
            // evict the digit in the one spot
            outputInt = outputInt / 10;
        }
        return outputVec;;
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
    Solution solution;
    vector<int> inputVec1 = { 1, 2, 3, 4};
    int int1 = 34;
    vector<int> outputVec1 = solution.addToArrayForm(inputVec1, int1);
    cout << "Result 1: ";
    printVector(outputVec1);
    return 0;
}