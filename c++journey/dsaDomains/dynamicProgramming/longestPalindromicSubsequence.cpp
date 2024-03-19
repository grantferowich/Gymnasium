/* 
* Longest palindromic subsequence

* The solution considers base cases, and also, the solution moves right and left pointers closer to the center
* of the string at each recursive call. 

* Time complexity: O(N^2)
* Space complexity: O(N^2)
* Input:  "vtvvv"
* Output: 4

* Longest palindromic subsequence here is "vvvv"


* Input:  "pwnnb"
* Output: 2

* Longest palindromic subsequence here is "nn"


* Input:  "ttbtctcbt"
* Output: 7

* Longest palindromic subsequence here is "tbtctbt"

* input: 'hannah'
* output: 6
* input: string
* output: number

* input: "g"
* output: 1
* number is a thing being maximized 

*/
#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>
using namespace std;

int find(unordered_map<string, int> &cache, int leftInt, int rightInt, string inputStr){

    string keyStr = "{ "+to_string(leftInt)+","+to_string(rightInt)+" }";

    if (cache.find(keyStr) != cache.end()){
        return cache[keyStr];
    }

    if (inputStr.size() == 1){
        return 1;
    }

    if (leftInt > rightInt){
        return 0;
    }
    // chars match
    // recurse with both pointers moving
    if (inputStr[rightInt] == inputStr[leftInt]){
        cache[keyStr] = 2 + find(cache, leftInt + 1, rightInt - 1, inputStr);
        return cache[keyStr];
    }

    cache[keyStr] = max(find(cache, leftInt + 1, rightInt, inputStr), find(cache, leftInt, rightInt - 1, inputStr));
    return cache[keyStr];
}

int longestPalindromicSubsequence(string inputStr){

    unordered_map<string, int> cache;
    int leftInt = 0;
    int rightInt = inputStr.size() - 1;
    int outputInt = find(cache, leftInt, rightInt, inputStr);
    return outputInt;

}

int main(){
    string inputStr1 = "tbtctbt";
    int outputInt1 = longestPalindromicSubsequence(inputStr1);
    cout << "Output int 1: " << outputInt1 << endl;

    string inputStr2 = "vtvvv";
    // longest is vvvv
    int outputInt2 = longestPalindromicSubsequence(inputStr2);
    cout << "Output int 2: " << outputInt2 << endl;
    return 0;
}