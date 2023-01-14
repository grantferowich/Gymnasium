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
        this.value = value === undefined ? null : value;
        this.next = null;
    }
}
// value comparison is neccesary for inserting the first node in the merged linked list
// you may assume the three lists are already sorted
// the smallest value of each of the linked lists will be the first node / head of return linked list 
// set up helper function to merge lists
// keep merging lists until there are no lists left to merge
// return the merged list

let list1 = new SinglyLinkedListNode(1)
list1.next = new SinglyLinkedListNode(4)
list1.next.next = new SinglyLinkedListNode(5)

let list2 = new SinglyLinkedListNode(1)
list2.next = new SinglyLinkedListNode(3)
list2.next.next = new SinglyLinkedListNode(4)

let list3 = new SinglyLinkedListNode(2)
list3.next = new SinglyLinkedListNode(6)

let list4 = new SinglyLinkedListNode(11)
let list5 = new SinglyLinkedListNode(23)
// Time complexity: n*k log(k)
// Space complexity: O(1)

const mergeKSortedLists = (lists) => {
    if (lists.length === 0) return null;

    const merge2Lists = (list1, list2) => {

        // sentinel node
        let dummy = new SinglyLinkedListNode();
        let tail = dummy;

        while (list1 && list2) {
            // append lowest value to tail
            // iterate over two input lists
            if (list1.value <= list2.value) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            // open up tail's next property
            tail = tail.next;
        }

        // if one of the lists is null append the elements from the other list
        tail.next = list1 || list2;
        // dummy.next is the head basically
        return dummy.next;
    }
    // init the result list as the first list 
    let merged = lists[0];
    for (let x = 1; i < lists.length; x++) {
        // assign the result list to the output of calling merge2Lists on the result list itself
        // and the list being processed at location x in k lists
        // do subproblem of merging the result list with the first list
        // then, return the built up result 
        // then keep calling merge2Lists until k lists have been merged into the result list
        merged = merge2Lists(merged, lists[x]);
    }
    // finally return result
    return merged;
}


console.log(mergeKSortedLists([list4, list5])) // 11->23
console.log(mergeKSortedLists([list1,list2,list3])) // [1,1,2,3,4,4,5,6]

// [1,1,3,4,4,5] + [2,6]