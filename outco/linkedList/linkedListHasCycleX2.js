/* 
141. Linked List Cycle

Successfully tested Linked List Cycle on July 5, 2023.

Easy
12.7K
1.1K
Companies
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node 
in the list that can be reached again by continuously following 
the next pointer. Internally, pos is used to denote the index
 of the node that tail's next pointer is connected to. Note 
 that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.


Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list,
where the tail connects to the 0th node.

*/


var hasCycle = function(head) {
    if (head === null || head.val === null || head.next === null){
        return false
    }
    let slowNode = head
    let fastNode = head.next

    if (fastNode.next === null) {
        return false
    }
    while (fastNode !== null){
        if (fastNode === slowNode ){
            return true
        }
        fastNode = fastNode.next ? fastNode.next.next : null
        slowNode = slowNode.next
    }
    return false
};