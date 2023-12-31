#include <iostream> 
#include <unordered_map>
#include <vector>
using namespace std;

class DoublyLinkedListNode {
   public:
    string str;
    int valueInt;
    vector<int> vecInt;
    DoublyLinkedListNode* nextNode;
    DoublyLinkedListNode* prevNode;

    DoublyLinkedListNode(int inputInt) {
       this->valueInt = inputInt;
    }

    DoublyLinkedListNode(string str){
        this->str = str;
    }

    DoublyLinkedListNode(vector<int> vecInt){
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

class DoublyLinkedList {
  public:
    int lengthInt;
    DoublyLinkedListNode *headNode, *tailNode;

    DoublyLinkedList() {
      this->headNode = nullptr;
      headNode->nextNode = this->tailNode;
      this->tailNode = nullptr;
      tailNode->prevNode = this->headNode;
      this->lengthInt = 0;
    };

    // Time Complexity: O(N)
    // Auxiliary Space Complexity: O(1)
    void insertValue(DoublyLinkedListNode *xNode, int indexInt){
        
        if (indexInt < 0 || indexInt > this->lengthInt){
          return;
        }

        if (this->lengthInt == 0){
            xNode->nextNode = this->headNode->nextNode;
            xNode->prevNode = this->headNode;
            this->headNode->nextNode = xNode;
            this->tailNode->prevNode = xNode;
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
            DoublyLinkedListNode *node = this->headNode;
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
      DoublyLinkedListNode *xNode = new DoublyLinkedListNode(valueInt);
      this->insertValue(xNode, this->lengthInt);
    };

    void appendValue(string inputStr){
      DoublyLinkedListNode *xNode = new DoublyLinkedListNode(inputStr);
      this->insertValue(xNode, lengthInt);
    };

    void appendValue(vector<int> inputVec){
      DoublyLinkedListNode *xNode = new DoublyLinkedListNode(inputVec);
      this->insertValue(xNode, lengthInt);
    };

    // Time Complexity:O(N)
    // Auxiliary Space Complexity: O(1)
    DoublyLinkedListNode* deleteNode(int indexInt){
      if (indexInt < 0 || indexInt >= this->lengthInt){
        return nullptr;
      }
      DoublyLinkedListNode *toDeleteNode = nullptr;

      if (indexInt == 0){
        toDeleteNode = this->headNode;
        this->headNode = this->headNode->nextNode;
        if (this->lengthInt == 1){
          this->tailNode = nullptr;
        }
      } else {
        DoublyLinkedListNode *node = this->headNode;
        int currentIndexInt = 0;
        while (node){
          if (currentIndexInt == indexInt - 1){
            toDeleteNode = node->nextNode;
            node->nextNode = node->nextNode->nextNode;
            if (indexInt == this->lengthInt - 1){
              this->tailNode = node;
            }
            break;
          }
          node = node->nextNode;
          currentIndexInt++;
        }
      }
      lengthInt--;
      return toDeleteNode;
    };

    // Time Complexity: o(N)
    // Auxiliary Space Complexity: O(1)
    bool containsValue(int valueInt){
      DoublyLinkedListNode *node = this->headNode;
      while (node){
        if (node->valueInt == valueInt){
          return true;
        }
        node = node->nextNode;
      }
      return false;
    }

    bool containsStr(string inputStr){
      DoublyLinkedListNode *node = this->headNode;
      while (node){
        if (node->getStringID() == inputStr){
          return true;
        }
        node = node->nextNode;
      }
      return false;
    }

    void printLinkedListInt(){
        DoublyLinkedListNode *node = this->headNode;
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
      DoublyLinkedListNode *node = this->headNode;
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
      DoublyLinkedListNode *node = this->headNode;
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

int main(){
    DoublyLinkedList dllX;
    dllX.appendValue(3);
    // dllX.appendValue(5);
    // dllX.appendValue(8);
    dllX.printLinkedListInt();
};