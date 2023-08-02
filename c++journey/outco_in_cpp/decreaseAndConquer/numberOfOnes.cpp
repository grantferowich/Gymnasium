 /*
  *
  *  Number of Ones
  *
  * *Given a sorted bit array/vector (values of either 0 or 1), determine the number of 1's in the array.*
  * Developed and tested the August 2, 2023.
  * **Parameters**
  * Input: arr {Array/vector of Integers}
  * Output: {Integer}
  *
  * **Constraints**
  * Time: O(logN)
  * Space: O(1)
  *
  * **Examples**
  * `[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] --> 8`
  * `[0, 0, 0] --> 0`
  * `[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] --> 7`
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
/* 
 * Check the number at the middle index
 * Is the number 0 *and* the number to the right a 1? 
 * then make a note of the location of the 0, as lastZeroInt
 * Return vector.length() - lastZeroInt + 1. 
 */
int numberOfOnes(vector<int> vecX){
    int lastZeroInt;
    int leftPtrInt = 0;
    int rightPtrInt = vecX.size() - 1;
    while (leftPtrInt <= rightPtrInt){
        int midPtrInt = floor((rightPtrInt + leftPtrInt) / 2);
        if (vecX[midPtrInt] == 0 && vecX[midPtrInt + 1] == 1){
            return vecX.size() - midPtrInt - 1;
        }
        if (vecX[midPtrInt] == 1){
            rightPtrInt = midPtrInt - 1;
        } else {
            leftPtrInt = midPtrInt + 1;
        }
    }
    return 0;
}

void test(){
    int resultInt1 = numberOfOnes({0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1}); // 8
    int resultInt2 = numberOfOnes({0, 0, 0}); // 0
    int resultInt3 = numberOfOnes({0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1}); // 7
    cout << "Result 1: " << resultInt1 << endl;
    cout << "Result 2: " << resultInt2 << endl;
    cout << "Result 3: " << resultInt3 << endl;
}

int main(){
    test();
    return 0;
}