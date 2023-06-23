/*
 * Homework - LRU Cache

Started engineering on Saturday, June 17, 2023.
The class successfully passed 2 out of 5 tests.
Passed three of five tests as of June 20, 2023.
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
 */

'use strict';

class Node {
  constructor (keyStr = null, valueStr = null) {
    this.keyStr = keyStr;
    this.valueStr = valueStr;
    this.previousNode = null;
    this.nextNode = null
  }
}


/* The basic logic is that we have a cache with capacity 3

The LRU cache takes the form of a doubly-linked list and a map. The key of each node points to a 
key-value pair in the map.
Initially, count = 0; there is a head node pointing at the tail node and a tail node
pointing at the head node. CapacityInt = 3. For each slot in the LRU Cache,
a key which may be an integer or a string points to a linked list node.
Whenever there is a get or set operation impacting a key, that key is moved to 
the most recently used position, which is the the node next to the head of the linked list.
Whenever there is a set operation, there is a check to see if the countInt is greater than capacityInt.
If capacityInt is greater than countInt then the least recently used node is evicted.
The least recently used node is defined as the node closest to the tail node. 

Suppose "name" => "grant" is added (count = 1 ) // mru = name, grant
"college" => "wake forest" is added (count = 2) // mru = college, grant // lru name, grant
"hometown" => "chicago" is added (count = 3) // mru "hometown", "chicago" // lru name, grant
"hobbies" => "golf" is added (count = 4)
  --> count exceeds capacity
  --> evict LRU
  --> LRU is name, grant

How will you handle MRU and LRU? 
MRU: the node closest to the head node is the MRU key value pair
LRU: the node clostst to the tail node is the LRU key value pair

How will you find the LRU node for evicting? 
Find the closest node to the tail node which is not null.

How will you maintain the MRU? 
After each get() and each set() operation the impacted node will be moved to the head of the linked list.

How will you maintain the capacity condition?
After each set operation check the count of the cache. 
  -->  If the count of the cache exceeds the capacity, remove the LRU.
*/

class LRUCache {
  constructor(capacityInt) {
    this.capacityInt = capacityInt;
    this.countInt = 0;
    this.cacheMap = new Map();
    this.headNode = new Node();
    this.tailNode = new Node();
    this.headNode.nextNode = this.tailNode;
    this.tailNode.previousNode = this.headNode;
  };

  addNodeToHead(node) {
    node.nextNode = this.headNode.nextNode;
    node.previousNode = this.headNode
    this.headNode.nextNode.previousNode = node
    this.headNode.nextNode = node;
  };

  removeNode(node) {
    this.cacheMap.delete(node.keyStr)
    let previousNode = node.previousNode
    previousNode.nextNode = node.nextNode
    node.nextNode.previousNode = previousNode
  };

  moveToHead(node) {
    this.removeNode(node)
    this.addNodeToHead(node)
  };

  removeFromTail() {
    this.removeNode(this.tailNode.previousNode)
  };

  get(keyStr) {
    if (!this.cacheMap.has(keyStr)){
      return -1
    }
    if (this.cacheMap.has(keyStr)){
      let nodeX = this.cacheMap.get(keyStr)
      this.moveToHead(nodeX)
      return nodeX.valueStr
    }
  };


  set(keyStr, valueStr) {

    if (this.cacheMap.has(keyStr)){
      let existingNode = this.cacheMap.get(keyStr); 
      this.moveToHead(existingNode);  
    }   
  // append a new element to cache
  // count increments
    if (!this.cacheMap.has(keyStr)){
        let newNode = new Node(keyStr, valueStr);
        this.cacheMap.set(keyStr, newNode);
        this.addNodeToHead(newNode);
        this.countInt++;
    } 
    
    // evict the LRU
    // count decrements
    if (this.countInt > this.capacityInt){
        this.countInt--;
        this.removeFromTail()
    }
  };

}

// let lruCache = new LRUCache(3)
// lruCache.set('name', 'Grant')
// // lruCache.set('college', 'wake forest')
// // lruCache.set('hometown', 'Chicago')
// // lruCache.set('hometown 2', 'Winston-Salem')
// // console.log('lru cache', lruCache)

// const loop = (node) => {
//     let xInt = 0
//     while (node){
//       console.log('node', node)
//       xInt++
//       node = node.next
//     }
// }

// loop(lruCache)


//////////////////////////////////////////////////////////
/////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
//////////////////////////////////////////////////////////

console.log('LRU Cache tests');
var testCount = [0, 0];

assert(testCount, 'should be able to set and get key-value pairs', function(){
  var lruCache = new LRUCache(3);
  lruCache.set('doc', 'david');
  lruCache.set('cpo', 'joshua');
  lruCache.set('ceo', 'andy');
  var example1 = lruCache.get('doc');
  var example2 = lruCache.get('cpo');
  var example3 = lruCache.get('ceo');
  return example1 === 'david' && example2 === 'joshua' && example3 === 'andy';
});

assert(testCount, 'should be able overwrite values with same keys when using set method', function(){
  var lruCache = new LRUCache(3);
  lruCache.set('student', 'henry');
  lruCache.set('student', 'eliza');
  var example = lruCache.get('student');
  return example === 'eliza';
});

assert(testCount, 'old key value pairs should be removed when capacity has been exceeded', function(){
  var lruCache = new LRUCache(3);
  lruCache.set('dentist', 'akali');
  lruCache.set('doctor', 'swain');
  lruCache.set('lawyer', 'kennan');
  lruCache.set('judge', 'leona');
  return lruCache.get('dentist') === -1;
});

assert(testCount, 'most recently modified/viewed items should be moved to front of LRU cache while stale items are moved to end', function(){
  var lruCache = new LRUCache(3);
  lruCache.set('doc', 'david');
  lruCache.set('cpo', 'joshua');
  lruCache.set('ceo', 'andy');
  lruCache.get('doc');
  lruCache.set('swe', 'ron');
  return lruCache.get('cpo') === -1;
});

assert(testCount, 'should be able to replace multiple stale items', function(){
  var lruCache = new LRUCache(3);
  lruCache.set('one', 1);
  lruCache.set('two', 2);
  lruCache.set('three', 3);
  lruCache.set('four', 4);
  lruCache.set('five', 5);
  lruCache.set('six', 6);
  var ex1 = lruCache.get('one');
  var ex2 = lruCache.get('two');
  var ex3 = lruCache.get('three');
  var ex4 = lruCache.get('four');
  var ex5 = lruCache.get('five');
  var ex6 = lruCache.get('six');
  console.log(lruCache)
  return ex1 === -1 && ex2 === -1 && ex3 === -1 && ex4 === 4 && ex5 === 5 && ex6 === 6;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



// function for checking if arrays are equal
function arraysEqual(arr1, arr2) {
  if(arr1.length !== arr2.length)
    return false;
  for(var i = arr1.length; i--;) {
    if(arr1[i] !== arr2[i])
      return false;
  }
  return true;
}

// custom assert function to handle tests
// Array count : keeps track out how many tests pass and how many total
//   in the form of a two item array i.e., [0, 0]
// String name : describes the test
// Function test : performs a set of operations and returns a boolean
//   indicating if test passed
function assert(count, name, test){
  if(!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  var pass = 'false';
  var errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}
