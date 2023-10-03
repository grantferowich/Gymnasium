/* 
PARTITION
CTCI 2.4

Successfully tested the function 2/24/23.
Successfully passed the Leetcode testing suite 2/24/23.

Write code to partition a linked list around a value x,
such that all nodes less than x come before all nodes greater
than or equal to x. IMPORTANT: The partition elemnt x can 
appear anywhere in the "right partition"; 
it does not need to appear between the left and right partitions.
The additional spacing below indicates the partition.

Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1, x = 5
Output: 3 -> 1 -> 2   ->   10 -> 5 -> 5 -> 2

Complexity Analysis: 
Time complexity: O(N)
Space complexity: O(1)
*/

class ListNode{
    constructor(data=null){
        this.data = data;
        this.nIntext = null;
    }
}

const partition = (list, x) => {
    if (list === undefined || list === null){ return 'Invalid input'}
    let current = list
    // less than x
    let lessThanXListHead = null
    let lessThanXListTail = null
    // greater than or equal to x
    let greaterThanXListHead = null
    let greaterThanXListTail = null;

    while (current !== null){
        let data = current.data;
        // start with the greaterThanXList
        if (data >= x){
            let newNode = new ListNode(data)
            // if the greaterThanXList is not empty, is already populated
            if (greaterThanXListTail){
                // do stuff 
                greaterThanXListTail.next = newNode;
                greaterThanXListTail = newNode
            }
            // if the greaterThanXList is empty 
            if (!greaterThanXListHead){
                // do stuff
                greaterThanXListHead = newNode;
                greaterThanXListTail = greaterThanXListHead
            }
        }
        // process the lessThanXList
        if (data < x){
            newNode = new ListNode(data)
            if (lessThanXListHead){
                lessThanXListTail.next = newNode;
                lessThanXListTail = newNode
            }
            if (!lessThanXListHead){
                lessThanXListHead = newNode;
                lessThanXListTail = lessThanXListHead
            }
        }
        current = current.next  
    }

    if (lessThanXListHead === null){
        return greaterThanXListHead
    }
    lessThanXListTail.next = greaterThanXListHead
    return lessThanXListHead;
}

/* TESTS */

let list0 = new ListNode(5)
list0.next = new ListNode(3)
list0.next.next = new ListNode(2)
const result0 = partition(list0, 3) // 2 -> 3 -> 5
console.log('result0', result0)

let list = new ListNode(3)
list.next = new ListNode(5)
list.next.next = new ListNode(8)
list.next.next.next = new ListNode(5)
list.next.next.next.next = new ListNode(10)
list.next.next.next.next.next = new ListNode(2)
list.next.next.next.next.next.next = new ListNode(1)
const result = partition(list, 5); // 3 -> 1 -> 2   ->   10 -> 5 -> 5 -> 2
console.log('result1', result);

let list2 = new ListNode(1)
list2.next = new ListNode(1)
const result2 = partition(list2, 1)
console.log('result2', result2)