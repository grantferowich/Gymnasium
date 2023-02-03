/* 
DELETE MIDDLE NODE
CTCI 2.3

Implement an algorithm to delete a node in the middle 
(i.e. any node but the first and last node, not necessarily the
 exact middle) of a singly linked list, given only access to that node. 

 input: the node c from the linked list:
 a -> b -> c -> d -> e -> f
 output: a -> b -> d -> e -> f


*/
class SinglyLinkedListNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.next = null;
    }
}

const deleteMiddleNode = (node) => {


}

const list = new SinglyLinkedListNode(1);
list.next = new SinglyLinkedListNode(1);
list.next.next = new SinglyLinkedListNode(2);
list.next.next.next = new SinglyLinkedListNode(3);