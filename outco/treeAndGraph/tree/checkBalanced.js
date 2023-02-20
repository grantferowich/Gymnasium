/* 
CHECK BALANCED
CTCI 4.4

Implement a function to check if a binary tree is balanced. A tree is balanced if subtree heights 
differ by no more than 1. If subtree heights differ by more than 1, the tree is not balanced.

Input: A binary tree
Output: true or false

*/

class TreeNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.left = null;
        this.right = null;
    }
}

const deserialize = (array) => {
    if (array.length == 0){
        return null;
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




const checkBalanced = (root) => {
    
    
    const getHeight = (node) => {
        if (node === null){return -1};
        let left = getHeight(node.left);
        let right = getHeight(node.right);
        return Math.max(left, right) + 1
    }
    // console.log('// debug left', getHeight(root.left))
    // console.log('// debug right', getHeight(root.right))

    let heightDiff = getHeight(root.left) - getHeight(root.right);
    return Math.abs(heightDiff) <= 1;
}

/* TESTS */

// const input0 = deserialize([])
// const result0 = checkBalanced(input0)
// console.log('result 0 is', result0) // undefined  // passed 

const input1 = deserialize([1,2,3])
const result1 = checkBalanced(input1)
console.log('result 1 is', result1) // expect true
                     

const input2 = new TreeNode(11)
input2.left = new TreeNode(9)
input2.left.left = new TreeNode(5)
input2.left.left.left = new TreeNode(3)

const result2 = checkBalanced(input2)
console.log('result 2 is', result2) // false

// const input3 = deserialize([0,1,2,3,5,8,13,21,34,55,89, 123, 155, 189])
// const result3 = checkBalanced(input3)
// console.log('result 3 is', result3)
