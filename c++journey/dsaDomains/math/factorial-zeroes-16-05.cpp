#include <climits>
#include <string>
#include <vector>
#include <algorithm>
#include <iostream>
#include <typeinfo>
using namespace std;

/* 
Factorial Zeroes CPP
CTCI 16.05

Started dev March 1, 2024. 

Write an algorithm which computes the number of trailing 
zeroes in n! factorial. 

const input = 5
output: 1
why? 5! is 120. There is one zero trailing the last
non-zero integer.

const input = 8
output: 1
why? 8! is 40320. There is one zero trailing the last non-zero
integer.
*/

class Solution{
    public:
    int factorialZeroes(int intX){
        int productInt = 1;
        computeIntFactorial(intX, productInt);
        int trailingZeroesInt = 0;
        string productStr = to_string(productInt);
        int zeroLocationInt = productStr.size() - 1;
        while (zeroLocationInt > -1){
            if (productStr[zeroLocationInt] == "0"){
                trailingZeroesInt++;
            }
            if (productStr[zeroLocationInt] != "0"){
                return trailingZeroesInt;
            }
            zeroLocationInt--;
        }
    }
    
    void computeIntFactorial(int intG, int &productInt){
        if (intG == 1){
            return;
        }
        productInt *= intG;
        computeIntFactorial(intG - 1, productInt);
    }
};

int main(){
    Solution solutionX;
    int intA = 5;
    int intB = 8;
    int intC = 15;
    int intD = 20;

    int outputIntA = solutionX.factorialZeroes(intA);
    int outputIntB = solutionX.factorialZeroes(intB);
    int outputIntC = solutionX.factorialZeroes(intC);
    int outputIntD = solutionX.factorialZeroes(intD);
    
    cout << "Output Int A: " << outputIntA << endl;
    cout << "Output Int B: " << outputIntB << endl;
    cout << "Output Int C: " << outputIntC << endl;
    cout << "Output Int D: " << outputIntD << endl;

    return 0;
}