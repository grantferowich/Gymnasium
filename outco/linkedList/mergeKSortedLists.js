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

const mergeKSortedLists = (lists) => {
    let sortedList = [];


    const mergeLists = (list1, list2) => {
        let mergedList = [];
        let right = 0;
        let left = 0;
        while (left < list1.length && right < list2.length){
            if (list1[left] < list2[right]){
                mergedList.push(list1[left])
                left++
            } else {
                mergedList.push(list2[right])
                right++
            }
        }
        while (left < list1.length){
            mergedList.push(list1[left])
            left++
        }
        while (right < list2.length){
            mergedList.push(list2[right])
            right++
        }
        sortedList.concat(mergedList);
    }
    for (let x = 0;x <lists.length -1; x++){
        sortedList = mergeLists(sortedList, lists[x])
    }
    return sortedList
}

console.log(mergeKSortedLists([[1,4,5],[1,3,4],[2,6]]))