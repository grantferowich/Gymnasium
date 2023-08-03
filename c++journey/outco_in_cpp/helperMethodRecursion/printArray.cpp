 /**
  *  2a. Print each integer in an array/vector in order using Helper Method Recursion
  *  Developed Print Array on August 3, 2023. 
  
  *  Input:   arr/vector {Array/vector of ints}
  *  Output:  {void}
  *
  *  Example: vector<int> nums{1, 2, 3};
  *
  *          printArray.compute(nums) =>
  *          1
  *          2
  *          3
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

class PrintArray{
    public: 
        static void compute(vector<int> vec){
            computeHelper(vec, 0);
        }
    private: 
        static void computeHelper(vector<int>& vec, int indexInt){
            cout << vec[indexInt] << endl;
            // base case
            if (indexInt == (vec.size() - 1)){
                return;
            }
            computeHelper(vec, indexInt + 1);
        }
};

int main(){
    PrintArray printArrayInstance;
    printArrayInstance.compute({1, 2, 3, 4, 5});
    return 0;
}

