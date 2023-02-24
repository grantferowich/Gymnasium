/* 

CHECK SUBTREE

4.10

*/
class TreeNode{
    constructor(value=null){
        this.value = value;
        this.right = null;
        this.left = null;
    }   
}

const checkSubtree = (t1, t2) => {
    console.log('function ran')
}

/* TESTS */

const tree1 = new TreeNode(8);
tree1.left = new TreeNode(5);
tree1.right = new TreeNode(13);
tree1.left.left = new TreeNode(1);
tree1.left.right = new TreeNode(3);
tree1.right.left = new TreeNode(21);
tree1.right.right = new TreeNode(34);

const tree2 = new TreeNode(5)
tree2.left = new TreeNode(1)
tree2.right = new TreeNode(3)

const result = checkSubtree(tree1,tree2)
console.log(result)