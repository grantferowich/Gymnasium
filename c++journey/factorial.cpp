 /*  
 * Factorial

 * Given an input integer n, return the n factorial value.

 * Parameters
 * Input: n {int}
 * Output: {int}

 * Examples
 * 5  --> 120 (5 * 4 * 3 * 2 * 1)
 * 1 --> 1 (1)
 * 9 --> 362880 (9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)

 Time Complexity: O(N)
 Auxiliary Space Complexity: O(1)

 */
#include <iostream>
using namespace std;

int multiply (int outputInt, int multiplicandInt){
    if (multiplicandInt == 0){
        return 0;
    }
    if (multiplicandInt == 1){
        return outputInt;
    }
    outputInt = outputInt * multiplicandInt;
    return multiply(outputInt, multiplicandInt - 1);
}


int factorial(int gInt){
    return multiply(1, gInt);
}

int test(){
    int resultInt1 = factorial(5); // expect 120
    cout << "Result 1: " << resultInt1 << endl;
    int resultInt2 = factorial(1);
    cout <<"\nResult 2: " << resultInt2 << endl;
    int resultInt3 = factorial(9);
    cout <<"\nResult 3: " << resultInt3 << endl;
    return 0;
}

int main(){
    test();
    return 0;
}