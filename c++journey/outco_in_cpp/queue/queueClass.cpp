
#include <cstddef>
#include <string>
#include <typeinfo>
#include <type_traits>
#include <iostream>
#include <vector>
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
    |-lengthInt                | 
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
    string str;
    int valueInt;
    vector<int> intVec;
    ListNode* nextNode;

    ListNode(int inputInt) {
       this->valueInt = inputInt;
    }

    ListNode(string str){
        this->str = str;
    }

    ListNode(vector<int> intVec){
        this->intVec = intVec;
    }

    string getStringID(){
        return this->str;
    }

    int getIntID(){
        return this->valueInt;
    }

    vector<int> getIntVecID(){
        return this->intVec;
    }
};

class LinkedList {
  public:
    int lengthInt;
    ListNode *headNode, *tailNode;

    LinkedList() {
      this->headNode = nullptr;
      this->tailNode = nullptr;
      this->lengthInt = 0;
    };

    // Time Complexity: O(N)
    // Auxiliary Space Complexity: O(1)
    void insertValue(ListNode *xNode, int indexInt){
        if (indexInt < 0 || indexInt > this->lengthInt){
          return;
        }
        if (this->lengthInt == 0){
            this->headNode = xNode;
            xNode->nextNode = tailNode;
            lengthInt++;
            return;
        }
        if (this->lengthInt == 1){
            this->headNode->nextNode = xNode;
            xNode->nextNode = this->tailNode;
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
                    lengthInt++;
                    return;
                }
                node = node->nextNode;
                currentIndexInt++;
            }
        }
    }

    // Time Complexity: O(N)
    // Auxiliary Space Complexity: O(1)
    void appendValue(int valueInt){
      ListNode *xNode = new ListNode(valueInt);
      this->insertValue(xNode, this->lengthInt);
    };

    void appendValue(string inputStr){
      ListNode *xNode = new ListNode(inputStr);
      this->insertValue(xNode, lengthInt);
    };

    void appendValue(vector<int> inputVec){
      ListNode *xNode = new ListNode(inputVec);
      this->insertValue(xNode, lengthInt);
    };

    // Time Complexity:O(N)
    // Auxiliary Space Complexity: O(1)
    ListNode* delete_node(int indexInt){
      ListNode *node = this->headNode;
      int currentInt = 0;
      ListNode *toDeleteNode;

      if (this->lengthInt == 1){
        toDeleteNode = this->headNode;
        headNode = nullptr;
        tailNode = nullptr;
      }

      if (indexInt == 0){
        toDeleteNode = this->headNode;
        this->headNode = this->headNode->nextNode;
      }

      if (this->lengthInt != 1 && indexInt != 0){
        int xInt = 0;
        while (xInt < indexInt - 1){
          node = node->nextNode;
          xInt++;
        }

        toDeleteNode = node->nextNode;
        node->nextNode = node->nextNode->nextNode;
        if (indexInt == this->lengthInt - 1){
          this->tailNode = node;
        }
      }
      lengthInt--;
      delete toDeleteNode;
      return toDeleteNode;
    };

    // Time Complexity: o(N)
    // Auxiliary Space Complexity: O(1)
    bool containsValue(int valueInt){
      ListNode *node = this->headNode;
      while (node){
        if (node->valueInt == valueInt){
          return true;
        }
        node = node->nextNode;
      }
      return false;
    }

    bool contains(string inputStr){
      ListNode *node = this->headNode;
      while (node){
        if (node->getStringID() == inputStr){
          return true;
        }
        node = node->nextNode;
      }
      return false;
    }

    void printLinkedListInt(){
        ListNode *node = this->headNode;
        cout << "Printing out the linked list: " << endl;
        cout << "{ ";
        while (node){
            cout << node->valueInt;
            node = node->nextNode;
            if (node){
              cout << ", ";
            }
        }
        cout << " }" << endl;
    }

    void printLinkedListStr(){
      ListNode *node = this->headNode;
      cout << "Printing out the linked list: " << endl;
      cout << "{ ";
      while (node){
        cout << node->getStringID();
        node = node->nextNode;
        if (node){
          cout << ", ";
        }
      }
      cout << " }" << endl;
    }

    void printLinkedListVec(){
      ListNode *node = this->headNode;
      cout << "Printing out the linked list: " << endl;
      cout << "{ ";
      while (node){
        vector<int> vec = node->getIntVecID();
        int xInt = 0;
        while (xInt < vec.size()){
          cout << vec[xInt];
          if (xInt < vec.size() - 1 || node->nextNode != nullptr){
            cout << ", ";
          }
          xInt++;
        }
        node = node->nextNode;
      }
      cout << " }" << endl;
    };
};

class Queue {
    public: 
        LinkedList *linkedList = new LinkedList();
        int lengthInt = 0;    
        
        void enqueue(int valueInt){
            this->linkedList->appendValue(valueInt);
            this->lengthInt++;
        }

        void enqueue(string inputStr){
            this->linkedList->appendValue(inputStr);
            this->lengthInt++;
        }

        void enqueue(vector<int> inputVec){
            this->linkedList->appendValue(inputVec);
            this->lengthInt++;
        }

        string dequeueStringID(){
            if (this->lengthInt == 0){
                return NULL;
            }
            this->lengthInt--;
            return this->linkedList->delete_node(0)->getStringID();
        }

        int dequeueIntID(){
            if (this->lengthInt == 0){
                return -1;
            }
            this->lengthInt--;
            return this->linkedList->delete_node(0)->getIntID();
        }

        vector<int> dequeueIntVec(){
            return this->linkedList->delete_node(0)->getIntVecID();
        }
        
        bool isEmpty(){
            return this->lengthInt == 0;
        }

        string peekStringID(){
            return this->linkedList->headNode->getStringID();
        }

        int peekIntID(){
            return this->linkedList->headNode->getIntID();
        }
    
        vector<int> peekIntVec(){
            return this->linkedList->headNode->getIntVecID();
        }

        int size(){
            return this->lengthInt;
        }

        void printQueue() {
            ListNode* node = this->linkedList->headNode;
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
};

string printToFToString(bool inputToF){
        if (inputToF == 1){
            return "true";
        }
        if (inputToF == 0){
            return "false";
        }
        return "false";
};

int main(){
    Queue queueX;
    bool isEmptyToF = queueX.isEmpty();
    string isEmptyToFStr = printToFToString(isEmptyToF);
    cout << "Is empty: (expect true): " << isEmptyToFStr << endl;
    queueX.enqueue(3);
    queueX.enqueue(5);
    queueX.enqueue(9);
    queueX.printQueue();
    int peekInt = queueX.peekIntID();
    cout << "Queue X Peek: " << peekInt << endl;
    Queue queueS;
    queueS.enqueue("hello");
    queueS.enqueue("from");
    queueS.enqueue("the south");
    string peekStrS = queueS.peekStringID();
    cout << "Queue S peek: " << peekStrS << endl;
    return 0;
};