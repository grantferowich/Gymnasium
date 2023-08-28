#include <cstddef>
#include <string>
#include <typeinfo>
#include <type_traits>
#include <iostream>
using namespace std;
/* 

    Stack CLASS
    
    Developed on August 28, 2023.
    
    CTCI Chapter 3 Warm Up
    
    |--------------------------|
    | simple Stack             |
    |--------------------------|
    |* numberOfProperties === 1|
    |- top                     |
    |--------------------------|
    |* numberOfMethods === 4   |
    |- push(value)             | 
    |- isEmpty()               | 
    |- peek()                  | 
    |- pop()                   | 
    ----------------------------

    |--------------------------|
    |   Stack Node             |
    |--------------------------|
    |* numberOfProperties === 2|
    |- data                    |
    |- next                    |
    |--------------------------|

*/

class ListNode {
   public:
     int valueInt;
     ListNode* nextNode;

     ListNode(int inputInt) {
       this->valueInt = inputInt;
       this->nextNode = nullptr;
     }
};

class LinkedList {

  public:
    int lengthInt = 0;
    ListNode *headNode;
    ListNode *tailNode;

    LinkedList() {
      this->headNode = nullptr;
      this->tailNode = nullptr;
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    void insert_value(int valueInt, int indexInt){
        ListNode *xNode = new ListNode(valueInt);
        if (this->lengthInt == 0){
            this->headNode = xNode;
            xNode->nextNode = tailNode;
            lengthInt++;
            return;
        }
        if (this->lengthInt == 1){
            this->headNode->nextNode = xNode;
            xNode->nextNode = this->headNode;
            lengthInt++;
            return;
        }
        if (this->lengthInt > 1){
            ListNode *node = this->headNode;
            int currentIndexInt = 0;
            while (node){
                if (currentIndexInt == lengthInt - 1){
                    node->nextNode = xNode;
                    xNode->nextNode = this->tailNode;
                }
                node = node->nextNode;
                currentIndexInt++;
            }
            lengthInt++;
        }
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    void append_value(int valueInt){
      this->insert_value(valueInt, lengthInt);
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    void delete_node(int indexInt){
      ListNode *node = this->headNode;
      int currentInt = 0;
      while (node){
        if (currentInt == indexInt - 1){
           node->nextNode = node->nextNode->nextNode;
        } 
        node = node->nextNode;
        currentInt++;
      }
      lengthInt--;
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    bool contains_value(int valueInt){
      ListNode *node = this->headNode;
      while (node){
        if (node->valueInt == valueInt){
          return true;
        }
        node = node->nextNode;
      }
      return false;
    }

    void printLinkedList(){
        ListNode *node = this->headNode;
        cout << "Printing out the linked list: " << endl;
        cout << "{" ;
        while (node){
            cout << node->valueInt << ", " << endl;
            node = node->nextNode;
        }
        cout << "}" << endl;
    }
};

class Stack {
    public: 
        Stack(){
            this->topNode = nullptr;
        }

        bool isEmpty(){
            return this->topNode == nullptr;
        }
    private: 
        ListNode* topNode;
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
    Stack stackX;
    bool isEmptyToF = stackX.isEmpty();
    string isEmptyStr = printToFToString(isEmptyToF);
    cout << "Stack is empty: (expect true): " << isEmptyStr << endl;
    return 0;
}