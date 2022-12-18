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
  head.next.next.next = new ListNode(10);
  head.next.next.next.next = new ListNode(7);
  head.next.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next.next = new ListNode(1);

  let head2 = new ListNode(1)
  head2.next = new ListNode(9)
  head2.next = new ListNode(1)


const linkedListPalindrome = (node) =>{
    let current = node;
    let list = []   
    while (current !== null){
        list.push(current.value)
        current = current.next
    }
    let x = 0;
    let y = list.length -1
    while ( x < y){
        if (list[x] !== list[y]){
            return false
        }   
        x++;
        y--;
    }
    return true; 
}
console.log(linkedListPalindrome(head))
console.log(linkedListPalindrome(head2))
