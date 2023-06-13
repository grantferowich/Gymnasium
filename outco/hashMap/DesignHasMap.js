/*  706. Design HashMap
Easy
4.2K
370
Companies
Design a HashMap without using any built-in hash table libraries.

URL: https://leetcode.com/problems/design-hashmap/

Started engineering on Tuesday, June 13, 2023. Stopped right before
testing the class' put and get methods.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 

Example 1:

Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
 

Constraints:

0 <= key, value <= 106
At most 104 calls will be made to put, get, and remove.
*/

var ListNode = function (keyInt = null, valueInt = null, nextLN = null){
    this.keyInt = keyInt;
    this.valueInt = valueInt;
    this.nextLN = nextLN;
}

var MyHashMap = function() {
    this.mapArr = new Array(1000).fill(new ListNode());
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */


MyHashMap.prototype.hash = function(keyInt){
    return keyInt % this.mapArr.length;
}

MyHashMap.prototype.put = function(keyInt, valueInt) {
    let insertionLocationInt = this.hash(keyInt);
    let rootLN = this.mapArr[insertionLocationInt];
    
    while (rootLN.nextLN){
        if (rootLN.keyInt === keyInt){
            rootLN.valueInt = valueInt
            return
        }
        rootLinkedList = rootLinkedList.nextLN
    }
};

/** 
 * @param {number} key
 * @return {number}
 */

MyHashMap.prototype.get = function(keyInt) {
    let insertionLocationInt = this.hash(keyInt)
    let rootLN = this.mapArr[insertionLocationInt]
    while (rootLN.nextLN){
        if (rootLN.keyInt === keyInt){
            return rootLN.valueInt
        }
        rootLN = rootLN.nextLN
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(keyInt) {
    
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

/* Tests */

let listNode1 = new ListNode(1, 4)
console.log(listNode1)

let myHashMap1 = new MyHashMap()
console.log('myHashMap1:', myHashMap1)
console.log('myHashMap1.mapArr.length:', myHashMap1.mapArr.length)

