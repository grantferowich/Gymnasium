/*

Create a method which prints the value of each node until the tail. 


Input:
4
1
5
7
10

Output:
1
5
7
10

*/

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */


class ListNode {
    constructor(value = null) {
     this.value = value
     this.next = null;
    }
}
 
function printForward(node) {
    let current = node;
    while (current){
        console.log(current.value);
        current = current.next;
    }
};

let x = new ListNode(4)
x.next = new ListNode(6);
x.next.next = new ListNode(8);
x.next.next.next = new ListNode(10);

printForward(x); // 4 6 8 10