#include <iostream>
#include <unordered_map>
#include <unordered_set>
using namespace std;
int main(){
    cout << "Size of int: " << sizeof(int) << " bytes." << endl;
    cout << "Size of long long: " << sizeof(long long) << " bytes." << endl;
    cout << "Size of unordered_map: " << sizeof(unordered_map<int, int>) << " bytes." << endl;
    cout << "Size of unordered_set: " << sizeof(unordered_set<int>) << " bytes." << endl;
    cout << "Size of unordered_set: " << sizeof(unordered_set<string>) << " bytes." << endl;
    cout << "Size of long: " << sizeof(long) << " bytes." << endl;
    cout << "Size of string: " << sizeof(string) << " bytes." << endl;
    return 0;
}