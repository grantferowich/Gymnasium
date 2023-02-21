/* 

SUCCESSOR
CTCI 4.6

Input: a bst node
Output: the left most element of the right subtree
Constraints: O(V) runtime
            O(1) space

Patterns: In-order DFS

Test:

        8
       / \ 
      5  34
         / \ 
        23  57

suppose node = (8)
successor node = (23)


*/


class TreeNode{
    constructor(value=null){
        this.value = value;
        this.parent = null
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

const successor = (node) => {
    // invalid input
    if (node === undefined || node === null){return null}
    
    const leftMostChildNode = (node) => {
        if (node === null){
            return null
        }
        while (node.left !== null){
            node = node.left
        }
        return node
    }

    if (node.right !== null || node.parent == null){
        return leftMostChildNode(node.right)
    } else {
        let q = node;
        let x = q.parent;
        while (x !== null && x.left !== q){
            q = x;
            x = x.parent;
        }
        return x;
    }
       
}

/* TESTS */


const result0 = successor(null)
console.log('result 0 is', result0) // null  // passed 

const result1 = successor(undefined)
console.log('result 0 is', result1) // null  // passed 

// const i1 = new TreeNode(8)
// let i2 = new TreeNode(5)
// i2.parent = i1
// i1.left = i2
// let i3 = new TreeNode(34)
// i3.parent = i1
// i1.right = i3
// let i4 = new TreeNode(23)
// i4.parent = i3
// i3.left = i4;
// let i5 = new TreeNode(57)
// i5.parent = i3
// i5.right = i5











// const result1 = listOfDepths(input1)
// console.log('result 1 is', result1) // first linked list: 1
//                      // second linked list: 2 -> 3 // passed

// const input2 = deserialize([0,1,2,3,4,5])
// const result2 = listOfDepths(input2)
// console.log('result 2 is', result2)

// const input3 = deserialize([0,1,2,3,5,8,13,21,34,55,89, 123, 155, 189])
// const result3 = listOfDepths(input3)
// console.log('result 3 is', result3)