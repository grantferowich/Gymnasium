/**
 * @param {number} capacity

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
The LRU Cache interface must support get and put operations in O(1) time.
 */
class DoublyLinkedListNode{
    constructor(key, value){
        this.key = key === undefined ? null : key;
        this.value = value === undefined ? null : valu;
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
}