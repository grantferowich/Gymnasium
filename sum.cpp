 /*  Sum

 Given an array of integers, return the sum of all the integers.

 Parameters
 Input: arr {Array of ints}
 Output: {int}

 Examples
 [1, 2, 3, 4, 5] --> 15
 [0, 1, -1] --> 0
 [] --> 0

 Time Complexity:
 Auxiliary Space Complexity:

 */
#include <iostream>
#include <vector>


int sum(const std::vector<int>& vec){
    int sumInt = 0;
    for (int valueInt : vec){
        sumInt += valueInt;
    }
    return sumInt;
};

int test(){
    int resultInt1 = sum({1, 2, 3, 4, 5});
    std::cout << "Result 1: " << resultInt1 << std::endl;
    int resultInt2 = sum({});
    std::cout << "Result 2: " << resultInt2 << std::endl;
    int resultInt3 = sum({1, 1, 2, 3, 5, 8, 13, 21});
    std::cout << "Result 3: " << resultInt3 << std::endl;
    return 0;
};

int main(){
    test();
    return 0;
};