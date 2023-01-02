/**
 * 141. Linked List Cycle
Easy
Given head, the head of a linked list,
determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some 
node in the list that can be reached again by continuously 
following the next pointer. 
Internally, pos is used to denote the index of the
node that tail's next pointer is connected to.
Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 *
 * 
 * instantiate two pointers, fast and slow
 * while the fast pointer is not null
 * send the fast pointer up two positions
 * send the slow pointer up one position
 * if the fast pointer reaches the slow pointer, return true
 * return false 
 * 
 * 
 *  */ 

class ListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// linkedList1's expected output is true since the node at -4 equals the head node
let linkedList1 = new ListNode(3)
linkedList1.next = new ListNode(2)
linkedList1.next.next = new ListNode(0)
linkedList1.next.next.next = new ListNode(-4)
linkedList1.next.next.next.next = linkedList1

let linkedList2 = new ListNode(1)
linkedList2.next = new ListNode(2)
linkedList2.next.next = linkedList2

let linkedList3 = new ListNode(1)

let linkedList4 = new ListNode()
const isCyclical = (node) => {
    let fast = node.next
    let slow = node
    while (fast){
        if (fast === slow){
            return true
        }
        fast = fast.next.next
        slow = slow.next
    }
    return false
}

console.log(isCyclical(linkedList1)) // expected output: true  | actual output: true
console.log(isCyclical(linkedList2)) // expected output: true  | actual output: true 
console.log(isCyclical(linkedList3)) // expected output: false | actual output: false
console.log(isCyclical(linkedList4)) // expected output: false | actual output: false