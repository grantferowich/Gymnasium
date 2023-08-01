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
int main(){

    cout << "Result 1: " << endl; 
    printUnorderedPairs({ 1, 1, 2, 3, 5, 8, 13, 21, 34 });
    cout << "Result 2: " << endl;
    printUnorderedPairs({ 67, 70, 80, 81, 92 });
    return 0;
}

/* Test results

Result 1: 
{1, 1}
{1, 2}
{1, 3}
{1, 5}
{1, 8}
{1, 13}
{1, 21}
{1, 34}
{1, 2}
{1, 3}
{1, 5}
{1, 8}
{1, 13}
{1, 21}
{1, 34}
{2, 3}
{2, 5}
{2, 8}
{2, 13}
{2, 21}
{2, 34}
{3, 5}
{3, 8}
{3, 13}
{3, 21}
{3, 34}
{5, 8}
{5, 13}
{5, 21}
{5, 34}
{8, 13}
{8, 21}
{8, 34}
{13, 21}
{13, 34}
{21, 34}

Result 2: 
{67, 70}
{67, 80}
{67, 81}
{67, 92}
{70, 80}
{70, 81}
{70, 92}
{80, 81}
{80, 92}
{81, 92}


 */