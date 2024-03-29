/* 141. Linked List Cycle
Easy
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to.
Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
Example 1:

                   h  r
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed). 

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Solution
Set all nodes into a hash set 
insertion into hash set with value true
check whether the current node has already been visited
if the current node was already visited then there must be a cycle.
return true.
if the next pointer ever points to null return false. 

Constraints: 
O(N) space complexity
O(N) time complexity

*/


class ListNode {
    constructor(value){
        this.value = value;
        this.nIntext = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    };
    addToTail(value){
        let node = new ListNode(value);
        // if this.tail is null then the linked list must not be populated
        if (this.tail === null){
            this.head = node;
            this.tail = node;
        } else {
            // set the tail to be the new node 
            this.tail.next = node;
            this.tail = node;  
        }
        this.length++
        return;
    } 
    // removal of the first node is a constant time operation
    removeFirstNode(){
        if (this.head === null){
            return
        }
        let root = this.head;
        this.head = this.head.next;
        this.length--;
        return root;
    }
    // removal of the last node is a linear time operation
    removeLastNode(){
        // check if the linked list is empty
        if (this.head === null){
            return;
        }

        // remove the first node when there is only one node
        if (!this.head.next){
            this.head = null;
            return this.head;
        }

        let node = this.head;
        while (node.next.next){
            node = node.next;
        }
        node.next = null; 
        this.length--;
    }
}

// test case
let linkedList = new LinkedList();
linkedList.head = new ListNode(3);
linkedList.next = new ListNode(2);
linkedList.next.next = new ListNode(0);
linkedList.next.next.next = new ListNode(-4);
linkedList.next.next.next.next = linkedList.next

let linkedList2 = new LinkedList();
linkedList2.head = new ListNode(1)
linkedList2.removeLastNode()
console.log(linkedList2)

const linkedListHasACycleWithHash = (head) => {
    let current = head;
    let visitedHash = {};
    while (current !== null){
        // case where there is a definitely no cycle: return false
        if (current.next === null || current.next === undefined){
            return false;
        } 
        // if the current node was seen before the linked list is cyclical: return true
        if (visitedHash[current]){
            return true;
        }  
        // mark new nodes as visited in the visitedHash
        if (!visitedHash[current]) {
            visitedHash[current] = true;
        }
        current = current.next;
    }
    return visitedHash[head];
}

console.log(linkedListHasACycleWithHash(linkedList)) // true
console.log(linkedListHasACycleWithHash(linkedList2)) // false

// let head = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
// let result = linkedListHasACycleWithHash(head);
// assert(result === false);
