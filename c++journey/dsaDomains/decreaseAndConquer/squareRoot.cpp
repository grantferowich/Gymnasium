/*
* Square Root
*
* Given a positive integer, find the square root.*
* Developed Aug 3, 2023
* **Parameters**
* Input: value {Double}
* Output: {Double}
*
* **Constraints**
* Do not use a native built in method.
* Ensure the result is accurate to 6 decimal places (0.000001)
*
* Time: O(logN)
* Space: O(1)
*
* **Examples**
* `4 --> 2.0`
* `98 --> 9.899495`
* `14856 --> 121.885192
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
#include <climits>
using namespace std;
double squareRoot(double valueDbl){
    double leftPtrDbl = 0.0;
    double rightPtrDbl = valueDbl;
    double resultDbl;
    while (leftPtrDbl <= rightPtrDbl){
        double midPtrDbl = (leftPtrDbl + rightPtrDbl) / 2.0;
        double squaredDbl = midPtrDbl * midPtrDbl;
        if (squaredDbl == valueDbl){
            return midPtrDbl;
        }
        if (squaredDbl < valueDbl){
            leftPtrDbl = midPtrDbl + 0.000000000001;
            resultDbl = leftPtrDbl;
        } else {
            rightPtrDbl = midPtrDbl - 0.00000000001;
        }
    }
    return round(resultDbl * 1000000000.0) / 1000000000.0;
}
void test(){
    double resultDbl1 = squareRoot(4.0); // 2
    double resultDbl2 = squareRoot(98.0); // 9.899495
    double resultDbl3 = squareRoot(14856.0); // 121.885192
    cout << "Result 1: " << resultDbl1 << endl;
    cout << "Result 2: " << resultDbl2 << endl;
    cout << "Result 3: " << resultDbl3 << endl;
}
int main(){
    test();
    return 0;
}