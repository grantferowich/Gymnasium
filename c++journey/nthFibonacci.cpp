/* 
* Nth Fibonacci

nthFibonacci( integer 4)
n         0 1 2 3 4 5 6 7
fibonacci 0 1 1 2 3 5 8 13
 */

#include <iostream>
#include <ostream>
using namespace std;

int nthFibonacci(int gInt){
    if (gInt < 2){
        return gInt;
    }
    return nthFibonacci(gInt - 1) + nthFibonacci(gInt - 2);
}

void test(){
    int resultInt1 = nthFibonacci(4);
    cout << "Result 1: " << resultInt1 << endl;
    int resultInt2 = nthFibonacci(7);
    cout << "Result 2: " << resultInt2 << endl;
    int resultInt3 = nthFibonacci(40);
    cout << "Result 3: " << resultInt3 << endl;
}   

int main(){
    test();
    return 0;
}