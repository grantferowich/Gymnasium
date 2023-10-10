#include <forward_list>
#include <iostream>
#include <unordered_map>
#include <unordered_set>
#include <list>

using namespace std;
int main(){
    cout << "Size of int: " << sizeof(int) << " bytes." << endl;
    cout << "Size of long long: " << sizeof(long long) << " bytes." << endl;
    cout << "Size of unordered_map: " << sizeof(unordered_map<int, int>) << " bytes." << endl;
    cout << "Size of unordered_set: " << sizeof(unordered_set<int>) << " bytes." << endl;
    cout << "Size of unordered_set: " << sizeof(unordered_set<string>) << " bytes." << endl;
    cout << "Size of long: " << sizeof(long) << " bytes." << endl;
    cout << "Size of string: " << sizeof(string) << " bytes." << endl;
    cout << "Size of forward list (a.k.a. singly-linked list): " << sizeof(forward_list<int>) << " bytes." << endl;
    cout << "Size of list (a.k.a. doubly-linked list): " << sizeof(list<int>) << " bytes." <<  endl;
    return 0;
}