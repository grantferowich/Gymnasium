/* 
Successfully tested the function on July 30, 2023.
 */
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbersVector = { 1, 2, 34, 1, 3, 5, 8, 13, 21};
    // sorts from smallest to largest
    std::sort(numbersVector.begin(), numbersVector.end());
    for (int iInt : numbersVector) {
        std::cout << iInt << " ";
    }
    return 0;
}
