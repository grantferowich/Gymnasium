
#include <iostream> 
#include <unordered_map>
#include <vector>
using namespace std;

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
      if (indexInt < 0 || indexInt >= this->lengthInt){
        return nullptr;
      }
      ListNode *toDeleteNode = nullptr;

      if (indexInt == 0){
        toDeleteNode = this->headNode;
        this->headNode = this->headNode->nextNode;
        if (this->lengthInt == 1){
          this->tailNode = nullptr;
        }
      } else {
        ListNode *node = this->headNode;
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
/* 
* Grant Ferowich 
* Developed on Monday October 2, 2023
* Cracking the Coding Interview
* Chapter 2, question 4: Partitiom 
* Return a list which is partitioned around a specific input value.
* In the returned list, all of the values to the right of the returned
* list should be larger than the partition value. In the 
* returned list, all of the values to the left of the partition
* value should be less than or equal to the partition value.

* Input 1: 
* 3 - 5 - 8 - 5 - 10 - 2 - 1
* Output 1: 
* 3 1 2 10 5 5 8

*  
*/

#include <iostream> 
using namespace std;

class Solution{
    public: 
    LinkedList partition(LinkedList inputList, int partitionInt){
        ListNode* lessThanXListHead = new ListNode(nullptr);
        ListNode* lessThanXListTail = new ListNode(nullptr);
        ListNode* greaterThanXListHead = new ListNode(nullptr);
        ListNode* greaterThanXListTail = new ListNode(nullptr);
        ListNode* node = inputList.headNode;

        while (node){
            if (node->getIntID() <= partitionInt){
                // append to less than x list
            }
            if (node->getIntID() > partitionInt){
                // append to the greater than x list
            }
            node = node->nextNode;
        }
        return LinkedList();
    }
};

int main(){
    Solution solutionX;
    return 0;
}