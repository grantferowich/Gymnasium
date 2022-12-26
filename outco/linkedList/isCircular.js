class ListNode {
    constructor(value = null) {
     this.value = value
     this.next = null;
    }
}


const isCircular = (node) => {
    let fast = node;
    let slow = node;
    while (fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        if ( fast === slow) { return true;}
    }
    return false;
}

x = new ListNode(4)
x.next = new ListNode(9)
x.next.next = new ListNode(16)
x.next.next.next = new ListNode(25)
