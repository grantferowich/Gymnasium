/**
 * passed tests 1/3/23
 * 143. Reorder List
 * Medium
 * 
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
 *  initial: 
 *  current = 1
 *  length = 3
 *  toMove = 3
 *  
 * The general idea here is to find the middle point of the linked list.
 * After finding the middle point of the linkedz list 
 * reverse the second half of the linked list. 
 *  */ 

class ListNode {
    constructor(value = null) {
     this.value = value
     this.nIntext = null;
    }
}

let list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(3)
list1.next.next.next = new ListNode(4)

const reorderList = (head) => {
    let slow = head;
    let fast = head.next;
    // use two pointers to find the midpoint of the list 
    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
    }
    // init reference to second half of the list
    let secondHalf = slow.next;
    // split the list up
    let prev = slow.next = null;
    // reverse the second half 
    while (secondHalf){
        // init ref 
        let ref = secondHalf.next;
        // reverse the arrow
        secondHalf.next = prev;
        prev = secondHalf
        secondHalf = ref;
    }

    //merge two lists
    let firstHalf = head;
    secondHalf = prev;
    while(secondHalf){
        let ref1 = firstHalf.next
        let ref2 = secondHalf.next
        firstHalf.next = secondHalf
        secondHalf.next = ref1
        firstHalf = ref1;
        secondHalf = ref2
    }
}

console.log(reorderList(list1)); // tests passed 1/3/23