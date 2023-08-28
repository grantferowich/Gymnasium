
#include <cstddef>
#include <string>
#include <typeinfo>
#include <type_traits>
#include <iostream>
using namespace std;
/*  
    QUEUE CLASS
    CTCI Chapter 3 Warm Up
    Successfully tested the class 2/18/23.
    |--------------------------|
    | simple Queue             |
    |--------------------------|
    |* numberOfProperties === 2|
    |- first                   |
    |- last                    |
    |--------------------------|
    |* numberOfMethods === 4   |
    |- enqueue(value)          | 
    |- isEmpty()               | 
    |- peek()                  | 
    |- dequeue()               | 
    ----------------------------

    |--------------------------|
    |   Queue node             |
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

class Queue {
    public: 
        Queue(){
            this->firstNode = nullptr;
            this->lastNode = nullptr;
        }
        
        bool isEmpty(){
            return this->firstNode == nullptr;
        }

        int peek(){
            if (this->firstNode){
                return firstNode->valueInt;
            }
            return 0;
            // how to handle empty list?
        }

        void enqueue(int valueInt){
            ListNode* qNode = new ListNode(valueInt);
            if (this->firstNode == nullptr){
                this->firstNode = qNode;
            }
            if (this->firstNode && !this->lastNode){
                this->firstNode->nextNode = qNode;
                this->lastNode = qNode;
            }
            if (this->firstNode && this->lastNode){
                this->lastNode->nextNode = qNode;
                this->lastNode = qNode;
            }
        }

        int dequeue(){
            int intX = this->firstNode->valueInt;
            this->firstNode = this->firstNode->nextNode;
            return intX;
        }     

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
    private: 
        ListNode* firstNode;
        ListNode* lastNode;  
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
    Queue queueX;
    bool isEmptyToF = queueX.isEmpty();
    string isEmptyToFStr = printToFToString(isEmptyToF);
    cout << "Is empty: (expect true): " << isEmptyToFStr << endl;
    queueX.enqueue(3);
    queueX.enqueue(5);
    queueX.enqueue(9);
    // queueX.dequeue();
    queueX.printQueue();
    int peekInt = queueX.peek();
    cout << "Peek: " << peekInt << endl;
    return 0;
 }