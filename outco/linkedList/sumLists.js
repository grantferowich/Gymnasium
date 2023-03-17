/* Add Two Numbers

Medium

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, 
except the number 0 itself.


Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.


Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]


Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

// start from the 1s place
// [1,1]
// [2,2]


*/



class ListNode {
    constructor(value = null) {
     this.value = value
     this.nIntext = null;
    }
}

const sumLists = (list1, list2) => {

    let current1 = list1;
    let current2 = list2;
    
    let num1 = []
    let num2 = []
    let result = []

    while (current1){
        num1.push(current1.value);
        current1 = current1.next
    }

    while (current2){
        num2.push(current2.value);
        current2 = current2.next
    }

    let subresult = parseInt(num1.join('')) + parseInt(num2.join(''))
    subresult = subresult.toString().split('')
    
    for (let x = 0; x < subresult.length; x++){
        console.log(subresult[x])
        result.push(parseInt(subresult[x]))
    }
    return result;
}


let listX = new ListNode(1)
listX.next = new ListNode(1)
listX.next.next = new ListNode(2)
// 112
let listY = new ListNode(3)
listY.next = new ListNode(5)
listY.next.next = new ListNode(8)
// 358

// 470
// [4,7,0]

let list1 = new ListNode(2)
list1.next = new ListNode(4)
list1.next.next = new ListNode(3)

let list2 = new ListNode(5)
list2.next = new ListNode(6)
list2.next.next = new ListNode(4)


console.log(sumLists(listX, listY))
console.log(sumLists(list1, list2))