class SinglyLinkedListNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.next = null;
    }
}
class SkipList{
    
    constructor(){
        this.linkedList = new SinglyLinkedList()
        this.length = 0;
    }
    
    search(value){

    }

    // the add function must add the value at the location 
    // where the prev element is smaller, the next elment is greater
    // if the new val is less than the value at index 0 => re-set the head
    // if the new val is greater than the node value at index n-1 => reset the head
    // if the length is 0 => reset the head and tail
    add(value){

    }

    // if the skip list does not contain the specified value return false
    // after removing the value return false
    // if there are multiple values equal to the specified value
    // remove the first node with an equal value
    erase(value){
        
    }
}