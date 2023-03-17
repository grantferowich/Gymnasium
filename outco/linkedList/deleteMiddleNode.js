/* 
DELETE MIDDLE NODE
CTCI 2.3
Successfully tested the function 2/3/23.
Time: O(1)
Space: O(1)

Implement an algorithm to delete a node in the middle 
(i.e. any node but the first and last node, not necessarily the
 exact middle) of a singly linked list, given only access to that node. 

 input: the node c from the linked list:
 a -> b -> c -> d -> e -> f
 output: a -> b -> d -> e -> f

 ideas: 
 move from the middle node to the previous node
 then, update the previous node's pointers 
 to prev.next = prev.next.next.

 this won't work..

 copy the data from the next pointer, 
 set it on the current node,
 then delete the next node 
 */

 class SinglyLinkedListNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.nIntext = null;
    }
 }
const deleteMiddleNode = (node) => {
    if (node.next === null || node === null){
        return false;
    }
    let data = node.next.value;
    node.value = data;
    node.next = node.next.next;
}

const list = new SinglyLinkedListNode(1);
list.next = new SinglyLinkedListNode(1);
list.next.next = new SinglyLinkedListNode(2);
list.next.next.next = new SinglyLinkedListNode(3);
list.next.next.next.next = new SinglyLinkedListNode(5);

let nodeX = list.next.next;
deleteMiddleNode(nodeX);
console.log(list.next) // 3