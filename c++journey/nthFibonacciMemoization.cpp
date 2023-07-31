/* 
Nth Fibonacci
Handle ~large~ inputs by storing the results 
of subproblems
*/
#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

int nthFibonacciMemoization(int gInt ){
    unordered_map<string, int> intMap;
    string keyStr = to_string(gInt);
    if (intMap.find(keyStr) != intMap.end()){
        return intMap[keyStr];
    }
    if (gInt < 2){
        return intMap[keyStr] = gInt;
    }
    return intMap[keyStr] = nthFibonacciMemoization(gInt - 1) + nthFibonacciMemoization(gInt - 2);
}
int main(){
    int resultInt1 = nthFibonacciMemoization(10);
    cout << "Result 1: " << resultInt1 << endl;
    int resultInt2 = nthFibonacciMemoization(20);
    cout << "Result 2: " << resultInt2 << endl;
    return 0;
}
/* Test results
Result 1: 55
Result 2: 6765
*/