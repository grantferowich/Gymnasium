/* 
RETURN KTH TO LAST
CTCI 2.2
Implement an algorithm to find the kth to last element of a singly linked list.

Input: List, k
Output: a node
Constraints: 
Time: O(N)
Space: O(1)
Edge Case: Empty list

Input: 
    list: 0 - 1 - 1 - 2 - 3 - 5 
    k: 1
Output: 5
*/

class ListNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.next = null;
    }
}

const returnKthToLast = (list, k) => {

    let count = 0;
    let current = list;
    while (current !== null){
        count++;
        current = current.next;
    }
    let target = count - (k-1)
    current = list;
    count = 0;
    while (current !== null){
        count++
        if (count === target){
            return current.value
        }
        current = current.next
    }
}

const list1 = new ListNode(1);
list1.next = new ListNode(1);
list1.next.next = new ListNode(1)
list1.next.next.next = new ListNode(2)
list1.next.next.next.next = new ListNode(3)
list1.next.next.next.next.next = new ListNode(3)
list1.next.next.next.next.next.next = new ListNode(5)

console.log(returnKthToLast(list1, 1)) // 5
console.log(returnKthToLast(list1, 2)) // 3
