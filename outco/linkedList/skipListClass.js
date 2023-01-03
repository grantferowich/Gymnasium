/* 1206. Design Skiplist

// Successfully tested the solution 01/02/2023.

Hard
Design a Skiplist without using any built-in libraries.

A skiplist is a data structure that takes O(log(n)) time to add, erase and search. Comparing with treap and red-black tree which has the same function and performance, the code length of Skiplist can be comparatively short and the idea behind Skiplists is just simple linked lists.

For example, we have a Skiplist containing [30,40,50,60,70,90] and we want to add 80 and 45 into it. The Skiplist works this way:

Describe a skip list to your fake student in your own words.
The skip list basically uses randomness to make searching for nodes in a linked list faster.
The skip list makes use of the concept of levels. At each level, there is some number of nodes, which may make the overall search time happen much faster on average.
To insert a node into a skip list, there is a comparison between the new node's value and the skip list's next value.
All the new nodes are inserted in orderly fashion.
If the new node is smaller than the elements at the current level,
then the new node moves down a level.
If a new node's value is smaller than all of the nodes at every level, i.e., 
the new node is the new minimum, then the node will be inserted at the bottom left part of the skip list.
Every new node must at least be inserted into the base level, which functions as a source of truth.
After the insertion at the base level there is a coinflip, which happens repeatedly until the flip result is a tails.
For every heads result, the number most recently added to the base level is appended to the next level above the current level. 
When adding a new key, compare first with the next key at the "highest" level.
    - if the new key is less than the next key, traverse down one level
    - if the new key is greater than the next key, traverse right
    - after traversing right one position, again compare the new key to the next key to the right

 */

const MAX_LEVEL = 15;

class SkipListNode{
    constructor(key, value, level){
        this.key = key === undefined ? null : key;
        this.value = value === undefined ? null : value;
        this.forward = new Array(level + 1).fill(null)
    }
}
class SkipList{
    constructor(){
        this.head = new SkipListNode(null, null, 0);
        this.level = 0;
    }
    // search takes in a key and returns a boolean 
    search(key){
        let current = this.head
        for (let x = this.level; x >= 0; x--){
            while (current.forward[x] && current.forward[x].key < key){
                current = current.forward[x];
            }
        }
        current = current.forward[0];
        if (current && current.key === key){
            return true
        }
        return false
    }

    add(key, value){
        const update = new Array(this.level + 1).fill(null);
        let current = this.head;
        for (let x = this.level; x >= 0; x--){
            while (current.forward[x] && current.forward[x].key < key){
                current = current.forward[x];
            }
            update[x] = current;
        }
        current = current.forward[0];
        if (current && current.key === key){
            current.value = value
            return;
        }

        const randomLevel = this.randomLevel();
        if (randomLevel > this.level){
            for (let x = this.level + 1; x <= randomLevel; x++){
                update[x] = this.head
            }
            this.level = randomLevel;
        }
        const xNode = new SkipListNode(key, value, randomLevel)
        for (let x = 0; x <= randomLevel; x++){
            xNode.forward[x] = update[x].forward[x];
            update[x].forward[x] = xNode;
        }
    }

    delete(key){
        const update = new Array(this.level + 1).fill(null);
        let current = this.head;
        for (let x = this.level; x >= 0; x--){
            while (current.forward[x] && current.forward[x].key < key){
                current = current.forward[x]
            }
            update[x] = current;
        }
        current = current.forward[x];
        if (current && current.key === key){
            for (let x = 0; x <= this.level; x++){
                if (update[x].forward[x] !== current){
                    break;
                }
                update[x].forward[x] = current.forward[x];
            }
            while (this.level > 0 && this.head.forward[this.level] === null){
                this.level--;
            }
        }
    }

    randomLevel(){
        let level = 0;
        while (Math.random() < 0.5){
            level++
        }
        // maxLevel is a constant declared at the top of the file 
        return Math.min(level, MAX_LEVEL)
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

