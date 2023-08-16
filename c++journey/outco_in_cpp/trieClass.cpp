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

    public:
      TrieNode *rootNode = new TrieNode('\u0000');

      bool insert(string wordStr) {
        char charX = wordStr[0];
        if (rootNode->childrenMap.find(charX) == rootNode->childrenMap.end()){
            rootNode[]
        }
        return false;
      }

      bool isWord(string word) {
        // YOUR WORK HERE
        return false;
      }

      bool isPrefix(string prefix) {
        // YOUR WORK HERE
        return false;
      }

      vector<string> startsWith(string prefix) {
        // YOUR WORK HERE
        return vector<string>{};
      }

      void remove(string word) {
        // YOUR WORK HERE
      }

};

