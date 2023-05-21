/* 
Linked List Class
Successfully tested the classes on January 11, 2023.

*/
class ListNode {
    constructor(value){
        this.value = value === undefined ? null : value;
        this.nIntext = null;
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
            this.length++;
        } else if (index === 0){
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        } else if (index === this.length){
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            // iterate up until the node before the insertion location
            let prev = this.head;
            for (let x = 0; x < index - 1; x++){
                prev = prev.next;
            }
            newNode.next = prev.next;
            prev.next = newNode
        }
    }

    // if there is one node => set head and tail to null
    // if the first element is deleted => re-set the head node
    // if the last element is deleted => re-set the tail node
    // 
    
    //length = 4
    // delete (1)
    // change the pointer of prev
    // set 1's pointer to null

    //prev
    // 0    1    2    3
    // 1 -> 3 -> 5 -> 7

    delete(index){
        if ( index < 0 || index >= this.length){
            return;
        }
        // case 1: delete only node
        if (this.length === 1){
            this.head = null;
            this.tail = null;
            // case 2: delete head 
        } else if (index === 0){
            this.head = this.head.next;
            // case 3: delete tail 
        } else if (index === this.length - 1){
            let prev = this.head;
            for (let x = 0; x < this.length - 1; x++){
                prev = prev.next;
            }
            this.tail = prev;
            prev.next = null;
            // case three: delete a node between the head and tail
        } else {
            let prev = this.head;
            for (let y = 0; y < index - 1; y++){
                prev = prev.next;
            }
            prev.next = prev.next.next;
            if (index === this.length -1){
                this.tail = prev;
            }
        }
        this.length--;
    }
    contains(value){
        let current = this.head;
        while (current){
            if (current.value === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }
}