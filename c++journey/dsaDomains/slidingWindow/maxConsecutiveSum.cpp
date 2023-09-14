/*
 *  Homework - Dynamic Programming - Moving Window
 *  Developed on August 14, 2023. 
 */

#include <algorithm>
#include <cmath>
#include <vector>
#include <iostream>
#include <climits>
using namespace std;

 /*  Problem 1: Max Consecutive Sum
  *
  *  Prompt:    Given an array of integers find the sum of consecutive
  *             values in the array that produces the maximum value.
  *
  *  Input:     Unsorted array of positive and negative integers
  *  Output:    Integer (max consecutive sum)
  *
  *  Example:   input = [6, -1, 3, 5, -10]
  *             output = 13 (6 + -1 + 3 + 5 = 13)
  *
  */

// Time Complexity:
// Auxiliary Space Complexity:
int maxConsecutiveSum(vector<int> vec) {
   long long int localSumInt = INT_MIN;
   long long int ultimateSumInt = INT_MIN;
   int xInt = 0;
   while (xInt < vec.size()){
        localSumInt = max(static_cast<long long int>(vec[xInt]), localSumInt + vec[xInt]);
        ultimateSumInt = max(localSumInt, ultimateSumInt);
        xInt++;
   }
   return ultimateSumInt;
}

int main(){

    vector<int> vec1 = {6, -1, 3, 5, -10};
    int resultInt1 = maxConsecutiveSum(vec1);
    cout << "Result 1: " << resultInt1 << endl;
    vector<int> vec2 = {-2,1,-3,4,-1,2,1,-5,4};
    int resultInt2 = maxConsecutiveSum(vec2);
    cout << "Result 2: " << resultInt2 << endl;
    return 0;
}