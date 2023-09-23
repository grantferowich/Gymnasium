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
            int kInt = inputStr.size() - 1;
            while (kInt >= 0){
                if (inputStr[kInt] == ' '){
                    inputStr.erase(inputStr[kInt]);
                } else {
                    break;
                }
                kInt--;
            }
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
    cout << "Result 1 size: " << outputStr1.size();
    string inputStr2 = "chicago illinois north america ";
    string outputStr2 = solutionX.URLify(inputStr2);
    cout << "Result 2: " << outputStr2 << endl;
    cout << "Result 2 size: " << outputStr2.size();
    return 0;
}
