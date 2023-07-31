/* 
* Print unordered pairs

* Time complexity: O(N^2)
* Space complexity: O(1)
*/

#include <iostream> 
#include <vector>
using namespace std;

void printUnorderedPairs(vector<int> vec){
    int gInt = 0;
    while (gInt < vec.size()){
        int hInt = gInt + 1;
        while (hInt < vec.size()){
            cout << "{" << vec[gInt] << ", " << vec[hInt] << "}" << endl;
            hInt++;
        }
        gInt++;
    }
}

// void test(){
//     vector<int> resultVec1 = printUnorderedPairs({1, 2, 3, 5, 8, 13, 21});
//     cout << "Result 1: " << resultVec1 << endl;
// }

int main(){
    printUnorderedPairs({ 1, 1, 2, 3, 5, 8, 13, 21, 34 });
    printUnorderedPairs({ 67, 70, 80, 81, 92 });
    return 0;
}