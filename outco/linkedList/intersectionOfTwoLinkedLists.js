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

Input: a1, b1


A:  a1   a3
      \ /
      c2
      / \
B:  b1  b3

output: true
the two linked lists share a node 



Constraints
Time Complexity: O(N)

Auxiliary Space Complexity: O(1) 


The approach 
loop through each element of the first linked list

*/


class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}
  
let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(12);
head.next.next.next = new ListNode(1);
// head.next.next.next.next = new ListNode(1);

let head2 = new ListNode(0);
head2.next = new ListNode(5);
head2.next.next = new ListNode(12);
head2.next.next.next = new ListNode(1);
// head2.next.next.next.next = new ListNode(1);

let head3 = new ListNode(99);
head3.next = new ListNode(21);
head3.next.next = new ListNode(43);
head3.next.next.next = new ListNode(19);
head3.next.next.next.next = new ListNode(100);

const intersection = (a,b) => {

    let currentA = a;
    let currentB = b;
    let hashA = {};
    // store the node values of linked list A in a hash
    while (currentA !== null ){
            
            hashA[currentA.val] = hashA[currentA.val] + 1 || 1;
            currentA = currentA.next;
    }

    // scan each node in currentB to return true when there are instances of intersection
    while (currentB !== null){
        if (hashA[currentB.val] !== undefined){
            console.log('found intersection at node: ', currentB.val)
            return true
        }
        currentB = currentB.next
    }   
    console.log('the function did not find any instersecting nodes')
    return false
}

console.log(intersection(head, head2)) // expected output: true
console.log(intersection(head,head3)) // expected output: false

