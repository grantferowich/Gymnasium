/* 
605. Can Place Flowers

Started dev March 11, 2024
not done w/test

Easy
5.2K
878
Companies

You have a long flowerbed in which some of the plots are planted,
and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, 
where 0 means empty and 1 means not empty, and an integer n,
return true if n new flowers can be planted in the flowerbed 
without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

Input: 
arr = [1, 0, 0, 1, 0, 0, 1]
n = 1
output: false

Input:
arr =  [1, 0, 0, 0, 0, 0, 0, 1]
n = 2
output : true

Input:
flowerbedArr5 = [1,0,0,0,0,0,1];
nInt5 = 2 

The idea here is to count the number of sets of three consecutive 0's.
Maintain some capacityInt, which marks the number of available flower beds.
CapacityInt increments when three consecutive 0's are found. 
Consecutive0s is a thing I want to track.
If I have reached 3 consecutive 0s then I can increment capacityInt. 
After reaching 3 consecutive 0s, I want to reset the consecutive0s count back to 0. 
At the end I will return capcityInt >= n. 

*/

#include <cmath>
#include <cstddef>
#include <iostream>
#include <vector>
using namespace std;

bool canPlaceFlowers(vector<int> vec, int intX){
    int gInt = 0;
    while (gInt < vec.size()){
        if (vec[gInt] == 0 && 
        (vec[gInt - 1] == 0 || gInt - 1 < 0)
        && (vec[gInt + 1] == 0 || gInt + 1 > vec.size())){
            vec[gInt] = 1;
            intX--;
        }
        gInt++;
    }
    return intX <= 0;
}

int main(){
    vector<int> vec1 = { 1, 0, 0, 0, 1 };
    vector<int> vec2 = { 1, 0, 0, 0, 1 };
    vector<int> vec3 = { 1, 0, 0, 1, 0, 0, 1 };
    vector<int> vec4 = { 1, 0, 0, 0, 0, 0, 0, 1 };
    vector<int> vec5 = { 0, 0, 1, 0, 1 };

    bool output1ToF = canPlaceFlowers(vec1, 1);
    bool output2ToF = canPlaceFlowers(vec2, 2);
    bool output3ToF = canPlaceFlowers(vec3, 1);
    bool output4ToF = canPlaceFlowers(vec4, 2);
    bool output5ToF = canPlaceFlowers(vec5, 1);

    cout << "Result 1: " << output1ToF << endl;
    cout << "Result 2: " << output2ToF << endl;
    cout << "Result 3: " << output3ToF << endl;
    cout << "Result 4: " << output4ToF << endl;
    cout << "Result 5: " << output5ToF << endl;
    return 0;
}