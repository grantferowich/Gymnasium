/* 

Longest Consecutive Sequence

Medium

Given an unsorted array of integers nums, 
return the length of the longest consecutive
elements sequence.

*/
#include <unordered_set>
#include <vector> 
#include <iostream> 
using namespace std;

int longestConsecutiveSequence(vector<int> &inputVec){
    unordered_set<int>setG(inputVec.begin(), inputVec.end());
    int longestSequenceInt = 0;
    for (auto &intG: setG){
        if (!setG.count(intG - 1)){
            int lengthInt = 1;
            while (setG.count(intG + lengthInt)){
                lengthInt++;
                longestSequenceInt = max(lengthInt, longestSequenceInt);
            }
        }
    }
    return longestSequenceInt;
}

int main(){
    vector<int> vec1 = { 100, 4, 200, 1, 3, 2 };
    // expect the longest consecutive sequence to be 
    // 4: { 1, 2, 3, 4}
    int outputInt1 = longestConsecutiveSequence(vec1);
    cout << "Output Int 1: " << outputInt1 << endl;
    return 0;
}