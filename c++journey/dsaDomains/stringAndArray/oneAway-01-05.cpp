/* 
Grant Ferowich
One Away
Cracking the Coding Interview
Ch. 1 problem 5.


There are three types of edits that can be performed
on strings:
- insert a character
- remove a character
- replace a character
Given two strings, write a function to check if they are one 
or zero edits away.
 */
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution{
    public:
    bool oneAway(string str1, string str2){
        int numberDifferentInt = 0;
        int iInt = 0;
        int jInt = 0;
        while (iInt < str1.size() && jInt < str2.size()){
            char xChar = str1[iInt];
            char yChar = str2[jInt];
            if (xChar != yChar){
                numberDifferentInt++;
                if (str1.size() > str2.size()){
                    iInt++;
                } else {
                    jInt++;
                }
            } else {
                iInt++;
                jInt++;
            }
            if (numberDifferentInt > 1){
                return false;
            }
        }
        return numberDifferentInt <= 1;
    }

    string printOneAway(string str1, string str2){
        bool resultToF = oneAway(str1, str2);
        string resultStr = printToFToString(resultToF);
        return resultStr;
    }
    private:
    string printToFToString(bool inputToF){
        if (inputToF == 1){
            return "true";
        }
        if (inputToF == 0){
            return "false";
        }
        return "false";
}
};

 int main(){
    Solution solutionX;
    string str1 = "pale";
    string str2 = "ple";
    cout << "Result 1: " << solutionX.printOneAway(str1, str2) << ". Expect true." << endl;

    string str3 = "pales";
    cout << "Result 2: " << solutionX.printOneAway(str1, str3) << ". Expect true." << endl;

    string str4 = "bales";
    cout << "Result 3: " << solutionX.printOneAway(str1, str4) << ". Expect false." << endl;
    return 0;
 }