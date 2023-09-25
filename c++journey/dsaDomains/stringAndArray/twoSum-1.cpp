/* 
Grant Ferowich
September 23, 2023

1. Two Sum
Easy
51.8K
1.7K
Companies
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 */
 #include <iostream>
 #include <vector>
 #include <string> 

 using namespace std;
class Solution {
public:
    vector<int> twoSum(vector<int>& numsVec, int targetInt) {
        unordered_map<int, int> intMap;
        for (int valInt: numsVec){
            intMap[valInt] = targetInt - valInt;
        }
        for (auto &pair: intMap){
            int valInt = targetInt - pair.first;
            if (intMap.find(valInt) != intMap.end()){
                int int1 = find(numsVec.begin(), numsVec.end(), valInt) - numsVec.begin();
                int int2 = find(numsVec.begin(), numsVec.end(), pair.first) - numsVec.begin();
                cout << "Int 1.." << int1 << endl;
                cout << "Int 2.." << int2 << endl;
                return {int1, int2};
            }   
        }
        return {};
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
    vector<int> inputVec1 = {3, 3, 8};
    int int1 = 11;
    // expect {0, 2} or {1, 2}
    Solution solutionX;
    vector<int> ouputVec1 = solutionX.twoSum(inputVec1, int1);
    cout << "Result 1: ";
    printVector(ouputVec1);
    return 0;
}