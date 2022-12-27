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
        this.insert(value, this.length);
    }

    // special insertion cases
    // linked list is unpopulated with nodes => head and tail must change
    // insert at start => head must change
    // insert at end => tail must change
    // insert in the middle => pointer of previous node must change, new node must point to relevant node
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
            let prev = this.head;
            for (let x = 0; x < index - 1; x++){
                prev = prev.next;
            }
            newNode.next = prev.next;
            prev.next = newNode
        }
    }

    delete(index){
        if ( index < 0 || index >= this.length){
            return;
        }

    }
}