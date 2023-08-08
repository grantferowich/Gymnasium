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
/**
 * 2g. Merge two sorted arrays using the Helper Method Recursion
 *
 * Input:   Two Integer Arrays, both sorted
 * Output:  Integer Array, sorted
 *
 * Example: vector<int> nums1{1, 4, 7};
 *          vector<int> nums2{2, 3, 6, 9};
 *
 *          Merge.compute(nums1, nums2) =>
 *          { 1, 2, 3, 4, 6, 7, 9 }
 */
class Merge {

  public:
    vector<int> compute(vector<int> vec1, vector<int> vec2) {
      vector<int> resultVec;
      int gInt = 0;
      int hInt = 0;
      while (gInt < vec1.size() && hInt < vec2.size()){
            int int1 = vec1[gInt];
            int int2 = vec2[hInt];
            if (int1 < int2){
                resultVec.push_back(int1);
                gInt++;
            }
            if (int1 >= int2){
                resultVec.push_back(int2);
                hInt++;
            }
      }
      if (vec1.size() > vec2.size()){
        vector<int> vec1remaining(vec1.begin() + gInt, vec1.end());
        resultVec.insert(resultVec.end(), vec1remaining.begin(), vec1remaining.end());
      }
      if (vec2.size() > vec1.size()){
        vector<int> vec2remaining(vec2.begin() + hInt, vec2.end());
        resultVec.insert(resultVec.end(), vec2remaining.begin(), vec2remaining.end());
      }
      
      return resultVec;
    }
};

void printVector(const vector<int>& vec){
    for (int valueInt : vec){
        cout << valueInt << " ";
    }
    cout << endl;
}

int main(){
    Merge mergeInstance;
    vector<int> resultVec1 = mergeInstance.compute({1, 4, 7}, {2, 3, 6, 9, 11});
    printVector(resultVec1);
    return 0;
}