/**
 * 143. Reorder List
 * Medium
 * You are given the head of a singly linked-list. The list can be represented as:
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 * 
 * Example 1:
 * Input: head = [1,2,3,4]
 * Output: [1,4,2,3]
 * 
 * Example 2:
 * Input: head = [1,2,3,4,5]
 * Output: [1,5,2,4,3]
 * * 
 * 
 * Example 3: 
 * input: [1,2,3]
 * output: [1,3,2]
 * 
 *  current = 1
 *  length = 3
 *  toMove = 3
 * 
 *  starting from the last node 
 *  move the head's next to the last node
 *  move the last node's to the head's next property
 * 
 * 
 *  */ 

const reorderList = (head) => {

    let current = head;
    let length = 0;
    while (current){
        length++
        current = current.next
    }

}