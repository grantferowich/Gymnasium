// solution using O(1) aux. space complexity
// the solution does not introduce an additional data structure
// the linked lists are definitely intersecting if they share a node
// the solution must compare two linked lists
// while also handling different sized linked lists
// if listA is larger, iterate over list a, checking if any of the nodes are nodes in the b list
// else, listB must be larger, so iterate over list b, checking if there are any nodes from list a in list b

// input: two lists
// output: the intersecting node or null
// edge cases: invalid inputs
// constraints: constant space
// constraints: linear time 
// a1
//     ↘
//       c1
//     ↗
// b1 
// lengths are equal 
//    a1 -> a2 -> a3 -> a4 
//                         ↘
//                          c1
//                          ↗ 
// b1 -> b2 -> b3 -> b4 -> b5
// 
//       a1   
//         ↘
//          c1 -> c2 -> c3 -> c4
//         ↗ 
// b1 -> b2
//
class ListNode {
    constructor(val) {
      this.val = val;
      this.nIntext = null;
    }
}
let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(12);
head.next.next.next = new ListNode(1);
// head.next.next.next.next = new ListNode(1);

let head2 = new ListNode(0);
head2.next = new ListNode(5);
head2.next.next = new ListNode(12);
head2.next.next.next = new ListNode(1);
// head2.next.next.next.next = new ListNode(1);

let head3 = new ListNode(99);
head3.next = new ListNode(21);
head3.next.next = new ListNode(43);
head3.next.next.next = new ListNode(19);
head3.next.next.next.next = new ListNode(100);

const intersectionOfTwoLinkedLists = (listA, listB) => {
    // invalid inputs
    if (!listA || !listB){return}

    let aLength = 0;
    let bLength = 0;
    let currentA = listA;
    let currentB = listB;

    while (currentA){
        aLength++;
        currentA = currentA.next
    }

    while (currentB){
        bLength++;
        currentB = currentB.next
    }

    currentA = listA;
    currentB = listB;

    if (aLength > bLength){
        for (let x = 0; x < (aLength - bLength); x++){
            currentA = currentA.next;
        }
    }

    if (bLength > aLength){
        for (let y = 0; y < (bLength - aLength); y++){
            currentB = currentB.next;
        }
    }

    while (currentA && currentB){
        if (currentB.val === null || currentA.val === null){return}
        if (currentA.val === currentB.val){
            return currentA;
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }
    return null;
}

console.log(intersectionOfTwoLinkedLists(head, head2)) // expected output: {12}
console.log(intersectionOfTwoLinkedLists(head,head3)) // expected output: null