/*  */
/*
* Greater Values
*
* *Given a sorted array/vector of integers, and a target value return the number of values greater the target.*
*
* **Parameters**
* Input: arr {Array/vector of Integers}
* Input: target {Integer}
* Output: {Integer}
*
* **Constraints**
*
* Time: O(logN)
* Space: O(1)
*
* **Examples**
* `[1, 2, 3, 5, 5, 7, 9, 10, 11], 5 --> 4`
* `[1, 2, 3], 4 --> 0`
* `[1, 10, 22, 59, 67, 72, 100], 13 --> 5`
*
*/
#include <array>
#include <cmath>
#include <functional>
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
int greaterValues(vector<int> vecX, int targetInt){
    int leftPtrInt = 0;
    int rightPtrInt = vecX.size() - 1;
    while (leftPtrInt <= rightPtrInt){
        int midPtr = (rightPtrInt + leftPtrInt) / 2;
        if (vecX[midPtr] > targetInt){
            return vecX.size() - midPtr + 1;
        }
        if (vecX[midPtr] <= targetInt){
            leftPtrInt = midPtr + 1;
        } else {
            rightPtrInt = midPtr - 1;
        }
    }
    return 0;
}
void test(){
    int resultInt1 = greaterValues({ 1, 2, 3, 5, 5, 7, 9, 10, 11 }, 5); // 4
    int resultInt2 = greaterValues({ 1, 2, 3 }, 4); // 0
    int resultInt3 = greaterValues({ 1, 10, 22, 59, 67, 72, 100 }, 13); // 5
    cout << "Result 1: " << resultInt1 << endl;
    cout << "Result 2: " << resultInt2 << endl;
    cout << "Result 3: " << resultInt3 << endl;
}

int main(){
    test();
    return 0;
}