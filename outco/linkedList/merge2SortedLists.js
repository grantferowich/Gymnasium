class SinglyLinkedListNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.next = null
    }
}

const merge2SortedLists = (list1, list2) =>{

    let dummy = new SinglyLinkedListNode();
    let head = dummy
    let tail = dummy;
    while (list1 && list2){
        
    }

    // list 1 is longer
    if (list1 === null && list2){
        tail.next = list2;
        return head;
    }
    // list 2 is longer 
    if (list2 === null && list1){
        tail.next = list1;
        return head;
    }
}