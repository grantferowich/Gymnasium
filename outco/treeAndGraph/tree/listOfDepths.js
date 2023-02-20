/* 

LIST OF DEPTHS
CTCI 4.3 
Successfully tested the function 2/20/23 at 2:35pm.

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
    isEmpty(){
        return this.length === 0
    }
}

class TreeNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.left = null;
        this.right = null;
    }
}

const deserialize = (array) => {
    if (array === null || array === undefined){ return }
    if (array.length == 0){
        return;
    }
    // instantiate tree from the 0th element
    // 0th array element becomes the root of the tree
    let root = new TreeNode(array[0]);
    let queue = [root];
    for (let x = 1; x < array.length; x += 2){
        let current = queue.shift()
        if (array[x] !== null){
            current.left = new TreeNode(array[x]);
            queue.push(current.left)
        }
        if (array[x + 1] !== null && array[x+1] !== undefined){
            current.right = new TreeNode(array[x+1]);
            queue.push(current.right)
        }
    }
    return root;
}

const listOfDepths = (treeRoot) => {
    if (treeRoot === undefined || treeRoot === null){return }
    let output = [];
    const traverse = (node, depth) =>{
        // initialize a linked list for each depth
        if (output[depth] === undefined || output[depth] === null){
            let newList = new LinkedList()
            output.push(newList)
        }
        // append values to each list in array of lists
        let currentList = output[depth];
        currentList.append(node.value)
        // stop at leaves
        if (node.left === null || node.right === null){
            return
        }
        // recursive cases
        traverse(node.right, depth+1)
        traverse(node.left, depth+1)
    }
    traverse(treeRoot, 0)
    return output
}
/* TESTS */

const input0 = deserialize([])
const result0 = listOfDepths(input0)
console.log('result 0 is', result0) // undefined  // passed 

const input1 = deserialize([1,2,3])
const result1 = listOfDepths(input1)
console.log('result 1 is', result1) // first linked list: 1
                     // second linked list: 2 -> 3 // passed

const input2 = deserialize([0,1,2,3,4,5])
const result2 = listOfDepths(input2)
console.log('result 2 is', result2)

const input3 = deserialize([0,1,2,3,5,8,13,21,34,55,89, 123, 155, 189])
const result3 = listOfDepths(input3)
console.log('result 3 is', result3)
