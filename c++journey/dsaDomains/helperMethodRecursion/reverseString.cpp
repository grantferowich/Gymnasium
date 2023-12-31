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
using namespace std;
/**
 * 
 *  2c. Reverse a string using Helper Method Recursion
 *
 *  Input:   string
 *  Output:  string
 *
 *  Example: String greeting = 'hello';
 *          ReverseString.compute(greeting) => 'olleh'
 */
class ReverseString {
    public:

      void compute(string str){
        string outputStr;
        traverse(str, (str.length() - 1), outputStr);
      };

    private: 

      void traverse(string str, int indexInt, string outputStr){
        if (indexInt < 0){
            cout << outputStr << endl;
            return;
        }
        outputStr.push_back(str[indexInt]);
        traverse(str, indexInt - 1, outputStr);
      };
      
};

int main(){
    ReverseString reverseStringInstance;
    reverseStringInstance.compute("wakeforest");
    reverseStringInstance.compute("hello");
    return 0;
}