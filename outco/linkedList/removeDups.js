/* 
REMOVE DUPS
CTCI 2.1

Write code to remove duplicates from an unsorted linked list.

Input: a linked list
Output: a linked list
Constraints: 
Time: O(N)
Space: O(N)
Edge Cases: Empty list

*/

class ListNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.next = null;
    }
}

const removeDups = (list) => {
    // return out when the input is invalid
    if (list1 === undefined){ throw new Error('The input is invalid.')}
    let counts = {};
    let current = list;
    
    // build up the counts hash 
    while (current !== null){
        let value = current.value;
        counts[value] = counts[value] + 1 || 1;
        current = current.next
    }

    current = list;
    while (current !== null){
        let value = current.value;
        if (counts[value] > 1){
            let data = current.next.value;
            current.value = data;
            current.next = current.next.next;
            counts[value]--
        }
        current = current.next
    }

    return list;
}

const list1 = new ListNode(1);
list1.next = new ListNode(1);
list1.next.next = new ListNode(1)
list1.next.next.next = new ListNode(2)
list1.next.next.next.next = new ListNode(3)
list1.next.next.next.next.next = new ListNode(3)
list1.next.next.next.next.next.next = new ListNode(5)

const list2 = new ListNode()

console.log(removeDups(list1)) //  1 - 2 - 3 - 5
console.log(list1.next)


