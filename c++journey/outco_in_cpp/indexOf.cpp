/*
 *     Index Of
 *
 *     Given an array of integers and a target value, return the index of the first
 *     element that matches the target value. If there are no matches, return -1.
 *
 *     Parameters
 *     Input: arr {Array of Integers}
 *     Input: target {Integer}
 *     Output: {Integer}
 *
 *     Examples
 *     [1, 2, 3, 4, 5, 6], 5 --> 4
 *     [9, 83, 74], 8 --> -1
 *     [6, 4, 7, 9, 7, 8, 2, 4, 3], 7 --> 2
 *
 *     Time Complexity:
 *     Auxiliary Space Complexity:
 */
#include <iostream>
#include <vector>

int findIndexOf(const std::vector<int>& vect, int targetInt) {
    int indexInt = 0;
    for (int valueInt : vect){
        if (valueInt == targetInt){
            return indexInt;
        }
        indexInt++;
    }
    return -1;
}

int test(){
    int resultInt1 = findIndexOf({1, 2, 3, 4, 5, 6}, 5); 
    int resultInt2 = findIndexOf({9, 83, 74}, 8);
    int resultInt3 = findIndexOf({6, 4, 7, 9, 7, 8, 2, 4, 3}, 7);
    std::cout << "Result 1: " << resultInt1 << std::endl;
    std::cout << "Result 2: " << resultInt2 << std::endl;
    std::cout << "Result 3: " << resultInt3 << std::endl;
    return 0;
}

int main(){
    test();
    return 0;
}