 /*  Sum

 Given an array of integers, return the sum of all the integers.
 Successfully test the C++ implementation on July 31, 2023.
 Parameters
 Input: arr {Array of ints}
 Output: {int}

 Examples
 [1, 2, 3, 4, 5] --> 15
 [0, 1, -1] --> 0
 [] --> 0

 Time Complexity: O(N)
 Auxiliary Space Complexity: O(1)

 */
#include <iostream>
#include <vector>
using namespace std;
int sum(const vector<int>& vec){
    int sumInt = 0;
    for (int valueInt : vec){
        sumInt += valueInt;
    }
    return sumInt;
};
int test(){
    int resultInt1 = sum({1, 2, 3, 4, 5});
    cout << "Result 1: " << resultInt1 << endl;
    int resultInt2 = sum({});
    cout << "Result 2: " << resultInt2 << endl;
    int resultInt3 = sum({1, 1, 2, 3, 5, 8, 13, 21});
    cout << "Result 3: " << resultInt3 << endl;
    return 0;
};
int main(){
    test();
    return 0;
};