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
        traverse(str, (str.length() - 1));
      };
    private: 
      void traverse(string str, int indexInt){
        if (indexInt < 0){
            return;
        }
        cout << str[indexInt] << endl;
        traverse(str, indexInt - 1);
      };
};
int main(){
    ReverseString reverseStringInstance;
    reverseStringInstance.compute("wakeforest");
    return 0;
}