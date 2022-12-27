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
    // linked list is unpopulated with nodes => head and tail must change
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
        } else if (index === 0){
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        } else if (index === this.length){
            this.tail.next = newNode;
            this.tail = newNode
        } else {
            
        }


    }
}