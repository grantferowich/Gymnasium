
#include <string>
#include <typeinfo>
#include <type_traits>
#include <iostream>
#include <unordered_set>
#include <vector>
#include <unordered_map>
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
    
        vector<int> peekVecInt(){
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

class Stack {
    public: 
        LinkedList *linkedList = new LinkedList();
        int lengthInt = 0;
        bool isEmpty(){
            return lengthInt == 0;
        }

        
        int popInt(){
            if (this->linkedList->headNode == nullptr){ return -1;}
            ListNode *deletedNode = this->linkedList->deleteNode(lengthInt - 1);
            cout << "Deleted Int: "<< deletedNode->getIntID() << endl;
            int deletedInt = deletedNode->getIntID();
            delete deletedNode;
            this->lengthInt--;
            return deletedInt;
        }

        string popStr(){
            if (this->linkedList->headNode == nullptr){return "";}
            ListNode *deletedNode = this->linkedList->deleteNode(lengthInt - 1);
            string poppedStr = deletedNode->getStringID();
            delete deletedNode;
            this->lengthInt--;
            return poppedStr;
        }

        vector<int> popVec(){
            if (this->linkedList->headNode == nullptr){return {};}
            ListNode *deletedNode = this->linkedList->deleteNode(lengthInt - 1);
            vector<int> deletedVec = deletedNode->getVecIntID();
            delete deletedNode;
            this->lengthInt--;
            return deletedVec;
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
        int size(){
            return this->lengthInt;
        }
};

class Graph {
  public:
    unordered_map<int, vector<int> > storageMap;
    //   Time Complexity:
    //   Auxiliary Space Complexity:
    bool addVertex(int idInt) {
      if (this->storageMap.find(idInt) == this->storageMap.end()){
        storageMap[idInt] = {};
      }
      return true;
    }
    
    bool removeVertex(int idInt) {
      if (this->storageMap.find(idInt) == this->storageMap.end()){
        return false;
      }
      if (this->storageMap.find(idInt) != this->storageMap.end()){
        this->storageMap.erase(idInt);
        for (auto pair : this->storageMap){
            vector<int> neighborVec = pair.second;
            neighborVec.erase(remove(neighborVec.begin(), neighborVec.end(), idInt), neighborVec.end());
        }
      }
      return true;
    }


    //   Time Complexity:
    //   Auxiliary Space Complexity:
    bool addEdge(int idInt1, int idInt2) {
      if (this->storageMap.find(idInt1) == this->storageMap.end()){
        this->addVertex(idInt1);
      }
      if (this->storageMap.find(idInt2) == this->storageMap.end()){
        this->addVertex(idInt2);
      }
      this->storageMap[idInt1].push_back(idInt2);
      return true;
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    bool removeEdge(int idInt1, int idInt2) {
      this->storageMap[idInt1].erase(remove(this->storageMap[idInt1].begin(), this->storageMap[idInt1].end(), idInt2), this->storageMap[idInt1].end());
      return true;
    }


    //   Time Complexity:
    //   Auxiliary Space Complexity:
    bool isVertex(int idInt) {
      if (this->storageMap.find(idInt) == this->storageMap.end()){
        return false;
      }
      return true;
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    vector<int> neighbors(int idInt) {
      return this->storageMap[idInt];
    }

    string printToFToString(bool inputToF){
        if (inputToF == 1){
            return "true";
        }
        if (inputToF == 0){
            return "false";
        }
        return "false";
    }

    void printAdjacencyList() {
        for (const auto &vertexPair : storageMap) {
            int vertex = vertexPair.first;
            const vector<int> &neighborsVec = vertexPair.second;

            cout << "Vertex " << vertex << ": ";
            cout << "{ ";
            int xInt = 0;
            while (xInt < neighborsVec.size()){
                int neighborInt = neighborsVec[xInt];
                cout << neighborInt;
                if (xInt < neighborsVec.size() - 1){
                    cout << ", ";
                    
                }
                xInt++;
            }
            cout << " }"; 
            cout << endl;
        }
    }
};    

Graph generateAdjacencyList(vector<vector<int> > edgeVec){
    Graph graphX;
    for (vector<int> pair : edgeVec){
        int uInt = pair[0];
        int vInt = pair[1];
        graphX.addEdge(uInt, vInt);
    }
    return graphX;
}
/*
 *  Friend Circles
 *  Started development on September 10, 2023.
 *  A friend circle is a group of people who are direct or indirect friends.
 *  Given a NxN bitset matrix, where a 1 in the i,j coordinate signifies a
 *  friendship between person i and person j, determine how many circles of
 *  friends there are.
 *
 *  Parameters:
 *
 *  Input: Graph: [[int]] (adjacency matrix)
 *  Output: int
 *
 *  Example:
 *
 *  Input: `{{1,1,0}, 
 *           {1,1,0}, 
 *           {0,0,1}}`
 *
 *  Output: 2
 *
 *  Input: `{{1,1,0}, {1,1,1}, {0,1,1}}`
 *  Output: 1
 *
 *  Resources:
 *  - https://leetcode.com/problems/friend-circles/description/
 *
 */

void depthFirstSearch(int rowInt, int colInt, vector<vector<int> > matrix, unordered_set<string> &vSet){
    // OOB
    if (rowInt < 0 || rowInt >= matrix.size() || colInt < 0 || colInt >= matrix[0].size()){
        return;
    }
    string keyStr = to_string(rowInt)+"_"+to_string(colInt);
    // already visited this 1
    if (vSet.find(keyStr) != vSet.end() && matrix[rowInt][colInt] == 1){
        return;
    }
    // not a 1
    if (matrix[rowInt][colInt] == 0){
        return;
    }
    vSet.insert(keyStr);
    depthFirstSearch(rowInt + 1, colInt, matrix, vSet);
    depthFirstSearch(rowInt - 1, colInt, matrix, vSet);
    depthFirstSearch(rowInt, colInt + 1, matrix, vSet);
    depthFirstSearch(rowInt, colInt - 1, matrix, vSet);
}

int friendCircles(vector<vector<int> > matrix) {
  int circlesInt = 0;
  unordered_set<string> visitedSet;
  int xInt = 0;
  int gInt = 0;
  while (xInt < matrix.size()){
    vector<int> vec = matrix[xInt];
    gInt = 0;
    while (gInt < vec.size()){
        string keyStr = to_string(xInt)+"_"+to_string(gInt);
        if (matrix[xInt][gInt] == 1 && visitedSet.find(keyStr) == visitedSet.end()){
            circlesInt++;
            cout << "KeyStr: " << keyStr << endl;
            depthFirstSearch(xInt, gInt, matrix, visitedSet);
        }
        gInt++;
    }
    xInt++;
  }

  return circlesInt;
}

int main(){
    vector<vector<int> > matrix1 = {{1,1,0},{1,1,0},{0,0,1}};
    vector<vector<int> > matrix2 = {{1,1,0},{1,1,1},{0,1,1}};
    int resultInt1 = friendCircles(matrix1);
    int resultInt2 = friendCircles(matrix2);
    cout << "Result 1: " << resultInt1 << ". (expect 2)" << endl;
    cout << "Result 2: " << resultInt2 << ". (expect 1)" << endl;
    return 0;
}