/**
 * 21. Merge Two Sorted Lists
 * Easy
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 * 
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * 
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 * 
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 * 
 * all test cases passed on VSCode and Leetcode on 1/1/23.
 * 
*/
class SinglyLinkedListNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.next = null;
    }
}

let list1 = new SinglyLinkedListNode(1);
list1.next = new SinglyLinkedListNode(2);
list1.next.next = new SinglyLinkedListNode(4);

let list2 = new SinglyLinkedListNode(1);
list2.next = new SinglyLinkedListNode(3);
list2.next.next = new SinglyLinkedListNode(4);

let list3 = new SinglyLinkedListNode();
let list4 = new SinglyLinkedListNode();
let list5 = new SinglyLinkedListNode(0)

const merge2SortedLists = (list1, list2) =>{

    let dummy = new SinglyLinkedListNode();
    let tail = dummy;

    while (list1 && list2){
        if (list1.value <= list2.value){
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }    
        tail = tail.next;
    }

    // list 1 is longer
    if (list1 === null && list2){
        tail.next = list2;
    }
    // list 2 is longer 
    if (list2 === null && list1){
        tail.next = list1;
    }
    return dummy.next
}
console.log("list1 and list2:")
console.log(merge2SortedLists(list1, list2)) // [1,1,2,3,4,4]
console.log("list3 and list4:")
console.log(merge2SortedLists(list3, list4)) // []
console.log("list3 and list5:")
console.log(merge2SortedLists(list3, list5)) // [0]