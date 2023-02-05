/* 
Moving average from data stream

Given a stream of integers and a window size, 
calculate the moving average of all integers in the sliding window.

Implement the moving average class. 

input:
[[3], [1], [10], [3], [5]]
output:
[null, 1.0, 5.5, 4.66667, 6.0]

class Moving Average{
    this.size
    this.next
}

movingAverage = new MovingAverage(3);

movingAverage.next(1)  // return 1 = (1 / 1)
movingAverage.next(10) // return 5.5 = ((1 + 10) / 2)
movingAverage.next(3) // return 4.66667 => ((1 + 10 + 3)/ 3)
movingAverage.next(5) // return 6.0 => ((10 + 3 + 5) / 3)

- perhaps a deque or queue
- when new data comes in check if the total 
  amount of data is greater than size
- if the new size exceeds the pre-set capacity, then evict the first item which entered, 
- this data management policy would be characterized as first in, first out
*/

class ListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    append(value){
        this.insert(value, this.length)
    }

    prepend(value){
        this.insert(value, 0)
    }

    insert(value, index){
        if (index < 0 || index > this.length){
            return;
        }
        let xNode = new ListNode(value);
        if (this.length === 0){
            this.head = xNode;
            this.tail = xNode;
        } else if (index === 0){
            xNode.next = this.head;
            this.head = xNode;
        } else if (index === this.length){
            this.tail.next = xNode;
            this.tail = xNode;
        } else {
            let prev = this.head;
            for (let x = 0; x < index - 1; x++){
                prev = prev.next;
            }
            xNode.next = prev.next;
            prev.next = xNode;
        }
        this.length++
    }
   
    remove(index){
        if (index < 0 || index >= this.length) { return; }
        let result;
        if (this.length === 1){
            result = this.head;
            this.head = null;
            this.tail = null;
        } else if ( index === 0){
            result = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let x = 0; x < index - 1; x++){
                prev = prev.next;
            }
            result = prev.next;
            prev.next = prev.next.next;
            if (index === this.length - 1){
                this.tail = prev;
            }
        }
        this.length--;
        return result;
    }


    contains(value){
        let current = this.head;
        while (current){
            if (current.value === value){
                return true
            }
            current = current.next
        }
        return false;
    }
}

class Queue {
    constructor(){
        // instantiate a queue as an instance of a linked list
        this.linkedlist = new LinkedList();
        this.length = 0;
    }

    enqueue(value){
        this.length++;
        //add element to end of linked list
        this.linkedlist.append(value);
    }

    dequeue(){
        if (this.length === 0){
            return
        }
        this.length--;
        // remove element from end of linked list
        let firstElement = this.linkedlist.remove(0).value;
        if (firstElement){
            return firstElement;
        } else {
            return null;
        }
        
    }

    peek(){
        return this.linkedlist.head.value;
    }
}