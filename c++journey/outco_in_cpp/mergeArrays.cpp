 /*  
 * Merge Arrays


 * Given two sorted arrays of integers, return a merged sorted array of both inputs.
 * Parameters
 * Input: arr1 {Array of ints}
 * Input: arr2 {Array of ints}
 * Output: {Array of ints}
 * Examples
 * [1, 3, 9], [2, 4, 8] --> [1, 2, 3, 4, 8, 9]
 * [12, 25, 40], [20, 37, 45] --> [12, 20, 25, 37, 40, 45]
 * [10, 13, 24], [12, 35] --> [10, 12, 13, 24, 35]
 * 
 * Time Complexity:
 * Auxiliary Space Complexity:
 */

#include <iostream>
#include <vector>
#include <iterator>
using namespace std;

vector<int> mergeArrays (const std::vector<int>& vec1, const std::vector<int>& vec2 ){
    vector<int> mergedVec;
    
    int gInt1 = 0;
    int gInt2 = 0;
    while (gInt1 < vec1.size() && gInt2 < vec2.size()){
        if (vec1[gInt1] < vec2[gInt2]){
            mergedVec.push_back(vec1[gInt1]);
            gInt1++;
        };
        if (vec2[gInt2] < vec1[gInt1]){
            mergedVec.push_back(vec2[gInt2]);
            gInt2++;
        };
    }
    

    return mergedVec;
}

void printVector(vector<int> vec){
    int gInt1 = 0;
    while (gInt1 < vec.size()){
        cout << vec[gInt1] << " ";
        gInt1++;
    };
};

int test(){
    vector<int> outputVector1 = mergeArrays({1 , 2, 13}, {4, 9, 23});
    cout << "Result 1:" << endl;
    printVector(outputVector1);
    return 0;
}

int main(){
    test();
    return 0;
}