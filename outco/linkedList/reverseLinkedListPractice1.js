
//  null <- 1 -> 3 -> 5 -> 8 -> 10

// current: (3)
// current.next = (1)
// ref: (5)
// prev: (1)



class ListNode {
    constructor(value){
        this.value = value === undefined ? null : value;
        this.next = null;
    }
}
const reverseALinkedListPractice1 = (node) => {
        let current = node;
        let prev = null;
        while (current){
            let ref =  current.next
            current.next = prev;
            prev = current;
            current = ref;
            
        }
        return prev;
}       



let x = new ListNode(1)
x.next = new ListNode(1)
x.next.next = new ListNode(2)
x.next.next.next = new ListNode(3)
x.next.next.next.next = new ListNode(5)
x.next.next.next.next.next = new ListNode(8)
x.next.next.next.next.next.next = new ListNode(13)

console.log(reverseALinkedListPractice1(x))
