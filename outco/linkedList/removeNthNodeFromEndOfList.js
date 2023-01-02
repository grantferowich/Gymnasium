/**
 * 19. Remove Nth Node From End of List
Medium
Given the head of a linked list, 
remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
* find the node before the node which is supposed to be deleted
* for example [5,6,7,8,9,10], n = 1
* length = 6 
* target = the node in the length - n position, assuming a 1-based index
target = length[6] - n[1]

 *  */  

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

const removeNthNodeFromEndOfList = (node, n) => {


    let dummy = new ListNode()
    dummy.next = node;
    let length = 0;
    let current = node;
    while (current){
        length++
        current = current.next;
    }
    if (length === 1){
        dummy.next = null;
    }    
    current = node;
    let target = length - n;
    for (let x = 0; x < target; x++){
        if (x === target - 1){
            current.next = current.next.next
        }
        current = current.next;
    }

    return dummy.next
}
