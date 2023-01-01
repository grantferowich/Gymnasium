/* 23. Merge k Sorted Lists
Hard
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []

// input an array of arrays
// output: an array
// constraints: assume you have only a linked list node
 */

class SinglyLinkedListNode{
    constructor(value){
        this.value = this.value === undefined ? null : value;
        this.next = null;
    }
}
// value comparison is neccesary for inserting the first node in the merged linked list
// you may assume the three lists are already sorted
// the smallest value of each of the linked lists will be the first node / head of return linked list 
// set up helper function to merge lists
// keep merging lists until there are no lists left to merge
// return the merged list

const mergeKSortedLists = (lists) => {
    
    let dummy = new SinglyLinkedListNode()
    let tail = dummy;

    const merge2Lists = (list1, list2) => {
        while (list1 && list2){
            if (list1.value < list2.value){
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        if (list1 === null && list2){
            tail.next = list2;
        }
        if (list2 === null && list1){
            tail.next = list1;
        }
        for (let x = 1; x < lists.length; x++){
            merge2Lists(tail, lists[x])
        }
    }
    
    return dummy.next
}

console.log(mergeKSortedLists([[1,4,5],[1,3,4],[2,6]]))