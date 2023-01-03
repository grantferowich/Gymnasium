/* 1206. Design Skiplist

// Successfully tested the solution 01/02/2023.

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
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    // search takes in a value and returns a boolean 
    search(value){
        let current = this.head
        while (current){
            if (current.value === value){
                return true;
            }
        current = current.next;
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
            this.length++;
            return;
        }
        if (this.length === 1){
            if (xNode.value < this.head.value){
                xNode.next = this.head;
                this.head = xNode.next;
                this.length++;
                return;
            } else {
                this.head.next = xNode;
                this.tail = xNode;
                this.length++;
                return;
            }
        }
        // case where length is 2 or more
        // linkedList: 1-1
        // current = 1
        // current.next = 1
        if (this.length > 1){
            let current = this.head;
            while (current){
                if (current.value < xNode.value && xNode.value < current.next.value){
                    xNode.next = current.next;
                    current.next = xNode;
                    this.length++
                    return
                }
                if (xNode.value > this.tail.value){
                    this.tail.next = xNode;
                    this.tail = xNode;
                    this.length++
                    return
                }
            
                current = current.next;
            }
        }
    }

    // erase takes in a value and returns a boolean 
    // if the skip list does not contain the specified value return false
    // after removing the value return false
    // if there are multiple values equal to the specified value
    // remove the first node with an equal value

    //** */ update erase for special cases where erased node is the head/tail node
    erase(value){
        let existence = this.search(value);
        let current = this.head;
        let prev = new SinglyLinkedListNode()
        prev.next = current;
       
        if (existence === false){
            return false; 
        }
        // special case: deletion node is head node
        // special case: deletion node is tail node
        while (current && existence){
            if (value === this.head.value){
                this.head = this.head.next
                return true;
            }

            if (current.value === value){
                if (value === this.tail.value){
                    this.tail = prev;
                    this.tail.next = null;
                }
                prev.next = current.next;
                this.length--;
                return true; 
            }
            prev = current;
            current = current.next
        }
    }
}

// let skipList = new SkipList()
// skipList.add(1)
// skipList.add(1)
// skipList.add(2)
// skipList.add(3)
// skipList.add(5)
// skipList.add(8)
// skipList.add(13)
// skipList.add(21)
// skipList.add(34)
// skipList.add(55)
// console.log(skipList.search(0)) // expected output: false
// console.log(skipList.search(89)) // expected output: false
// console.log(skipList.search(-1)) // expected output: false

// console.log(skipList.erase(1)) // expected output: true

// console.log(skipList)

let skipList = new SkipList();
skipList.add(1);
skipList.add(2);
skipList.add(3);
console.log(skipList.search(0)) // expected output: false
skipList.add(4);
console.log(skipList.search(1)) // expected output: true 
console.log(skipList.erase(0)) // expected output: false 
console.log(skipList.erase(1)) // expected output: true
console.log(skipList.search(1)) // expected output: false

