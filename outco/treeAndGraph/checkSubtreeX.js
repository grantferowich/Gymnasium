/* 

CHECK SUBTREE

CTCI 4.10



/* T1 is longer
first, find the node in t1 which matches t2's root
second, call function to match each node in t2 with t1

*/

class TreeNode{
    constructor(value=null){
        this.value = value;
        this.right = null;
        this.left = null;
    }   
}

const checkSubtree = (t1, t2) => {
    if (t2 === null) { return true;}

    
    
}


/* TESTS */

const tree1 = new TreeNode(8);
tree1.left = new TreeNode(5);
tree1.right = new TreeNode(13);
tree1.left.left = new TreeNode(1);
tree1.left.right = new TreeNode(3);
tree1.right.left = new TreeNode(21);
tree1.right.right = new TreeNode(34);

const tree2 = new TreeNode(8)
tree2.left = new TreeNode(5)
tree2.right = new TreeNode(13)

const tree3 = new TreeNode(55)

const result1 = checkSubtree(tree1, tree2) // true
const result2 = checkSubtree(tree1, tree3)  // false
console.log('result1', result1)
console.log('result2', result2)