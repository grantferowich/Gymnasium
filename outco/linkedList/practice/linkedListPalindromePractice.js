
class ListNode {
    constructor(value = null) {
     this.value = value
     this.nIntext = null;
    }
}

let a = new ListNode(1);
a.next = new ListNode(2);

let b = new ListNode(1);
b.next = new ListNode(2);
b.next.next = new ListNode(2);
b.next.next.next = new ListNode(1);

// 1-2 - false
// 1-2-2-1 - true

// first i will use a brute force O(N) solution
// essentially I will store linked list value in an array
// then iterate through the array to validate the first char === last char

// Space: O(N)
// Time: O(1)
const linkedListIsAPalindrome = (head) =>{
    let array = [];
    while (head){
        array.push(head.value);
        head = head.next;
    }
    for ( let x = 0; x < array.length; x++){
        if (!(array[x] === array[array.length - 1 - x])){
                return false;
            }
    }
    return true;
}

console.log(linkedListIsAPalindrome(a)) // false
console.log(linkedListIsAPalindrome(b)) // true

// find the length

// find the mid point
// reverse the second half of the linked list


const linkedListIsAPalindrome2 = (root) => {
    if (!root){ return }
    let length = 0;
    let current = root;
    while (current){
        length++ 
        current = current.next
    }    

    let midpoint = Math.floor(length/2);
    let position = 0
    let prev;
    // how many pointers are needed to reverse a linked list?
    // one pointer must address the current node
    // a second pointer must point to the new element
    // the first pointer must be deleted
    current = root;
    while (position < midpoint){
        position++
        current = current.next;
        prev = current;
    }

    position = 0;
    let ref;
    current = root;

    while (current){
        // reverse the second half of the linked list
        if (position >= midpoint){
            ref = current.next
            current.next = prev
            prev = current
            current = ref;
        }
       current = current.next;
       position++
    }

    // 1 -> 3 -> 5 ->7 ->9
    // midpoint = 2
    position = 0
    let midNode;
    current = root
    while (current){
        if (position === midpoint){
            midNode = current;
            return
        }
    }

    current = root;
    while (current){
        if (!(current.value === midNode.value)){
            console.log("The linked list is not a palindrom")
            return false
        }
        current = current.next;
        midNode = midNode.next;
    }
    console.log('The linked list is a palindrome')
    return true
}

console.log(linkedListIsAPalindrome2(a)) // false
console.log(linkedListIsAPalindrome2(b)) // true