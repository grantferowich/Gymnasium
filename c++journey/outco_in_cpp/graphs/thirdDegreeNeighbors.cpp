/*
 *  Third Degree Neighbors
 *
 *  Developed on August 28, 2023.
 *
 *  Given an undirected graph represented by a list of edges and a start
 *  vertex, return an array of the 3rd degree neighbors.
 *
 *  Parameters:
 *
 *  Input: edges: [[int]]
 *  Input: start: int
 *  Output: [int]
 *
 *  Example:
 *
 *  The following example with start vertex `1`:
 *  Input: `{{1,2},{2,1},{1,3},{3,1},{2,4},{4,2},{3,4},{4,3},
 *           {4,8},{8,4},{4,5},{5,4},{5,6},{6,5},{5,7},{7,5},
 *           {6,7},{7,6},{8,7},{7,8},{8,9},{9,8}}`
 *  Input: 1
 *  Output: `[5,8]` or `[8,5]`     (order does not matter)
 *  Picture here: https://res.cloudinary.com/outco/image/upload/v1519850256/graph-traversal/Paper.Graph_Traversal.2.png
 *
 *
 * Implement a queue. 
 * Traverse the graph in a breadth-first traversal manner:
 * Locate all the neighbors of the present node.
 * Enqueue those neighbors to the queue if the neighbors have not been visited. 
 * Keep track of the neighborDegreeInt. 
 * At first the neighborDegreeInt is 0.
 * If the 
 */

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
    int lengthInt = 0;
    ListNode *headNode;
    ListNode *tailNode;

    LinkedList() {
      this->headNode = nullptr;
      this->tailNode = nullptr;
    }

    // Time Complexity: O(N)
    // Auxiliary Space Complexity: O(1)
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

    // Time Complexity: O(N)
    // Auxiliary Space Complexity: O(1)
    void append_value(int valueInt){
      this->insert_value(valueInt, lengthInt);
    }

    // Time Complexity:O(N)
    // Auxiliary Space Complexity: O(1)
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

    // Time Complexity: o(n)
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

class Queue {
    public: 
        ListNode* firstNode;
        ListNode* lastNode;  
        int lengthInt;

        Queue(){
            this->firstNode = nullptr;
            this->lastNode = nullptr;
            this->lengthInt = 0;
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
            this->lengthInt++;
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
            this->lengthInt--;
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

vector<int> thirdDegreeNeighbors(vector<vector<int> > edgesVec, int startInt) {
    Graph graphX = generateAdjacencyList(edgesVec);
    Queue* queueX = new Queue();
    queueX->enqueue([startInt, 0]);
    unordered_map<int, int> vistedMap;
    unordered_set<int> thirdDegreeNeighborsSet;
    vector<int> outputVec;
    while (queueX->lengthInt > 0){

        vector<int> tuple = queueX->dequeue();
    }

    for (int valueInt: thirdDegreeNeighborsSet){
        outputVec.push_back(valueInt);
    }   
    return outputVec;
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

int main(){
    vector<vector<int > > inputVec1 = {{1,2},{2,1},{1,3},{3,1},{2,4},{4,2},{3,4},{4,3},{4,8},{8,4},{4,5},{5,4},{5,6},{6,5},{5,7},{7,5},{6,7},{7,6},{8,7},{7,8},{8,9},{9,8}};
    int inputInt1 = 1;
    vector<int> outputVec1 = thirdDegreeNeighbors(inputVec1, inputInt1);
    cout << "Result 1: " << endl;
    printVector(outputVec1);
    return 0;
}