
class ListNode {
    constructor(value = null) {
     this.value = value
     this.next = null;
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