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
#include <type_traits>
using namespace std;
/**
 * 2f. Given a base and an exponent, create a method to find the power using
 *     Helper Method Recursion
 * Developed on August 7, 2023. 
 * Input:   Two ints, base and positive exponent
 * Output:  int
 *
 * Example: Power.compute(3, 4) => 81
 */
class Power {

    public:
    
      int compute(int aInt, int bInt) {
        int totalInt = 1;
        multiply(aInt, totalInt, 1, bInt);
        return totalInt;
      }

    private: 

      void multiply(int intX, int& totalInt, int startInt, int powerInt ){
        if (startInt == powerInt){
            return;
        }
        totalInt = totalInt * intX;
        startInt++;
        multiply(intX, totalInt, startInt, powerInt);
      }

};

int main(){
    Power powerInstance;
    int resultInt1 = powerInstance.compute(3, 4);
    cout << "Result 1: " << resultInt1 << endl;
    return 0;
}