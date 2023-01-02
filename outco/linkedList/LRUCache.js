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


// first in first out 
 */
class ListNode{
    constructor(value){
        this.key = key === undefined ? null : key
        this.value = value === undefined ? null : value
        this.next = null
    }
}

class LRUCache{
    constructor(capacity){
        this.capacity = capacity
        this.linkedList = new ListNode()
    }

    addToCapacity(capacity)
}
let lRUCache = new LRUCache(2)
lRUCache.put(1,1)


/** 
 * @param {number} key
 * @return {number}

 // input: key
 // output: value 
 */
LRUCache.prototype.get = function(key) {
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */