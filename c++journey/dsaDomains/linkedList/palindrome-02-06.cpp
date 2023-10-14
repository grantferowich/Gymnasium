/* 
* Grant Ferowich
* Developed on October 11, 2023
* Cracking the Coding Interview
* Chapter 2, question 6
* Palindrome
* 
* Input1 = "cat" is "cat" a palindrome? No. Cat is not a palindrome. 
* The latters of the word cat spelled backwards do not return cat. 

* Input2 = "hannah" 
* Is hannah a palindrome? Hannah is a palindrome because the letters 
* hannah spelled backwards returns hannah.

* input3 = "lacrosse"
* Is lacrosse a palindrome? No. The output of spelling lacrosse backwards
* is not lacrosse. 
* The way to prove the word is a palindrome is to demonstrate the letters at the 
* distal ends of two moving pointers are the same. If the letters are ever dissimilar,
* the word is definitely not a palindrome. As long as the pointers to the distal ends are
* similar, the word is truly a palindrome. 
*
*
*/

#include <forward_list>
#include <iostream>
using namespace std;

class Solution{
    public:
    bool palindrome(forward_list<int> inputList){
        int frontInt = 0;
        int endInt = inputList.max_size();
        
        
    }
}

int main(){
    Solution solutionX;

    return 0;
}