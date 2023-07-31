 /*  
 *Binary Search

 Given a sorted array and a target value, use binary search to return the index of the target in the input array.
 Return -1 if no such target is found.

 * Parameters
 Input: arr {Array of ints}
 Input: val {int}
 Output: {int}

 *Examples
 [1, 3, 4, 5, 8, 9], 5 --> 3
 [5, 7, 10, 12, 14], 7 --> 1
 [2, 4, 8, 9, 15], 3 --> -1

 * Time Complexity: O(logN)
 * Auxiliary Space Complexity:

 */

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int binarySearch(vector<int> vec, int targetInt) {
    int leftPtrInt = 0;
    int rightPtrInt = vec.size() - 1;
    

    while (leftPtrInt <= rightPtrInt){
        int middlePtrInt = (rightPtrInt + leftPtrInt) / 2;
        if (vec[middlePtrInt] == targetInt){
            return middlePtrInt;
        }
        if (targetInt > vec[middlePtrInt]){
            leftPtrInt = middlePtrInt + 1;
        }
        if (targetInt < vec[middlePtrInt]){
            rightPtrInt = middlePtrInt - 1;
        }
    }
    return -1;
}


/* 
 [1, 3, 4, 5, 8, 9], 5 --> 3
 [5, 7, 10, 12, 14], 7 --> 1
 [2, 4, 8, 9, 15], 3 --> -1

 */
int test(){
    int resultInt1 = binarySearch({1, 3, 4, 5, 8, 9}, 5);
    cout << "Result Integer 1: " << resultInt1 << endl;

    int resultInt2 = binarySearch({5, 7, 10, 12, 14}, 7);
    cout << "\nResult Integer 2: " << resultInt2 << endl;
    

    int resultInt3 = binarySearch({2, 4, 8, 9, 15}, 3);
    cout << "\nResult Integer 3: " << resultInt3 << endl;
    return 0;
}

int main(){
    test();
    return 0;
}

/* Test results 

Result Integer 1: 3

Result Integer 2: 1

Result Integer 3: -1

*/