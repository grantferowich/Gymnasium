class ListNode {
    constructor(value){
        this.value = value === undefined ? null : value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value){

    }

    // special insertion cases
    // insert at start => head must change
    // insert at end => tail must change
    insert(value, index){
        if (index < 0 || index > this.length){
            return;
        }

        let newNode = new ListNode(value)
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            this.length++
        } else if ( index)


    }
}