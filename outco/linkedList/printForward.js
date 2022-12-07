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

function printForward(node) {
    let current = node;
    
    while (current){
        console.log(current.data);
        current = current.next;
    }

};

