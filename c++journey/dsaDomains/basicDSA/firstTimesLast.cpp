/* 
* First times last
* Multiply the first integer in the vector by the last integer in the vector.

Input vector: [4, 2, 3,] 
Output integer: 12

Input vector: [7, 5, 10, 11]
Output integer: 77

Completed testing on July 31, 2023.



*/
#include <iostream>
#include <vector>
using namespace std;

int firstTimesLast (vector<int> vec) {
    int firstInt = vec[0];
    int lastInt = vec[vec.size() - 1];
    return firstInt * lastInt;
}

void test(){
    int resultInt1 = firstTimesLast({ 4, 2, 3 }); // expect 12
    cout << "Result 1: " << resultInt1 << endl;
    int resultInt2 = firstTimesLast({7, 10, 14, 11}); // expect 77
    cout << "Result 2: " << resultInt2 << endl;
}

int main(){
    test();
    return 0;
}