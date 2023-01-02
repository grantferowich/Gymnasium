/* 1206. Design Skiplist
Hard
Design a Skiplist without using any built-in libraries.

A skiplist is a data structure that takes O(log(n)) time to add, erase and search. Comparing with treap and red-black tree which has the same function and performance, the code length of Skiplist can be comparatively short and the idea behind Skiplists is just simple linked lists.

For example, we have a Skiplist containing [30,40,50,60,70,90] and we want to add 80 and 45 into it. The Skiplist works this way:
 */
class SinglyLinkedListNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.next = null;
    }
}
class SkipList{
    
    constructor(){
        this.linkedList = new SinglyLinkedListNode()
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    
    // search takes in a value and returns a boolean 
    search(value){
        while (this.linkedList){
            if (this.linkedList.value === value){
                return true;
            }
        this.linkedList = this.linkedList.next;
        }
        return false
    }

    // the add function must add the value at the location 
    // where the prev element is smaller, the next elment is greater
    // if the new val is less than the value at index 0 => re-set the head
    // if the new val is greater than the node value at index n-1 => reset the head
    // if the length is 0 => reset the head and tail
    // returns nothing
    add(value){
        let xNode = new SinglyLinkedListNode(value);
        if (this.length === 0){
            this.head = xNode;
            this.tail = xNode;
        }
        if (this.length === 1 && xNode.value < this.head.value){
            xNode.next = this.head;
            this.head = xNode.next
        } 
        if (this.length === 1 && xNode.value > this.head.value){
            this.head.next = xNode;
            this.tail = xNode;
        }
        if (this.length > 1){
            let current = this.head;
            while (current){
                if (current.value < xNode.value && xNode.value < current.next.value){
                    xNode.next = current.next;
                    current.next = xNode;
                }
                if (xNode.value > this.tail.value){
                    this.tail.next = xNode;
                    this.tail = xNode;
                }
            
                current = current.next;
            }
        }
        this.length++;
    }

    // erase takes in a value and returns a boolean 
    // if the skip list does not contain the specified value return false
    // after removing the value return false
    // if there are multiple values equal to the specified value
    // remove the first node with an equal value
    erase(value){
        let existence = this.search(value)
        if (existence === false){
            return false 
        }
        
    }
}