/* 
929. Unique Email Addresses
Easy
2.5K
306
Companies
Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

For example, "m.y+name@email.com" will be forwarded to "my@email.com".
It is possible to use both of these rules at the same time.

Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

 

Example 1:
Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

Example 2:
Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
Output: 3 


Dot in local name: "grant" and "g.rant" are the same 
Plus sign in local name: "grant" and "grant+ferowich" are the same.


*/
#include <cstddef>
#include <iostream>
#include <string>
#include <unordered_set>
#include <vector>
using namespace std;

class Solution {
public:
    int numUniqueEmails(vector<string>& emailsVec) {
        unordered_set<string> uniqueEmailSet;
        for (string emailStr : emailsVec){
            size_t atIndexInt = emailStr.find("@");
            string localNameStr = emailStr.substr(0, atIndexInt);
            string domainNameStr = emailStr.substr(atIndexInt + 1);
            string newLocalNameStr = "";
            // strip periods from localNameStr
            for (char xChar: localNameStr){
                if (xChar != '.'){
                    newLocalNameStr += xChar;
                }
            }
            int xInt = 0;
            while (xInt < newLocalNameStr.size()){
                if (newLocalNameStr[xInt] == '+'){
                    newLocalNameStr = newLocalNameStr.substr(0, xInt);
                    break;
                }
                xInt++;
            }
            string cleanEmailStr = newLocalNameStr + "@" + domainNameStr;
            uniqueEmailSet.insert(cleanEmailStr);
        }
        return uniqueEmailSet.size();
    }
};

int main(){
    Solution solutionX;
    vector<string> inputVec1 = {"test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"};
    int outputInt1 = solutionX.numUniqueEmails(inputVec1);
    cout << "Result 1: " << outputInt1 << ". (Expect 2.)" << endl;

    vector<string> inputVec2 = {"a@leetcode.com","b@leetcode.com","c@leetcode.com"};
    int outputInt2 = solutionX.numUniqueEmails(inputVec2);
    cout << "Result 2: " << outputInt2 << ". (Expect 3.)" << endl;

    vector<string> inputVec3 = {"jay@vscode.com","way@vscode.com","c@leetcode.com", "123@vscode.com"};
    int outputInt3 = solutionX.numUniqueEmails(inputVec3);
    cout << "Result 3: " << outputInt3 << ". (Expect 4.)" << endl;

    vector<string> inputVec4 = {"test.email+alex@leetcode.com","test.email.leet+alex@code.com"};
    int outputInt4 = solutionX.numUniqueEmails(inputVec4);
    cout << "Result 4: " << outputInt4 << ". (Expect 2.)" << endl;
    return 0;
}