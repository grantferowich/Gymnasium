/*  
    // initial linked lst
    1 -> 3 -> 5 -> 3 -> 1

    // after reversing the second half
    => 1 -> 3 -> 5 <- 3 <- 1

    current = 5
    ref = 3
    prev = 5

    // consider normal linked list reversal
    // ref = current.next
    // current.next = prev
    // current = ref
    // prev = current

    
    x get the length
    x calculate the middle index
    x init three variables for reversing linked list
    x traverse to the middle index
    x set a reference for the middle node
    reverse second half of the linked list

    traverse from the start of the node to the middle
    and traverse from the end of the list to the middle

    edge cases:
    linked list has 0 elements
    linked list has 1 element 
    linked list has 2 elements 

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

const linkedListPalindrome = (node) => {
    // x get the length
    let root = node
    let length = 0;
    while (root){
        length++
        root = root.next
    }
    if (length === 0){
        return;
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
    // x calculate the middle index
    let middleIndex = Math.floor(length/2);
    let presentIndex = 0
    // x init three variables for reversing linked list
    let current = node
    let prev;
    let ref;
    while (current){
        //  x traverse to the middle index
        if (middleIndex >= presentIndex){
            if (prev === undefined){
                // x set a reference for the middle node
                prev = current
                current = current.next
            }
            ref = current.next;
            current.next = prev
            prev = current;
            current = ref;
        } else {
            presentIndex++;
            current = current.next;
        }
        
    }
    
    let head = node;
    let right = prev;
    
    while ( head !== right && head.next !== right){
        if (head.val !== prev.val){
            return false
        }
        head = head.next
        right = right.next
    }
    return true;
}

console.log(linkedListPalindrome(head)) // expected output: true
console.log(linkedListPalindrome(head2)) // expected output: true
console.log(linkedListPalindrome(head3)) // expected output: false