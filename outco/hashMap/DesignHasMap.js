/*  706. Design HashMap
Easy
4.2K
370
Companies
Design a HashMap without using any built-in hash table libraries.

URL: https://leetcode.com/problems/design-hashmap/

Started engineering on Tuesday, June 13, 2023. Stopped right before
testing the class' put and get methods.

Successfully tested the put and get methods on June 14, 2023 at 12:57pm.
I finished up the session going through the remove method. I will test remove tomorrow.

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

New debugging technique! 
When the output is not what you expect
go through each line of the method specifying exactly what's happening 
*/

var ListNode = function (keyInt = null, valueInt = null, nextLN = null){
    this.keyInt = keyInt;
    this.valueInt = valueInt;
    this.nextLN = nextLN;
}

var MyHashMap = function() {
    this.mapArr = new Array(1000).fill(new ListNode())
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
    // find the node in the array where there will be an insertion
    let insertLN = this.mapArr[this.hash(keyInt)];
    // does the current bucket have a key equal to the present key?
    while (insertLN.nextLN){
        // the current bucket has a key equal to the present key!
        // time for an update! 
        if (insertLN.nextLN.keyInt === keyInt){
            insertLN.nextLN.valueInt = valueInt
            return
        }
        // loop
        insertLN = insertLN.nextLN
    }
    // the current bucket was not found to have 
    // append the key value pair to the end of the current bucket
    insertLN.nextLN = new ListNode(keyInt, valueInt)
};

/** 
 * @param {number} key
 * @return {number}
 */

MyHashMap.prototype.get = function(keyInt) {
    let insertionLocationInt = this.hash(keyInt)
    let currentLN = this.mapArr[insertionLocationInt]
    while (currentLN && currentLN.keyInt !== keyInt){
        currentLN = currentLN.nextLN;
    }
    if (currentLN) {
        return currentLN.valueInt
    }
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(keyInt) {
    // isolate the bucket number where the key is laocated
    let insertionLocationInt = this.hash(keyInt);
    // isolate the bucket of list nodes (the linked list)
    let currentLN = this.mapArr[insertionLocationInt];
    // loop over the bucket's linked list
    // loop while the next node is not null
    while (currentLN.next){
        if (currentLN.nextLN.keyInt === keyInt){
            currentLN.nextLN = currentLN.nextLN.nextLN
        }
        currentLNLN = currentLN.nextLN
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

/* Tests */

// let listNode1 = new ListNode(1, 4)
// console.log(listNode1)

let myHashMap1 = new MyHashMap()
// console.log('myHashMap1:', myHashMap1)
// console.log('myHashMap1.mapArr.length:', myHashMap1.mapArr.length)
myHashMap1.put(2, 8)
myHashMap1.put(1, 5)
console.log(myHashMap1.get(2)) // 8 // successfully returned the proper value at 12:56pm, June 14, 2023
console.log(myHashMap1.get(1)) // 5 // successfully returned the proper value at 12:56pm, June 14, 2023
console.log(myHashMap1.get(14)) // -1 
myHashMap1.remove(1)
console.log(myHashMap1.get(1)) // expect -1 // 

// console.log('myHashMap', myHashMap1)
/* Test results 
ListNode { keyInt: 1, valueInt: 4, nextLN: null }
myHashMap1: MyHashMap {
  mapArr: [
    ListNode { keyInt: null, valueInt: null, nextLN: null },
    ... 999 more items
  ]
}
myHashMap1.mapArr.length: 1000
*/