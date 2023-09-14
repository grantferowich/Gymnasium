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
    unordered_map<string, vector<string> > storageMap;
    //   Time Complexity:
    //   Auxiliary Space Complexity:
    
    vector<string> vertices(){
      vector<string> vertexVec;
      for (auto const pair : this->storageMap){
        vertexVec.push_back(pair.first);
      }
      return vertexVec;
    }

    bool addVertex(string idStr) {
      if (this->storageMap.find(idStr) != this->storageMap.end()){
        return false;
      }
      if (this->storageMap.find(idStr) == this->storageMap.end()){
        storageMap[idStr] = {};
      }
      return true;
    }

    bool removeVertex(string idStr) {
      if (this->storageMap.find(idStr) == this->storageMap.end()){
        return false;
      }
      if (this->storageMap.find(idStr) != this->storageMap.end()){
        this->storageMap.erase(idStr);
        for (auto pair : this->storageMap){
            vector<string> neighborVec = pair.second;
            neighborVec.erase(remove(neighborVec.begin(), neighborVec.end(), idStr), neighborVec.end());
        }
      }
      return true;
    }


    //   Time Complexity:
    //   Auxiliary Space Complexity:
    bool addEdge(string idStr1, string idStr2) {
      if (this->storageMap.find(idStr1) == this->storageMap.end()){
        this->addVertex(idStr1);
      }
      if (this->storageMap.find(idStr2) == this->storageMap.end()){
        this->addVertex(idStr2);
      }
      this->storageMap[idStr1].push_back(idStr2);
      return true;
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    bool removeEdge(string idStr1, string idStr2) {
      if (this->storageMap.find(idStr1) == this->storageMap.end() || this->storageMap.find(idStr2) == this->storageMap.end()){
        return false;
      } 
      this->storageMap[idStr1].erase(remove(this->storageMap[idStr1].begin(), this->storageMap[idStr1].end(), idStr2), this->storageMap[idStr1].end());
      return true;
    }


    //   Time Complexity:
    //   Auxiliary Space Complexity:
    bool isVertex(string idStr) {
      if (this->storageMap.find(idStr) == this->storageMap.end()){
        return false;
      }
      return true;
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    vector<string> neighbors(string idStr) {
      return this->storageMap[idStr];
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
            string vertex = vertexPair.first;
            const vector<string> &neighborsVec = vertexPair.second;

            cout << "Vertex " << vertex << ": ";
            cout << "{ ";
            int xInt = 0;
            while (xInt < neighborsVec.size()){
                string neighborStr = neighborsVec[xInt];
                cout << neighborStr;
                if (xInt < neighborsVec.size() - 1){
                    cout << ", ";
                    
                }
                xInt++;
            }
            cout << " }"; 
            cout << endl;
        }
    }

    void printGraph() {
    cout << "Vertices:" << endl;
    int numVertices = this->storageMap.size();
    int vertexCount = 0;
    
    for (const auto& vertexPair : this->storageMap) {
        std::cout << vertexPair.first;
        
        if (vertexCount < numVertices - 1) {
            std::cout << ", ";
        } else {
            std::cout << " ";
        }
        
        vertexCount++;
    }
    cout << endl;

    cout << "Edges:" << endl;
    for (const auto& vertexPair : this->storageMap) {
        string fromVertex = vertexPair.first;
        const std::vector<string>& neighbors = vertexPair.second;
        for (string toVertex : neighbors) {
            if (fromVertex < toVertex) {
                std::cout << fromVertex << " - " << toVertex << std::endl;
            }
        }
    }
    }

};  

Graph generateAdjacencyList(vector<vector<string> > edgeVec){
    Graph graphX;
    for (vector<string> pair : edgeVec){
        string uStr = pair[0];
        string vStr = pair[1];
        graphX.addEdge(uStr, vStr);
    }
    return graphX;
};

void printVector(const std::vector<std::string>& vec) {
    for (size_t i = 0; i < vec.size(); ++i) {
        std::cout << vec[i];
        if (i < vec.size() - 1) {
            std::cout << ", ";
        } else {
            std::cout << ".";
        }
    }
    std::cout << std::endl;
}

/*
 *  Cryptic Dictionary
 *  Developed Weds Sept 13, 2023.
 *  An array of strings in lexicographical (alphabetical) order has been put
 *  through a [simple substitution cypher](https://en.wikipedia.org/wiki/Substitution_cipher)
 *  where each letter is now substituted for another letter. Determine a valid
 *  ordering of characters in the cypher.
 *
 *  Parameters:
 *
 *  Input: words: [String]
 *  Output: [String]
 *
 *  Example:
 *
 *  Input: {"baa", "abcd", "abca", "cab", "cad"}
 *  Output: {"b", "d", "a", "c"}
 *
 *  Input: {"caa", "aaa", "aab"}
 *  Output: {"c", "a", "b"}
 *
 *  Source: https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/
 */

void depthFirstSearch(string nodeStr, Graph inputGraph, vector<string> &pathVec, unordered_set<string> &visitedSet){
    
    // OOB
    if (nodeStr.empty()){
      return;
    }

    visitedSet.insert(nodeStr);
    vector<string> neighborsVec = inputGraph.neighbors(nodeStr);

    for (string valueStr: neighborsVec){
      if (visitedSet.count(valueStr) == 0){
        depthFirstSearch(valueStr, inputGraph, pathVec, visitedSet);
      }
    }
  pathVec.push_back(nodeStr);

}

vector<string> topologicalSort(string rootStr, Graph inputGraph){
    vector<string> pathVec;
    unordered_set<string> visitedSet;
    depthFirstSearch(rootStr, inputGraph, pathVec, visitedSet);
    reverse(pathVec.begin(), pathVec.end());
    return pathVec;
}

vector<string> findUniqueLetters(string word1Str, string word2Str){
    int xInt = 0;
    int shortestWordLengthInt = min(word1Str.size(), word2Str.size());
    vector<string> outputStr;
    while (xInt < shortestWordLengthInt){
        if (word1Str[xInt] != word2Str[xInt]){
            string characterStr1(1, word1Str[xInt]);
            outputStr.push_back(characterStr1);
            string characterStr2(1, word2Str[xInt]);
            outputStr.push_back(characterStr2);
            return outputStr;
        }
        xInt++;
    }
    return {"", ""};
}

vector<string> crypticDictionary(vector<string> wordsVec) {
    vector<vector<string> > outputVec;
    int xInt = 0;
    while (xInt < wordsVec.size() - 1){
        string word1Str = wordsVec[xInt];
        string word2Str = wordsVec[xInt + 1];
        outputVec.push_back(findUniqueLetters(word1Str, word2Str));
        xInt++;
    }
    Graph graphG = generateAdjacencyList(outputVec);
    return topologicalSort(outputVec[0][0], graphG);
}

int main(){
    vector<string> inputVec1 = {"baa", "abcd", "abca", "cab", "cad"};
    vector<string> outputVec1 = crypticDictionary(inputVec1);
    cout << "Result 1: ";
    printVector(outputVec1);
    cout << endl;
    vector<string> inputVec2 = {"caa", "aaa", "aab"};
    vector<string> outputVec2 = crypticDictionary(inputVec2);
    cout << "Result 2: ";
    printVector(outputVec2);
    cout << endl;
    return 0;
}