/**
 *  213 - Linked List Palindrome
 * Given the head node of a singly linked list, return true if the values of the linked list forms a palindrome.
 * Example    (1) -> (2) -> (3) -> (3) -> (2) -> (1)
 *             ^        |
 * Input: (1)
 * Output: True
 * 
 *  O(N) solution
 * iterate from front to back of linked list
 * store all node values in an array
 * then iterate over array with two for loops pointing to the start
 * and the end of the array checking for strict equality
 * 
 * O(1) solution
 * point to the front and back of the linked list
 * check for equality of values
 * 
 * successfully tested the O(N) solution 12/18/22
 */
 
 class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  let head = new ListNode(1);
  head.next = new ListNode(5);
  head.next.next = new ListNode(7);
  head.next.next.next = new ListNode(5);
  head.next.next.next.next = new ListNode(9);


  let head2 = new ListNode(1)
  head2.next = new ListNode(9)
  head2.next = new ListNode(1)

  let head3 = new ListNode(12)
  head3.next = new ListNode(14)

// linear time solution
const isAlinkedListPalindrome = (node) =>{
    let current = node;
    let list = [];   

    while (current !== null){
        list.push(current.val);
        current = current.next;
    }
    
    let x = 0;
    let y = list.length - 1;
   
    while ( x < y){
        if (list[x] !== list[y]){
            return false
        }   
        x++;
        y--;
    }
    return true; 
}
// 
// console.log(isAlinkedListPalindrome(head)) // expected output: true
// console.log(isAlinkedListPalindrome(head2)) // expected output: true
// console.log(isAlinkedListPalindrome(head3)) // expected output: false

// constant time solution
const isALinkedListPalindromeConstant = (node) => {

    let curr = node;
    let length = 0;
    while (curr !== null){
        length += 1;
        curr = curr.next;
    }

    if (length === 0){
        return false;
    }
    if (length === 1){
        return true;
    }
    if (length === 2 && node.val === node.next.val){
        return true;
    } 
    if (length === 2 && node.val !== node.next.val){
        return false;
    }
    
    let midpoint = Math.floor(length/2)
    let position = 0;

    let prev;
    curr = head;
    let ref;

    while (curr !== null){
        // reverse the second half of the linked list
        if (position >= midpoint){
            if (prev === undefined){
                prev = curr;
                curr = curr.next;
            }

            ref = curr.next;
            curr.next = prev;
            prev = curr;
            curr = ref;
        } else {
            position++
            curr = curr.next
        }
    }


    // the left pointer starts at the head of the linked list 
    let left = head;
    let right = prev;
    // the right pointer begins all the way at the end of the singly linked list
    // the right pointer starts at the tail

    while (left !== right && right.next !== left){
        if (left.val !== right.val){
            return false;
        }

        left = left.next;
        right = right.next;
    }
    return true;
}

console.log(isALinkedListPalindromeConstant(head));  // 1-5-7-5-9 // expected output: false
// console.log(isALinkedListPalindromeConstant(head2)); // 1-9-1 // expected output: true
// console.log(isALinkedListPalindromeConstant(head3)); // 12-14 // expected output: false