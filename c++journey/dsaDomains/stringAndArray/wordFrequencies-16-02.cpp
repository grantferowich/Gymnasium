/* 
Word Frequencies 
CTCI 16.02

Design a method to find the frequency of occurrences of any given word
in a book. What if we were running this algorithm multiple times?

Put a string into an array.
Remove exclamation points, commas, periods, apostraphes, dashes, and numbers.

const str1 = "wake forest university." => {"wake" => 1, "forest" => 1, "university"=> 1}
const str2 = "Sam I am, I am Sam, I am!" {"am"=>3, "i" => 3, "sam" => 2,}

*/

#include <cctype>
#include <unordered_map>
#include <string>
#include <iostream>
using namespace std;

class Solution{
    public:
    unordered_map<string, int>wordFrequencies(string inputStr){
        // convert entire string to lowercase
        unordered_map<string, int> outputMap;
        for (char &xChar: inputStr){
            xChar = tolower(xChar);
        }
        
        // remove all commas
        // remove all exclamations
        for (char *charX: inputStr){
            if (charX == "," || charX == "!" || charX == "."){
                charX = "";
            }
        }

        return outputMap;
    }
};

int main(){
    Solution solutionX;
    string inputStr1 = "wake forest university";
    string inputStr2 = "johns hopkins university";
    string inputStr3 = "Sam I am, I am Sam, I am!";

    unordered_map<string, int> map1 = solutionX.wordFrequencies(inputStr1);
    unordered_map<string, int> map2 = solutionX.wordFrequencies(inputStr2);
    unordered_map<string, int> map3 = solutionX.wordFrequencies(inputStr3);

    return 0;
}