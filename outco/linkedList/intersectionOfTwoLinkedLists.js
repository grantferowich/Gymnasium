/* 217 - Intersection of Two Linked Lists
Write a function to find the node at which the intersection of two singly linked lists begins.

If there is no intersection between the two nodes, simply return null.

Input:  headA {ListNode}, headB {ListNode}
Output: {ListNode} or null
Example
Input: 	a1, b1


A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3


Output:	c1



Input:  a1, b1

A:          a1 → a2


B:     b1 → b2 → b3


Output: null
Constraints
Time Complexity: O(N)

Auxiliary Space Complexity: O(1) 


The approach 
loop and check

*/


class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}
  
let head = new ListNode(1);
head.next = new ListNode(5);
head.next.next = new ListNode(7);
head.next.next.next = new ListNode(10);
head.next.next.next.next = new ListNode(9);

const intersection = (a,b) => {

}

