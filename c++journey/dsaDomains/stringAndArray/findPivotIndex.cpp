/* 
* 724. Find Pivot Index
* Easy
 
* Developed on March 9, 2024.

* Time complexity: O(n)
* Space complexity O(1)

* Given an array of integers nums, calculate the pivot index of this array.

* The pivot index is the index where the sum of all the numbers strictly
* to the left of the index is equal to the sum of all the numbers strictly
* to the index's right.

* inputVec1 = [ 2, 3, 4, 5]
* expected output : 2
* Why? At index 2, the numbers to the left of inputVec1[2] sum to 5
* and the numbers to the right of inputVec1[2] sum to 5.

* If the index is on the left edge of the array, 
* then the left sum is 0 because there are no elements to the left. 
* This also applies to the right edge of the array.

* Return the leftmost pivot index. If no such index exists, return -1.
*/
#include <string>
#include <vector> 
#include <iostream>
using namespace std;

int findThePivotIndex(vector<int> vec){

    if (vec.size() == 0 ){
        return -1;
    }
    if (vec.size() == 1){
        return 0;
    }
    int xInt = 1;
    int rightSumInt = 0;
    int leftSumInt = 0;
    // rightSumInt is initially the total sum
    while (xInt < vec.size()){
        rightSumInt += vec[xInt];
        xInt++;
    }

    xInt = 0; 
    while (xInt < vec.size()){
        if (leftSumInt == rightSumInt){
            return xInt;
        }
        leftSumInt += vec[xInt];
        rightSumInt -= vec[xInt + 1];
        xInt++;
    }
    return -1;

}

int main(){

    vector<int> inputVec1 = { 2, 3, 4, 5};
    int outputInt1 = findThePivotIndex(inputVec1);
    cout << "The pivot index of { 2, 3, 4, 5 } is " << to_string(outputInt1) << "." << endl;

    vector<int> inputVec2 = { 1, 7, 3, 6, 5, 6};
    int outputInt2 = findThePivotIndex(inputVec2);
    cout << "The pivot index of { 1, 7, 3, 6, 5, 6 } is " << outputInt2 << "." << endl;

    vector<int> inputVec3 = { 1 };
    int outputInt3 = findThePivotIndex(inputVec3);
    cout << "The pivot index of  { 1 } is " << outputInt3 << "." << endl;

    vector<int> inputVec4 = {};
    int outputInt4 = findThePivotIndex(inputVec4);
    cout << "The pivot index of { } is " << outputInt4 << "." << endl;
    return 0;
}