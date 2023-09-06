
#include <string>
#include <typeinfo>
#include <type_traits>
#include <iostream>
#include <vector>
using namespace std;

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

    int getValueIntID(){
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
            return;
        }
        if (this->lengthInt == 1){
            this->headNode->nextNode = xNode;
            xNode->nextNode = this->headNode;
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
        }
        lengthInt++;
    }

    // Time Complexity: O(N)
    // Auxiliary Space Complexity: O(1)
    void append_value(int valueInt){
      ListNode *xNode = new ListNode(valueInt);
      this->insertValue(xNode, lengthInt);
    };

    void append_value(string inputStr){
      ListNode *xNode = new ListNode(inputStr);
      this->insertValue(xNode, lengthInt);
    };

    void append_value(vector<int> inputVec){
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
      // memory management
      delete toDeleteNode;
      return toDeleteNode;
    };

    // Time Complexity: o(N)
    // Auxiliary Space Complexity: O(1)
    bool containsInt(int valueInt){
      ListNode *node = this->headNode;
      while (node){
        if (node->valueInt == valueInt){
          return true;
        }
        node = node->nextNode;
      }
      return false;
    }

    bool containsStr(string inputStr){
      ListNode *node = this->headNode;
      while (node){
        if (node->getStringID() == inputStr){
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

        int pop(){
            if (this->topNode == nullptr){ return -1;}
            int topInt = this->topNode->valueInt;
            this->topNode = this->topNode->nextNode;
            return topInt;
        }

        void push(int valueInt){
            ListNode* sNode = new ListNode(valueInt);
            ListNode* nextNode = this->topNode;
            this->topNode = sNode;
            sNode->nextNode = nextNode;
        }

        void printStack() {
            ListNode* node = this->topNode;
            cout << "Printing out the stack: " << endl;
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
        ListNode* topNode;
};


// class ListNode {
//    public:
//     string str;
//     int valueInt;
//     vector<int> vecInt;
//     ListNode* nextNode;

//     ListNode(int inputInt) {
//        this->valueInt = inputInt;
//     }

//     ListNode(string str){
//         this->str = str;
//     }

//     ListNode(vector<int> vecInt){
//         this->vecInt = vecInt;
//     }

//     string getStringID(){
//         return this->str;
//     }

//     int getIntID(){
//         return this->valueInt;
//     }

//     vector<int> getVecIntID(){
//         return this->vecInt;
//     }
// };

// class LinkedList {
//   public:
//     int lengthInt;
//     ListNode *headNode, *tailNode;

//     LinkedList() {
//       this->headNode = nullptr;
//       this->tailNode = nullptr;
//       this->lengthInt = 0;
//     };

//     // Time Complexity: O(N)
//     // Auxiliary Space Complexity: O(1)
//     void insertValue(ListNode *xNode, int indexInt){
//         if (indexInt < 0 || indexInt > this->lengthInt){
//           return;
//         }
//         if (this->lengthInt == 0){
//             this->headNode = xNode;
//             xNode->nextNode = tailNode;
//             lengthInt++;
//             return;
//         }
//         if (this->lengthInt == 1){
//             this->headNode->nextNode = xNode;
//             xNode->nextNode = this->tailNode;
//             lengthInt++;
//             return;
//         }
//         if (this->lengthInt > 1){
//             ListNode *node = this->headNode;
//             int currentIndexInt = 0;
//             while (node){
//                 if (currentIndexInt == lengthInt - 1){
//                     node->nextNode = xNode;
//                     xNode->nextNode = this->tailNode;
//                     lengthInt++;
//                     return;
//                 }
//                 node = node->nextNode;
//                 currentIndexInt++;
//             }
//         }
//     }

//     // Time Complexity: O(N)
//     // Auxiliary Space Complexity: O(1)
//     void appendValue(int valueInt){
//       ListNode *xNode = new ListNode(valueInt);
//       this->insertValue(xNode, this->lengthInt);
//     };

//     void appendValue(string inputStr){
//       ListNode *xNode = new ListNode(inputStr);
//       this->insertValue(xNode, lengthInt);
//     };

//     void appendValue(vector<int> inputVec){
//       ListNode *xNode = new ListNode(inputVec);
//       this->insertValue(xNode, lengthInt);
//     };

//     // Time Complexity:O(N)
//     // Auxiliary Space Complexity: O(1)
//     ListNode* deleteNode(int indexInt){
//       ListNode *node = this->headNode;
//       int currentInt = 0;
//       ListNode *toDeleteNode;

//       if (this->lengthInt == 1){
//         toDeleteNode = this->headNode;
//         headNode = nullptr;
//         tailNode = nullptr;
//       }

//       if (indexInt == 0){
//         toDeleteNode = this->headNode;
//         this->headNode = this->headNode->nextNode;
//       }

//       if (this->lengthInt != 1 && indexInt != 0){
//         int xInt = 0;
//         while (xInt < indexInt - 1){
//           node = node->nextNode;
//           xInt++;
//         }

//         toDeleteNode = node->nextNode;
//         node->nextNode = node->nextNode->nextNode;
//         if (indexInt == this->lengthInt - 1){
//           this->tailNode = node;
//         }
//       }
//       lengthInt--;
//       return toDeleteNode;
//     };

//     // Time Complexity: o(N)
//     // Auxiliary Space Complexity: O(1)
//     bool containsValue(int valueInt){
//       ListNode *node = this->headNode;
//       while (node){
//         if (node->valueInt == valueInt){
//           return true;
//         }
//         node = node->nextNode;
//       }
//       return false;
//     }

//     bool contains(string inputStr){
//       ListNode *node = this->headNode;
//       while (node){
//         if (node->getStringID() == inputStr){
//           return true;
//         }
//         node = node->nextNode;
//       }
//       return false;
//     }

//     void printLinkedListInt(){
//         ListNode *node = this->headNode;
//         cout << "Printing out the linked list: " << endl;
//         cout << "{ ";
//         while (node){
//             cout << node->valueInt;
//             node = node->nextNode;
//             if (node){
//               cout << ", ";
//             }
//         }
//         cout << " }" << endl;
//     }

//     void printLinkedListStr(){
//       ListNode *node = this->headNode;
//       cout << "Printing out the linked list: " << endl;
//       cout << "{ ";
//       while (node){
//         cout << node->getStringID();
//         node = node->nextNode;
//         if (node){
//           cout << ", ";
//         }
//       }
//       cout << " }" << endl;
//     }

//     void printLinkedListVec(){
//       ListNode *node = this->headNode;
//       cout << "Printing out the linked list: " << endl;
//       cout << "{ ";
//       while (node){
//         vector<int> vec = node->getVecIntID();
//         int xInt = 0;
//         while (xInt < vec.size()){
//           cout << vec[xInt];
//           if (xInt < vec.size() - 1 || node->nextNode != nullptr){
//             cout << ", ";
//           }
//           xInt++;
//         }
//         node = node->nextNode;
//       }
//       cout << " }" << endl;
//     };
// };

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
            return this->linkedList->deleteNode(0)->getStringID();
        }

        int dequeueIntID(){
            if (this->lengthInt == 0){
                return -1;
            }
            this->lengthInt--;
            return this->linkedList->deleteNode(0)->getIntID();
        }

        vector<int> dequeueVecInt(){
          if (this->lengthInt == 0){
            return vector<int>({-1});
          }
            this->lengthInt--;
            return this->linkedList->deleteNode(0)->getVecIntID();
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
            return this->linkedList->headNode->getVecIntID();
        }

        int size(){
            return this->lengthInt;
        }

        void printQueueInt() {
            ListNode* node = this->linkedList->headNode;
            cout << "Printing out the queue of ints: " << endl;
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

        void printQueueStr(){
          ListNode* node = this->linkedList->headNode;
          cout << "Printing out the queue of strings" << endl;
          cout << "{ ";
          while (node){
            cout << node->getStringID();
            if (node->nextNode){
              cout << ", ";
            }
            node = node->nextNode;
          }
          cout << " }" << endl;
        }
        void printVector(const vector<int>& vec){
            cout << "{ ";
            int xInt = 0;
            while (xInt < vec.size()){
                int valueInt = vec[xInt];
                if (xInt < vec.size() - 1){
                    cout << valueInt << ", ";
                } 
                if (xInt == vec.size() - 1){
                    cout << valueInt;
                }
                xInt++;
            }
            cout << " }" << endl;
        }

        void printQueueVecInt(){
          ListNode* node = this->linkedList->headNode;
          cout << "Printing out the queue of vectors..." << endl;
          cout << "{ ";
          while (node){
            vector<int> vec = node->getVecIntID();
            printVector(vec);
            if (node->nextNode){
              cout << ", ";
            }
            node = node->nextNode;
          }
          cout << " }" << endl;
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
