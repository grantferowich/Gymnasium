/* 
 * Grant Ferowich
 * URLify
 * Developed on September 14, 2023.
 * Cracking the Coding Interview: Chapter 1, problem 3.
 * convert a word like "chicago illinois north armerica" 
 * to "chicago%20illinois%20north%20america."
 * 
 */

#include <iostream> 
#include <string>
#include <sys/types.h>
#include <unordered_map>
#include <vector>
#include <chrono>
#include <iomanip> 
#include <stack>
using namespace std;
using namespace std::chrono;

class Solution{
    public:
        string URLify(string inputStr){
            string newStr = "%20";
            int xInt = 0;
            string outputStr = "";
            cout << "inputStr: " << inputStr << endl;
            for (char xChar:inputStr){
                if (xChar == ' '){
                    outputStr += newStr;
                } else {
                    outputStr += xChar;
                }
            }
            return outputStr;
        }
};

int main(){
    Solution solutionX;
    string inputStr1 = "chicago illinois north america";
    string outputStr1 = solutionX.URLify(inputStr1);
    cout << "Result 1: " << outputStr1 << endl;
    cout << "Result 1 size: " << to_string(outputStr1.size()) << endl;
    return 0;
}
