#include <iostream> 
#include <forward_list>
using namespace std;

class Solution{
    public: 
    void printForwardList(forward_list<int> list1){
       auto it = list1.begin();
       cout << "{ ";
       while (it != list1.end()){
        cout << *it;
        if (++it != list1.end()){
            cout <<  ", ";
        }
       }
        cout << " }";
    }
};

int main(){

    Solution solutionX;
    forward_list<int> list1 = { 1, 1, 2, 3, 5, 8, 13, 21};
    solutionX.printForwardList(list1);
    return 0;

};

