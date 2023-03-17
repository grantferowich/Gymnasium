/*
Print backward

given a node, print the value of each node backwards from the tail
to the input node using recursion

example 
1 ===> 5 ====> 7 ====> 10
head                    tail

// 10 7 5 1


// The input node must be the tail node
// the iteration continues
// until the current node is null (the pointer to null before the first node in the list)
Successfully tested the function 12/25/2022.
*/

class ListNode {
    constructor(value = null) {
     this.value = value
     this.nIntext = null;
    }
}
 

function printBackward(node) {
    const traverse = (current) => {
        if (current == null){
            return; 
        }
        traverse(current.next)
        console.log(current.value)
    }   
    traverse(node)
}

let x = new ListNode(4)
x.next = new ListNode(6);
x.next.next = new ListNode(8);
x.next.next.next = new ListNode(10);

printBackward(x); // 10 8 6 4

