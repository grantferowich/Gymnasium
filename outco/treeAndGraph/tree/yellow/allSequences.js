/* 

UNTESTED
**

Suppose you have the binary tree:

             1
           /   \
          2     3

          The list of sequences to generate this tree could be
          [1,2,3] or [1,3,2]


*/


class TreeNode{
    constructor(value=null){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
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

function allSequences(node) {
    const result = [];
  
    if (node === null) {
      result.push(new LinkedList());
      return result;
    }
  
    const prefix = new LinkedList();
    prefix.append(node.data);
  
    const leftSeq = allSequences(node.left);
    const rightSeq = allSequences(node.right);
  
    function weaveListsHelper(first, second, prefix) {
      if (first.length === 0 || second.length === 0) {
        const result = [...prefix, ...first, ...second];
        results.push(result);
        return;
      }
  
      const headFirst = first.shift();
      prefix.push(headFirst);
      weaveListsHelper(first, second, prefix);
      prefix.pop();
      first.unshift(headFirst);
  
      const headSecond = second.shift();
      prefix.push(headSecond);
      weaveListsHelper(first, second, prefix);
      prefix.pop();
      second.unshift(headSecond);
    }
  
    function weaveLists(left, right, prefix) {
      const results = [];
      weaveListsHelper(left, right, prefix);
      return results;
    }
  
    for (const left of leftSeq) {
      for (const right of rightSeq) {
        const weaved = weaveLists(left, right, prefix);
        result.push(...weaved);
      }
    }
  
    return result;
  }
  
/* TESTS */
let t = new TreeNode(2)
t.left = new TreeNode(1)
t.right = new TreeNode(3)

let result = allSequences(t)
console.log(result)