#include <vector>
#include <iostream>
using namespace std;
void printVector(const std::vector<int>& vec){
    for (int valueInt : vec){
        cout << valueInt << " ";
    }
    cout << endl;
}