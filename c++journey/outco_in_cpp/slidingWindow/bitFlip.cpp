#include <algorithm>
#include <cmath>
#include <vector>
#include <iostream>
#include <climits>
using namespace std;
 /*
 *  Problem 2: Bit Flip
 *
    Developed the function on August 15, 2023.
    
 *     Given an array of binary values (0 and 1) and N number of flips (convert
 *     a 0 to a 1), determine the maximum number of consecutive 1's that can be
 *     made.
 *
 *  Input: An Array of 1's and 0's, and an Integer N denoting the number of
 *         flips
 *  Output: Integer
 *
 *  Example: bitFlip([0,1,1,1,0,1,0,1,0,0], 2)
 *  Result: 7

 1. Expand while the number of available flips is greater than 0.
    -> if the number at the right edge is 0, decrement availableFlipsInt
 2. Contract when the number of available flips is 0.
    -> if the number at the left edge is 0, increment availableFlipsInt
 3. When to read the temporary solution?
    -> when the number of available flips is 0.
 4. When to change the ultimate solution?
    -> when the number of available flips is 0.
 5. What type of sliding window problem?
    -> Dynamically-sized, fast/slow sliding window.
 */

// Time Complexity:
// Auxiliary Space Complexity:
int BitFlip(vector<int> vec, int kInt) {
   int rightPtrInt = 0;
   int leftPtrInt = 0;
   int ultimateResultInt = INT_MIN;
   int flipsInt = 0;

    while (rightPtrInt < vec.size()){
        int rValueInt = vec[rightPtrInt];
        if (rValueInt == 0){
            flipsInt++;
        }
        while (flipsInt > kInt){
            int valueInt = vec[leftPtrInt];
            if (valueInt == 0){
                flipsInt--;
            }
            leftPtrInt++;
        }
        rightPtrInt++;
        if (rightPtrInt - leftPtrInt > ultimateResultInt){
                ultimateResultInt = rightPtrInt - leftPtrInt;
        }
    }
   return ultimateResultInt;

}

int main(){
    vector<int> vec1 = {0,1,1,1,0,1,0,1,0,0};
    int int1 = 2;
    int resultInt1 = BitFlip(vec1, int1);
    cout << "Result 1: " << resultInt1 << endl; // expect 7
    vector<int> vec2 = {0, 1, 0, 1, 0};
    int int2 = 1;
    int resultInt2 = BitFlip(vec2, int2);
    cout << "Result 2: " << resultInt2 << endl; // expect 3
    vector<int> vec3 = { 1, 1, 0, 1, 1};
    int int3 = 1;
    int resultInt3 = BitFlip(vec3, int3);
    cout << "Result 3: " << resultInt3 << endl; // expect 5
    return 0;
}