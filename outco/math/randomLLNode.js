/* 
Solved this problem successfully and tested the function 12/18/22. 

214 - Random Node Value from Linked List
Given the head node of a singly linked list, return the value of one of the nodes at random from the linked list.

The node value that is returned must be fairly random. How can we test this out?

Example
       (1) -> (5) -> (7) -> (10)
        ^
        |
Input: (1)
Output: 5

// If we were to call the function on the above linked list 100 times, we would
// expect the frequency of each node value to return approximately 25 times.
// Should resemble:

{
  1: 25
  5: 25
  7: 25
  10: 25
} 

// first get the length of the linked list
// pick a random number between 0 and length
// Math.floor(Math.random() * length)

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

let head2 = new ListNode(0);
head2.next = new ListNode(1);
head2.next.next = new ListNode(0);
head2.next.next.next = new ListNode(1);


const randomNodeValue = (node) => {
    let current = node;
    let length = 0;
    while (current !== null){
        length++;
        current = current.next;
    }
    let randomIdx = Math.floor(Math.random() * length);
    let pointer = node;
    for (let x = 0; x <= length - 1 ; x++){
        if (x === randomIdx && pointer.val !== undefined){
            return pointer.val;
        }
        pointer = pointer.next;
    }
}

const testRandomness = (node) =>{
    let occurrences = {};
    for (let x = 0; x < 2000; x++){
        let num = randomNodeValue(node);
        occurrences[num] = occurrences[num] + 1 || 1;
    }
    return occurrences
}

console.log("frequency: ", testRandomness(head));
console.log("frequency: ", testRandomness(head2));
