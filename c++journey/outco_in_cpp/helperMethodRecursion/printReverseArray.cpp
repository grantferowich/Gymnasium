/**
 *  2b. Given an integer array/vector, print each item backwards using Helper Method
 *      Recursion
 *
 *  Input:   arr/vector {Array/vector of ints}
 *  Output:  {void}
 *
 *  Example: vector<int> nums{1, 2, 3};
 *
 *          PrintReverse.compute(nums) =>
 *          3
 *          2
 *          1
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
class PrintReverse {

  public:
    static void compute(vector<int> vec) {
      traverse(vec, (vec.size() - 1));
    }

  private:
    static void traverse(vector<int> &vec, int indexInt) {
        cout << vec[indexInt] << endl;
     if (indexInt == 0){
        return;
     }
     traverse(vec, indexInt - 1);
    }
};

int main(){
  PrintReverse printReverseInstance;
  printReverseInstance.compute({1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
  return 0;
}