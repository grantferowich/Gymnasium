#include <cstddef>
#include <string>
#include <typeinfo>
#include <type_traits>
#include <iostream>
#include <vector>
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
    |- printStack( )           | 
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
    string str;
    int valueInt;
    vector<int> vecInt;
    ListNode* nextNode;

    ListNode(int inputInt) {
       this->valueInt = inputInt;
    }

    ListNode(string str){
        this->str = str;
    }

    ListNode(vector<int> vecInt){
        this->vecInt = vecInt;
    }

    string getStringID(){
        return this->str;
    }

    int getIntID(){
        return this->valueInt;
    }

    vector<int> getVecIntID(){
        return this->vecInt;
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
    ListNode* deleteNode(int indexInt){
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
        vector<int> vec = node->getVecIntID();
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

class Stack {
    public: 
        LinkedList *linkedList = new LinkedList();
        int lengthInt = 0;
        bool isEmpty(){
            return this->linkedList->headNode == nullptr;
        }

        int popInt(){
            if (this->linkedList->headNode == nullptr){ return -1;}
            int topInt = this->linkedList->headNode->getIntID();
            this->linkedList->headNode = this->linkedList->headNode->nextNode;
            return topInt;
        }

        string popStr(){
            if (this->linkedList->headNode == nullptr){return "";}
            string poppedStr = this->linkedList->headNode->getStringID();
            this->linkedList->headNode = this->linkedList->headNode->nextNode;
            return poppedStr;
        }

        vector<int> popVec(){
            if (this->linkedList->headNode == nullptr){return {};}
            vector<int> poppedVec = this->linkedList->headNode->getVecIntID();
            this->linkedList->headNode = this->linkedList->headNode->nextNode;
            return poppedVec;
        }

        void push(int valueInt){
            this->linkedList->appendValue(valueInt);
            this->lengthInt++;
        }

        void push(string inputStr){
            this->linkedList->appendValue(inputStr);
            this->lengthInt++;
        }

        void push(vector<int> inputVec){
            this->linkedList->appendValue(inputVec);
            this->lengthInt++;
        }

        void printStackInt() {
           this->linkedList->printLinkedListInt();
        }

        void printStackString(){
            this->linkedList->printLinkedListStr();
        }

        void printStackVec(){
            this->linkedList->printLinkedListVec();
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
}

int main(){
    Stack stackX;
    bool isEmptyToF = stackX.isEmpty();
    string isEmptyStr = printToFToString(isEmptyToF);
    cout << "Stack is empty: (expect true): " << isEmptyStr << endl;
    stackX.push(3);
    stackX.push(5);
    stackX.push(23);
    stackX.printStackInt();
    Stack stackG;
    cout << "stackG" << endl;
    stackG.push("Hello");
    stackG.push("from");
    stackG.push("the South");
    stackG.popStr();
    stackG.printStackString();
    Stack stackF;
    cout << "stackF" << endl;
    stackF.push(vector<int>({2,3,5}));
    stackF.popVec();
    stackF.printStackVec();
    return 0;
}