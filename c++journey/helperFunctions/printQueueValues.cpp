#include <iostream>
using namespace std;
void printQueue() {
    ListNode* node = this->firstNode;
    cout << "Printing out the queue: " << endl;
    cout << "{";
    while (node) {
        cout << node->valueInt;
        if (node->nextNode) {
            cout << ", ";
        }
        node = node->nextNode;
    }
    cout << "}" << endl;
}
