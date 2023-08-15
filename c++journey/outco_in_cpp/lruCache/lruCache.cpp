/*

  Homework - LRU Cache
  Started developing on August 15, 2023. 
  Problem: LRU Cache

  Instructions: LRU Cache is a popular and challenging algorithm question
                commonly asked during whiteboarding and tech screen sessions.

                While difficult, this exercise is a good problem to test your
                ability to build and manipulate data structures.

                Design and implement a data structure for a Least Recently
                Used (LRU) Cache.

                This implementation involves a doubly linked list and a hash map.

          NOTE: A LRU caching scheme is designed to remove the least recently
                used item when a new item is added to the cache which is
                currently at or has just reached capacity.

                An item is considered to be recently used if it has just been
                accessed or added.

          I.  Node Class
              Create a Node class

              The Node class should contain the following properties:
              key: {String}
              value: {String}
              previous: {Node*} (initially NULL)
              next: {Node*} (initially NULL)

         II.  LRUCache Class
              Create an LRUCache class

              The LRUCache class should contain the following properties:
              capacity: {Integer}
              count: {Integer} (initially 0)
              cache: {Hash Table} The keys represent unique ids of each node, 
              and the values represent the node objects that possess those keys.
              head: {Node*}
              tail: {Node*}

     Your LRU cache should have the following methods:

      get(key): Retreives a value from the cache (will always be positive) at
                the key if the key exists in the cache, otherwise returns empty string.

      set(key,value): Inserts the value at the key or creates a new key:value entry
                if key is not present. When the cache reaches its capacity, it
                should invalidate the least recently used item before
                inserting a new item.

          HINT: Consider what data structure(s) might be neccessary to
                implement the LRU Cache

     Example:
     lruCache = new LRUCache(03);
     lruCache->set('doc', 'david');
     lruCache->set('cpo', 'joshua');
     lruCache->set('ceo', 'andy');

     lruCache->get('doc'); => 'david'
     lruCache->set('swe', 'ron');
     lruCache->get('cpo'); => ''


*/

#include <iterator>
#include <string>
#include <iostream>
#include <unordered_map>
#include <typeinfo>
using namespace std;


class Node {
  public:
    string keyStr;
    string valueStr;
    Node *previousNode, *nextNode;

    Node(){
        previousNode = nullptr;
        nextNode = nullptr;
    }
};


class LRUCache {
  public:
    int capacityInt;
    int countInt;
    unordered_map<string, Node*> cacheMap;
    Node *headNode, *tailNode;

    LRUCache(int xCapacityInt) {
      this->capacityInt = xCapacityInt;
      this->countInt = 0;
      headNode = new Node();
      tailNode = new Node();
      headNode->nextNode = tailNode;
      tailNode->previousNode = headNode;
    }

    // get should read the valueStr
    // associated with the keyStr
    // get should move the node itself to
    // be the node which the head's next pointer
    // points to
    string get(string xKeyStr) {
      if (this->cacheMap.count(xKeyStr) == 0){
        return "";
      }
      Node* xNode = this->cacheMap[xKeyStr];
      moveToHead(xNode);
      return xNode->valueStr;
    }

    void set(string xKeyStr, string xValueStr) {
        Node *xNode = this->cacheMap[xKeyStr];

        if (xNode == NULL){
            Node *xNode = new Node();
            xNode->keyStr = xKeyStr;
            xNode->valueStr = xValueStr;
            this->cacheMap[xKeyStr] = xNode;
            this->addNode(xNode);
            if (countInt > capacityInt){
                Node *toRemoveNode = this->removeFromTail();
                cacheMap.erase(toRemoveNode->keyStr);
                this->countInt--;
            }
        } else {
            xNode->valueStr = xValueStr;
            this->moveToHead(xNode);
        }        
    }
  private:
    /*
    Following are helper methods that will aid in
    implementing the get and set methods for this
    LRU Cache data structure
    */
    /*
    Insert a new node immediately following the
    head node
    */
    void addNode(Node *xNode) {
        xNode->nextNode = this->headNode->nextNode;
        this->headNode->nextNode = xNode;
        xNode->previousNode = this->headNode;
    }
    /*
    Remove an existing node from the linked list
    */
    void removeNode(Node *xNode) {
        Node* prevNode = xNode->previousNode;
        Node* nextNode = xNode->nextNode;
        prevNode->nextNode = nextNode;
        nextNode->previousNode = prevNode;
    }
    /*
    Move particular node from any position within
    the linked list to the head of the linked
    list
    */
    void moveToHead(Node *xNode) {
      // update pointers of the node in its current position
      xNode->previousNode->nextNode = xNode->nextNode;
      xNode->nextNode->previousNode = xNode->previousNode;
      xNode->nextNode = this->headNode->nextNode;
      xNode->previousNode = this->headNode;
      this->headNode->nextNode = xNode;
    }
    /*
    Remove the current tail
    */
    Node* removeFromTail() {
      Node *toRemoveNode = this->tailNode->previousNode;
      string toRemoveKeyStr = toRemoveNode->keyStr;
      toRemoveNode->previousNode->nextNode = this->tailNode;
      this->tailNode->previousNode = toRemoveNode->previousNode;
      toRemoveNode->nextNode = nullptr;
      toRemoveNode->previousNode = nullptr;
      return toRemoveNode;
    }
};

/* 
     Example:
     lruCache = new LRUCache(03);
     lruCache->set('doc', 'david');
     lruCache->set('cpo', 'joshua');
     lruCache->set('ceo', 'andy');

     lruCache->get('doc'); => 'david'
     lruCache->set('swe', 'ron');
     lruCache->get('cpo'); => ''
*/

void printMap(const unordered_map<string, Node*>& myMap) {
    for (const auto& pair : myMap) {
        std::cout << "Key: " << pair.first << ", Node Address: " << pair.second << std::endl;
    }
}

int main(){
    LRUCache* lruCacheX = new LRUCache(3);
    lruCacheX->set("sd1", "Gary");
    lruCacheX->set("sd2", "Joseph");
    lruCacheX->set("em", "Matthew");
    string sd1Str = lruCacheX->cacheMap["sd1"]->valueStr;
    cout << "SD 1: " << sd1Str << endl;
    string sd2Str = lruCacheX->cacheMap["sd2"]->valueStr;
    cout << "SD 2: " << sd2Str << endl;
    string emStr = lruCacheX->cacheMap["em"]->valueStr;
    cout << "EM: " << emStr << endl;
    lruCacheX->set("qa", "Paul");
    string qaStr = lruCacheX->cacheMap["qa"]->valueStr;
    cout << "QA: " << qaStr << endl;
    // string sd1StrX = lruCacheX->cacheMap["sd1"]->valueStr; // expect ""
    // cout << "SD1: " << sd1StrX << endl;
    delete lruCacheX;
    return 0;
}
