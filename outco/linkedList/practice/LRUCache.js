/*
 * Homework - LRU Cache
 */

/*
 *
 *  Instructions: LRU Cache is a popular and challenging algorithm question
 *                commonly asked during whiteboarding and tech screen sessions.
 *
 *                While difficult, this exercise is a good problem to test your
 *                ability to build and manipulate data structures.
 *
 *
 *  LRU Cache
 *
 *                Design and implement a data structure for a Least Recently
 *                Used (LRU) Cache.
 *
 *                This implementation involves a doubly linked list and a hash map.
 *
 *          NOTE: A LRU caching scheme is designed to remove the least recently
 *                used item when a new item is added to the cache which is
 *                currently at or has just reached capacity.
 *
 *                An item is considered to be recently used if it has just been
 *                accessed or added.
 *
 *          I.  Node Class
 *              Create a Node class
 *
 *              The Node class should contain the following properties:
 *              key: {String}
 *              value: {String}
 *              previous: {Node} (initially None)
 *              next: {Node} (initially None)
 *
 *         II.  LRUCache Class
 *              Create an LRUCache class
 *
 *              The LRUCache class should contain the following properties:
 *              capacity: {Integer}
 *              count: {Integer} (initially 0)
 *              cache: {Hash Table} The keys represent unique ids of each node,
 *                                  and the values represent the node objects
 *                                  that possess those keys.
 *              head: {Node}
 *              tail: {Node}
 *
 *     Your LRU cache should have the following methods:
 *
 *      get(key): Retreives a value from the cache (will always be positive) at
 *                the key if the key exists in the cache, otherwise returns -1.
 *
 * set(key,value): Inserts the value at the key or creates a new key:value entry
 *                if key is not present. When the cache reaches its capacity, it
 *                should invalidate the least recently used item before
 *                inserting a new item.
 *
 *          HINT: Consider what data structure(s) might be neccessary to
 *                implement the LRU Cache
 *
 *     Example:
 *     lruCache = new LRUCache(3);
 *     lruCache.set('doc', 'david');
 *     lruCache.set('cpo', 'joshua');
 *     lruCache.set('ceo', 'andy');
 *
 *     lruCache.get('doc'); => 'david'
 *     lruCache.set('swe', 'ron');
 *     lruCache.get('cpo'); => -1
 *
 *
 * 
 * after each put, 
 * check if size is greater than capacity
 * if it is, evict the last item
 * 
 * call moveToHead after each get or put call
 */

'use strict';

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}


class LRUCache {

  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = {};
    this.head = new Node();
    this.tail = new Node();

    // doubly connected
    this.head.next = this.tail;
    this.tail.previous = this.head
  };
  // head
  // newNode.prev
  // null -          newNode       

  addNode(node) {
    // update pointers of new node
    node.previous = this.head;
    node.next = this.head.next;
    // update pointers of head node
    this.head.next.previous = node;
    this.head.next = node;
  };


  removeNode(node){
    // access pointers of side
    // nodes to the node being deleted
    let preNode = node.previous;
    let nextNode = node.next;
    // update the pointers of the side nodes
    // to connect with one another 
    preNode.next = nextNode;
    nextNode.previous = preNode
  };


  moveToHead(node){
   this.removeNode(node);
   this.addNode(node)
  };


  removeFromTail(){
    let xNode = this.tail.previous;
    this.removeNode(xNode);
    return xNode;
  };


  get(key) {
   let xNode = this.cache[key];
   // as long as xNode exists...
   if (xNode !== undefined){
    // update location of xNode
    this.moveToHead(xNode);
    return xNode.value
   }
   return 'key does not exist'
  };


  set(key, value) {
    // check whether key exists
    let xNode = this.cache[key];
    if (xNode){
      // key exists
      xNode.value = value;
      this.moveToHead
      return
    }
    // first handle case where 
    // key does not exist
    if (xNode === undefined){
      // if the key-val pair is new
      // create a new node, set it in the cache
      // then move the node to the front of the 
      // lru cache
      // addNode enforces LRU policy
      let zNode = new Node(key,value);
      this.cache[key] = zNode;
      this.addNode(zNode);
      // always increment size
      this.size++;
      // enforce LRU policy by evicting a 
      // node if the cache size exceeds the 
      // specified capacity

      if (this.size > this.capacity){
        // call removal method
        let xNode = this.removeFromTail();
        // call deletion on cache's hash map
        delete this.cache[xNode]
        // decrement size
        this.size--;
      }
    }
  };
}

