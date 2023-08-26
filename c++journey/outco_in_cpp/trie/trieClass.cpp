/**
 *  Homework - Trie
 *
 *  Problem 1: TrieNode class
 *
 *  Prompt:    Create a TrieNode class
 *             The TrieNode class should contain the following properties:
 *
 *                 value:   {Char}
 *                  children:   {Map}
 *                   end:   {bool}
 *
 *
 *  Problem 2:  Trie class
 *
 *  Prompt:     Create a Trie class
 *              The Trie class should contain the following properties:
 *
 *                  root:   {TrieNode}
 *
 *              The Trie class should also contain the following methods:
 *
 *                insert:   A method that adds a word.
 *
 *                          Input:     word {string}
 *                          Output:    void
 *
 *                isWord:   A method that checks whether a word is in the trie.
 *
 *                          Input:     word {string}
 *                          Output:    bool
 *
 *              isPrefix:   A method that checks whether an input is a prefix of
 *                          a word in the string.
 *
 *                          Input:     prefix {string}
 *                          Output:    bool
 *
 *            startsWith:   A method that returns all words that starts with an
 *                          input word.
 *
 *                          Input:     prefix {string}
 *                          Output:    string[]
 *
 *          EXTRA CREDIT:
 *                remove:   Removes a word from the trie.
 *
 *                          Input:     word {string}
 *                          Output:    void
 */

#include <vector>
#include <string>
#include <stack>
#include <algorithm>
#include <iostream>
#include <unordered_map>
#include <typeinfo>
using namespace std;

// DO NOT EDIT
// TrieNode class
class TrieNode {
  public:
    char valueChar;
    unordered_map<char, TrieNode*> childrenMap;
    bool endBool;

    TrieNode(char valueXStr) {
        valueChar = valueXStr;
        endBool = false;
    }
};

class Trie {

    private: 
      void printNodesRecursive(TrieNode* node, string currentWordStr){
        if (node->endBool){
          cout << currentWordStr << endl;
        }
        for (const auto& pair: node->childrenMap){
          printNodesRecursive(pair.second, currentWordStr + pair.first);
        }
    }
    
    public:
      TrieNode *rootNode = new TrieNode('\u0000');

      void printNodes(){
        printNodesRecursive(rootNode, "");
      }

      bool insert(string wordStr) {
        if (wordStr.size() == 0){
          return false;
        }
        TrieNode *currentNode = this->rootNode;
        int xInt = 0;
        while (xInt < wordStr.size()){
          char charX = wordStr[xInt];
          if (currentNode->childrenMap.find(charX) == currentNode->childrenMap.end()){
            TrieNode *xNode = new TrieNode(charX);
            currentNode->childrenMap[charX] = xNode;
            if (xInt == wordStr.size() - 1){
              xNode->endBool = true;
            }
          }
          currentNode = currentNode->childrenMap[charX];
          xInt++;
        }
        return false;
      }

      bool isWord(string wordStr) {
        TrieNode *currentNode = this->rootNode;
        int xInt = 0;
        while (xInt < wordStr.size()){
          char charX = wordStr[xInt];
          if (currentNode->childrenMap.find(charX) == currentNode->childrenMap.end()){
            return false;
          }
          if (currentNode->childrenMap.find(charX) != currentNode->childrenMap.end()){
            if (xInt == wordStr.size() - 1){
              return true;
            }
            currentNode = currentNode->childrenMap[charX];
          }
          xInt++;
        }
        return false;
      }

      bool isPrefix(string prefixStr) {
        TrieNode *currentNode = this->rootNode;
        int xInt = 0;
        while (xInt < prefixStr.size()){
          char charX = prefixStr[xInt];
          if (currentNode->childrenMap.find(charX) == currentNode->childrenMap.end()){
            return false;
          }
          if (currentNode->childrenMap.find(charX) != currentNode->childrenMap.end()){
            if (xInt == prefixStr.size() - 1){
              return true;
            }
            currentNode = currentNode->childrenMap[xInt];
          }
         
          xInt++;
        }

        return false;
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

      vector<string> startsWith(string prefixStr) {
        int xInt = 0;
        TrieNode *currentNode = this->rootNode;
        vector<string> outputVec;
        while (xInt < prefixStr.size()){
          char charX = prefixStr[xInt];
          currentNode = currentNode->childrenMap[charX];
          if (xInt == prefixStr.size() - 1){
            for (const auto& pair : currentNode->childrenMap){
              string newStr = prefixStr;
              prefixStr.push_back(currentNode->valueChar);
              while (currentNode){
                char pair->first;
                currentNode = currentNode->childrenMap[];
              }
            }
          }
          xInt++;
        }

        return vector<string>{};
      }

      void remove(string wordStr) {
        // YOUR WORK HERE
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

void printVector(const std::vector<string>& vec){
    for (string valueStr : vec){
        cout << valueStr << " ";
    }
    cout << endl;
}

int main(){
  Trie trieX;
  trieX.insert("dog");
  trieX.insert("dino");
  trieX.insert("dinosaur");
  trieX.insert("win");
  trieX.insert("dinner");
  bool resultToF1 = trieX.isWord("dog");
  bool resultToF2 = trieX.isWord("cat");
  bool resultToF3 = trieX.isWord("do");
  cout << "Result 1:" << printToFToString(resultToF1) << endl;
  cout << "Result 2:" << printToFToString(resultToF2) << endl;
  cout << "Result 3:" << printToFToString(resultToF3) << endl;
  vector<string> startsWithDiVec = trieX.startsWith("di");
  cout << "Result 4: Starts with Di:" << endl;
  printVector(startsWithDiVec); // dino, dinosaur, dinner
  trieX.printNodes();
  return 0;
}
