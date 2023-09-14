/*
 *     Evens
 *     Successfully tested evens on July 31, 2023.
 * 
 *     Given an array of integers, return an array of only the even values.
 *
 *     Parameters
 *     Input: arr {Array of Integers}
 *     Output: {Array of Integers}
 *
 *     Examples
 *     [1, 2, 3, 4, 5, 6] --> [2, 4, 6]
 *     [9, 83, 74] --> [74]
 *     [6, 4, 7, 9, 7, 8, 2, 4, 3] --> [6, 4, 8, 2, 4]
 *      [1, 1, 2, 3, 5, 8, 13, 21, 34] -> [2, 8, 34]
 *     Time Complexity: O(N)
 *     Auxiliary Space Complexity: O(N)
 */

#include <iostream>
#include <vector>
using namespace std;
vector<int> evens (const vector<int>& vec) {
    vector<int> outputVec;
    for (int valueInt : vec){
        if (valueInt % 2 == 0){
            outputVec.push_back(valueInt);
        }
    }
    return outputVec;
}

void printVector(const std::vector<int>& vec){
    for (int valueInt : vec){
        std::cout << valueInt << " ";
    }
    std::cout << std::endl;
}

int test(){
    std::vector<int> resultVec1 = evens({1, 2, 3, 4, 5, 6});
    std::cout << "Result 1: ";
    printVector(resultVec1);
    std::vector<int> resultVec2 = evens({9, 83, 74});
    std::cout << "Result 2: ";
    printVector(resultVec2);
    std::vector<int> resultVec3 = evens({6, 4, 7, 9, 7, 8, 2, 4, 3});
    std::cout << "Result 3: ";
    printVector(resultVec3);
    std::vector<int> resultVec4 = evens({1, 1, 2, 3, 5, 8, 13, 21, 34});
    std::cout << "Results 4: ";
    printVector(resultVec4);
    return 0; 
}

int main(){
    test();
    return 0;
}

/*  Test results 

Result 1: 2 4 6 
Result 2: 74 
Result 3: 6 4 8 2 4 
Results 4: 2 8 34 

*/