/* 
TARGET SUM

Given an integer x and an unsorted array of integers, describe an algorithm to
determine whether two of the numbers add up to x.(In this case, say that the
interviewer hates hash tables.)

array input = [ 1, 1, 2, 3, 5, 8, 13]
integer input = 21
output = true
first sort the array
then, initialize two pointers at the front and back of the array
if the two numbers add up to a number less than the target, move the left pointer
if the two numbers add up to a number greater than the target, move the right pointer
return true if the sum equals the target 

*/
#include <iostream> 
#include <vector>
using namespace std;

class Solution{
    public:
    bool targetSum(vector<int> vec, int intX){
        int leftPtrInt = 0;
        int rightPtrInt = vec.size() - 1;
        sort(vec.begin(), vec.end());
        int sum = 0;
        while (leftPtrInt < rightPtrInt){
            sum = vec[leftPtrInt] + vec[rightPtrInt];
            if (sum == intX){
                return true;
            }
            if (sum < intX){
                leftPtrInt++;
            }
            if (sum > intX){
                rightPtrInt--;
            }
        }
        return false;
    }
};

string printToFToString(bool inputToF){
        if (inputToF == 1){
            return "true";
        }
        if (inputToF == 0){
            return "false";
        }
        return "false";
}

int main(){
    Solution solutionX;
    vector<int> vec1 = { 1, 1, 2, 3, 5, 8 ,13 };
    int intX1 = 14;
    bool outputToF1 = solutionX.targetSum(vec1, intX1);
    string outputStr1 = printToFToString(outputToF1);
    cout << "Output 1: (expect true:) " << outputStr1 << endl; 
    return 0;
}