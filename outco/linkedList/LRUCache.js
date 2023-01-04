/**
 * Successfully tested the solution 1/3/23

 capacity = 10 
 head at position 1
 tail node at position 10 

keys are 1, 3
keys occur at odd indexes in a 1-index count
values occur at even indexes in a 1-index count 

{ key: 1, value: 3 }--{ key: 2, value: 5 } 
key: 1
value: 3
capacity: 2 


// LRU Cache is a least recently used cache.
The LRU cache has two main methods: 
- get(key)
- put(key, value)

The LRU Cache interface must support get and put operations in O(1) time.
To support the get and put methods 
implement: 
- remove(node)
    - this method relies on the map interface's delete operation
- moveToHead(node)
- addToHead(node)
- removeTail() 

- Put method: has a node as an input parameter, doesn't return anything
    - relies on the map interface's set operation
    - addToHead
- Get method: has a key as an input parameter, returns a value
    - relies on the map interface's get method
    - relies on the moveToHead method

- in LRU Cache the implementation requires a doubly-linked list node class
    - the DLL must have key and value properties
    - the DLL is instantiated with input parameters of a key and a value
- the LRU Cache class has five primary properties:
    - this.capacity
    - this.size
    - this.map
    - this.head
    - this.tail
- also note the LRU class object's head points to the tail pointer
- and the tail pointer points to the head node
*/
class DoublyLinkedListNode{
    constructor(key, value){
        this.key = key === undefined ? null : key;
        this.value = value === undefined ? null : value;
        this.next = null;
        this.prev = null;
    }
}


class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.size = 0;
        this.map = new Map();
        this.head = new DoublyLinkedListNode(null, null);
        this.tail = new DoublyLinkedListNode(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key){
        if (!this.map.has(key)){
            return -1; 
        }
        const node = this.map.get(key);
        // tell the interface this key WAS recently used
        this.moveToHead(node)
        return node.value;
    }

    // put has two cases: one where the input key already exists in the map
    // a second where the key is not in the map and a node must be instantiated
    put(key, value){
        // case: input key is not a new key
        if (this.map.has(key)){
            // retrieve key already extant in the map
            const node = this.map.get(key);
            node.value = value;
            // send the updated node to the most recently used spot
            this.moveToHead(node);
            return;
        }

        //case: input key is a new key
        const xNode = new DoublyLinkedListNode(key, value);
        this.map.set(key, xNode);
        // a class method touched xNode, 
        this.addToHead(xNode);
        
        // remove the least recently used node
        // the least recently removed node by definition is the tail node
        if (this.size > this.capacity){
            this.removeTail();
        }
    }

    remove(node){
        this.map.delete(node.key);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
    }

    moveToHead(node){
        this.remove(node);
        this.addToHead(node);
    }

    addToHead(node){
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
        this.size++;
    }

    removeTail(){
        const tail = this.tail.prev;
        this.remove(tail)
    }
}

let xCache = new LRUCache(2);
xCache.put(1,1)
xCache.put(2,2) // 2,2 is the most recently used and 2,2 is at head - checks out 
console.log('xCache state 1: ')
console.log(xCache)
xCache.get(1)  // this works
console.log('xCache state 2:')
console.log(xCache) // 1,1 is the most recently used at 1,1 is at the head - checks out, however, the size was incorrectly decremented
// somehow calling the get method decremented the size without a corresponding increase in the size 
// get calls the moveToHead function -> moveToHead function calls the remove function  + addToHead function
//                                          --> remove function decrements the size 
//                                          --> addToHead function must increment the size 


// xCache.put(3,3) // the cache is expected to be {1:1, 3:3} after this method but the cache has {2:2, 3:3}
// console.log(xCache)