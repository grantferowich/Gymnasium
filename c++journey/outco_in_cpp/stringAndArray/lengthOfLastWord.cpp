/* Length of last word
Developed on September 12, 2023 */
#include <iostream>
#include <string> 
#include <vector>
#include <sstream>
using namespace std;
int lengthOfLastWord(string inputStr){
    vector<string> wordsVec;
    istringstream iss(inputStr);
    string wordStr;
    while (iss >> wordStr){
        wordsVec.push_back(wordStr);
    }

    int lastInt = wordsVec.size() - 1;
    return wordsVec[lastInt].size();
}

int main(){
    string inputStr1 = "Hello world";
    int outputInt1 = lengthOfLastWord(inputStr1);
    cout << "Result 1: (expect 5): " << outputInt1 << endl;
    return 0;
}