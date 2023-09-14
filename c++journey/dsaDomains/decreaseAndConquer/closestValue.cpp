/*
* Closest Value
* Developed and tested the function on August 3, 2023. 
* Given a sorted bit array/vector of integers, and a target value, find the number in the array that is closest to the target.*
* 
* **Parameters**
* Input: arr {Array/vector of Integers}
* Input: target {Integer}
* Output: {Integer}
*
* **Constraints**
* If there are two numbers tied for the closest value, return the lowest value.
*
* Time: O(logN)
* Space: O(1)
*
* **Examples**
* `[1, 2, 3, 5, 5, 7, 9, 10, 11], 6 --> 5`
* `[1, 2, 3], 8 --> 3`
* `[1, 10, 22, 59, 67, 72, 100], 70 --> 72`
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
#include <climits>
using namespace std;
int closestValue(vector<int> vecX, int intX){
    int leftPtrInt = 0;
    int rightPtrInt = vecX.size() - 1;
    int differenceInt = INT_MAX;
    int minInt;
    while (leftPtrInt <= rightPtrInt){
        int midPtrInt = (rightPtrInt + leftPtrInt) / 2;
        int tempDiffInt = abs(intX - vecX[midPtrInt]);
        if (tempDiffInt < differenceInt){
            differenceInt = tempDiffInt;
            minInt = vecX[midPtrInt];
        }
        if (intX > vecX[midPtrInt]){
            leftPtrInt = midPtrInt + 1;
        } else {
            rightPtrInt = midPtrInt - 1;
        }
    }
    return minInt;
}
void test(){
    int resultInt1 = closestValue({ 1, 2, 3, 5, 5, 7, 9, 10, 11 }, 6);
    int resultInt2 = closestValue({ 1, 2, 3 }, 8);
    int resultInt3 = closestValue({ 1, 10, 22, 59, 67, 72, 100}, 70);
    cout << "Result 1: " << resultInt1 << endl;
    cout << "Result 2: " << resultInt2 << endl;
    cout << "Result 3: " << resultInt3 << endl;
}
int main(){
    test();
    return 0;
}