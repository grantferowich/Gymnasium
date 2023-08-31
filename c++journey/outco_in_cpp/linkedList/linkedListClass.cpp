/**
 *  Homework - Linked List
 *  Develop August 16, 2023.
 *  Problem 1: ListNode class
 *
 *  Prompt:    Create a ListNode class
 *
 *             The ListNode class should contain the following public properties:
 *
 *                 value:   {Integer}
 *                  next:   {ListNode} (initially NULL)
 *
 *               Example:   ListNode *sample = new ListNode(1)
 *                          sample->value     // 1
 *                          sample->next      // NULL
 *
 *
 *  Problem 2: LinkedList class
 *
 *  Prompt:    Create a LinkedList class
 *
 *             The LinkedList class should contain the following public
 *             properties:
 *
 *                length:   {Integer}
 *                  head:   {ListNode}
 *                  tail:   {ListNode}
 *
 *              The LinkedList class should also contain the following public
 *              methods:
 *
 *                append:   A method that appends a value to the end of the
 *                          LinkedList.
 *
 *                          Input:     {Integer}
 *                          Output:    {Void}
 *
 *                insert:   A method that inserts an integer value at a set
 *                          index in the LinkedList (assume head index is 0).
 *
 *                          Input:     value {Integer}
 *                          Input:     index {Integer}
 *                          Output:    {Void}
 *
 *                delete:   A method that removes a node at a specified index.
 *
 *                          Input:     index {Integer}
 *                          Output:    {Void}
 *
 *              contains:   A method that checks to see if a value is contained
 *                          in the list.
 *
 *                          Input:     value {Integer}
 *                          Output:    {Boolean}
 */
#include <cstddef>
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
    void insert_value(ListNode *xNode, int indexInt){
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
      this->insert_value(xNode, lengthInt);
    };

    void append_value(string inputStr){
      ListNode *xNode = new ListNode(inputStr);
      this->insert_value(xNode, lengthInt);
    };

    void append_value(vector<int> inputVec){
      ListNode *xNode = new ListNode(inputVec);
      this->insert_value(xNode, lengthInt);
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
        lengthInt--;
        return toDeleteNode;
      } 
      if (indexInt == 0){
        toDeleteNode = this->headNode;
        this->headNode = this->headNode->nextNode;
        lengthInt--;
        return toDeleteNode;
      } 
      if (this->lengthInt != 1 && indexInt != 0){
        int xInt = 0;
        while (xInt < indexInt - 1){
          node = node->nextNode;
        }
        
      }



      while (node){
        if (currentInt == indexInt - 1){
          ListNode *tempNode = node->nextNode;
          node->nextNode = tempNode->nextNode;
          delete tempNode;
          lengthInt--;
          return;
        } 
        node = node->nextNode;
        currentInt++;
      }
    };

    // Time Complexity: o(N)
    // Auxiliary Space Complexity: O(1)
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
    LinkedList linkedListX;
    linkedListX.append_value(3);
    linkedListX.append_value(5);
    linkedListX.append_value(8);
    linkedListX.append_value(13);
    linkedListX.append_value(21);
    linkedListX.append_value(34);
    linkedListX.delete_node(1); // deletes the node whose value is 5
    bool contains34Bool = linkedListX.contains_value(34);
    string contains34Str = printToFToString(contains34Bool);
    cout << "Result 1: " << contains34Str << endl; // 1
    linkedListX.printLinkedList();
    return 0;
};